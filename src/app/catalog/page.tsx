'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CatalogPage = () => {
  const [selectedModules, setSelectedModules] = useState<string[]>([])

  const coreRef = useRef<HTMLDivElement>(null)
  const homeRef = useRef<HTMLDivElement>(null)
  const futureRef = useRef<HTMLDivElement>(null)

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const modules = [
    {
      id: 'nad',
      name: 'НАД (Неинвазивное давление)',
      description: 'Клинически точное измерение артериального давления',
      status: 'В продаже',
      price: 12900,
      available: true
    },
    {
      id: 'thermo',
      name: 'Термометр ядра тела',
      description: 'Высокоточное измерение (±0.1°C) внутренней температуры',
      status: 'В продаже',
      price: 8900,
      available: true
    },
    {
      id: 'ekg',
      name: 'Продвинутая ЭКГ (6 отведений)',
      description: 'Профессиональная кардиодиагностика с расширенными возможностями',
      status: 'Скоро в продаже',
      price: 15600,
      available: false
    },
    {
      id: 'emg',
      name: 'Электромиография (ЭМГ)',
      description: 'Оценка мышечной активности и восстановления',
      status: 'В разработке',
      price: 0,
      available: false
    },
    {
      id: 'sweat',
      name: 'Мультибиосенсор пота',
      description: 'Анализ электролитов (Na+, K+), лактата и метаболитов',
      status: 'В разработке',
      price: 0,
      available: false
    },
    {
      id: 'kgr',
      name: 'Кожно-гальваническая реакция (КГР)',
      description: 'Точный мониторинг стресса и эмоционального состояния',
      status: 'В разработке',
      price: 0,
      available: false
    }
  ]

  const toggleModule = (moduleId: string) => {
    setSelectedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    )
  }

  const calculateTotal = () => {
    const basePrice = 29900 // Цена базовых часов
    const modulesPrice = selectedModules.reduce((total, moduleId) => {
      const deviceModule = modules.find(m => m.id === moduleId)
      return total + (deviceModule?.price || 0)
    }, 0)
    return basePrice + modulesPrice
  }

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="pt-20 text-[var(--text-foreground)] w-full min-h-screen">
      {/* Градиентный фон */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Модульные часы «Axon»
          </h1>
          <p className="text-xl lg:text-3xl text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed font-semibold">
            Центр вашей экосистемы здоровья. Бесконечная кастомизация благодаря сменным датчикам-модулям.
          </p>
        </motion.div>

        {/* Навигация */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16 lg:mb-20"
        >
          {[
            { id: 'axon-core', label: 'Модульные часы «Axon»', ref: coreRef },
            { id: 'home-panel', label: 'Умная домашняя панель', ref: homeRef },
            { id: 'future', label: 'Будущие устройства', ref: futureRef }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.ref)}
              className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              {item.label}
            </button>
          ))}
        </motion.div>

        {/* Основной корпус Axon Core */}
        <motion.section
          ref={coreRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Визуальная часть */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="aspect-square relative">
                  <Image
                    src="/images/axon-core-wrist.jpg"
                    alt="Часы Axon Core на руке"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Текстовая часть */}
            <div>
              <motion.h2
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                className="text-3xl lg:text-4xl font-light text-[var(--text-primary)] mb-6"
              >
                Основной корпус: «Axon Core»
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ delay: 0.1 }}
                className="text-lg lg:text-xl text-[var(--text-secondary)] mb-8 leading-relaxed"
              >
                Всё необходимое — в основе. Мощный вычислительный центр с набором базовых датчиков 
                для непрерывного мониторинга 24/7.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-lg font-medium text-[var(--text-primary)] mb-4">
                    Непрерывный мониторинг
                  </h4>
                  <ul className="space-y-2 text-[var(--text-secondary)]">
                    <li>• Оптический пульс (ЧСС, SpO₂)</li>
                    <li>• Акселерометр/Гироскоп</li>
                    <li>• Базовая ЭКГ (1 отведение)</li>
                    <li>• Температура кожи</li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-lg font-medium text-[var(--text-primary)] mb-4">
                    Расширенный анализ
                  </h4>
                  <ul className="space-y-2 text-[var(--text-secondary)]">
                    <li>• Барометр (этажи, дыхание)</li>
                    <li>• Биоимпедансный анализ (BIA)</li>
                    <li>• Оценка гидратации</li>
                    <li>• Анализ вариабельности сердечного ритма</li>
                  </ul>
                </motion.div>
              </div>

              {/* Технические характеристики */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {[
                  { label: 'До 36 часов', value: 'работы' },
                  { label: 'IP68', value: 'защита' },
                  { label: 'Magnetic Click & Seal', value: 'коннекторы' },
                  { label: 'Bluetooth 5.2, Wi-Fi, GPS', value: 'связь' }
                ].map((spec, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-lg font-medium text-[var(--text-primary)]">{spec.label}</div>
                    <div className="text-sm text-[var(--text-secondary)]">{spec.value}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Сменные модули */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-32"
        >
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-[var(--text-primary)] mb-4">
              Соберите свой уникальный набор датчиков
            </h2>
            <p className="text-lg lg:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Меняйте конфигурацию за секунды. Каждый модуль — автономная мини-лаборатория 
              с собственным процессором и памятью.
            </p>
          </motion.div>

          {/* Сетка модулей */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {modules.map((deviceModule, index) => (
              <motion.div
                key={deviceModule.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                  selectedModules.includes(deviceModule.id)
                    ? 'border-primary bg-primary/10'
                    : deviceModule.available
                    ? 'border-white/10 bg-white/5 hover:border-white/20'
                    : 'border-white/5 bg-white/5 opacity-60'
                }`}
                onClick={() => deviceModule.available && toggleModule(deviceModule.id)}
              >
                <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2">
                  {deviceModule.name}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {deviceModule.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    deviceModule.status === 'В продаже' 
                      ? 'bg-success/20 text-success' 
                      : deviceModule.status === 'Скоро в продаже'
                      ? 'bg-warning/20 text-warning'
                      : 'bg-[var(--text-muted)]/20 text-[var(--text-muted)]'
                  }`}>
                    {deviceModule.status}
                  </span>
                  {deviceModule.price > 0 && (
                    <span className="text-lg font-medium text-[var(--text-primary)]">
                      {deviceModule.price.toLocaleString()} ₽
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Конструктор конфигураций */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-white/10"
          >
            <h3 className="text-2xl lg:text-3xl font-light text-[var(--text-primary)] mb-6 text-center">
              Конструктор конфигураций
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-lg font-medium text-[var(--text-primary)] mb-4">
                  Выбранные модули:
                </h4>
                {selectedModules.length === 0 ? (
                  <p className="text-[var(--text-secondary)]">Выберите модули для ваших часов</p>
                ) : (
                  <ul className="space-y-2">
                    {selectedModules.map(moduleId => {
                      const deviceModule = modules.find(m => m.id === moduleId)
                      return deviceModule ? (
                        <li key={moduleId} className="text-[var(--text-primary)] flex justify-between">
                          <span>{deviceModule.name}</span>
                          <span>{deviceModule.price.toLocaleString()} ₽</span>
                        </li>
                      ) : null
                    })}
                  </ul>
                )}
                
                <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-[var(--text-primary)] font-medium">Итого:</span>
                    <span className="text-2xl font-light text-primary">
                      {calculateTotal().toLocaleString()} ₽
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="px-8 py-4 bg-primary text-white rounded-2xl hover:bg-primary-hover transition-all duration-300 text-lg font-medium">
                  Оформить предзаказ
                </button>
                <p className="text-[var(--text-secondary)] mt-4 text-sm">
                  Доставка от 2 до 4 недель
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Умная домашняя панель */}
        <motion.section
          ref={homeRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.h2
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                className="text-3xl lg:text-4xl font-light text-[var(--text-primary)] mb-4"
              >
                Умная домашняя панель «Axon Home»
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ delay: 0.1 }}
                className="text-lg lg:text-xl text-[var(--text-secondary)] mb-6 leading-relaxed"
              >
                Настенное устройство для комплексного мониторинга здоровья и окружающей среды 
                в вашем доме. Идеально для контроля качества сна, воздуха и создания релаксирующей атмосферы.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                {[
                  'Радарный мониторинг сна (дыхание, пульс, движения без носимых устройств)',
                  'Датчики качества воздуха (CO₂, летучие соединения, пыль)',
                  'Умное освещение (синхронизация с циркадными ритмами)',
                  'Система управления релаксацией (звук, свет, ароматы)',
                  'Полная интеграция с часами Axon'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ delay: 0.3 }}
                className="mt-8 p-4 bg-warning/10 border border-warning/20 rounded-xl inline-block"
              >
                <p className="text-warning font-medium">
                  На стадии прототипа. Ожидание: 18–24 месяца
                </p>
              </motion.div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="aspect-video relative">
                  <Image
                    src="/images/axon-home-panel.jpg"
                    alt="Умная домашняя панель Axon Home"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Будущие устройства */}
        <motion.section
          ref={futureRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20 lg:mb-32"
        >
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-[var(--text-primary)] mb-4">
              Экосистема продолжает расти
            </h2>
            <p className="text-lg lg:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Мы постоянно работаем над новыми устройствами, которые будут бесшовно 
              интегрироваться в платформу {process.env.NEXT_PUBLIC_COMPANY_NAME ?? "AXONISIUM"}.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Умные очки',
                description: 'Мониторинг когнитивной нагрузки и визуального стресса',
                timeframe: 'Ожидание: 36+ мес.',
                image: '/images/smart-glasses.jpg'
              },
              {
                name: 'Мобильная станция',
                description: 'Портативная лаборатория для расширенной диагностики',
                timeframe: 'Ожидание: 24+ мес.',
                image: '/images/mobile-station.jpg'
              }
            ].map((device, index) => (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="aspect-video relative mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={device.image}
                    alt={device.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2">
                  {device.name}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {device.description}
                </p>
                <div className="px-3 py-1 bg-[var(--text-muted)]/20 text-[var(--text-muted)] rounded-full text-sm inline-block">
                  {device.timeframe}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Интеграция экосистемы */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-white/10"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-[var(--text-primary)] mb-4">
              Сила — в интеграции
            </h2>
            <p className="text-lg lg:text-xl text-[var(--text-secondary)] max-w-4xl mx-auto mb-8 leading-relaxed">
              Любое устройство {process.env.NEXT_PUBLIC_COMPANY_NAME ?? "AXONISIUM"} — не самостоятельный гаджет, а часть целого. 
              Все данные стекаются в ваш «Цифровой Двойник», где алгоритмы глубокой синергии 
              создают целостную картину вашего здоровья.
            </p>
            
            <div className="aspect-video relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/ecosystem-schema.jpg"
                alt={`Схема интеграции экосистемы ${process.env.NEXT_PUBLIC_COMPANY_NAME ?? "AXONISIUM"}`}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}

export default CatalogPage