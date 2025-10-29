'use client';

import { SocialLink } from "@/components/ui/social-media-link";
import Helper from "../helper";


export const StaticDecorations = () => {
    return (
        <>
            <div className="fixed inset-1 pointer-events-none">
                {/* Горизонтальные линии */}
                {/* <div className="absolute top-1/3 left-0 right-0 h-px bg-white/10"></div>
                <div className="absolute top-2/3 left-0 right-0 h-px bg-white/10"></div>
                
                <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/10"></div>
                <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white/10"></div> */}
                
                {/* <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-white/20"></div>
                <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-white/20"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-white/20"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/20"></div> */}

                {/* Копирайт */}
                <div className="absolute bottom-8 left-8 animate-fade-in-slow">
                    <p className="text-xs text-white font-light tracking-wider">
                        © {new Date().getFullYear()} • ALL RIGHTS RESERVED
                    </p>
                </div>

                {/* Социальные ссылки */}
                <div className="absolute bottom-25 right-5 animate-fade-in-slow pointer-events-auto">
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

