'use client';

import Link from "next/link"
import { useState, useMemo, useEffect, useRef } from "react";

const DownNavbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const sections = useMemo(() => [
        {
            id: 1,
            name: "Company", 
            link: "#company"
        },
        {
            id: 3,
            name: "Product", 
            link: "#product"
        },
        {
            id: 2,
            name: "Stuff", 
            link: "#stuff"
        },
    ], []);

    // Анимация появления при загрузке
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    // Автоматическое сворачивание через 3 секунды после появления
    useEffect(() => {
        if (!isVisible) return;

        const timer = setTimeout(() => {
            setIsCollapsed(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, [isVisible]);

    // Наблюдатель за секциями для автоматического переключения
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Активная секция в центре экрана
            threshold: 0
        };

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = `#${entry.target.id}`;
                    const index = sections.findIndex(section => section.link === sectionId);
                    if (index !== -1 && index !== activeIndex) {
                        setActiveIndex(index);
                    }
                }
            });
        }, options);

        // Наблюдаем за всеми секциями
        sections.forEach(section => {
            const element = document.getElementById(section.link.replace('#', ''));
            if (element) {
                observerRef.current?.observe(element);
            }
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [sections, activeIndex]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const scrollToSection = (sectionId: string) => {
        const elementId = sectionId.replace('#', '');
        const element = document.getElementById(elementId);
        if (element) {
            // Временно отключаем observer чтобы избежать конфликтов
            if (observerRef.current) {
                observerRef.current.disconnect();
            }

            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });

            // Восстанавливаем observer после скролла
            setTimeout(() => {
                sections.forEach(section => {
                    const elem = document.getElementById(section.link.replace('#', ''));
                    if (elem && observerRef.current) {
                        observerRef.current.observe(elem);
                    }
                });
            }, 1000);
        }
    };

    const handleItemClick = (index: number, link: string) => {
        if (isAnimating || index === activeIndex) return;
        
        setIsAnimating(true);
        setActiveIndex(index);
        scrollToSection(link);
        
        setTimeout(() => setIsAnimating(false), 300);
    };

    const isExpanded = !isCollapsed || isHovered;

    return (
        <div className="flex justify-center">
            <div 
                className={`
                    flex fixed bottom-8 transition-all duration-500 ease-in-out
                    ${isExpanded 
                        ? 'w-1/2 rounded-4xl backdrop-blur-[3px] overflow-hidden shadow-lg' 
                        : 'w-24 h-1 rounded-full backdrop-blur-[2px] cursor-pointer'
                    }
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    bg-[var(--navbar-bg)]
                `}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out, width 0.5s ease-in-out, background-color 0.5s ease-in-out, border-radius 0.5s ease-in-out'
                }}
            >
                {/* Liquid drop background - показываем только когда развернуто */}
                {isExpanded && (
                    <div 
                        className={`
                            absolute h-full rounded-3xl 
                            transition-all duration-300 ease-in-out
                            ${isAnimating ? 'scale-105' : 'scale-100'}
                            bg-[var(--background)]
                        `}
                        style={{
                            width: `${100 / sections.length}%`,
                            transform: `translateX(${activeIndex * 100}%)`,
                        }}
                    />
                )}
                
                {/* Пункты меню - показываем только когда развернуто */}
                {isExpanded && sections.map((section, index) =>
                    <NavbarItem 
                        key={section.id}
                        link={section.link} 
                        name={section.name} 
                        isActive={index === activeIndex}
                        onClick={() => handleItemClick(index, section.link)}
                        isAnimating={isAnimating}
                    />
                )}

                {/* Индикатор свернутого состояния */}
                {!isExpanded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="px-7 py-3">
                            <div className="w-8 h-1 bg-[var(--navbar-indicator)] rounded-full transition-all duration-300 hover:bg-[var(--navbar-indicator-hover)]"></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export const NavbarItem: React.FC<{
    name: string, 
    link: string, 
    isActive: boolean,
    isAnimating: boolean,
    onClick: () => void
}> = ({ name, link, isActive, isAnimating, onClick }) => {
    
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onClick();
    };

    return (
        <a 
            href={link}
            onClick={handleClick}
            className={`
                relative z-100 flex-1 flex items-center justify-center py-4
                transition-all duration-300 ease-in-out cursor-pointer
                ${isActive 
                    ? 'text-[var(--navbar-text-active)]' 
                    : 'text-[var(--navbar-text)] hover:text-[var(--navbar-text-hover)]'
                }
                `}
                >
            <span className={`
            relative z-120 font-medium text-sm 
                transition-all duration-300
                ${isActive && isAnimating ? 'scale-110' : 'scale-100'}
            `}>
                {name}
            </span>
        </a>
    )
}

export default DownNavbar