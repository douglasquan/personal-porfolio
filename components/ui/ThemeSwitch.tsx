import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before setting theme to prevent SSR issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="p-2">
      {theme === "light" ? (
        <FaMoon className="fa fa-moon text-xl" />
      ) : (
        <FaSun className="fa fa-moon text-xl text-[#FF9800]" />
      )}
    </button>
  );
};

export default ThemeToggle;
