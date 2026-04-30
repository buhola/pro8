function isEmbedMode() {
  try {
    const params = new URLSearchParams(window.location.search || '');
    return params.get('embed') === '1';
  } catch (error) {
    return false;
  }
}

if (typeof window !== 'undefined' && isEmbedMode()) {
  document.documentElement.classList.add('embed-mode');
  if (document.body) {
    document.body.classList.add('embed-mode');
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      document.body.classList.add('embed-mode');
    });
  }
}
