'use client';

import { useEffect, useMemo, useState } from "react";

const texts = process.env.NEXT_PUBLIC_SLOGANS?.split('|').filter(Boolean) || [];

export const CompanyInfo = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        let intervalId: NodeJS.Timeout
        const startAnimation = () => {
            setIsVisible(true);
            
            // Текст держится 3 секунды, затем исчезает
            const hideTimer = setTimeout(() => {
                setIsVisible(false);
                
                // Через 1 секунду после исчезновения показываем следующий текст
                const nextTimer = setTimeout(() => {
                    setCurrentIndex(prev => (prev + 1) % texts.length);
                    // Запускаем анимацию снова для нового текста
                    startAnimation();
                }, 1000);
                
                return () => clearTimeout(nextTimer);
            }, 3000);
            
            return () => clearTimeout(hideTimer);
        };

        startAnimation();
        
        return () => {
            if (intervalId!) clearInterval(intervalId);
        };

    }, [currentIndex]); // Зависимость от currentIndex чтобы перезапускать при смене текста

    return (
        <div className="w-full h-screen bg-transparent overflow-hidden">
            {/* Основной контент */}
            <div className="w-full h-full flex items-center justify-center px-4">
                <div className="text-center w-full">
                    <div className="relative h-20 md:h-24 lg:h-28 overflow-hidden flex items-center justify-center">
                        {/* Анимированный текст */}
                        <div
                            className={`absolute transition-all duration-500 ease-in-out ${
                                isVisible 
                                    ? 'translate-y-0 opacity-100' 
                                    : '-translate-y-8 opacity-0'
                            }`}
                        >
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-thin text-[var(--foreground)] tracking-widest uppercase text-center">
                                {texts[currentIndex]}
                            </h1>
                        </div>
                    </div>

                    <div className="opacity-0 animate-pulse-in mt-8">
                        <div className="w-24 h-px bg-[var(--text-color)] mx-auto"></div>
                    </div>
                </div>
            </div>


            <style jsx>{`
                @keyframes pulse-in {
                    0% { opacity: 0; transform: scaleX(0); }
                    100% { opacity: 1; transform: scaleX(1); }
                }
                
                @keyframes fade-in-slow {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }

                .animate-pulse-in {
                    animation: pulse-in 1.5s ease-out 1s forwards;
                }
                
                .animate-fade-in-slow {
                    animation: fade-in-slow 2s ease-out 1.5s forwards;
                }
            `}</style>
        </div>
    );
};

