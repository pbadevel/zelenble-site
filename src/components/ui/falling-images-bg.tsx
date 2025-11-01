'use client';


import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'



const dropImages = [
  { alt: 'Medical research', src: '/images/memi-chetire-negra.jpg' },
  { alt: 'Team collaboration', src: '/images/girl-nigas.png' },
]


export const FallingImages = () => {

    const [floatingImages, setFloatingImages] = useState<Array<{
        id: number
        x: number
        delay: number
        duration: number
        size: number
        rotation: number
        image: typeof dropImages[0]
    }>>([])

     const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * dropImages.length)
        return dropImages[randomIndex]
      }
    
      // Генерация случайных позиций для плавающих изображений
      useEffect(() => {
        const images = Array.from({ length: 12 }, (_, i) => ({
          id: i,
          x: Math.random() * 100, // случайная позиция по горизонтали (0-100%)
          delay: Math.random() * 8, // случайная задержка начала анимации
          duration: 20 + Math.random() * 25, // случайная длительность анимации (20-45 сек)
          size: 50 + Math.random() * 100, // случайный размер (50-150px)
          rotation: Math.random() * 360, // случайный начальный поворот
          image: getRandomImage() // случайное изображение из списка
        }))
        setFloatingImages(images)
      }, [])
    
    
    return (
        <div className="absolute h-full inset-0 -z-10 overflow-hidden pointer-events-none">
            {floatingImages.map((image) => (
            <motion.div
                key={image.id}
                className="absolute top-0"
                style={{
                left: `${image.x}%`,
                width: `${image.size}px`,
                height: `${image.size}px`,
                }}
                initial={{
                y: `-${image.size}px`,
                rotate: image.rotation,
                opacity: 0
                }}
                animate={{
                y: `calc(100vh + ${image.size}px)`,
                rotate: image.rotation + 360,
                opacity: [0, 0.3, 0.3, 0]
                }}
                transition={{
                duration: image.duration,
                delay: image.delay,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: Math.random() * 15
                }}
            >
                <div className="relative w-full h-full">
                <Image
                    src={image.image.src}
                    alt={image.image.alt}
                    fill
                    className="object-cover rounded-lg"
                    style={{
                    borderRadius: '8px',
                    filter: 'sepia(0.2) contrast(1.1)'
                    }}
                    sizes={`${image.size}px`}
                />
                {/* Эффект свечения */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-accent/15 rounded-lg blur-[1px]" />
                
                {/* Декоративная рамка */}
                <div className="absolute inset-0 border border-white/10 rounded-lg" />
                </div>
            </motion.div>
            ))}

            {/* Градиентные фоны */}
            <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"
            />
            <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-secondary/10 to-primary/10 rounded-full blur-3xl"
            />
            
            {/* Дополнительный градиент для глубины */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-48 bg-gradient-to-t from-background/80 to-transparent"
            />
        </div>
    );
}