'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const SecurityPage = () => {
  const [activeLayer, setActiveLayer] = useState('device')
  const principlesRef = useRef<HTMLDivElement>(null)
  const isPrinciplesInView = useInView(principlesRef, { once: true })

  const securityLayers = [
    {
      id: 'device',
      title: 'Защита на устройстве',
      icon: '⌚',
      features: [
        'Аппаратное шифрование: Каждое устройство и модуль оснащены защищенным элементом (Secure Element)',
        'Изолированная обработка: Критичные сырые данные обрабатываются внутри модуля перед передачей',
        'Защищенная загрузка (Secure Boot): Прошивка проверяет цифровую подпись перед запуском',
        '«Умные» буферы: Временные буферы данных автоматически очищаются после обработки'
      ],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 'transmission',
      title: 'Защита при передаче',
      icon: '📡',
      features: [
        'Сквозное шифрование (End-to-End Encryption): Все данные шифруются по протоколам TLS 1.3+',
        'Защищенные внутренние каналы: Связь между модулями защищена от прослушивания и подмены',
        'Аутентификация устройств: Каждое устройство имеет уникальный цифровой сертификат',
        'Защита от MITM-атак: Используются современные криптографические протоколы'
      ],
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 'cloud',
      title: 'Защита в облаке и системах',
      icon: '☁️',
      features: [
        'Шифрование при хранении: Все данные в облаке шифруются с использованием AES-256',
        'Анонимизация и псевдонимизация: Личные данные хранятся отдельно от медицинских показателей',
        'Физическая безопасность дата-центров: Инфраструктура сертифицирована по ISO 27001, SOC 2',
        'HSM-модули: Ключи управления хранятся в специализированных аппаратных модулях'
      ],
      color: 'from-purple-500/20 to-violet-500/20'
    },
    {
      id: 'access',
      title: 'Контроль доступа и управление согласием',
      icon: '🔐',
      features: [
        'Строгая аутентификация: Многофакторная аутентификация (2FA)',
        'Гибкая система ролей: Настраиваемые уровни доступа для разных пользователей',
        'Журнал аудита: Полная история доступа к вашей информации',
        'Временные доступы: Ограничение по времени для врачей и специалистов'
      ],
      color: 'from-orange-500/20 to-red-500/20'
    }
  ]

  const principles = [
    {
      icon: '🔍',
      title: 'Прозрачность',
      description: 'Мы честно рассказываем, какие данные собираем, зачем они нужны и кто их видит.'
    },
    {
      icon: '📊',
      title: 'Минимизация',
      description: 'Мы собираем только ту информацию, которая необходима для работы сервисов.'
    },
    {
      icon: '🎮',
      title: 'Контроль',
      description: 'Вы — единственный владелец своих данных. Вы всегда решаете, что и с кем делиться.'
    },
    {
      icon: '🛡️',
      title: 'Неприкосновенность',
      description: 'Лучшие практики индустрии для защиты от перехвата и несанкционированного использования.'
    }
  ]

  const standards = [
    {
      name: 'HIPAA / GDPR',
      description: 'Соответствие строгим стандартам защиты медицинской и персональной информации',
      status: 'Соответствует'
    },
    {
      name: 'Медицинское изделие',
      description: 'Регистрация и сертификация в Росздравнадзоре, CE, FDA',
      status: 'Зарегистрировано'
    },
    {
      name: 'ISO 27001',
      description: 'Сертификация информационной безопасности',
      status: 'В процессе'
    },
    {
      name: 'ISO 27701',
      description: 'Сертификация защиты приватности',
      status: 'В процессе'
    }
  ]

  const faq = [
    {
      question: 'Кому на самом деле принадлежат мои данные?',
      answer: 'Вы и только вы. Мы — оператор, который обеспечивает их обработку и хранение. Мы не продаем и не передаем ваши персональные и медицинские данные третьим лицам для маркетинга.'
    },
    {
      question: 'Что будет с моими данными при отмене подписки?',
      answer: 'Вы сохраняете право собственности и доступ к своим данным. Премиум-функции аналитики отключатся, но базовый просмотр истории и текущие показания останутся с вами. Вы всегда можете скачать свой архив.'
    },
    {
      question: 'Могут ли ваши сотрудники просматривать мои данные?',
      answer: 'Доступ сотрудников строго ограничен, предоставляется на основе служебной необходимости (например, техническая поддержка по вашему запросу) и тщательно протоколируется.'
    },
    {
      question: 'Насколько безопасен вызов помощи через S.A.S.?',
      answer: 'При активации протокола S.A.S. диспетчеру передается минимально необходимый для спасения жизни набор данных: ваш идентификатор, критические показатели и координаты. Полная медицинская история никогда не передается экстренным службам автоматически.'
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
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Безопасность данных
          </h1>
          <p className="text-xl lg:text-2xl text-[var(--text-secondary)] mb-8 max-w-4xl mx-auto">
            Неприкосновенность вашего здоровья — наш фундамент
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed"
          >
            Ваше здоровье — это самые личные данные. Мы создали экосистему Axonisium с нуля, чтобы обеспечить их максимальную защиту на каждом этапе. Безопасность — не просто функция, а основной принцип, встроенный в архитектуру каждого устройства, строки кода и бизнес-процесса.
          </motion.p>
        </motion.section>

        {/* Principles Section */}
        <motion.section
          ref={principlesRef}
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
            Наши принципы защиты
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--bg-card)] backdrop-blur-sm rounded-2xl p-6 border border-[var(--border-primary)] hover:border-[var(--primary)] transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                  {principle.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Security Layers Section */}
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
            Многоуровневая система защиты
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-secondary)] text-center mb-12 max-w-3xl mx-auto"
          >
            Мы выстроили глубоко эшелонированную оборону для ваших данных на всем их пути.
          </motion.p>

          {/* Layer Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {securityLayers.map((layer, index) => (
              <motion.button
                key={layer.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveLayer(layer.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeLayer === layer.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-primary shadow-lg'
                    : 'bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:bg-[var(--border-primary)]'
                }`}
              >
                <span className="text-xl">{layer.icon}</span>
                {layer.title}
              </motion.button>
            ))}
          </div>

          {/* Layer Content */}
          <div className="bg-[var(--bg-card)] backdrop-blur-sm rounded-3xl p-8 border border-[var(--border-primary)]">
            {securityLayers
              .filter(layer => layer.id === activeLayer)
              .map(layer => (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br ${layer.color} rounded-2xl p-8 border border-white/10`}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                        {layer.title}
                      </h3>
                      <ul className="space-y-4">
                        {layer.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start gap-3 text-[var(--text-secondary)]"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-center">
                      <div className="text-8xl opacity-50">
                        {layer.icon}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.section>

        {/* Standards Section */}
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
            Соответствие высочайшим стандартам
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-secondary)] text-center mb-12 max-w-3xl mx-auto"
          >
            Мы стремимся не просто к лучшим практикам, а к строгому соответствию международным нормам.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {standards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--bg-card)] backdrop-blur-sm rounded-2xl p-6 border border-[var(--border-primary)]"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    {standard.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    standard.status === 'Соответствует' || standard.status === 'Зарегистрировано'
                      ? 'bg-green-500/20 text-green-500'
                      : 'bg-yellow-500/20 text-yellow-500'
                  }`}>
                    {standard.status}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)]">
                  {standard.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Control Section */}
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
            Вы — главный управляющий своими данными
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--text-secondary)] text-center mb-12 max-w-3xl mx-auto"
          >
            Мы верим, что вы должны иметь полный и простой контроль над своей цифровой жизнью.
          </motion.p>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                  Центр управления конфиденциальностью
                </h3>
                <ul className="space-y-4 text-[var(--text-secondary)]">
                  {[
                    'Скачать полный архив своих данных',
                    'Мгновенно отозвать доступ для любого приложения или человека',
                    'Настроить, какие данные и с какой детализацией видит врач или член семьи',
                    'Полностью удалить свой аккаунт и все associated данные'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎮</div>
                  <p className="text-[var(--text-secondary)]">
                    Полный контроль в ваших руках
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-[var(--text-secondary)] text-center">
                <strong>Понятные документы:</strong> Наши Политика конфиденциальности и Условия использования написаны ясным языком, без лишних юридических сложностей.
              </p>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
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
            Вопросы и ответы о безопасности
          </motion.h2>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--bg-card)] backdrop-blur-sm rounded-2xl p-6 border border-[var(--border-primary)]"
              >
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                  {item.question}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {item.answer}
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
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-white/10">
            <motion.p
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              className="text-2xl lg:text-3xl font-light text-[var(--text-primary)] mb-6 italic"
            >
              Axonisium. Безопасность, встроенная в ДНК вашего здоровья.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--primary-hover)] hover:to-[var(--secondary)] text-[var(--text-inverted)] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ознакомиться с Политикой конфиденциальности
              </motion.button>
              
              <motion.button
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ delay: 0.2 }}
                className="border-2 border-[var(--border-primary)] hover:border-[var(--primary)] text-[var(--text-secondary)] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg"
              >
                Перейти в Центр управления конфиденциальностью
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default SecurityPage