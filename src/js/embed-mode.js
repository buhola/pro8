function isEmbedMode() {
  try {
    if (window.self !== window.top) {
      return true;
    }

    const params = new URLSearchParams(window.location.search || '');
    if (params.get('embed') === '1') {
      return true;
    }

    const hash = window.location.hash || '';
    if (hash.includes('help-embed=1')) {
      return true;
    }

    return window.sessionStorage.getItem('help_embed_mode') === '1';
  } catch (error) {
    return false;
  }
}

if (typeof window !== 'undefined') {
  const enabled = isEmbedMode();

  let enforceIntervalId = null;
  let classObserver = null;
  let imageObserver = null;

  const enforceEmbedClass = () => {
    if (!enabled) {
      return;
    }
    document.documentElement.classList.add('embed-mode');
    if (document.body) {
      document.body.classList.add('embed-mode');
    }
  };

  if (enabled) {
    window.sessionStorage.setItem('help_embed_mode', '1');
    enforceEmbedClass();
  }

  const applyBodyClass = () => {
    enforceEmbedClass();
  };

  const normalizeImageSrc = (img) => {
    const src = img.getAttribute('src') || '';
    if (!src) {
      return;
    }
    if (src.startsWith('/')) {
      img.src = `${window.location.origin}${src}`;
    }
  };

  const hardenEmbedImages = () => {
    if (!enabled) {
      return;
    }

    const images = document.querySelectorAll('article img, .theme-doc-markdown img');
    images.forEach((img, index) => {
      normalizeImageSrc(img);
      img.loading = 'eager';
      img.decoding = 'sync';
      if (index < 2) {
        img.fetchPriority = 'high';
      }

      if (img.dataset.embedFixed === '1') {
        return;
      }

      img.dataset.embedFixed = '1';
      img.dataset.embedRetries = '0';

      img.addEventListener('error', () => {
        const retries = Number(img.dataset.embedRetries || '0');
        if (retries >= 2) {
          return;
        }

        img.dataset.embedRetries = String(retries + 1);
        const current = img.getAttribute('src') || '';
        const glue = current.includes('?') ? '&' : '?';
        img.src = `${current}${glue}embedRetry=${Date.now()}`;
      });
    });
  };

  if (document.body) {
    applyBodyClass();
  } else {
    window.addEventListener('DOMContentLoaded', applyBodyClass);
  }

  if (enabled) {
    classObserver = new MutationObserver(() => {
      enforceEmbedClass();
    });

    classObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    imageObserver = new MutationObserver(() => {
      hardenEmbedImages();
    });
    imageObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    enforceIntervalId = window.setInterval(enforceEmbedClass, 500);
    hardenEmbedImages();
    window.setTimeout(hardenEmbedImages, 800);
    window.setTimeout(hardenEmbedImages, 2000);

    window.addEventListener('beforeunload', () => {
      if (classObserver) {
        classObserver.disconnect();
      }
      if (imageObserver) {
        imageObserver.disconnect();
      }
      if (enforceIntervalId) {
        window.clearInterval(enforceIntervalId);
      }
    });
  }
}
