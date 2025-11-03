'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const ServicesPage = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [activeTab, setActiveTab] = useState('plus')
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const sasSteps = [
    {
      step: 1,
      title: 'Device-Level Check',
      subtitle: 'Проверка на устройстве',
      description: 'При обнаружении критических показателей (например, остановка сердца, опасный скачок давления) часы вибрируют и выводят на экран запрос: «С вами все в порядке?»',
      purpose: 'Отсечь ложные срабатывания. Если пользователь отвечает «Да» — система успокаивается.',
      icon: '⌚',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      step: 2,
      title: 'Private Dispatch',
      subtitle: 'Приватный диспетчер',
      description: 'Если пользователь не отвечает или подтверждает плохое самочувствие, автоматически устанавливается голосовая связь с диспетчером службы Axonisium.',
      purpose: 'Диспетчер-оператор проводит быструю оценку ситуации, уточняет состояние и координирует дальнейшие действия. На его экран уже переданы ваш профиль, текущие показатели и местонахождение.',
      icon: '👨‍💼',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      step: 3,
      title: 'State Integration',
      subtitle: 'Интеграция со службами',
      description: 'В критической ситуации диспетчер инициирует автоматический вызов скорой медицинской помощи, МЧС или родственникам.',
      purpose: 'Максимально сократить время до прибытия помощи. Службы получают полный пакет данных: кто вы, что случилось, ваши ключевые показатели и точные координаты.',
      icon: '🚑',
      color: 'from-red-500/20 to-orange-500/20'
    }
  ]

  const subscriptions = [
    {
      id: 'plus',
      title: 'Axonisium Plus',
      subtitle: 'Для тех, кто хочет глубоко понимать свое тело',
      features: [
        'Расширенная аналитика и интегральные показатели',
        'Кардиометаболический индекс: Оценка нагрузки на сердце с учетом метаболизма и температуры',
        'Невровегетативный баланс: Мониторинг уровня стресса и восстановления нервной системы',
        'Гидратационно-электролитный статус: Персонализированные рекомендации по питьевому режиму',
        'Персональные рекомендации: Автоматические советы по режиму дня, нагрузкам и восстановлению на основе ваших данных',
        'Ведение цифрового дневника здоровья: Синхронизация с лабораторными анализами, заметками о самочувствии',
        'Расширенная визуализация трендов: Годовые отчеты и детализированные графики'
      ],
      button: 'Попробовать 30 дней бесплатно',
      price: 'от 990 ₽/мес',
      popular: false,
      color: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      id: 'pro',
      title: 'Axonisium Pro',
      subtitle: 'Инструмент для врачей и клиник',
      features: [
        'Все возможности Plus',
        'Врачебный портал: Специализированный интерфейс для удаленного мониторинга пациентов',
        'Настройка порогов тревог: Индивидуальные «красные зоны» для каждого пациента',
        'Интеграция с Медицинскими Информационными Системами (МИС): API для встраивания данных в электронную историю болезни',
        'Инструменты телемедицины: Проведение консультаций прямо в платформе',
        'Групповая аналитика для исследований: Анонимизированные данные для клинических исследований'
      ],
      button: 'Запросить демо-дни',
      price: 'Индивидуально',
      popular: true,
      color: 'from-purple-500/10 to-violet-500/10'
    },
    {
      id: 'guardian',
      title: 'Axonisium Guardian',
      subtitle: 'Максимальная безопасность и сервис',
      features: [
        'Все возможности Plus',
        'Полный доступ к системе S.A.S.: Включена услуга многоуровневого протокола спасения',
        'Премиальная поддержка 24/7: Персональный менеджер и приоритетное обслуживание',
        'Расширенная гарантия на устройства',
        'Консьерж-сервис: Помощь в записи к врачам-партнерам и организации телемедицинских консультаций'
      ],
      button: 'Подключить защиту',
      price: 'от 2 990 ₽/мес',
      popular: false,
      color: 'from-orange-500/10 to-red-500/10'
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="pt-20 min-h-screen bg-[var(--background)] overflow-x-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Проактивные сервисы
          </h1>
          <p className="text-xl lg:text-2xl text-[var(--text-secondary)] mb-8 max-w-4xl mx-auto">
            От данных к действию
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed"
          >
            Мы не просто собираем информацию. Мы анализируем, предупреждаем и действуем, обеспечивая вашу безопасность и благополучие на принципиально новом уровне.
          </motion.p>
        </motion.section>

        {/* SAS Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-4"
          >
            Система Активного Спасения (S.A.S.)
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-secondary)] text-center mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Безопасность, которая работает автоматически. S.A.S. — это интеллектуальный многоуровневый протокол, который превращает критический сигнал от ваших устройств в оперативное действие.
          </motion.p>

          {/* SAS Steps */}
          <div className="bg-[var(--bg-card)] backdrop-blur-sm rounded-3xl p-8 border border-[var(--border-primary)]">
            {/* Progress Bar */}
            <div className="relative mb-12">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-[var(--border-primary)] transform -translate-y-1/2 z-0" />
              <div 
                className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 z-10 transition-all duration-500"
                style={{ width: `${((activeStep + 1) / sasSteps.length) * 100}%` }}
              />
              <div className="relative flex justify-between z-20">
                {sasSteps.map((step, index) => (
                  <motion.button
                    key={step.step}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    onClick={() => setActiveStep(index)}
                    className={`flex flex-col items-center transition-all duration-300 ${
                      index <= activeStep ? 'scale-110' : 'scale-100'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                      index <= activeStep 
                        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg' 
                        : 'bg-[var(--bg-muted)] text-[var(--text-secondary)] border border-[var(--border-primary)]'
                    }`}>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className={`text-sm font-semibold transition-colors duration-300 ${
                      index <= activeStep ? 'text-[var(--primary)]' : 'text-[var(--text-secondary)]'
                    }`}>
                      Шаг {step.step}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`bg-gradient-to-br ${sasSteps[activeStep].color} rounded-2xl p-8 border border-white/10`}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                      {sasSteps[activeStep].title}
                    </h3>
                    <p className="text-lg text-[var(--primary)] font-semibold mb-4">
                      {sasSteps[activeStep].subtitle}
                    </p>
                    <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                      {sasSteps[activeStep].description}
                    </p>
                    <div className="bg-black/20 rounded-xl p-4">
                      <p className="text-sm text-[var(--text-primary)] font-semibold">
                        Цель: <span className="font-normal text-[var(--text-secondary)]">{sasSteps[activeStep].purpose}</span>
                      </p>
                    </div>

                    {/* Accelerated Protocol Notice */}
                    {activeStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-6 bg-primary/10 border border-primary/20 rounded-xl p-4"
                      >
                        <p className="text-sm text-[var(--text-primary)]">
                          💡 <strong>Для пользователей с хроническими заболеваниями</strong> доступен «Ускоренный протокол» с прямым вызовом в прикрепленную клинику.
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Visualization */}
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="w-64 h-64 bg-[var(--bg-muted)] rounded-2xl border border-[var(--border-primary)] flex items-center justify-center"
                    >
                      <div className="text-center">
                        <div className="text-6xl mb-4">{sasSteps[activeStep].icon}</div>
                        <p className="text-[var(--text-secondary)] text-sm">
                          Визуализация этапа
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Subscriptions Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-4"
          >
            Превращаем поток данных в персональные рекомендации
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-secondary)] text-center mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Наша платформа — это «мозг» экосистемы. С помощью алгоритмов глубокой синергии и предиктивной аналитики мы создаем из разрозненных данных целостную картину, предлагая вам не просто статистику, а готовые сценарии для улучшения здоровья.
          </motion.p>

          {/* Subscription Tabs */}
          <div className="bg-[var(--bg-card)] backdrop-blur-sm rounded-3xl p-6 border border-[var(--border-primary)]">
            {/* Tab Headers */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {subscriptions.map((subscription, index) => (
                <motion.button
                  key={subscription.id}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveTab(subscription.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 relative ${
                    activeTab === subscription.id
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                      : 'bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:bg-[var(--border-primary)]'
                  }`}
                >
                  {subscription.popular && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Популярный
                    </span>
                  )}
                  {subscription.title}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {subscriptions
                  .filter(sub => sub.id === activeTab)
                  .map(subscription => (
                    <div key={subscription.id} className={`bg-gradient-to-br ${subscription.color} rounded-2xl p-8 border border-white/10`}>
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                            {subscription.title}
                          </h3>
                          <p className="text-lg text-[var(--text-secondary)] mb-4">
                            {subscription.subtitle}
                          </p>
                          <div className="mb-6">
                            <span className="text-3xl font-bold text-[var(--primary)]">
                              {subscription.price}
                            </span>
                          </div>

                          <ul className="space-y-3 mb-8">
                            {subscription.features.map((feature, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="flex items-start gap-3 text-[var(--text-secondary)]"
                              >
                                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-white text-xs">✓</span>
                                </div>
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--primary-hover)] hover:to-[var(--secondary)] text-[var(--text-inverted)] py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg"
                          >
                            {subscription.button}
                          </motion.button>
                        </div>

                        {/* Visualization */}
                        <div className="flex items-center justify-center">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="w-full h-64 bg-[var(--bg-muted)] rounded-2xl border border-[var(--border-primary)] flex items-center justify-center"
                          >
                            <div className="text-center">
                              <div className="text-6xl mb-4">📊</div>
                              <p className="text-[var(--text-secondary)]">
                                Визуализация {subscription.title}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Partners Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4"
          >
            Станьте частью экосистемы
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Мы создаем открытую платформу для будущего здоровья. Присоединяйтесь к нам, чтобы развивать экосистему вместе.
          </motion.p>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                  Партнерская программа для врачей
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  Подключайте своих пациентов к системе мониторинга и получайте инструменты для повышения эффективности лечения.
                </p>
                <ul className="text-[var(--text-secondary)] space-y-2 mb-6">
                  <li>• Доступ к платформе Axonisium Pro</li>
                  <li>• Инструменты телемедицины</li>
                  <li>• Интеграция с МИС</li>
                  <li>• Приоритетная поддержка</li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--primary-hover)] hover:to-[var(--secondary)] text-[var(--text-inverted)] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg"
                >
                  Стать партнером
                </motion.button>
              </div>

              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="w-64 h-64 bg-[var(--bg-muted)] rounded-2xl border border-[var(--border-primary)] flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">🤝</div>
                    <p className="text-[var(--text-secondary)]">
                      Партнерская программа
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4">
                Готовы вывести вашу безопасность и здоровье на новый уровень?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--primary-hover)] hover:to-[var(--secondary)] text-[var(--text-inverted)] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg"
                >
                  Начать бесплатный пробный период
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-[var(--border-primary)] hover:border-[var(--primary)] text-[var(--text-secondary)] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg"
                >
                  Связаться с менеджером
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default ServicesPage