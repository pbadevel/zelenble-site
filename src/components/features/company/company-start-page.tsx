'use client';

import { useEffect, useState } from "react";

const texts = (
    process.env.NEXT_PUBLIC_SLOGANS?.split("|") 
    || 
    [process.env.NEXT_PUBLIC_COMPANY_NAME ?? "AXONISIUM"])
    .map(
        (slogan) => " "+slogan
    )

export const CompanyInfo = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);

    const currentText = texts[currentIndex];

    useEffect(() => {
        let currentLength = 0;
        setDisplayedText("");
        setIsAnimating(true);

        const typeWriter = setInterval(() => {
            if (currentLength < currentText.length) {
                setDisplayedText(prev => {
                    if (currentText[currentLength] == undefined) return prev;
                    return prev + currentText[currentLength]
                });
                currentLength++;
            } else {
                clearInterval(typeWriter);
                // Ждем немного перед сменой текста
                setTimeout(() => {
                    setIsAnimating(false);
                    setTimeout(() => {
                        setCurrentIndex(prev => (prev + 1) % texts.length);
                    }, 1000);
                }, 2000);
            }
        }, 100);
        isAnimating
        return () => clearInterval(typeWriter);
    }, [currentText]);

    return (
    <>
        <div className="w-full h-screen flex items-center justify-center">
            <div className="text-center">
                <div className="flex items-center justify-center">
                    <h1 className=" text-2xl md:text-5xl font-light text-[var(--text-foreground)] max-w-[2000px] justify-center tracking-widest uppercase flex max-md:flex-wrap">
                        {displayedText.split('').map((letter, index) => {
                            return (
                            <span
                                key={index}
                                className="inline-block animate-glow"
                                style={{
                                    animationDelay: `${index * 0.02}s`,
                                    textShadow: '0 0 10px rgba(255,255,255,1)'
                                }}
                            >
                                {letter === ' '  ? '\u00A0' : letter}
                            </span>
                            )})}
                    </h1>
                </div>
                
                {/* Разделительная линия */}
                <div className="w-24 h-px bg-[var(--foreground)] mx-auto mt-8 opacity-50 animate-pulse"></div>

                <style jsx>{`
                    @keyframes glow {
                        0% {
                            opacity: 0;
                            transform: scale(0.8);
                            text-shadow: 0 0 0px rgba(255, 255, 255, 0);
                        }
                        50% {
                            opacity: 1;
                            transform: scale(1.1);
                            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
                        }
                        100% {
                            opacity: 1;
                            transform: scale(1);
                            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
                        }
                    }
                    .animate-glow {
                        animation: glow 0.6s ease-out forwards;
                    }
                `}</style>
            </div>
        </div>     
        <div className="w-full h-screen absolute top-0 left-0 bottom-0 right-0 z-[-9] bg-[transparent] flex justify-center">
            <video autoPlay loop className='max-sm:w-full h-full bg-transparent' muted preload="none">
                <source src="/video/watch-rotating.mp4" />
            </video>
        </div>
    </>
    );
};