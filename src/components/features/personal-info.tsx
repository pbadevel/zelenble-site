'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from "next/image"
import { CoLeaders, TeamMember } from "@/lib/personal-data"

export const PersonalInfo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <motion.div
      ref={containerRef}
      className="bg-transparent py-8 sm:pb-12 lg:pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-light bg-gradient-to-r from-primary to-accent bg-clip-text  mb-4"
          >
            Наша Команда
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: "120px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-primary to-accent mx-auto"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-4xl sm:text-xl lg:text-4xl text-[var(--text-secondary)] mt-6 max-w-4xl mx-auto uppercase"
          >
            Профессионалы, которые создают будущее персонализированного здоровья
          </motion.p>
        </motion.div>

        {/* Список сотрудников */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="space-y-8 sm:space-y-12 lg:space-y-16"
        >
          {CoLeaders.map((member, index) => (
            <Person 
              key={member.id}
              member={member}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

interface PersonProps {
  member: TeamMember
  index: number
}

export const Person = ({ member, index }: PersonProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.2 })

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.7, 
      ease: "easeOut",
      delay: index * 0.1
    }
  }

  const imageAnimation = {
    initial: { opacity: 0, scale: 0.8, rotate: -5 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      delay: index * 0.1 + 0.3
    }
  }

  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-12 py-6 sm:py-8 lg:py-10 border-b border-[var(--border-primary)] last:border-b-0 backdrop-blur-sm bg-white/5 rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10"
    >
      {/* Аватар */}
      <motion.div
        variants={imageAnimation}
        className={`flex-shrink-0 ${!member.imageIsFirst ? 'lg:order-3' : ''}`}
      >
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden border-2 border-[var(--border-accent)] shadow-lg">
          <Image
            className="w-full h-full object-cover"
            alt={member.name}
            width={224}
            height={224}
            src={member.image}
          />
          {/* Эффект градиента поверх изображения */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        </div>
      </motion.div>

      {/* Информация */}
      <motion.div 
        className={`flex-1 w-full ${member.imageIsFirst ? 'lg:text-left' : 'lg:text-right'} text-center lg:text-left`}
        initial={{ opacity: 0, x: member.imageIsFirst ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: member.imageIsFirst ? -30 : 30 }}
        transition={{ duration: 0.7, delay: index * 0.1 + 0.5 }}
      >
        <div className={`flex flex-col ${member.imageIsFirst ? 'sm:items-start' : 'sm:items-end'} items-center gap-3 sm:gap-4 mb-4 sm:mb-6`}>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal text-[var(--text-primary)] bg-gradient-to-r from-primary to-accent bg-clip-text ">
            {member.name}
          </h2>
          <span className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] font-light px-4 py-2 bg-[var(--bg-muted)] rounded-full border border-[var(--border-primary)]">
            {member.position}
          </span>
        </div>

        {/* Описание */}
        <motion.div 
          className="space-y-3 sm:space-y-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: index * 0.1 + 0.7 }}
        >
          {member.description.map((item, descIndex) => (
            <p 
              key={descIndex}
              className={`text-[var(--text-secondary)] text-base sm:text-lg lg:text-xl leading-relaxed font-light ${member.imageIsFirst ? 'text-start' : 'lg:text-end text-start'}`}
            >
              {item}
            </p>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}