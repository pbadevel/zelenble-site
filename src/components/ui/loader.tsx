import { useEffect, useState } from "react";


export const Loader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
    const handleLoad = () => {
        setProgress(100);
    };

    // Имитация прогресса загрузки
    const progressInterval = setInterval(() => {
        setProgress(prev => {
        if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
        }
        return prev + 10;
        });
    }, 200);

    if (document.readyState === 'complete') {
        handleLoad();
    } else {
        window.addEventListener('load', handleLoad);
    }

    return () => {
        window.removeEventListener('load', handleLoad);
        clearInterval(progressInterval);
    };
    }, []);
    
    return (
        <div className="text-center">
            <div
                className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-b-cyan-900 mx-auto"
            ></div>
            {/* <h2 className="text-zinc-900 dark:text-white mt-4">Загрузка...</h2> */}
            {/* <p className="text-zinc-600 dark:text-zinc-400">
                Будущее уже здесь...
            </p> */}
            <h2 className="text-[var(--foreground)] text-sm mt-4 py-5">
              {process.env.NEXT_PUBLIC_COMPANY_NAME}
            </h2>

            {/* Прогресс бар */}
            <div className="w-64 h-1 bg-gray-300 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[var(--foreground)] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
        </div>
        
    )
}

