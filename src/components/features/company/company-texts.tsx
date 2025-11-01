export const CompanyTexts = () => {
  return (
    <div className="space-y-32 py-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
            AXONISIUM
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-light">
            Ваше здоровье под <span className="font-semibold text-[var(--primary)]">интеллектуальным контролем</span>
          </p>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-secondary leading-relaxed">
              Первая модульная экосистема для здоровья. <br />
              <span className="font-medium text-[var(--primary)]">Начните</span> с умных часов и добавляйте только те датчики, 
              которые нужны вам — от давления и ЭКГ до анализа состава пота. 
              Получайте не просто данные, а <span className="font-medium text-[var(--primary)]">готовность к действию</span>
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              Персонализируйте свой браслет, оставаясь на связи с теми, кому доверяете.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--primary-hover)] hover:to-[var(--secondary)] text-[var(--text-inverted)] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Собрать своё устройство
            </button>
            <button className="border-2 border-[var(--border-primary)] hover:border-[var(--primary)] text-secondary px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg">
              Узнать больше
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Медицинские устройства экосистемы AXONISIUM
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Начните с модульного браслета и откройте для себя будущее нашей экосистемы
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Main Device */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[var(--bg-success)] text-[var(--success)] px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-[var(--success)] rounded-full animate-pulse"></span>
              Доступен сейчас
            </div>
            <h3 className="text-3xl font-bold text-primary">
              AXONISIUM Core — модульный браслет здоровья
            </h3>
            <ul className="space-y-3 text-secondary">
              {['Непрерывный мониторинг ЭКГ', 'Измерение SpO2', 'Анализ активности и сна', 'Экстренный вызов помощи'].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--text-inverted)] px-6 py-3 rounded-xl font-semibold transition-colors">
              Подробнее о браслете
            </button>
          </div>
          
          {/* Device Image Placeholder */}
          <div className="bg-gradient-custom rounded-3xl p-8 h-96 flex items-center justify-center border border-custom">
            <div className="text-center text-muted">
              <div className="w-48 h-48 mx-auto bg-[var(--bg-muted)] rounded-2xl mb-4 border border-custom-secondary"></div>
              <p>3D модель браслета</p>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-primary mb-8">Модули расширения</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Кардиомонитор', desc: 'Отслеживает пульс и выявляет аритмию' },
              { name: 'Глюкоза', desc: 'Неинвазивный контроль уровня сахара' },
              { name: 'Кровяное давление', desc: 'Постоянный мониторинг давления' },
              { name: 'Активность и сон', desc: 'Анализ фаз сна и дневной активности' }
            ].map((module, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-custom hover:border-[var(--border-accent)]">
                <div className="w-12 h-12 bg-[var(--bg-muted)] rounded-xl mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-[var(--primary)] rounded-lg"></div>
                </div>
                <h4 className="font-semibold text-primary mb-2">{module.name}</h4>
                <p className="text-muted text-sm">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Devices */}
        <div>
          <h3 className="text-2xl font-bold text-primary mb-8">Скоро в экосистеме</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {['Умный тонометр', 'Домашняя станция мониторинга', 'Мобильное приложение'].map((device, index) => (
              <div key={index} className="bg-muted rounded-2xl p-6 border-2 border-dashed border-custom-secondary text-center">
                <div className="w-16 h-16 bg-[var(--border-primary)] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-muted text-2xl">+</span>
                </div>
                <h4 className="font-semibold text-muted mb-2">{device}</h4>
                <span className="text-[var(--primary)] text-sm font-medium">Скоро</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
          Как это работает?
        </h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[var(--primary)] to-[var(--secondary)]"></div>
          
          <div className="space-y-12">
            {[
              { step: '01', title: 'Сборка', desc: 'Выберите и соберите браслет из нужных вам медицинских модулей' },
              { step: '02', title: 'Настройка', desc: 'В приложении подключите устройство, дайте доступ близким и вашему врачу' },
              { step: '03', title: 'Мониторинг', desc: 'Браслет круглосуточно отслеживает показатели. Вы и ваши доверенные лица видите данные в реальном времени' },
              { step: '04', title: 'Тревога', desc: 'При критическом отклонении система отправляет владельцу запрос на подтверждение' },
              { 
                step: '05', 
                title: 'Реагирование', 
                desc: 'Если в течение 10 секунд ответа нет, сигнал через единую службу помощи автоматически передается в ближайшую больницу',
                tooltip: 'Используются низкоуровневые каналы связи для точного определения местоположения даже без GSM-покрытия'
              }
            ].map((item, index) => (
              <div key={index} className="relative flex items-center gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center text-[var(--text-inverted)] font-bold text-lg z-10">
                  {item.step}
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-lg flex-1 border border-custom">
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-secondary">{item.desc}</p>
                  {item.tooltip && (
                    <div className="mt-3 text-sm text-[var(--accent)] font-medium">
                      💡 {item.tooltip}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
          Научная точность и передовые технологии
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Точность',
              desc: 'Все датчики имеют необходимые медицинские сертификаты. Данные собираются и обрабатываются с клинической точностью.',
              icon: '🎯'
            },
            {
              title: 'Связь',
              desc: 'Умные алгоритмы определяют ближайшую больницу по самым стабильным каналам связи для гарантированной доставки сигнала.',
              icon: '📡'
            },
            {
              title: 'Алгоритмы',
              desc: 'Искусственный интеллект анализирует данные в реальном времени, чтобы отличать ложные тревоги от реальных угроз.',
              icon: '🧠'
            }
          ].map((tech, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="text-4xl">{tech.icon}</div>
              <h3 className="text-2xl font-bold text-primary">{tech.title}</h3>
              <p className="text-secondary leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Security Section */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-custom rounded-3xl p-12 border border-custom">
          <div className="text-4xl mb-6">🛡️</div>
          <h2 className="min-md:text-4xl text-xl font-bold text-primary mb-6 ">
            Конфиденциальность и безопасность ваших данных — наш приоритет
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-6">
            Все медицинские данные передаются и хранятся в зашифрованном виде в соответствии с ФЗ-152 и международными стандартами (HIPAA/GDPR). 
            Доступ к данным имеют только вы и explicitly выбранные вами лица.
          </p>
          <button className="text-[var(--primary)] font-semibold hover:underline">
            Подробнее о нашей политике конфиденциальности
          </button>
        </div>
      </section>

      {/* Partners Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          Нам доверяют
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {/* Main Partner */}
          <div className="col-span-2 md:col-span-4 text-center mb-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-custom inline-block">
              <div className="w-32 h-32 bg-[var(--bg-muted)] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-[var(--primary)] font-bold text-lg">ЕСЭП</span>
              </div>
              <p className="font-semibold text-primary">Единая служба экстренной помощи</p>
            </div>
          </div>
          
          {/* Other Partners */}
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-muted rounded-xl p-6 w-32 h-32 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 bg-[var(--border-primary)] rounded-lg mx-auto mb-2"></div>
                <span className="text-xs text-muted">Партнер {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          Истории, которые говорят сами за себя
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote: "В 64 года я живу одна. Браслет заметил мерцательную аритмию, о которой я не знала. Врачи сказали, что это предотвратило инсульт.",
              author: "Мария С., пользователь AXONISIUM"
            },
            {
              quote: "Как диабетик со стажем, ценю возможность неинвазивного контроля глюкозы. Устройство предупредило о гипогликемии ночью.",
              author: "Александр П., пользователь 2 года"
            }
          ].map((story, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-lg border border-custom">
              <div className="text-3xl text-[var(--border-primary)] mb-4">❝</div>
              <blockquote className="text-lg text-secondary italic mb-6 leading-relaxed">
                {story.quote}
              </blockquote>
              <cite className="text-primary font-semibold not-italic">
                {story.author}
              </cite>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          Новости и экспертные статьи
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Как следить за здоровьем сердца дома",
              type: "Статья",
              readTime: "5 мин"
            },
            {
              title: "Важность контроля уровня глюкозы",
              type: "Статья", 
              readTime: "4 мин"
            },
            {
              title: "Мы получили новый медицинский сертификат",
              type: "Новость",
              readTime: "2 мин"
            }
          ].map((article, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-lg border border-custom hover:shadow-xl transition-shadow">
              <div className="w-full h-48 bg-gradient-custom rounded-xl mb-4"></div>
              <span className="inline-block bg-[var(--bg-muted)] text-[var(--primary)] text-xs font-medium px-3 py-1 rounded-full mb-3">
                {article.type}
              </span>
              <h3 className="font-semibold text-primary mb-2 text-lg">
                {article.title}
              </h3>
              <div className="flex justify-between items-center text-sm text-muted">
                <span>{article.readTime} чтения</span>
                <button className="text-[var(--primary)] font-medium hover:underline">
                  Читать →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border-2 border-custom hover:border-[var(--primary)] text-secondary px-8 py-3 rounded-xl font-semibold transition-colors">
            Все новости
          </button>
        </div>
      </section>
    </div>
  );
};