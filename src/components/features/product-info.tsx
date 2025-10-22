// components/features/product-showcase.tsx
'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

export const ProductShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const product = {
        id: 1,
        name: "Chronos X Pro",
        description: "Флагманская модель с расширенным мониторингом здоровья и премиальными материалами",
        price: "29 990 ₽",
        features: [
            "ЭКГ и мониторинг сердца",
            "Измерение кислорода в крови", 
            "Анализ качества сна",
            "Отслеживание стресса",
            "Водонепроницаемость 5ATM",
            "Автономность до 7 дней"
        ],
        colors: ["Черный матовый"],
        details: [
            "Экран: 1.5\" AMOLED",
            "Материал: Титан + сапфировое стекло",
            "Процессор: Dual Core 1.2GHz", 
            "Память: 8GB + 128MB",
            "Сенсоры: Акселерометр, Гироскоп, Пульсоксиметр"
        ]
    };

    const productImages = [
        {
            id: 1,
            title: "Лицевая панель",
            image: "/images/product1.jpg",
            color: "Черный матовый"
        },
        {
            id: 2,
            title: "Боковой вид",
            image: "/images/product2.jpg", 
            color: "Черный матовый"
        },
        {
            id: 3,
            title: "Задняя панель",
            image: "/images/product3.jpg",
            color: "Черный матовый"
        }
    ];

    // Автоматическая вертикальная смена карточек каждые 5 секунд
    useEffect(() => {
        const interval = setInterval(() => {
            nextCard();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextCard = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % productImages.length);
        
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    };

    const prevCard = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
        
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    };

    const goToCard = (index: number) => {
        if (isAnimating || index === currentIndex) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    };

    const currentImage = productImages[currentIndex];

    return (
        <div className="w-full min-h-screen bg-transparent relative overflow-hidden py-10">
            {/* Основной контент */}
            <div className="relative z-0 container mx-auto px-4 py-3 min-h-screen flex items-center justify-center">
                <div className="w-full  mx-auto">
                    {/* Главное окошко */}
                    <div className="border border-white/20 rounded-2xl backdrop-blur-sm bg-black overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[700px]">
                            
                            {/* Левая часть - вертикальные анимированные карточки */}
                            <div className="relative p-8 border-r border-white/10 lg:col-span-2">
                                <div className="relative h-full min-h-[500px] flex items-center justify-center">
                                    {/* Контейнер для вертикальных карточек */}
                                    <div className="relative w-full max-w-2xl h-156">
                                        {productImages.map((image, index) => {
                                            // Вычисляем позицию карточки в вертикальной стопке
                                            const position = (index - currentIndex + productImages.length) % productImages.length;
                                            const isCurrent = position === 0;
                                            const isNext = position === 1;
                                            const isPrevious = position === productImages.length - 1;
                                            const isFar = position > 1 && position < productImages.length - 1;

                                            return (
                                                <div
                                                    key={image.id}
                                                    className={`absolute inset-0 transition-all duration-1000 ease-in-out cursor-pointer ${
                                                        isCurrent
                                                            ? 'opacity-100 transform translate-y-0 scale-100 z-30 shadow-2xl'
                                                            : isNext
                                                            ? 'opacity-80 transform translate-y-14 scale-95 z-20 shadow-xl'
                                                            : isPrevious
                                                            ? 'opacity-70 transform -translate-y-14 scale-95 z-10 shadow-xl'
                                                            : isFar
                                                            ? 'opacity-0 transform translate-y-38 scale-90 z-0'
                                                            : 'opacity-0 transform -translate-y-38 scale-90 z-0'
                                                    }`}
                                                    onClick={() => goToCard(index)}
                                                >
                                                    {/* Карточка товара */}
                                                    <div className="w-full h-full rounded-2xl border border-white/20 bg-gradient-to-br bg-gray-900 backdrop-blur-sm overflow-hidden">
                                                        {/* Заголовок карточки */}
                                                        <div className="absolute top-6 left-6 right-6 z-20 p-10">
                                                            <h3 className="text-white text-lg font-light">
                                                                {image.title}
                                                            </h3>
                                                        </div>
                                                        
                                                        {/* Основное содержимое карточки */}
                                                        <div className="w-full h-full flex items-center justify-center p-8">
                                                            <div className="relative w-full h-full rounded-xl bg-black/20 border border-white/10 flex items-center justify-center">
                                                                {/* Реальное изображение товара */}
                                                                <div className="relative w-full h-full flex items-center justify-center">
                                                                    {/* Заглушка для изображения - замените на реальный Image компонент */}
                                                                    <div className="w-full h-full bg-gradient-to-br bg-gray-900 rounded-lg flex items-center justify-center">
                                                                        <span className="text-white/40 text-sm">Изображение {image.id}</span>
                                                                    </div>
                                                                    {/* Раскомментируйте для реальных изображений */}
                                                                    <Image
                                                                        src={image.image}
                                                                        alt={"Картинка "+image.title}
                                                                        fill
                                                                        className="object-contain"
                                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Индикатор цвета */}
                                                        <div className="absolute bottom-10 left-10 flex items-center gap-3">
                                                            <div className="w-4 h-4 rounded-full bg-gray-600 border border-white/20"></div>
                                                            <span className="text-white/60 text-sm">{image.color}</span>
                                                        </div>

                                                        {/* Номер карточки */}
                                                        <div className="absolute bottom-10 right-10">
                                                            <span className="text-white/40 text-sm">
                                                                {image.id}/{productImages.length}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    
                                    {/* Кнопки навигации - вертикальные */}
                                    <button 
                                        onClick={prevCard}
                                        className="absolute left-1/2 top-4 transform -translate-x-1/2 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all duration-300 backdrop-blur-sm z-40 bg-black/20"
                                        disabled={isAnimating}
                                    >
                                        ↑
                                    </button>
                                    <button 
                                        onClick={nextCard}
                                        className="absolute left-1/2 bottom-4 transform -translate-x-1/2 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white/60 transition-all duration-300 backdrop-blur-sm z-40 bg-black/20"
                                        disabled={isAnimating}
                                    >
                                        ↓
                                    </button>
                                </div>
                                
                                {/* Индикаторы прогресса - вертикальные */}
                                <div className="flex justify-center gap-4 mt-12">
                                    {productImages.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToCard(index)}
                                            className={`w-12 h-1 rounded-full transition-all duration-300 ${
                                                index === currentIndex 
                                                    ? 'bg-white' 
                                                    : 'bg-white/30 hover:bg-white/50'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Правая часть - описание товара (без изменений) */}
                            <div className="p-8">
                                <div className="h-full flex flex-col justify-between">
                                    {/* Основная информация */}
                                    <div>
                                        <div className="mb-6">
                                            <span className="text-white/40 text-xs font-light tracking-widest uppercase">Chronos Series</span>
                                            <h2 className="text-3xl font-light text-white mt-2 mb-3">
                                                {product.name}
                                            </h2>
                                            <div className="w-16 h-px bg-white/40 my-4"></div>
                                            <p className="text-white/60 font-light leading-relaxed text-sm">
                                                {product.description}
                                            </p>
                                        </div>

                                        {/* Цена */}
                                        <div className="mb-8">
                                            <span className="text-2xl font-light text-white">
                                                {product.price}
                                            </span>
                                            <span className="text-white/40 text-sm ml-2">включая НДС</span>
                                        </div>

                                        {/* Основные характеристики */}
                                        <div className="mb-8">
                                            <h3 className="text-white/80 text-sm font-light mb-4 uppercase tracking-widest">
                                                Ключевые возможности
                                            </h3>
                                            <div className="space-y-2">
                                                {product.features.map((feature, index) => (
                                                    <div 
                                                        key={index}
                                                        className="flex items-start gap-3"
                                                    >
                                                        <div className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0"></div>
                                                        <span className="text-white/70 text-sm font-light">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Технические детали */}
                                        <div className="mb-8">
                                            <h3 className="text-white/80 text-sm font-light mb-4 uppercase tracking-widest">
                                                Технические характеристики
                                            </h3>
                                            <div className="grid grid-cols-1 gap-2">
                                                {product.details.map((detail, index) => (
                                                    <div 
                                                        key={index}
                                                        className="text-white/60 text-xs font-light"
                                                    >
                                                        {detail}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Выбор цвета */}
                                        <div className="mb-8">
                                            <h3 className="text-white/80 text-sm font-light mb-3 uppercase tracking-widest">
                                                Доступные цвета
                                            </h3>
                                            <div className="flex gap-4">
                                                {product.colors.map((color, index) => (
                                                    <div key={index} className="flex flex-col items-center gap-2">
                                                        <div className={`w-8 h-8 rounded-full border border-white/20 ${
                                                            color === "Черный матовый" ? "bg-gray-800" :
                                                            color === "Серый стальной" ? "bg-gray-500" : "bg-gray-300"
                                                        }`}></div>
                                                        <span className="text-white/60 text-xs">{color}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Кнопки действий */}
                                    <div className="space-y-4">
                                        <button className="w-full py-4 bg-white text-black rounded-lg font-light transition-all duration-300 hover:bg-white/90 hover:scale-105 shadow-lg">
                                            Купить сейчас
                                        </button>
                                        <div className="space-y-4">
                                            <button className="w-full py-3 border border-white/10 text-white/70 rounded-lg font-light transition-all duration-300 hover:bg-white/5 hover:text-white">
                                                Веб-приложение
                                            </button>
                                        </div>
                                    </div>

                                    {/* Дополнительная информация */}
                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <div className="flex justify-between text-xs text-white/40">
                                            <span>🚚 Бесплатная доставка</span>
                                            <span>🔄 14 дней возврат</span>
                                            <span>🔒 Гарантия 2 года</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slide-up {
                    0% { 
                        opacity: 0;
                        transform: translateY(100%) scale(0.9);
                    }
                    100% { 
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes slide-down {
                    0% { 
                        opacity: 0;
                        transform: translateY(-100%) scale(0.9);
                    }
                    100% { 
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </div>
    );
};