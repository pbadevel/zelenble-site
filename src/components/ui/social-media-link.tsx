


export const SocialLink = ({ href, name, icon }: { href: string; name: string; icon: string }) => {
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