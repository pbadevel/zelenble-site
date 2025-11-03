'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ReviewsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const filters = [
    { id: 'all', label: 'Все' },
    { id: 'patients', label: 'Пациенты' },
    { id: 'athletes', label: 'Спортсмены' },
    { id: 'doctors', label: 'Врачи' },
    { id: 'corporations', label: 'Корпорации' }
  ]

  const reviews = [
    {
      id: 1,
      audience: 'patients',
      name: 'Михаил',
      age: 54,
      location: 'Москва',
      configuration: 'Axon Core + Модуль НАД + Модуль Продвинутой ЭКГ',
      rating: 5,
      content: 'После постановки диагноза «артериальная гипертензия» жил в постоянном страхе пропустить скачок давления. Обычные тонометры показывали только разовые значения. Axonisium с модулем НАД — это совершенно другой уровень спокойствия. Система не только непрерывно следит за давлением и ЭКГ, но и я точно знаю, что в критической ситуации S.A.S. сработает быстрее, чем я успею сообразить. Это не гаджет, это ангел-хранитель на запястье.',
      color: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      id: 2,
      audience: 'athletes',
      name: 'Анна',
      age: 29,
      location: 'Краснодар',
      configuration: 'Axon Core + Модуль лактата + Модуль термометра ядра + Модуль ЭМГ',
      rating: 5,
      content: 'Гоняюсь за показателями годами, но всегда не хватало данных для точной настройки тренировок. Модуль лактата и термометр ядра от Axonisium — это просто космос. Раньше анаэробный порог определял «по ощущениям», сейчас у меня есть четкая цифра. А связка ЭМГ + лактат показывает, какая именно группа мышц устает первой. Это позволяет точечно работать над слабыми местам. Результат — личный рекорд на последнем марафоне.',
      color: 'from-green-500/10 to-emerald-500/10'
    },
    {
      id: 3,
      audience: 'doctors',
      name: 'Доктор Иван Петров',
      position: 'к.м.н., врач-кардиолог',
      organization: '«Клиника современной кардиологии»',
      configuration: 'Использует платформу Axonisium Pro для мониторинга пациентов',
      rating: 5,
      content: 'В своей кардиологической практике я наконец-то вижу инструмент, который предоставляет не разрозненные данные, а целостную картину состояния пациента в его естественной среде. Данные с 6-канального модуля ЭКГ клинически достоверны. А возможность удаленно наблюдать в режиме, близком к Холтеровскому мониторированию, но с мгновенной обратной связью, — это прорыв в телемедицине. Платформа позволяет мне видеть тренды и принимать взвешенные решения, не дожидаясь очного визита пациента.',
      color: 'from-purple-500/10 to-violet-500/10'
    },
    {
      id: 4,
      audience: 'corporations',
      name: 'Елена',
      position: 'руководитель HR-департамента',
      organization: 'IT-компания',
      configuration: 'Пакет «Axon Core + КГР» для сотрудников + Подписка Axonisium Pro',
      rating: 5,
      content: 'Внедрили Axonisium в корпоративную wellness-программу для топ-менеджеров, работающих в режиме высокого стресса. Данные по вариабельности сердечного ритма и КГР дали нам объективную картину уровня стресса и восстановления команды. Раньше мы действовали вслепую, теперь — можем точечно предлагать меры поддержки. Это инвестиция в человеческий капитал, которая окупается повышением продуктивности и снижением риска выгорания.',
      color: 'from-orange-500/10 to-red-500/10'
    }
  ]

  const research = [
    {
      organization: 'Центр спортивной медицины «Энергия»',
      quote: '«Валидация модуля лактата показала высокую корреляцию (r=0.96) с лабораторными анализами крови в условиях контролирунной нагрузки.»'
    },
    {
      organization: 'Национальный медицинский исследовательский центр кардиологии',
      quote: '«Модуль продвинутой ЭКГ продемонстрировал чувствительность 99.2% в выявлении фибрилляции предсердий в ходе слепого исследования.»'
    }
  ]

  const media = [
    { name: 'Forbes', logo: 'F' },
    { name: 'РБК', logo: 'РБК' },
    { name: 'Коммерсант', logo: 'К' },
    { name: 'VC.ru', logo: 'VC' },
    { name: 'Хабр', logo: 'Х' },
    { name: 'Медпортал', logo: 'М' }
  ]

  const partners = [
    { name: 'Клиника современной кардиологии', logo: 'КСК' },
    { name: 'Центр спортивной медицины', logo: 'ЦСМ' },
    { name: 'НИИ кардиологии', logo: 'НИИ' },
    { name: 'Медицинский университет', logo: 'МУ' }
  ]

  const filteredReviews = activeFilter === 'all' 
    ? reviews 
    : reviews.filter(review => review.audience === activeFilter)

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-500 text-lg">
          {i < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  )

  return (
    <div className="pt-20 min-h-screen bg-[var(--background)] overflow-x-hidden">
      {/* Градиентный фон */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
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
            Обзоры и отзывы
          </h1>
          <p className="text-xl lg:text-2xl text-[var(--text-secondary)] mb-8 max-w-4xl mx-auto">
            Мнение тех, кто уже управляет своим здоровьем с Axonisium
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed"
          >
            Узнайте, как наша экосистема меняет жизни обычных пользователей, спортсменов, пациентов и врачей.
          </motion.p>
        </motion.section>

        {/* Filters */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-primary shadow-lg scale-105'
                    : 'bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:bg-[var(--border-primary)]'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Reviews Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {filteredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${review.color} rounded-3xl p-8 border border-white/10 backdrop-blur-sm`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">
                      {review.name}
                      {review.age && `, ${review.age} лет`}
                    </h3>
                    {review.position && (
                      <p className="text-[var(--text-secondary)]">
                        {review.position}
                      </p>
                    )}
                    {review.organization && (
                      <p className="text-[var(--text-secondary)] text-sm">
                        {review.organization}
                      </p>
                    )}
                    <p className="text-[var(--text-muted)] text-sm mt-1">
                      {review.location}
                    </p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed mb-6 italic">
                  {review.content}
                </p>

                <div className="flex justify-between items-center">
                  <span className="bg-black/20 text-[var(--text-primary)] text-xs font-medium px-3 py-1 rounded-full">
                    {filters.find(f => f.id === review.audience)?.label}
                  </span>
                  <span className="text-[var(--text-muted)] text-sm">
                    {review.configuration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Research Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 border border-white/10 backdrop-blur-sm">
            <motion.h3
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              className="text-2xl lg:text-3xl font-bold text-center text-[var(--text-primary)] mb-8"
            >
              Клинически подтвержденная эффективность
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.1 }}
              className="text-lg text-[var(--text-secondary)] text-center mb-12 max-w-3xl mx-auto"
            >
              Нам доверяют профессионалы. Пилотные исследования и клинические испытания устройств Axonisium проводятся на базе ведущих медицинских и исследовательских центров.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {research.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-primary)]"
                >
                  <h4 className="font-semibold text-[var(--text-primary)] mb-3">
                    {item.organization}
                  </h4>
                  <blockquote className="text-[var(--text-secondary)] italic leading-relaxed">
                    {item.quote}
                  </blockquote>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <button className="text-[var(--primary)] font-semibold hover:underline text-lg">
                Ознакомиться с исследованиями →
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* Media Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <motion.h3
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="text-2xl lg:text-3xl font-bold text-center text-[var(--text-primary)] mb-12"
          >
            Как о нас пишут
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {media.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-primary)] flex items-center justify-center hover:border-[var(--primary)] transition-all duration-300"
              >
                <span className="text-xl font-bold text-[var(--text-primary)]">
                  {item.logo}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Partners Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-24"
        >
          <motion.h3
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            className="text-2xl lg:text-3xl font-bold text-center text-[var(--text-primary)] mb-12"
          >
            Партнерские клиники и исследовательские центры
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--bg-card)] rounded-2xl p-6 border border-[var(--border-primary)] text-center hover:border-[var(--primary)] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center text-primary font-bold text-sm mx-auto mb-3">
                  {partner.logo}
                </div>
                <p className="text-sm text-[var(--text-secondary)] font-medium">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 border border-white/10 backdrop-blur-sm">
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              className="text-2xl lg:text-3xl font-bold text-[var(--text-primary)] mb-4"
            >
              Присоединяйтесь к сообществу Axonisium
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.1 }}
              className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto"
            >
              Убедились на примере других? Пришло время сформировать свое мнение.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--primary-hover)] hover:to-[var(--secondary)] text-[var(--text-inverted)] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Оставить свой отзыв
              </motion.button>
              
              <motion.button
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ delay: 0.3 }}
                className="border-2 border-[var(--border-primary)] hover:border-[var(--primary)] text-[var(--text-secondary)] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg"
              >
                Запросить демонстрацию для бизнеса
              </motion.button>
            </div>

            <motion.p
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              transition={{ delay: 0.4 }}
              className="text-sm text-[var(--text-muted)] mt-6"
            >
              Все отзывы публикуются с явного согласия пользователей. Axonisium не редактирует содержание отзывов, сохраняя орфографию и пунктуацию авторов.
            </motion.p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default ReviewsPage