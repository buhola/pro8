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

  if (enabled) {
    window.sessionStorage.setItem('help_embed_mode', '1');
    document.documentElement.classList.add('embed-mode');
  }

  const applyBodyClass = () => {
    if (!enabled) {
      return;
    }
    document.body.classList.add('embed-mode');
  };

  if (document.body) {
    applyBodyClass();
  } else {
    window.addEventListener('DOMContentLoaded', applyBodyClass);
  }
}
