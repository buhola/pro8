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

    enforceIntervalId = window.setInterval(enforceEmbedClass, 500);

    window.addEventListener('beforeunload', () => {
      if (classObserver) {
        classObserver.disconnect();
      }
      if (enforceIntervalId) {
        window.clearInterval(enforceIntervalId);
      }
    });
  }
}
