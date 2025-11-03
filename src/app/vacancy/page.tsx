'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const CareersPage = () => {
  const [activeDepartment, setActiveDepartment] = useState<string | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const departments = [
    {
      id: 'hardware',
      name: 'Аппаратное обеспечение (Hardware)',
      roles: ['Схемотехника', 'RF-инженерия', 'Проектирование печатных плат']
    },
    {
      id: 'embedded',
      name: 'Встраиваемые системы (Embedded)',
      roles: ['Прошивки', 'Реальное время', 'Драйверы', 'Оптимизация энергопотребления']
    },
    {
      id: 'software',
      name: 'Программное обеспечение и Data Science',
      roles: ['Бэкенд', 'Фронтенд', 'Мобильная разработка', 'Машинное обучение']
    },
    {
      id: 'design',
      name: 'Дизайн и юзабилити',
      roles: ['Промышленный дизайн', 'UX/UI', 'Визуализация данных', '3D-моделирование']
    },
    {
      id: 'medical',
      name: 'Медицина и биоинженерия',
      roles: ['Регистрация медицинских изделий', 'Клинические испытания', 'Работа с биосигналами']
    },
    {
      id: 'business',
      name: 'Бизнес и операции',
      roles: ['Продажи', 'Маркетинг', 'Управление продуктом', 'Операционный менеджмент']
    }
  ]

  const benefits = [
    {
      icon: '🎯',
      title: 'Миссия, которая имеет значение',
      description: 'Ваша работа будет напрямую влиять на качество жизни и безопасность людей'
    },
    {
      icon: '🚀',
      title: 'Передовые технологии',
      description: 'Уникальный стек технологий — от модульной электроники до сложной облачной аналитики'
    },
    {
      icon: '📈',
      title: 'Видимый результат',
      description: 'От прототипа до серийного продукта, используемого тысячами людей'
    },
    {
      icon: '🏛️',
      title: 'Горизонтальная структура',
      description: 'Минимум бюрократии, максимум ответственности и влияния'
    },
    {
      icon: '🌱',
      title: 'Профессиональный рост',
      description: 'Работа в окружении экспертов мирового уровня'
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Отправка резюме',
      description: 'В течение 3 рабочих дней мы подтвердим получение и сообщим сроки рассмотрения'
    },
    {
      step: '02',
      title: 'Знакомство',
      description: 'Если ваше резюме нас заинтересует, мы предложим познакомиться лично'
    },
    {
      step: '03',
      title: 'База талантов',
      description: 'Даже если сразу не найдем подходящей роли — сохраним ваш профиль в нашей базе талантов'
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Градиентный фон */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Создавайте будущее здоровья вместе с нами
          </h1>
          <p className="text-xl lg:text-2xl text-[var(--text-secondary)] mb-8 max-w-4xl mx-auto">
            Мы ищем таланты, а не просто сотрудников
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed"
          >
            В Axonisium мы верим, что настоящие профессионалы не всегда ищут готовые вакансии — 
            иногда они создают их сами. Если вы чувствуете, что ваши навыки и наш проект созданы 
            друг для друга, мы будем рады познакомиться.
          </motion.p>
        </motion.section>

        {/* Benefits Section */}
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
            className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-12 lg:mb-16"
          >
            Почему стоит присоединиться к Axonisium?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--bg-card)] backdrop-blur-sm rounded-2xl p-6 border border-[var(--border-primary)] hover:border-[var(--primary)] transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Departments Section */}
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
            className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-12 lg:mb-16"
          >
            Направления, в которых мы рады видеть экспертов
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((department, index) => (
              <motion.button
                key={department.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveDepartment(
                  activeDepartment === department.id ? null : department.id
                )}
                className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                  activeDepartment === department.id
                    ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary shadow-lg scale-105'
                    : 'bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-[var(--primary)] hover:shadow-md'
                }`}
              >
                <h3 className={`font-semibold text-lg mb-3 ${
                  activeDepartment === department.id 
                    ? 'text-[var(--primary)]' 
                    : 'text-[var(--text-primary)]'
                }`}>
                  {department.name}
                </h3>
                
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: activeDepartment === department.id ? 1 : 0,
                    height: activeDepartment === department.id ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2">
                    {department.roles.map((role, roleIndex) => (
                      <motion.li
                        key={roleIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: roleIndex * 0.1 }}
                        className="flex items-center gap-2 text-[var(--text-secondary)] text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {role}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <div className={`mt-3 text-sm ${
                  activeDepartment === department.id ? 'text-primary' : 'text-[var(--text-muted)]'
                }`}>
                  {activeDepartment === department.id ? '▲ Свернуть' : '▼ Подробнее'}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Application Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-white/10">
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-4"
            >
              Отправьте свое резюме — мы найдем вам место в команде
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.1 }}
              className="text-lg text-[var(--text-secondary)] text-center mb-8 max-w-3xl mx-auto"
            >
              Мы понимаем, что настоящие специалисты часто приходят со своими уникальными компетенциями. 
              Расскажите о себе — вместе мы определим, где ваш талант раскроется максимально.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <a
                href="mailto:career@axonisium.com"
                className="inline-block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--primary-hover)] hover:to-[var(--secondary)] text-[var(--text-inverted)] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mb-4"
              >
                career@axonisium.com
              </a>
              <p className="text-[var(--text-secondary)]">
                Отправьте резюме на эту почту
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Requirements Section */}
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
            className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-12 lg:mb-16"
          >
            Что приложить к письму
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--bg-card)] backdrop-blur-sm rounded-2xl p-6 border border-[var(--border-primary)]"
            >
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                1. Ваше резюме
              </h3>
              <p className="text-[var(--text-secondary)]">
                Обязательно приложите актуальное резюме с описанием вашего опыта и навыков
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[var(--bg-card)] backdrop-blur-sm rounded-2xl p-6 border border-[var(--border-primary)]"
            >
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                2. Сопроводительное письмо
              </h3>
              <ul className="text-[var(--text-secondary)] space-y-2">
                <li>• Чем вас привлек именно наш проект?</li>
                <li>• Какое направление работы вам наиболее интересно?</li>
                <li>• Что из вашего опыта может быть особенно ценным для Axonisium?</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[var(--bg-card)] backdrop-blur-sm rounded-2xl p-6 border border-[var(--border-primary)]"
            >
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                3. Портфолио и ссылки
              </h3>
              <p className="text-[var(--text-secondary)]">
                Ссылки на портфолио, GitHub или другие работы (по желанию, но приветствуется)
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Process Section */}
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
            className="text-3xl lg:text-4xl font-bold text-center text-[var(--text-primary)] mb-12 lg:mb-16"
          >
            Что будет дальше?
          </motion.h2>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-[var(--border-primary)] z-0" />
            
            <div className="space-y-8 lg:space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-center gap-6 lg:gap-12 relative z-10"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-[var(--bg-card)] rounded-full flex items-center justify-center text-primary font-bold border-2 text-lg">
                    {step.step}
                  </div>
                  <div className="bg-[var(--bg-card)] backdrop-blur-sm rounded-2xl p-6 border border-[var(--border-primary)] flex-1">
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Final CTA Section */}
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
              Вопросы?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.1 }}
              className="text-lg text-[var(--text-secondary)] mb-6"
            >
              Пишите нам на{' '}
              <a 
                href="mailto:career@axonisium.com" 
                className="text-primary font-semibold hover:underline"
              >
                career@axonisium.com
              </a>
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.2 }}
              className="bg-black/20 rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto"
            >
              <p className="text-xl lg:text-2xl font-light text-[var(--text-primary)] italic mb-4">
                Ваш талант может изменить будущее медицины. Не откладывайте!
              </p>
              <p className="text-lg text-[var(--text-secondary)]">
                Axonisium Team
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default CareersPage