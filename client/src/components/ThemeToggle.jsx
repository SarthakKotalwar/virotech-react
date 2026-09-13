import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.scss';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
      className={`cyber-theme-switch ${isDark ? 'is-dark' : 'is-light'}`}
    >
      <span className="cyber-theme-switch__slider" />

      <span className="cyber-theme-switch__item light-item">
        <Sun size={13} className="theme-icon sun-icon" strokeWidth={2.5} />
        <span className="theme-label">Light</span>
      </span>

      <span className="cyber-theme-switch__item dark-item">
        <Moon size={13} className="theme-icon moon-icon" strokeWidth={2.5} />
        <span className="theme-label">Dark</span>
      </span>
    </button>
  );
};

export default ThemeToggle;