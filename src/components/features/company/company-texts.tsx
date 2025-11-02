'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const steps = [
    { id: 1, title: "Выберите Core", description: "База с ЭКГ, пульсом, температурой кожи" },
    { id: 2, title: "Добавьте модули", description: "НАД для давления, Термометр ядра, ЭКГ 6 отведений..." },
    { id: 3, title: "Щелкните для подключения", description: "Технология Magnetic Click & Seal" },
    { id: 4, title: "Получите картину целиком", description: "Данные синхронизируются в вашем Цифровом Двойнике" }
  ]

export const CompanyTexts = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isAnimationPlayed, setIsAnimationPlayed] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(heroRef, { once: true })

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["end end", "start end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  // Анимация подключения устройств при первом скролле
  useEffect(() => {
    if (isInView && !isAnimationPlayed) {
      setIsAnimationPlayed(true)
    }
  }, [isInView, isAnimationPlayed])

  

  const pillars = [
    {
      title: "Аппаратная свобода",
      subtitle: "Модульные часы «Axon»",
      description: "Не просто часы, а основа для вашей личной лаборатории. Базовые датчики уже внутри. Добавляйте модули в ремешок: давление, температура ядра, ЭКГ 6 отведений, ЭМГ. Меняйте конфигурацию за секунды.",
      button: "Как это работает? →",
      icon: "⚡"
    },
    {
      title: "Цифровой интеллект",
      subtitle: "Единая платформа и Цифровой Двойник",
      description: "Все данные объединяются в защищенном облаке. Наши алгоритмы выявляют сложные взаимосвязи и создают интегральные показатели здоровья.",
      button: "Узнать о платформе →",
      icon: "🧠"
    },
    {
      title: "Проактивная безопасность",
      subtitle: "Система Активного Спасения (S.A.S.)",
      description: "Мы не просто предупреждаем о проблемах — мы действуем. От проверки на устройстве до автоматического вызова помощи с передачей данных.",
      button: "Подробнее о S.A.S. →",
      icon: "🛡️"
    }
  ]

  const audiences = [
    {
      title: "Для пациентов с Хроническими Заболеваниями",
      description: "Непрерывный контроль сердца и давления. Система S.A.S. — ваш персональный ангел-хранитель.",
      modules: "НАД, Продвинутая ЭКГ",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Для спортсменов",
      description: "Выход за пределы пульса. Отслеживайте лактат, температуру ядра, мышечную активность (ЭМГ).",
      modules: "Лактат, Термометр ядра, ЭМГ",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Для корпоративных клиентов",
      description: "Борьба с выгоранием на основе данных. Мониторинг стресса (КГР) и вариабельности сердечного ритма.",
      modules: "КГР, Базовая ЭКГ",
      color: "from-purple-500/20 to-violet-500/20"
    },
    {
      title: "Для врачей и клиник",
      description: "Удаленный мониторинг пациентов с клинически точными данными. Инструменты для телемедицины.",
      modules: "Платформа Axonisium Pro",
      color: "from-orange-500/20 to-red-500/20"
    }
  ]

  return (
    <div className="space-y-32 lg:space-y-48 overflow-x-hidden pb-20">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ opacity, scale, y }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Фоновая концепт-иллюстрация */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Абстрактная сеть соединений */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" />
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '2s' }} />
            
            {/* Линии соединения */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <motion.path
                d="M20,30 L50,50 L80,30"
                stroke="var(--primary)"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <motion.path
                d="M30,70 L50,50 L70,70"
                stroke="var(--secondary)"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
            </svg>
          </div>

          {/* Градиентные пятна */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Связывая данные.
            </span>
            <br />
            <span className="bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
              Сохраняя жизни.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-[var(--text-secondary)] max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            Axonisium — первая модульная экосистема для здоровья. Начните с умных часов и добавляйте только те датчики, которые нужны вам — от давления и ЭКГ до анализа состава пота. Получайте не просто данные, а готовность к действию.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              href="/catalog"
              className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--primary-hover)] hover:to-[var(--secondary)] text-[var(--text-inverted)] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Собрать свои часы →
            </Link>
            <Link 
              href="/company"
              className="border-2 border-[var(--border-primary)] hover:border-[var(--primary)] text-[var(--text-secondary)] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg"
            >
              Узнать об экосистеме→
            </Link>
          </motion.div>

          {/* Анимация подключения устройств */}
          <AnimatePresence>
            {isAnimationPlayed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="mt-20 relative h-40"
              >
                {/* Устройства */}
                <motion.div
                  className="absolute left-1/4 -translate-x-1/2"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-xl">
                    ⌚
                  </div>
                  <p className="text-xs mt-2 text-[var(--text-secondary)]">Часы</p>
                </motion.div>

                <motion.div
                  className="absolute right-1/4 translate-x-1/2"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center text-white text-xl">
                    🏠
                  </div>
                  <p className="text-xs mt-2 text-[var(--text-secondary)]">Панель</p>
                </motion.div>

                {/* Линии подключения к облаку */}
                <motion.div
                  className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <span className="text-lg">☁️</span>
                </motion.div>

                {/* Поток данных */}
                <motion.div
                  className="absolute top-4 left-1/4 w-2 h-2 bg-primary rounded-full"
                  animate={{
                    x: [0, 100, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.5
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Comparison Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-16"
        >
          Разочарованы ограничениями обычных часов?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Обычные часы */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--bg-card)] rounded-3xl p-8 border border-[var(--border-primary)]"
          >
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 text-center">Обычные часы</h3>
            <ul className="space-y-4">
              {[
                "Фиксированный набор функций",
                "Платите за ненужное",
                "Не можете добавить необходимое",
                "Устаревают через 1-2 года"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-500 text-lg">✕</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Axonisium */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Рекомендуем
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 text-center">Axonisium</h3>
            <ul className="space-y-4">
              {[
                "Конфигурация под ваши цели",
                "Платите только за нужные датчики",
                "Меняйте и обновляйте функционал",
                "Экосистема, которая растет вместе с вами"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-500 text-lg">✓</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-16"
        >
          Три столпа экосистемы Axonisium
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[var(--bg-card)] rounded-3xl p-8 border border-[var(--border-primary)] hover:border-[var(--primary)] transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{pillar.title}</h3>
              <h4 className="text-lg font-semibold text-[var(--primary)] mb-4">{pillar.subtitle}</h4>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{pillar.description}</p>
              <button className="text-[var(--primary)] font-semibold hover:underline flex items-center gap-2">
                {pillar.button}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-8 lg:mb-16"
        >
          Как это работает? Соберите свою конфигурацию за 4 шага
        </motion.h2>

        {/* Desktop Version - Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-[var(--border-primary)] z-0" />
            <div 
              className="absolute top-8 left-0 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] z-0 transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />

            <div className="grid grid-cols-4 gap-4 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center cursor-pointer group"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                    index <= activeStep 
                      ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white scale-110' 
                      : 'bg-[var(--bg-muted)] text-[var(--text-secondary)]'
                  }`}>
                    <span className="font-bold text-lg">{step.id}</span>
                  </div>
                  <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                    index <= activeStep ? 'text-[var(--primary)]' : 'text-[var(--text-secondary)]'
                  }`}>
                    {step.title}
                  </h3>
                  <AnimatePresence>
                    {index === activeStep && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-[var(--text-secondary)]"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Version - Vertical with Animated Progress Bar */}
        <div className="lg:hidden">
          <MobileHowItWorks />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-lg lg:text-xl text-[var(--text-secondary)] italic mt-8 lg:mt-12"
        >
          Технология, которая подстраивается под вас. Не наоборот.
        </motion.p>
      </section>

      {/* Target Audiences Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-16"
        >
          Axonisium для ваших целей
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${audience.color} rounded-3xl p-6 border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300`}
            >
              <h3 className="font-bold text-[var(--text-primary)] mb-3 text-lg">
                {audience.title}
              </h3>
              <p className="text-[var(--text-secondary)] mb-4 text-sm leading-relaxed">
                {audience.description}
              </p>
              <div className="bg-black/20 rounded-xl p-3">
                <p className="text-xs text-[var(--primary)] font-semibold">
                  Ключевые модули: {audience.modules}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-6">
            Доверие и надежность
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
            Наши устройства проходят процедуру регистрации как медицинские изделия и сертификацию (Росздравнадзор, FDA, CE). Проект реализуется при поддержке [Название Фонда].
          </p>
          
          <div className="bg-[var(--bg-card)] rounded-2xl p-8 border border-[var(--border-primary)] inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              ФОНД
            </div>
            <p className="font-semibold text-[var(--text-primary)]">Логотип фонда</p>
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-hidden pb-10 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 border border-white/10 backdrop-blur-sm"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-6">
            Готовы собрать свое здоровье заново?
          </h2>
          
          <Link 
            href="/catalog"
            className="inline-block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--primary-hover)] hover:to-[var(--secondary)] text-[var(--text-inverted)] px-12 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mb-4"
          >
            Начать сборку →
          </Link>
          
          <p className="text-sm text-[var(--text-muted)]">
            Для юридических лиц и медицинских учреждений: <button className="text-[var(--primary)] font-semibold hover:underline">Запросить демо</button>
          </p>
        </motion.div>
      </section>
    </div>
  )
}









// Mobile Component with Animated Progress Bar
const MobileHowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Анимация прогресс-бара
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const springProgress = useSpring(progressHeight, {
    stiffness: 100,
    damping: 30
  })

  // Определение активного шага на основе скролла
  const stepProgress = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3])
  
  useEffect(() => {
    const unsubscribe = stepProgress.on('change', (latest) => {
      setActiveStep(Math.floor(latest))
    })
    return () => unsubscribe()
  }, [stepProgress])

  return (
    <div ref={containerRef} className="relative">
      {/* Vertical Progress Bar Background */}
      <div className="absolute left-6 top-4 bottom-4 w-1 bg-[var(--border-primary)] rounded-full z-0" />
      
      {/* Animated Progress Fill */}
      <motion.div
        className="absolute left-6 top-4 w-1 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)] rounded-full z-10"
        style={{ 
          height: springProgress,
          originY: 0
        }}
      />

      {/* Steps */}
      <div className="space-y-8 relative z-20">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-start gap-6"
          >
            {/* Step Number with Connection Line */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center relative z-20 transition-all duration-500 ${
                index <= activeStep 
                  ? 'bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white scale-110 shadow-lg' 
                  : 'bg-[var(--bg-muted)] text-[var(--text-secondary)] border border-[var(--border-primary)]'
              }`}>
                <span className="font-bold text-lg">{step.id}</span>
                
                {/* Connection Dot */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className={`absolute -bottom-6 w-3 h-3 rounded-full border-2 z-20 ${
                      index < activeStep 
                        ? 'bg-[var(--primary)] border-[var(--primary)] scale-125' 
                        : 'bg-[var(--bg-card)] border-[var(--border-primary)]'
                    }`}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: index < activeStep ? 1.2 : 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            </div>

            {/* Step Content */}
            <motion.div 
              className={`flex-1 bg-[var(--bg-card)] rounded-2xl p-6 border transition-all duration-500 ${
                index <= activeStep 
                  ? 'border-[var(--primary)] shadow-lg scale-105' 
                  : 'border-[var(--border-primary)]'
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <h3 className={`font-semibold text-lg mb-3 transition-colors duration-300 ${
                index <= activeStep ? 'text-[var(--primary)]' : 'text-[var(--text-primary)]'
              }`}>
                {step.title}
              </h3>
              <motion.p 
                className="text-[var(--text-secondary)] leading-relaxed"
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: index <= activeStep ? 1 : 0.7,
                  height: 'auto'
                }}
                transition={{ duration: 0.3 }}
              >
                {step.description}
              </motion.p>

              {/* Active Step Indicator */}
              {index === activeStep && (
                <motion.div
                  className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[var(--primary)] rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                />
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}