import { useTheme } from "@/hooks/useTheme";
import { useState, useEffect } from "react";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  useTheme(theme);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <label className="swap swap-rotate">
      <input onClick={toggleTheme} type="checkbox" />
      <div className="swap-on">DARKMODE</div>
      <div className="swap-off">LIGHTMODE</div>
    </label>
  );
}