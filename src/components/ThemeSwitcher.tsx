import React, { useState, useEffect } from 'react';
import styles from './ThemeSwitcher.module.css';

interface Theme {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const themes: Theme[] = [
  { id: 'oceanBlue', name: 'Ocean Blue', icon: '🌊', description: 'Default light theme' },
  { id: 'deepPurple', name: 'Deep Purple', icon: '🌙', description: 'Dark purple theme' },
  { id: 'forestGreen', name: 'Forest Green', icon: '🌲', description: 'Dark green theme' },
  { id: 'sunsetOrange', name: 'Sunset Orange', icon: '🌅', description: 'Warm orange theme' },
  { id: 'crimsonRed', name: 'Crimson Red', icon: '🔥', description: 'Dark red theme' },
  { id: 'midnightSteel', name: 'Midnight Steel', icon: '🌃', description: 'Dark blue-gray theme' },
  { id: 'emeraldMint', name: 'Emerald Mint', icon: '🍃', description: 'Light mint theme' },
  { id: 'neonCyber', name: 'Neon Cyber', icon: '⚡', description: 'Cyberpunk theme' },
  { id: 'goldenHour', name: 'Golden Hour', icon: '✨', description: 'Warm golden theme' },
  { id: 'arcticBlue', name: 'Arctic Blue', icon: '❄️', description: 'Cool blue theme' },
  { id: 'lavenderDream', name: 'Lavender Dream', icon: '💜', description: 'Light purple theme' },
  { id: 'carbonDark', name: 'Carbon Dark', icon: '⚫', description: 'Monochrome dark theme' },
];

export default function ThemeSwitcher(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>('oceanBlue');

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('docusaurus-theme-palette');
    const savedDocusaurusTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      applyTheme(savedTheme);
    } else if (savedDocusaurusTheme === 'dark') {
      applyTheme('deepPurple');
    }
  }, []);

  const applyTheme = (themeId: string) => {
    const root = document.documentElement;
    
    // Handle default themes (oceanBlue and deepPurple)
    if (themeId === 'oceanBlue') {
      root.removeAttribute('data-palette');
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else if (themeId === 'deepPurple') {
      root.removeAttribute('data-palette');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      // Handle custom palettes
      root.setAttribute('data-palette', themeId);
      // Set appropriate base theme based on palette
      const darkPalettes = ['forestGreen', 'crimsonRed', 'midnightSteel', 'neonCyber', 'carbonDark'];
      const baseTheme = darkPalettes.includes(themeId) ? 'dark' : 'light';
      root.setAttribute('data-theme', baseTheme);
      localStorage.setItem('theme', baseTheme);
    }
    
    localStorage.setItem('docusaurus-theme-palette', themeId);
    setCurrentTheme(themeId);
  };

  const handleThemeChange = (themeId: string) => {
    applyTheme(themeId);
    setIsOpen(false);
  };

  const currentThemeData = themes.find(t => t.id === currentTheme) || themes[0];

  return (
    <div className={styles.themeSwitcher}>
      <button
        className={styles.themeSwitcherButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change theme"
        title="Change color palette"
      >
        <span className={styles.themeIcon}>{currentThemeData.icon}</span>
        <span className={styles.themeName}>{currentThemeData.name}</span>
        <svg 
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          width="12" 
          height="12" 
          viewBox="0 0 12 12"
        >
          <path 
            fill="currentColor" 
            d="M2 4l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div 
            className={styles.overlay} 
            onClick={() => setIsOpen(false)}
          />
          <div className={styles.themeMenu}>
            <div className={styles.themeMenuHeader}>
              <h3>Choose Color Palette</h3>
              <p>Select your preferred theme</p>
            </div>
            <div className={styles.themeGrid}>
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  className={`${styles.themeOption} ${
                    currentTheme === theme.id ? styles.themeOptionActive : ''
                  }`}
                  onClick={() => handleThemeChange(theme.id)}
                  title={theme.description}
                >
                  <span className={styles.themeOptionIcon}>{theme.icon}</span>
                  <span className={styles.themeOptionName}>{theme.name}</span>
                  {currentTheme === theme.id && (
                    <svg 
                      className={styles.checkIcon}
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16"
                    >
                      <path 
                        fill="currentColor" 
                        d="M13.5 3.5L6 11 2.5 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
