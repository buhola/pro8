import React from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import ThemeSwitcher from '@site/src/components/ThemeSwitcher';

export default function ColorModeToggleWrapper(props) {
  return (
    <>
      <ThemeSwitcher />
      <ColorModeToggle {...props} />
    </>
  );
}
