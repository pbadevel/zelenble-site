'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { PersonalInfo } from "@/components/features/personal-info";

const TeamPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })
  const [isVisible, setIsVisible] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.9])

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, scale }}
      className="pt-20 text-[var(--text-foreground)] w-full min-h-screen relative overflow-hidden"
    >
      {/* Градиентные фоны */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
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
      </div>

      <div className="relative z-10">
       
      </div>
    </motion.div>
  )
}

export default TeamPage;