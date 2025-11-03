'use client'

import { useState, useRef } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'

const PlatformPage = () => {
  const [activeComplex, setActiveComplex] = useState('cardio')
  const dashboardRef = useRef<HTMLDivElement>(null)
  const isDashboardInView = useInView(dashboardRef, { once: true, amount: 0.3 })

  const complexes = [
    {
      id: 'cardio',
      title: 'Кардиометаболический комплекс',
      metrics: ['Данные ЭКГ', 'Неинвазивное давление (НАД)', 'Лактат', 'Температура ядра', 'Активность'],
      insight: '«Кардиометаболический индекс» — интегральная оценка напряжения сердечно-сосудистой системы в ответ на метаболические и терморегуляционные нагрузки.',
      benefit: 'Позволяет оценить общие адаптационные резервы организма, выявить ортостатическую гипотензию, контролировать терморегуляцию при нагрузке.'
    },
    {
      id: 'neuro',
      title: 'Невромышечный комплекс',
      metrics: ['Электромиография (ЭМГ)', 'Вариабельность сердечного ритма (HRV)', 'Кожно-гальваническая реакция (КГР)'],
      insight: '«Невровегетативный баланс» — показатель взаимодействия нервной и мышечной систем, уровня стресса и эффективности восстановления.',
      benefit: 'Объективная оценка мышечного утомления, уровня стресса, нейромоторной эффективности и готовности к соревнованиям.'
    },
    {
      id: 'metabolic',
      title: 'Метаболический и гидратационный комплекс',
      metrics: ['Биоимпедансный анализ (BIA)', 'Мультибиосенсор пота (электролиты)', 'Активность', 'Температура'],
      insight: '«Гидратационно-электролитный статус» — динамическая модель, связывающая внутренние запасы жидкости с их текущими потерями.',
      benefit: 'Персонализированные рекомендации по питьевому режиму для спортсменов, профилактика обезвоживания и гипонатриемии.'
    }
  ]

  const securityFeatures = [
    {
      title: 'Безопасность',
      description: 'Сквозное шифрование данных, соответствие международным стандартам HIPAA/GDPR.',
      icon: '🔒'
    },
    {
      title: 'Конфиденциальность',
      description: 'Четкая и прозрачная политика конфиденциальности. Вы сами решаете, кому предоставлять доступ.',
      icon: '👁️'
    },
    {
      title: 'Ролевая модель доступа',
      description: 'Гибкая система прав доступа для владельца, членов семьи и лечащих врачей.',
      icon: '👥'
    }
  ]

  const accessRoles = [
    {
      role: 'Владелец',
      description: 'Полный контроль над своими данными, настройка общих доступов.',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      role: 'Член семьи',
      description: 'Доступ к оповещениям и общим трендам по вашему приглашению.',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      role: 'Лечащий врач',
      description: 'Углубленный доступ к данным для телемедицинских консультаций, настройка порогов тревог.',
      color: 'from-purple-500/20 to-violet-500/20'
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="pt-20 min-h-screen  overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Axonisium Platform
          </h1>
          <p className="text-xl lg:text-2xl text-[var(--text-secondary)] mb-8 max-w-4xl mx-auto">
            Цифровой Двойник вашего здоровья
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed"
          >
            Единый мозг для всех ваших данных. Превращаем разрозненные метрики в целостную картину и проактивные рекомендации.
          </motion.p>
        </motion.section>

        {/* Dashboard Visualization */}
        <motion.section
          ref={dashboardRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isDashboardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="mb-16 lg:mb-24"
        >
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
            {/* Mock Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Health Score */}
              <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-primary)]">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--text-primary)] mb-2">87%</div>
                  <div className="text-[var(--text-secondary)] text-sm">Общий показатель здоровья</div>
                </div>
              </div>
              
              {/* Activity Level */}
              <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-primary)]">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--text-primary)] mb-2">64%</div>
                  <div className="text-[var(--text-secondary)] text-sm">Уровень активности</div>
                </div>
              </div>
              
              {/* Recovery */}
              <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-primary)]">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--text-primary)] mb-2">92%</div>
                  <div className="text-[var(--text-secondary)] text-sm">Восстановление</div>
                </div>
              </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-primary)] h-48">
                <div className="text-[var(--text-primary)] font-semibold mb-4">Кардиометаболический индекс</div>
                <div className="w-full h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-end">
                  {[30, 45, 60, 75, 65, 80, 70].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="flex-1 bg-primary mx-0.5 rounded-t"
                    />
                  ))}
                </div>
              </div>
              
              <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-primary)] h-48">
                <div className="text-[var(--text-primary)] font-semibold mb-4">Невровегетативный баланс</div>
                <div className="w-full h-20 bg-gradient-to-r from-secondary/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-3xl text-[var(--text-secondary)]">⚖️</div>
                </div>
              </div>
            </div>

            {/* Connected Devices */}
            <div className="mt-6 flex justify-center space-x-8">
              {['⌚', '🏠', '📱'].map((device, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-2xl"
                >
                  {device}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Digital Twin Section */}
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
            className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-8"
          >
            Ваш Цифровой Двойник: от данных к пониманию
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.1 }}
            className="bg-[var(--bg-card)] backdrop-blur-sm rounded-3xl p-8 border border-[var(--border-primary)] mb-8"
          >
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              Представьте себе точную цифровую копию вашего здоровья, которая обновляется в реальном времени. Все данные с ваших часов Axon, домашней панели и даже сторонних источников (лабораторные анализы, ручные замеры) безопасно стекаются в единое защищенное облако. Здесь они не просто хранятся, а взаимодействуют, создавая динамическую модель вашего организма — ваш Цифровой Двойник.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Полнота', desc: 'Объединяет все данные в одном месте' },
                { title: 'Динамичность', desc: 'Отражает ваше текущее состояние и долгосрочные тренды' },
                { title: 'Интеллект', desc: 'Анализирует сложные взаимосвязи между системами организма' },
                { title: 'Проактивность', desc: 'Помогает предвидеть риски, а не просто реагировать на проблемы' }
              ].map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-4 border border-white/10"
                >
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">{principle.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{principle.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Data Synergy Section */}
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
            className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-8"
          >
            Сила — в связях. Ценность — в интеграции.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-secondary)] text-center mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Обычные приложения показывают отдельные метрики: пульс, давление, шаги. Мощь платформы Axonisium — в алгоритмах «глубокой синергии», которые объединяют данные из разных источников для создания принципиально новых, клинически значимых показателей.
          </motion.p>

          {/* Complexes Tabs */}
          <div className="bg-[var(--bg-card)] backdrop-blur-sm rounded-3xl p-6 border border-[var(--border-primary)]">
            {/* Tab Headers */}
            <div className="flex flex-wrap gap-2 mb-8">
              {complexes.map((complex, index) => (
                <motion.button
                  key={complex.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveComplex(complex.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    activeComplex === complex.id
                      ? 'bg-gradient-to-r from-primary to-secondary text-primary shadow-lg'
                      : 'bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:bg-[var(--border-primary)]'
                  }`}
                >
                  {complex.title}
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeComplex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                {complexes
                  .filter(complex => complex.id === activeComplex)
                  .map(complex => (
                    <div key={complex.id}>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                            Что объединяет:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {complex.metrics.map((metric, index) => (
                              <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                              >
                                {metric}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                            Что показывает:
                          </h4>
                          <p className="text-[var(--text-secondary)] leading-relaxed">
                            {complex.insight}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                            Польза:
                          </h4>
                          <p className="text-[var(--text-secondary)] leading-relaxed">
                            {complex.benefit}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                {/* Visualization Placeholder */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-[var(--border-primary)] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-[var(--text-secondary)]">
                      Визуализация {complexes.find(c => c.id === activeComplex)?.title.toLowerCase()}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Visualization Section */}
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
            className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-12"
          >
            Данные, которые говорят на вашем языке
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Интеллектуальные дашборды',
                description: 'Настраиваемые панели с ключевыми для вас показателями. Сразу видно, что в норме, а что требует внимания.',
                icon: '🎛️'
              },
              {
                title: 'Долгосрочные тренды',
                description: 'Анализ изменений за недели, месяцы и годы. Позволяет отслеживать эффективность терапии, тренировок или изменение образа жизни.',
                icon: '📈'
              },
              {
                title: 'Персонализированные отчеты',
                description: 'Автоматическое формирование отчетов для врача, тренера или для вашего личного дневника здоровья.',
                icon: '📋'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--bg-card)] backdrop-blur-sm rounded-2xl p-6 border border-[var(--border-primary)] text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Security Section */}
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
            className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-12"
          >
            Ваши данные принадлежат только вам
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-secondary)] text-center mb-12 max-w-3xl mx-auto"
          >
            Мы обеспечиваем высочайший уровень защиты и полный контроль над вашей информацией.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--bg-card)] backdrop-blur-sm rounded-2xl p-6 border border-[var(--border-primary)] text-center"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Access Roles */}
          <motion.h3
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-center text-[var(--text-primary)] mb-8"
          >
            Ролевая модель доступа
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {accessRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${role.color} rounded-2xl p-6 border border-white/10 backdrop-blur-sm`}
              >
                <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                  {role.role}
                </h4>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {role.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-white/10">
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4"
            >
              Готовы получить целостную картину своего здоровья?
            </motion.h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <motion.button
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--primary-hover)] hover:to-[var(--secondary)] text-[var(--text-inverted)] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Начать бесплатный пробный период *
              </motion.button>
              
              <motion.button
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ delay: 0.2 }}
                className="border-2 border-[var(--border-primary)] hover:border-[var(--primary)] text-[var(--text-secondary)] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg"
              >
                Запросить демо-доступ для врача/клиники
              </motion.button>
            </div>

            <motion.p
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.3 }}
              className="text-sm text-[var(--text-muted)] mt-4"
            >
              * 30-дневный пробный период с полным доступом ко всем функциям платформы
            </motion.p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}


export default PlatformPage