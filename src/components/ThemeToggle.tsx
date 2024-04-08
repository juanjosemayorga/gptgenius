"use client";

import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

type Theme = "winter" | "dracula";

const themes: Record<string, Theme> = {
  winter: "winter",
  dracula: "dracula",
};

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(themes.winter);

  const toggleTheme = () => {
    const newTheme = theme === themes.winter ? themes.dracula : themes.winter;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline">
      {theme === "winter" ? (
        <BsMoonFill className="h-4 w-4 " />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  );
};
