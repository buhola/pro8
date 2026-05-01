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

      if (openZoomFromImage && img.dataset.embedZoomBound !== '1') {
        img.dataset.embedZoomBound = '1';
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', (e) => openZoomFromImage(img, e), { passive: false });
        img.addEventListener('pointerup', (e) => openZoomFromImage(img, e), { passive: false });
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

  let embedZoomSetupDone = false;
  let openZoomFromImage = null;

  const setupEmbedImageZoom = () => {
    if (!enabled || embedZoomSetupDone) {
      return;
    }
    if (!document.body) {
      window.addEventListener('DOMContentLoaded', setupEmbedImageZoom, { once: true });
      return;
    }
    embedZoomSetupDone = true;

    const overlay = document.createElement('div');
    overlay.id = 'embed-doc-zoom-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Vista ampliada');
    overlay.innerHTML = `
      <div class="embed-doc-zoom-backdrop" data-embed-zoom-close></div>
      <div class="embed-doc-zoom-inner">
        <button type="button" class="embed-doc-zoom-close" data-embed-zoom-close>Cerrar</button>
        <img class="embed-doc-zoom-img" alt="" />
      </div>
    `;
    document.body.appendChild(overlay);

    const imgEl = overlay.querySelector('.embed-doc-zoom-img');
    const inner = overlay.querySelector('.embed-doc-zoom-inner');

    const closeZoom = () => {
      overlay.classList.remove('is-open');
      if (imgEl) {
        imgEl.removeAttribute('src');
        imgEl.alt = '';
      }
      document.body.style.overflow = '';
    };

    openZoomFromImage = (img, event = null) => {
      if (!img || !imgEl) {
        return;
      }
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      const src = img.currentSrc || img.src;
      if (!src) {
        return;
      }
      imgEl.src = src;
      imgEl.alt = img.alt || '';
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };

    overlay.querySelectorAll('[data-embed-zoom-close]').forEach((el) => {
      el.addEventListener('click', closeZoom);
    });

    if (inner) {
      inner.addEventListener('click', (e) => e.stopPropagation());
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        closeZoom();
      }
    });

    const openFromEvent = (e) => {
        const target = e.target;
        const img =
          target instanceof HTMLImageElement
            ? target
            : target && typeof target.closest === 'function'
              ? target.closest('article img, .theme-doc-markdown img')
              : null;

        if (!img || !(img instanceof HTMLImageElement)) {
          return;
        }

        if (img.closest('#embed-doc-zoom-overlay')) {
          return;
        }

        openZoomFromImage(img, e);
    };

    document.addEventListener('click', openFromEvent, true);
    document.addEventListener('pointerup', openFromEvent, true);
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
    setupEmbedImageZoom();
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
