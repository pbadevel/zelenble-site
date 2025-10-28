'use client';

import Helper from "../helper";


export const StaticDecorations = () => {
    return (
        <>
            <div className="z-[-9] fixed inset-0 pointer-events-none">
                {/* Горизонтальные линии */}
                {/* <div className="absolute top-1/3 left-0 right-0 h-px bg-white/10"></div>
                <div className="absolute top-2/3 left-0 right-0 h-px bg-white/10"></div>
                
                <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/10"></div>
                <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white/10"></div>
                
                <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-white/20"></div>
                <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-white/20"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-white/20"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/20"></div> */}

                {/* Копирайт */}
                <div className="absolute bottom-8 left-8 opacity-0 animate-fade-in-slow">
                    <p className="text-xs text-white/40 font-light tracking-wider">
                        © {new Date().getFullYear()} • ALL RIGHTS RESERVED
                    </p>
                </div>

                {/* Социальные ссылки */}
                <div className="absolute bottom-8 right-8 opacity-0 animate-fade-in-slow">
                    <div className="flex flex-col items-end gap-4">
                        <SocialLink 
                            href="https://t.me/pbadev" 
                            name="Telegram"
                            icon="↗"
                        />
                        <SocialLink 
                            href="https://vk.com/pbadev" 
                            name="VK"
                            icon="↗"
                        />
                    </div>
                </div>
            </div>
            <Helper />
        </>
    );
};



// Компонент для социальных ссылок
const SocialLink = ({ href, name, icon }: { href: string; name: string; icon: string }) => {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-white/60 hover:text-white/90 transition-all duration-300"
        >
            <span className="text-xs font-light tracking-widest uppercase transition-all duration-300 group-hover:translate-x-[-2px]">
                {name}
            </span>
            <div className="w-6 h-6 border border-white/20 rounded-sm flex items-center justify-center text-xs transition-all duration-300 group-hover:border-white/60 group-hover:translate-x-[2px]">
                {icon}
            </div>
        </a>
    );
};