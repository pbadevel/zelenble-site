"use client";

import { Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  // Инициализация темы при загрузке
  useEffect(() => {
    // Сначала проверяем ручной выбор пользователя
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    if (savedTheme) {
      // Если пользователь уже делал выбор, используем его
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Если нет ручного выбора, используем системную тему
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setTheme(systemTheme);
      document.documentElement.classList.toggle("dark", systemTheme === "dark");
    }
    
    setMounted(true);
  }, []);

  // Функция переключения темы
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    // Сохраняем ВСЕГДА при ручном переключении
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) {
    // Рендерим плейсхолдер пока тема не определена
    return (
      <label className="inline-flex items-center relative cursor-pointer">
        <div className="relative w-[110px] h-[50px] bg-gray-300 rounded-full animate-pulse"></div>
      </label>
    );
  }

  return (
    <label className="inline-flex items-center relative cursor-pointer">
      <input 
        className="peer hidden" 
        id="toggle" 
        type="checkbox" 
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <div
        className="relative w-[110px] h-[50px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"
      ></div>
      <Sun 
        height="0"
        width="100"
        viewBox="0 0 24 24"
        data-name="Layer 1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        className="text-yellow-700 peer-checked:opacity-100 absolute w-6 h-6 left-[13px]"
      />
      <svg
        height="512"
        width="512"
        viewBox="0 0 24 24"
        data-name="Layer 1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-black opacity-60 peer-checked:opacity-90 peer-checked:fill-white absolute w-6 h-6 right-[13px]"
      >
        <path
          d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
        ></path>
      </svg>
    </label>
  );
};