import React from 'react';
import OriginalSearchBar from '@theme-original/SearchBar';
// import './modal-search.css';

export default function SearchBar(props) {
  // TEMPORALMENTE DESHABILITADO - Usar buscador original
  return <OriginalSearchBar {...props} />;
}

/* MODAL SEARCH - DESHABILITADO TEMPORALMENTE
import React, { useState, useEffect, useCallback, useRef } from 'react';
import OriginalSearchBar from '@theme-original/SearchBar';
import './modal-search.css';

export default function SearchBar(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Handle keyboard shortcut (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsModalOpen(true);
      }
      // Close on Escape
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Auto-focus search input when modal opens
  useEffect(() => {
    if (isModalOpen && searchContainerRef.current) {
      // Wait for the modal to render
      setTimeout(() => {
        const searchInput = searchContainerRef.current?.querySelector<HTMLInputElement>(
          'input[type="search"], .navbar__search-input'
        );
        
        if (searchInput) {
          // Focus the input
          searchInput.focus();
          
          // Trigger a click to open the dropdown
          searchInput.click();
          
          // Also trigger input event to show recent searches or empty state
          const inputEvent = new Event('input', { bubbles: true });
          searchInput.dispatchEvent(inputEvent);
        }
      }, 100);
    }
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  }, []);

  return (
    <>
      {/* Search Button *\/}
      <button
        className="modal-search-button"
        onClick={() => setIsModalOpen(true)}
        aria-label="Buscar"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="modal-search-button-placeholder">Buscar documentos...</span>
        <kbd className="modal-search-button-shortcut">
          <span>Ctrl</span>
          <span>K</span>
        </kbd>
      </button>

      {/* Modal Overlay *\/}
      {isModalOpen && (
        <div className="modal-search-backdrop" onClick={handleBackdropClick}>
          <div className="modal-search-container">
            <div className="modal-search-header">
              <button
                className="modal-search-close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Cerrar búsqueda"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M15 5L5 15M5 5l10 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="modal-search-content" ref={searchContainerRef}>
              <OriginalSearchBar {...props} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
*/
