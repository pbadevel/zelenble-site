'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

export const CompanyInfo = () => {

    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.3 })
    const [isVisible, setIsVisible] = useState(false)
    

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })
    
      const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
      const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.9])
      const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])
    
      useEffect(() => {
        if (isInView) {
          setIsVisible(true)
        }
      }, [isInView])
    
     
      const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
      }
    
      const staggerChildren = {
        animate: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }
      
    

    return (
        <>
        <motion.div
            ref={containerRef}
            style={{ opacity, scale, y }}
            className="text-[var(--text-foreground)] w-full min-h-screen relative overflow-x-hidden"
        >

        {/* Основной контент */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-1 relative z-10">
            <motion.div
            variants={staggerChildren}
            initial="initial"
            animate={isVisible ? "animate" : "initial"}
            className="space-y-8 lg:space-y-12"
            >
            {/* Заголовок */}
            <motion.div
                variants={fadeInUp}
                className="text-center mb-12 lg:mb-16"
            >
                <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-light bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6"
                >
                {process.env.NEXT_PUBLIC_COMPANY_NAME ?? "AXONISIUM"}
                </motion.h1>
                <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-px bg-gradient-to-r from-primary to-accent mx-auto"
                />
            </motion.div>

            {/* Основной текст */}
            <motion.div
                variants={fadeInUp}
                className="prose prose-lg lg:prose-xl prose-invert max-w-none"
            >
                <motion.p
                className="text-xl lg:text-2xl font-light leading-relaxed text-center mb-8 lg:mb-12 text-[var(--text-secondary)] backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                >
                <Link className="text-[var(--primary)] font-medium hover:underline hover:cursor-pointer" href="/">{process.env.NEXT_PUBLIC_COMPANY_NAME ?? "AXONISIUM"}</Link> — это больше чем компания. 
                Это миссия, которую несут forward-thinkers, инженеры и дизайнеры, объединенные целью изменить парадигму заботы о здоровье.
                </motion.p>

                <motion.div
                className="space-y-6 lg:space-y-8 text-[var(--text-secondary)] leading-relaxed"
                variants={staggerChildren}
                >
                <motion.p
                    variants={fadeInUp}
                    className="text-lg lg:text-xl backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                    Мы — молодая, но амбициозная команда, создающая будущее персонализированной медицины уже сегодня. 
                    Наш проект получил поддержку <a className="text-[var(--primary)] hover:underline font-medium hover:cursor-pointer">[Название Фонда]</a> в виде гранта, 
                    что стало признанием потенциала нашей технологии и уверенностью в нашем видении.
                </motion.p>

                <motion.p
                    variants={fadeInUp}
                    className="text-lg lg:text-xl backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                    Мы активно сотрудничаем с ведущими медицинскими центрами, технологическими партнерами и производителями, 
                    чтобы создать не просто устройство, а целую экосистему, ориентированную на человека.
                </motion.p>

                <motion.div
                    variants={fadeInUp}
                    className="bg-gradient-to-r from-primary/20 to-accent/20 border-l-4 border-primary p-6 lg:p-8 rounded-r-2xl my-8 lg:my-12 backdrop-blur-sm border border-white/10"
                >
                    <p className="text-lg lg:text-xl font-medium text-[var(--text-primary)] italic">
                    Наша философия проста: здоровье — это сложная, взаимосвязанная система. 
                    Чтобы управлять ею эффективно, нужны не разрозненные данные, а целостная, 
                    проактивная и адаптируемая под вас платформа.
                    </p>
                </motion.div>

                <motion.p
                    variants={fadeInUp}
                    className="text-lg lg:text-xl font-medium text-center text-[var(--text-primary)] backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                    Именно так родилась идея <span className="bg-gradient-to-r from-primary to-accent bg-clip-text font-bold">«Конструктора Здоровья»</span>
                </motion.p>
                </motion.div>
            </motion.div>

            {/* Декоративные элементы */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex justify-center space-x-4 mt-12 lg:mt-16"
            >
                {[1, 2, 3].map((item) => (
                <motion.div
                    key={item}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                    duration: 0.6, 
                    delay: 1.8 + item * 0.2,
                    type: "spring",
                    stiffness: 200
                    }}
                    className="w-2 h-2 bg-primary rounded-full"
                />
                ))}
            </motion.div>
            </motion.div>
        </div>
        </motion.div>
    </>
    )
}