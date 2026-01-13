import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="no-print p-2 border border-black dark:border-white rounded hover:opacity-70 transition-opacity"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <span className="text-sm">☀️</span>
      ) : (
        <span className="text-sm">🌙</span>
      )}
    </button>
  );
};

export default ThemeToggle;

