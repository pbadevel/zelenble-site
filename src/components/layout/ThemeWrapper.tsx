'use client';

import { useEffect, useState } from "react";
import { Loader } from "../ui/loader";



export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
    const [mounted, setMounted] = useState(false);

    // Инициализация темы при загрузке
    useEffect(() => {
        // Сначала проверяем ручной выбор пользователя
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        
        if (savedTheme) {
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
        } else {
        // Если нет ручного выбора, используем системную тему
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        document.documentElement.classList.toggle("dark", systemTheme === "dark");
        }
        
        setMounted(true);
    }, []);

    return mounted ? children : <Loader />
}