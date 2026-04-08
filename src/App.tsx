import { useState, useEffect } from 'react';
import './App.css';

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  block?: string;
  content: JSX.Element;
}

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    // Slide 1: Title
    {
      id: 1,
      title: 'Искусственный интеллект для обработки обращений граждан',
      subtitle: 'Государственная жилищная инспекция Московской области',
      content: (
        <div className="slide-title-content">
          <h2 className="slide-subtitle">Государственная жилищная инспекция Московской области</h2>
          <div className="slide-info">
            <p>2 часа | 3 блока | теория + практика</p>
          </div>
        </div>
      ),
    },
    // Slide 2: Agenda
    {
      id: 2,
      title: 'План лекции',
      content: (
        <div className="agenda-content">
          <div className="agenda-block">
            <h3>Блок 1 (35 мин)</h3>
            <p>Теоретические основы ИИ</p>
          </div>
          <div className="agenda-block">
            <h3>Блок 2 (40 мин)</h3>
            <p>Практика работы с LLM</p>
          </div>
          <div className="agenda-break">
            <p>Перерыв (5 мин)</p>
          </div>
          <div className="agenda-block">
            <h3>Блок 3 (35 мин)</h3>
            <p>Агентская среда Kodik</p>
          </div>
          <div className="agenda-conclusion">
            <p>Итоги (5 мин)</p>
          </div>
        </div>
      ),
    },
    // Slide 3: Block 1 Header
    {
      id: 3,
      title: 'БЛОК 1. Теоретические основы',
      block: 'БЛОК 1 | Теория',
      content: (
        <div className="section-divider">
          <div className="section-timing">0:00 — 0:35</div>
        </div>
      ),
    },
    // Slide 4: What is AI
    {
      id: 4,
      title: 'Что такое искусственный интеллект?',
      block: 'БЛОК 1 | Теория',
      content: (
        <div className="slide-content-standard">
          <div className="key-points">
            <div className="key-point">
              <span className="point-icon">▪</span>
              <p>Программа, которая умеет работать с текстом так, как будто его написал человек</p>
            </div>
            <div className="key-point">
              <span className="point-icon">▪</span>
              <p>Не следует жёстким правилам, а «понимает» смысл текста</p>
            </div>
            <div className="key-point">
              <span className="point-icon">▪</span>
              <p>Большие языковые модели (LLM) — основная технология</p>
            </div>
          </div>

          <div className="comparison-grid">
            <div className="comparison-item">
              <h4>Обычная программа</h4>
              <div className="comparison-box old">
                <svg viewBox="0 0 120 80" className="comparison-icon">
                  <rect x="10" y="10" width="100" height="60" fill="none" stroke="currentColor" strokeWidth="2" rx="4"/>
                  <text x="60" y="45" textAnchor="middle" dy=".3em" fontSize="12">if/then</text>
                </svg>
                <p>Жёсткие правила</p>
              </div>
            </div>
            <div className="comparison-item">
              <h4>LLM</h4>
              <div className="comparison-box new">
                <svg viewBox="0 0 120 80" className="comparison-icon">
                  <circle cx="60" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <text x="60" y="45" textAnchor="middle" dy=".3em" fontSize="11">понимает</text>
                </svg>
                <p>Смысл текста</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 5: How LLM works
    {
      id: 5,
      title: 'Как работает большая языковая модель',
      block: 'БЛОК 1 | Теория',
      content: (
        <div className="slide-content-standard">
          <div className="key-points">
            <div className="key-point">
              <span className="point-icon">▪</span>
              <p>Обучена на огромном количестве текстов</p>
            </div>
            <div className="key-point">
              <span className="point-icon">▪</span>
              <p>Предсказывает, какое слово должно идти следующим</p>
            </div>
            <div className="key-point">
              <span className="point-icon">▪</span>
              <p>Как очень начитанный собеседник, который хорошо формулирует мысли, но не всегда знает факты</p>
            </div>
          </div>

          <div className="comparison-grid">
            <div className="comparison-item">
              <h4>Калькулятор</h4>
              <div className="comparison-box">
                <svg viewBox="0 0 120 80" className="comparison-icon">
                  <rect x="15" y="15" width="90" height="50" fill="none" stroke="currentColor" strokeWidth="2" rx="4"/>
                  <text x="60" y="45" textAnchor="middle" dy=".3em" fontSize="14" fontWeight="bold">2+2=4</text>
                </svg>
                <p>Считает точно</p>
              </div>
            </div>
            <div className="comparison-item">
              <h4>LLM</h4>
              <div className="comparison-box new">
                <svg viewBox="0 0 120 80" className="comparison-icon">
                  <path d="M 20 40 Q 40 20 60 40 T 100 40" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="20" cy="40" r="3" fill="currentColor"/>
                  <circle cx="100" cy="40" r="3" fill="currentColor"/>
                </svg>
                <p>Хорошо формулирует, может ошибаться</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 6: Hallucinations
    {
      id: 6,
      title: 'Галлюцинации — главная проблема ИИ',
      block: 'БЛОК 1 | Теория',
      content: (
        <div className="slide-content-standard">
          <p className="intro-text">Модель уверенно выдаёт неверную информацию</p>
          <p className="intro-text secondary">Не «знает» факты — генерирует правдоподобный текст</p>

          <div className="hallucination-examples">
            <div className="hallucination-item warning">
              <span className="warning-icon">!</span>
              <p>Ссылка на несуществующий закон</p>
            </div>
            <div className="hallucination-item warning">
              <span className="warning-icon">!</span>
              <p>Выдуманный номер постановления</p>
            </div>
            <div className="hallucination-item warning">
              <span className="warning-icon">!</span>
              <p>Неверная дата документа</p>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 7: Fighting hallucinations
    {
      id: 7,
      title: 'Как бороться с галлюцинациями',
      block: 'БЛОК 1 | Теория',
      content: (
        <div className="slide-content-standard">
          <div className="methods-grid">
            <div className="method-card">
              <div className="method-icon">
                <svg viewBox="0 0 64 64" className="icon-svg">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M 20 32 L 28 40 L 44 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Проверка ссылок</h4>
              <p>Всегда проверяйте ссылки на нормативные документы</p>
            </div>
            <div className="method-card">
              <div className="method-icon">
                <svg viewBox="0 0 64 64" className="icon-svg">
                  <rect x="12" y="10" width="40" height="44" fill="none" stroke="currentColor" strokeWidth="2" rx="2"/>
                  <line x1="18" y1="18" x2="46" y2="18" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="18" y1="26" x2="46" y2="26" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="18" y1="34" x2="46" y2="34" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h4>Контекст</h4>
              <p>Давайте модели конкретный контекст — тексты документов, шаблоны</p>
            </div>
            <div className="method-card">
              <div className="method-icon">
                <svg viewBox="0 0 64 64" className="icon-svg">
                  <circle cx="32" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M 16 44 Q 16 38 32 38 Q 48 38 48 44" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Помощник, не эксперт</h4>
              <p>Используйте как помощника, а не как эксперта</p>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 8: Russian AI
    {
      id: 8,
      title: 'Российские нейросети и сервисы',
      block: 'БЛОК 1 | Теория',
      content: (
        <div className="slide-content-standard">
          <div className="services-grid">
            <div className="service-card">
              <h4>YandexGPT</h4>
              <ul>
                <li>ya.ru</li>
                <li>Без VPN</li>
                <li>Алиса</li>
                <li>Яндекс.Карты</li>
              </ul>
            </div>
            <div className="service-card">
              <h4>GigaChat</h4>
              <ul>
                <li>giga.chat</li>
                <li>Сбер</li>
                <li>Ultra с памятью</li>
                <li>Бесплатно</li>
              </ul>
            </div>
            <div className="service-card">
              <h4>Зарубежные</h4>
              <ul>
                <li>ChatGPT</li>
                <li>Claude</li>
                <li>Доступны с ограничениями</li>
              </ul>
            </div>
          </div>

          <div className="important-note">
            <strong>Для госсектора важны российские решения:</strong>
            <p>хранение данных в РФ, 152-ФЗ, без VPN, оплата рублями</p>
          </div>
        </div>
      ),
    },
    // Slide 9: What is a prompt
    {
      id: 9,
      title: 'Что такое промт',
      block: 'БЛОК 1 | Теория',
      content: (
        <div className="slide-content-standard">
          <p className="intro-text">Текстовая инструкция, которую вы даёте модели</p>

          <div className="prompt-components">
            <div className="component">
              <div className="component-number">1</div>
              <div className="component-content">
                <h4>Роль</h4>
                <code>«Ты — специалист по ЖКХ...»</code>
              </div>
            </div>
            <div className="component">
              <div className="component-number">2</div>
              <div className="component-content">
                <h4>Задача</h4>
                <code>«Составь ответ на обращение...»</code>
              </div>
            </div>
            <div className="component">
              <div className="component-number">3</div>
              <div className="component-content">
                <h4>Формат</h4>
                <code>«Ответ должен содержать ссылку на НПА...»</code>
              </div>
            </div>
            <div className="component">
              <div className="component-number">4</div>
              <div className="component-content">
                <h4>Ограничения</h4>
                <code>«Не используй информацию, которой нет в документах»</code>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 10: Block 2 Header
    {
      id: 10,
      title: 'БЛОК 2. Практика работы с LLM',
      block: 'БЛОК 2 | Практика',
      content: (
        <div className="section-divider">
          <div className="section-timing">0:35 — 1:15</div>
        </div>
      ),
    },
    // Slide 11: Bad vs Good prompt
    {
      id: 11,
      title: 'От плохого промта к хорошему',
      block: 'БЛОК 2 | Практика',
      content: (
        <div className="slide-content-standard">
          <div className="comparison-full">
            <div className="comparison-left bad">
              <h4>Плохой промт</h4>
              <div className="prompt-example">
                <p>«Напиши ответ на жалобу жильца на протекающую крышу»</p>
              </div>
              <div className="prompt-result">
                <p className="label">Результат:</p>
                <p>Общий ответ, возможно с выдуманными ссылками</p>
              </div>
            </div>

            <div className="comparison-right good">
              <h4>Хороший промт</h4>
              <div className="prompt-example">
                <p><strong>Роль:</strong> ты — инспектор ЖКХ<br/>
                <strong>Задача:</strong> составь ответ на жалобу<br/>
                <strong>Контекст:</strong> [текст ЖК РФ, ПП 354]<br/>
                <strong>Формат:</strong> со ссылками на НПА<br/>
                <strong>Ограничения:</strong> только реальные законы</p>
              </div>
              <div className="prompt-result">
                <p className="label">Результат:</p>
                <p>Точный ответ со ссылками на реальные НПА</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 12: Context
    {
      id: 12,
      title: 'Контекст — ключ к точным ответам',
      block: 'БЛОК 2 | Практика',
      content: (
        <div className="slide-content-standard">
          <p className="intro-text">У большинства моделей нет памяти между диалогами</p>

          <div className="context-solution">
            <div className="context-files">
              <div className="file-card">
                <div className="file-icon">📋</div>
                <h4>Файл с правилами</h4>
                <p>тон, структура, требования</p>
              </div>
              <div className="file-card">
                <div className="file-icon">📝</div>
                <h4>Файл с примерами</h4>
                <p>образцы ответов</p>
              </div>
              <div className="file-card">
                <div className="file-icon">⚖</div>
                <h4>Файл с нормативной базой</h4>
                <p>ЖК РФ, ПП 354, ПП 491...</p>
              </div>
            </div>

            <div className="context-arrow">↓</div>

            <div className="context-action">
              <p>Прикреплять в каждый новый диалог!</p>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 13: 4 Steps
    {
      id: 13,
      title: 'Пошаговая обработка обращения',
      block: 'БЛОК 2 | Практика',
      content: (
        <div className="slide-content-standard">
          <div className="steps-flow">
            <div className="step">
              <div className="step-number">1</div>
              <p>Классификация</p>
              <small>тема, срочность, отдел</small>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <p>Подбор НПА</p>
              <small>какие законы применимы</small>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <p>Проект ответа</p>
              <small>черновик по шаблону</small>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">4</div>
              <p>Проверка</p>
              <small>сверка ссылок, сроки по 59-ФЗ</small>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 14: Break
    {
      id: 14,
      title: 'Перерыв',
      content: (
        <div className="break-slide">
          <p className="break-duration">5 минут</p>
        </div>
      ),
    },
    // Slide 15: Block 3 Header
    {
      id: 15,
      title: 'БЛОК 3. Агентская среда Kodik',
      block: 'БЛОК 3 | Агенты',
      content: (
        <div className="section-divider">
          <div className="section-timing">1:20 — 1:55</div>
        </div>
      ),
    },
    // Slide 16: Chatbot vs Agent
    {
      id: 16,
      title: 'Чат-бот vs Агент',
      block: 'БЛОК 3 | Агенты',
      content: (
        <div className="slide-content-standard">
          <div className="comparison-two-column">
            <div className="column">
              <h4>Чат-бот (LLM)</h4>
              <ul className="comparison-list">
                <li>Отвечает на один запрос</li>
                <li>Не помнит предыдущие</li>
                <li>Не выполняет действия</li>
                <li>Каждый раз нужно объяснять задачу</li>
              </ul>
            </div>

            <div className="column">
              <h4>Агент</h4>
              <ul className="comparison-list accent">
                <li>Выполняет цепочку действий</li>
                <li>Работает с файлами</li>
                <li>Следует правилам автоматически</li>
                <li>Знает ваши правила и работает по ним</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 17: Kodik Overview
    {
      id: 17,
      title: 'Kodik — первая российская AI-IDE',
      block: 'БЛОК 3 | Агенты',
      content: (
        <div className="slide-content-standard">
          <p className="intro-text centered">vibekodik.ru</p>

          <div className="features-grid">
            <div className="feature">
              <h4>Act Mode</h4>
              <p>агентский режим</p>
            </div>
            <div className="feature">
              <h4>Умный контекст</h4>
              <p>контекст с памятью</p>
            </div>
            <div className="feature">
              <h4>Выбор LLM</h4>
              <p>различные модели</p>
            </div>
            <div className="feature">
              <h4>Фиксированные правила</h4>
              <p>система правил</p>
            </div>
            <div className="feature">
              <h4>Поддержка MCP</h4>
              <p>интеграции</p>
            </div>
            <div className="feature">
              <h4>Без VPN</h4>
              <p>в России</p>
            </div>
          </div>

          <div className="pricing-box">
            <p><strong>Оплата:</strong> рублями | <strong>Бесплатный старт:</strong> от 0 руб. | <strong>Pro:</strong> 1 599 руб./мес</p>
          </div>
        </div>
      ),
    },
    // Slide 18: KodikShield
    {
      id: 18,
      title: 'KodikShield — защита данных',
      block: 'БЛОК 3 | Агенты',
      content: (
        <div className="slide-content-standard">
          <div className="shield-comparison">
            <div className="shield-before bad">
              <h4>ДО (опасно)</h4>
              <div className="data-example">
                <code>ФИО: Иван Петров</code><br/>
                <code>Паспорт: 1234 567890</code><br/>
                <code>API_KEY=abc123def456</code><br/>
                <code>Email: ivan@mail.ru</code>
              </div>
            </div>

            <div className="shield-arrow">→</div>

            <div className="shield-after good">
              <h4>ПОСЛЕ (защищено)</h4>
              <div className="data-example">
                <code>ФИО: SENSITIVE_DATA_1</code><br/>
                <code>Паспорт: SENSITIVE_DATA_2</code><br/>
                <code>API_KEY=SENSITIVE_DATA_3</code><br/>
                <code>Email: SENSITIVE_DATA_4</code>
              </div>
            </div>
          </div>

          <div className="shield-features">
            <p><strong>Локальный анонимайзер</strong> на базе NER-модели</p>
            <p><strong>Автоматическая маскировка</strong> персональных данных</p>
            <p><strong>Настраиваемые правила</strong> масклировки</p>
            <p><strong>Данные остаются</strong> на вашей машине</p>
          </div>
        </div>
      ),
    },
    // Slide 19: Personal OS Setup
    {
      id: 19,
      title: 'Настройка «персональной операционной системы»',
      block: 'БЛОК 3 | Агенты',
      content: (
        <div className="slide-content-standard">
          <div className="file-tree">
            <div className="file-tree-item">
              <span className="tree-icon">📁</span> project/
              <div className="file-tree-children">
                <div className="file-tree-item">
                  <span className="tree-icon">📄</span> должностная-инструкция.md
                </div>
                <div className="file-tree-item">
                  <span className="tree-icon">📄</span> правила-обработки.md
                </div>
                <div className="file-tree-item">
                  <span className="tree-icon">📄</span> примеры-ответов.md
                </div>
                <div className="file-tree-item">
                  <span className="tree-icon">📄</span> нормативная-база.md
                </div>
                <div className="file-tree-item">
                  <span className="tree-icon">📄</span> структура-отделов.md
                </div>
              </div>
            </div>
          </div>

          <p className="setup-note">Каждый файл содержит знания и правила для агента</p>
        </div>
      ),
    },
    // Slide 20: Results & Rules
    {
      id: 20,
      title: 'Главные правила работы с ИИ',
      block: 'БЛОК 3 | Агенты',
      content: (
        <div className="slide-content-standard">
          <div className="rules-list">
            <div className="rule-item">
              <span className="rule-number">1</span>
              <p>ИИ — помощник, не эксперт. Всегда проверяйте факты</p>
            </div>
            <div className="rule-item">
              <span className="rule-number">2</span>
              <p>Качество ответа = качество промта + контекст</p>
            </div>
            <div className="rule-item">
              <span className="rule-number">3</span>
              <p>Используйте файлы с правилами, примерами и НПА</p>
            </div>
            <div className="rule-item">
              <span className="rule-number">4</span>
              <p>Агентская среда экономит время и повышает точность</p>
            </div>
            <div className="rule-item">
              <span className="rule-number">5</span>
              <p>KodikShield защищает персональные данные граждан</p>
            </div>
          </div>
        </div>
      ),
    },
    // Slide 21: Automation Future
    {
      id: 21,
      title: 'Следующий шаг — автоматизация',
      content: (
        <div className="slide-content-standard">
          <div className="automation-pipeline">
            <div className="pipeline-step">
              <span>Почта</span>
            </div>
            <div className="pipeline-arrow">→</div>
            <div className="pipeline-step">
              <span>Загрузка обращений</span>
            </div>
            <div className="pipeline-arrow">→</div>
            <div className="pipeline-step">
              <span>Классификация</span>
            </div>
            <div className="pipeline-arrow">→</div>
            <div className="pipeline-step">
              <span>Генерация ответа</span>
            </div>
            <div className="pipeline-arrow">→</div>
            <div className="pipeline-step">
              <span>Уведомление</span>
            </div>
            <div className="pipeline-arrow">→</div>
            <div className="pipeline-step">
              <span>Проверка</span>
            </div>
          </div>

          <p className="automation-note">Настраивается через диалог с агентом на естественном языке, без знания программирования</p>
        </div>
      ),
    },
    // Slide 22: Questions
    {
      id: 22,
      title: 'Вопросы?',
      content: (
        <div className="questions-slide">
          <p className="questions-main">Спасибо за внимание!</p>
          <div className="contact-placeholder">
            <p>Контакты и дополнительная информация</p>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  const slide = slides[currentSlide];
  const progressPercent = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="presentation">
      <div className="slide-container">
        {slide.block && <div className="slide-block-indicator">{slide.block}</div>}

        <div className="slide-header">
          <h1 className="slide-title">{slide.title}</h1>
        </div>

        <div className="slide-body">
          {slide.content}
        </div>

        <div className="slide-footer">
          <div className="slide-counter">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
      </div>

      <div className="nav-controls">
        <button
          className="nav-button nav-prev"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          title="Предыдущий слайд (Стрелка влево)"
        />
        <button
          className="nav-button nav-next"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          title="Следующий слайд (Стрелка вправо)"
        />
      </div>
    </div>
  );
}

export default App;
