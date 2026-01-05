# Theme Switcher Implementation

## Overview

The documentation site now includes a comprehensive theme switcher that allows users to choose from 12 different color palettes, providing a personalized reading experience.

## Available Themes

### Light Themes

- **🌊 Ocean Blue** - Default light theme with blue accents
- **🌅 Sunset Orange** - Warm orange theme
- **🍃 Emerald Mint** - Fresh mint green theme
- **✨ Golden Hour** - Warm golden theme
- **❄️ Arctic Blue** - Cool blue theme
- **💜 Lavender Dream** - Soft purple theme

### Dark Themes

- **🌙 Deep Purple** - Default dark theme with purple accents
- **🌲 Forest Green** - Dark green theme
- **🔥 Crimson Red** - Dark red theme
- **🌃 Midnight Steel** - Dark blue-gray theme
- **⚡ Neon Cyber** - Cyberpunk-inspired theme
- **⚫ Carbon Dark** - Monochrome dark theme

## How to Use

1. **Access the Theme Switcher**: Click on the theme button in the navbar (displays current theme icon and name)
2. **Browse Themes**: A dropdown menu will appear showing all available themes
3. **Select a Theme**: Click on any theme to apply it instantly
4. **Persistence**: Your theme choice is automatically saved and will persist across sessions

## Technical Implementation

### Components

#### ThemeSwitcher.tsx

- React component with TypeScript
- Manages theme state and localStorage persistence
- Responsive dropdown menu with smooth animations
- Displays theme icons and names for easy identification

#### ThemeSwitcher.module.css

- CSS modules for scoped styling
- Responsive design for mobile, tablet, and desktop
- Smooth transitions and animations
- Follows design system variables

#### ColorModeToggle Wrapper

- Integrates ThemeSwitcher into Docusaurus navbar
- Works alongside the default dark/light mode toggle

### Theme System

The theme system uses CSS custom properties (variables) defined in `custom.css`:

- **Base themes**: `oceanBlue` (light) and `deepPurple` (dark) use `data-theme` attribute
- **Custom palettes**: Other themes use `data-palette` attribute
- **Persistence**: Theme choice is saved in `localStorage` as `docusaurus-theme-palette`

### CSS Variables

Each theme defines a complete set of color variables:

- Text colors (primary and secondary)
- Background colors
- Card colors and hover states
- Border colors
- Primary, secondary, and accent colors
- Shadow and gradient effects

## Customization

To add a new theme:

1. Add CSS variables in `src/css/custom.css`:

```css
:root[data-palette="yourTheme"] {
  --color-text: #...;
  --color-background: #...;
  /* ... other variables */
}
```

2. Add theme definition in `ThemeSwitcher.tsx`:

```typescript
{ id: 'yourTheme', name: 'Your Theme', icon: '🎨', description: 'Your description' }
```

3. Update the theme application logic if needed (dark vs light base theme)

## Browser Support

- Modern browsers with CSS custom properties support
- localStorage for persistence
- Graceful fallback to default theme if localStorage is unavailable
