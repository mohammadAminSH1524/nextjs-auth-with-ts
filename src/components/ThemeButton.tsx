"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }
  return (
    
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="flex items-center justify-center rounded-lg p-2 "
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {resolvedTheme === "dark" ? (
          <span className=" text-2xl text-primaryText">
            <MdLightMode />
          </span>
        ) : (
          <span className=" text-2xl text-primaryText">
            <MdOutlineDarkMode />
          </span>
        )}
      </button>
    
  );
}
