// Optimize JSON loading
document.addEventListener('DOMContentLoaded', function() {
    // Inline the JSON data to avoid extra HTTP request
    const modulesData = [
  {
    "name": "МОДУЛЬ В1 | ОСНОВА: ПОНИМАНИЕ БИЗНЕСА И СТРАТЕГИЧЕСКОЕ ПОЗИЦИОНИРОВАНИЕ",
    "parts": [
      {
        "name": "Часть В.1.1. | Понимание Бизнеса Недвижимости в Узбекистане",
        "lectures": [
          {
            "number": "1",
            "code": "В.1.1.1",
            "title": "Введение: путь к успеху и адаптация к реалиям"
          },
          {
            "number": "2",
            "code": "В.1.1.2",
            "title": "Ключевые вопросы для анализа рынка:"
          },
          {
            "number": "3",
            "code": "В.1.1.2.1",
            "title": "Как я понимаю рынок недвижимости Узбекистана?"
          },
          {
            "number": "4",
            "code": "В.1.1.2.2",
            "title": "Что необходимо учитывать для успеха?"
          },
          {
            "number": "5",
            "code": "В.1.1.2.3",
            "title": "Какие факторы влияют на развитие агентства?"
          },
          {
            "number": "6",
            "code": "В.1.1.2.4",
            "title": "Как эти факторы определяют результат?"
          },
          {
            "number": "7",
            "code": "В.1.1.2.5",
            "title": "Какие из них я могу контролировать?"
          },
          {
            "number": "8",
            "code": "В.1.1.3",
            "title": "Принятие стратегических решений на основе анализа"
          },
          {
            "number": "9",
            "code": "В.1.1.4",
            "title": "Ключевые факторы успеха агентства недвижимости"
          }
        ]
      },
      {
        "name": "Часть В.1.2. | Фундамент Агентства: Миссия, Видение и Ценности",
        "lectures": [
          {
            "number": "10",
            "code": "В.1.2.1",
            "title": "Зачем агентству фундамент: суть концепции"
          },
          {
            "number": "11",
            "code": "В.1.2.2",
            "title": "Миссия – ваше \"почему\""
          },
          {
            "number": "12",
            "code": "В.1.2.2.1",
            "title": "Определение цели на рынке Узбекистана"
          },
          {
            "number": "13",
            "code": "В.1.2.2.2",
            "title": "Командное понимание и принятие миссии"
          },
          {
            "number": "14",
            "code": "В.1.2.3",
            "title": "Видение – ваше будущее"
          },
          {
            "number": "15",
            "code": "В.1.2.3.1",
            "title": "Цели на 1, 5, 10 лет"
          },
          {
            "number": "16",
            "code": "В.1.2.3.2",
            "title": "Мотивация и реализм"
          },
          {
            "number": "17",
            "code": "В.1.2.4",
            "title": "Ценности – ваш этический каркас"
          },
          {
            "number": "18",
            "code": "В.1.2.4.1",
            "title": "Поведенческие стандарты"
          },
          {
            "number": "19",
            "code": "В.1.2.4.2",
            "title": "Влияние на отношения и имидж"
          },
          {
            "number": "20",
            "code": "В.1.2.5",
            "title": "Адаптация фундамента под Узбекистанский рынок"
          }
        ]
      },
      {
        "name": "Часть В.1.3. | Стратегия и Роль Брокера",
        "lectures": [
          {
            "number": "21",
            "code": "В.1.3.1",
            "title": "Значение стратегии для франшизы"
          },
          {
            "number": "22",
            "code": "В.1.3.2",
            "title": "Две модели поведения брокера:"
          },
          {
            "number": "23",
            "code": "В.1.3.2.1",
            "title": "Работа \"в\" бизнесе (операционная стратегия)"
          },
          {
            "number": "24",
            "code": "В.1.3.2.2",
            "title": "Работа \"над\" бизнесом (стратегия роста)"
          },
          {
            "number": "25",
            "code": "В.1.3.3",
            "title": "Ваша роль как брокера:"
          },
          {
            "number": "26",
            "code": "В.1.3.3.1",
            "title": "Практик vs. Лидер команды"
          },
          {
            "number": "27",
            "code": "В.1.3.4",
            "title": "Как выбрать правильную стратегию:"
          },
          {
            "number": "28",
            "code": "В.1.3.4.1",
            "title": "Стиль лидерства"
          },
          {
            "number": "29",
            "code": "В.1.3.4.2",
            "title": "Цели и амбиции"
          },
          {
            "number": "30",
            "code": "В.1.3.4.3",
            "title": "Учет рыночных условий Узбекистана"
          }
        ]
      }
    ]
  },
  {
    "name": "МОДУЛЬ В2 | ПЛАНИРОВАНИЕ И ЗАПУСК ОФИСА",
    "parts": [
      {
        "name": "Часть В.2.1 | Выбор бизнес-модели и планирование",
        "lectures": [
          {
            "number": "31",
            "code": "В.2.1.1",
            "title": "Различные бизнес-модели агентства недвижимости"
          },
          {
            "number": "32",
            "code": "В.2.1.2",
            "title": "Разработка бизнес-плана офиса"
          },
          {
            "number": "33",
            "code": "В.2.1.3",
            "title": "Финансовое планирование стартующего бизнеса"
          },
          {
            "number": "34",
            "code": "В.2.1.4",
            "title": "Структура комиссий и вознаграждений"
          },
          {
            "number": "35",
            "code": "В.2.1.5",
            "title": "Особенности работы по франшизе RE/MAX"
          }
        ]
      },
      {
        "name": "Часть В.2.2. | Организация офиса и инфраструктура",
        "lectures": [
          {
            "number": "36",
            "code": "В.2.2.1",
            "title": "Юридическое оформление и лицензирование"
          },
          {
            "number": "37",
            "code": "В.2.2.2",
            "title": "Выбор локации и обустройство офиса"
          },
          {
            "number": "38",
            "code": "В.2.2.3",
            "title": "Формирование имиджа и культуры офиса"
          },
          {
            "number": "39",
            "code": "В.2.2.4",
            "title": "Подбор административного персонала"
          },
          {
            "number": "40",
            "code": "В.2.2.5",
            "title": "Налаживание основных бизнес-процессов"
          },
          {
            "number": "41",
            "code": "В.2.2.6",
            "title": "План запуска и «Grand Opening»"
          }
        ]
      }
    ]
  },
  {
    "name": "МОДУЛЬ В3. | НАБОР И РАЗВИТИЕ КОМАНДЫ",
    "parts": [
      {
        "name": "Часть В.3.1. | Эффективный набор агентов",
        "lectures": [
          {
            "number": "42",
            "code": "В.3.1.1",
            "title": "Портрет идеального агента"
          },
          {
            "number": "43",
            "code": "В.3.1.2",
            "title": "Уникальное ценностное предложение для агентов"
          },
          {
            "number": "44",
            "code": "В.3.1.3",
            "title": "Каналы поиска и рекрутинга"
          },
          {
            "number": "45",
            "code": "В.3.1.4",
            "title": "Проведение интервью и отбор"
          },
          {
            "number": "46",
            "code": "В.3.1.5",
            "title": "Онбординг новых агентов"
          }
        ]
      },
      {
        "name": "Часть В.3.2. | Обучение и развитие агентов",
        "lectures": [
          {
            "number": "47",
            "code": "В.3.2.1",
            "title": "Программа начального обучения"
          },
          {
            "number": "48",
            "code": "В.3.2.2",
            "title": "Интерактивные методы обучения"
          },
          {
            "number": "49",
            "code": "В.3.2.3",
            "title": "Наставничество и коучинг"
          },
          {
            "number": "50",
            "code": "В.3.2.4",
            "title": "Мониторинг результатов и обратная связь"
          },
          {
            "number": "51",
            "code": "В.3.2.5",
            "title": "Стратегии удержания и мотивации"
          }
        ]
      }
    ]
  },
  {
    "name": "МОДУЛЬ В4. | МАРКЕТИНГ И ПРИВЛЕЧЕНИЕ КЛИЕНТОВ",
    "parts": [
      {
        "name": "Часть В.4.1. | Маркетинговые стратегии и инструменты",
        "lectures": [
          {
            "number": "52",
            "code": "В.4.1.1",
            "title": "Разработка маркетингового плана офиса"
          },
          {
            "number": "53",
            "code": "В.4.1.2",
            "title": "Традиционные методы рекламы"
          },
          {
            "number": "54",
            "code": "В.4.1.3",
            "title": "Цифровой маркетинг и SMM"
          },
          {
            "number": "55",
            "code": "В.4.1.4",
            "title": "Поддержка агентов в маркетинге"
          },
          {
            "number": "56",
            "code": "В.4.1.5",
            "title": "Анализ эффективности маркетинга"
          }
        ]
      },
      {
        "name": "Часть В.4.2. | Работа с клиентами и CRM",
        "lectures": [
          {
            "number": "57",
            "code": "В.4.2.1",
            "title": "Генерация и обработка лидов"
          },
          {
            "number": "58",
            "code": "В.4.2.2",
            "title": "Внедрение CRM-системы"
          },
          {
            "number": "59",
            "code": "В.4.2.3",
            "title": "Распространенные мифы о CRM"
          },
          {
            "number": "60",
            "code": "В.4.2.4",
            "title": "Эффективное использование CRM"
          },
          {
            "number": "61",
            "code": "В.4.2.5",
            "title": "Управление клиентским сервисом"
          }
        ]
      }
    ]
  },
  {
    "name": "МОДУЛЬ В5. | ОПЕРАЦИОННОЕ УПРАВЛЕНИЕ И РОСТ БИЗНЕСА",
    "parts": [
      {
        "name": "Часть В.5.1. | Финансы и операционное управление",
        "lectures": [
          {
            "number": "62",
            "code": "В.5.1.1",
            "title": "Финансовое управление и учет"
          },
          {
            "number": "63",
            "code": "В.5.1.2",
            "title": "Юридические аспекты и управление рисками"
          },
          {
            "number": "64",
            "code": "В.5.1.3",
            "title": "Административные процессы"
          },
          {
            "number": "65",
            "code": "В.5.1.4",
            "title": "Личная эффективность руководителя"
          },
          {
            "number": "66",
            "code": "В.5.1.5",
            "title": "Лидерство и мотивация команды"
          }
        ]
      },
      {
        "name": "Часть В.5.2. | Стратегии роста и развития бизнеса",
        "lectures": [
          {
            "number": "67",
            "code": "В.5.2.1",
            "title": "Масштабирование агентства"
          },
          {
            "number": "68",
            "code": "В.5.2.2",
            "title": "Диверсификация услуг"
          },
          {
            "number": "69",
            "code": "В.5.2.3",
            "title": "Инновации и технологии"
          },
          {
            "number": "70",
            "code": "В.5.2.4",
            "title": "Партнерские связи и деловые контакты"
          },
          {
            "number": "71",
            "code": "В.5.2.5",
            "title": "Непрерывное обучение руководителя"
          }
        ]
      }
    ]
  },
  {
    "name": "МОДУЛЬ В6. | РАБОТА С ДОХОДНОЙ И КОММЕРЧЕСКОЙ НЕДВИЖИМОСТЬЮ",
    "parts": [
      {
        "name": "Часть В.6.1. | Инвестиции в жилую доходную недвижимость",
        "lectures": [
          {
            "number": "72",
            "code": "В.6.1.1",
            "title": "Основы инвестирования в недвижимость"
          },
          {
            "number": "73",
            "code": "В.6.1.2",
            "title": "Поиск и анализ объектов"
          },
          {
            "number": "74",
            "code": "В.6.1.3",
            "title": "Работа с инвесторами-покупателями"
          },
          {
            "number": "75",
            "code": "В.6.1.4",
            "title": "Финансирование инвестиционных сделок"
          },
          {
            "number": "76",
            "code": "В.6.1.5",
            "title": "Управление объектами и стратегии выхода"
          }
        ]
      },
      {
        "name": "Часть В.6.2. | Коммерческая недвижимость и продвинутые стратегии инвестирования",
        "lectures": [
          {
            "number": "77",
            "code": "В.6.2.1",
            "title": "Сегменты коммерческой недвижимости"
          },
          {
            "number": "78",
            "code": "В.6.2.2",
            "title": "Оценка инвестиционной привлекательности"
          },
          {
            "number": "79",
            "code": "В.6.2.3",
            "title": "Структурирование сложных сделок"
          },
          {
            "number": "80",
            "code": "В.6.2.4",
            "title": "Маркетинг и продажа коммерческих объектов"
          },
          {
            "number": "81",
            "code": "В.6.2.5",
            "title": "Долгосрочная работа с инвесторами"
          }
        ]
      }
    ]
  }
];

    // Use the data directly
    modules = modulesData;
    renderModules();
    populateSidebar();
    
    // Open first module
    setTimeout(() => {
        toggleModule(0);
    }, 100);
});

// Load images with lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
});

// Optimize module rendering
let modules = [];

// Render all modules to the page
function renderModules() {
    const modulesContainer = document.getElementById('modules-container');
    const fragment = document.createDocumentFragment();

    modules.forEach((module, moduleIndex) => {
        const moduleElement = createModuleElement(module, moduleIndex);
        fragment.appendChild(moduleElement);
    });

    modulesContainer.appendChild(fragment);

    // Add event listeners after rendering
    addEventListeners();
}

// Create a module element
function createModuleElement(module, moduleIndex) {
    const moduleDiv = document.createElement('div');
    moduleDiv.className = 'module-card';
    moduleDiv.id = `module-${moduleIndex}`;

    // Create module header
    const moduleHeader = document.createElement('div');
    moduleHeader.className = 'module-header';
    moduleHeader.innerHTML = `
        <h3>${module.name}</h3>
        <span class="module-toggle"><i class="fas fa-chevron-down"></i></span>
    `;
    moduleDiv.appendChild(moduleHeader);

    // Create module content
    const moduleContent = document.createElement('div');
    moduleContent.className = 'module-content';
    
    // Add parts to module content
    module.parts.forEach((part, partIndex) => {
        const partElement = createPartElement(part, moduleIndex, partIndex);
        moduleContent.appendChild(partElement);
    });
    
    moduleDiv.appendChild(moduleContent);
    return moduleDiv;
}

// Create a part element
function createPartElement(part, moduleIndex, partIndex) {
    const partDiv = document.createElement('div');
    partDiv.className = 'part-card';
    partDiv.id = `part-${moduleIndex}-${partIndex}`;

    // Create part header
    const partHeader = document.createElement('div');
    partHeader.className = 'part-header';
    partHeader.innerHTML = `
        <h4>${part.name}</h4>
        <span class="part-toggle"><i class="fas fa-chevron-down"></i></span>
    `;
    partDiv.appendChild(partHeader);

    // Create part content
    const partContent = document.createElement('div');
    partContent.className = 'part-content';
    
    // Add lectures to part content
    const lectureList = document.createElement('ul');
    lectureList.className = 'lecture-list';
    
    part.lectures.forEach(lecture => {
        const lectureItem = document.createElement('li');
        lectureItem.className = 'lecture-item';
        lectureItem.innerHTML = `
            <span class="lecture-number">${lecture.number}</span>
            <span class="lecture-code">${lecture.code}</span>
            <span class="lecture-title">${lecture.title}</span>
        `;
        lectureList.appendChild(lectureItem);
    });
    
    partContent.appendChild(lectureList);
    partDiv.appendChild(partContent);
    
    return partDiv;
}

// Populate the sidebar with module links
function populateSidebar() {
    const moduleList = document.getElementById('module-list');
    const fragment = document.createDocumentFragment();

    modules.forEach((module, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#module-${index}`;
        a.textContent = module.name.split('|')[0].trim();
        a.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById(`module-${index}`).scrollIntoView({ behavior: 'smooth' });
            
            // Open the module if it's closed
            const moduleContent = document.querySelector(`#module-${index} .module-content`);
            if (!moduleContent.classList.contains('active')) {
                toggleModule(index);
            }
        });
        li.appendChild(a);
        fragment.appendChild(li);
    });

    moduleList.appendChild(fragment);
}

// Add event listeners to interactive elements
function addEventListeners() {
    // Module toggle
    document.querySelectorAll('.module-header').forEach((header, index) => {
        header.addEventListener('click', () => {
            toggleModule(index);
        });
    });

    // Part toggle
    document.querySelectorAll('.part-header').forEach((header) => {
        header.addEventListener('click', (e) => {
            const partContent = header.nextElementSibling;
            partContent.classList.toggle('active');
            
            const icon = header.querySelector('.part-toggle i');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
            
            // Stop propagation to prevent module toggle
            e.stopPropagation();
        });
    });

    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    // Use throttled scroll event for better performance
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            isScrolling = true;
            window.requestAnimationFrame(() => {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
                isScrolling = false;
            });
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Toggle module open/closed
function toggleModule(index) {
    const moduleContent = document.querySelector(`#module-${index} .module-content`);
    moduleContent.classList.toggle('active');
    
    const icon = document.querySelector(`#module-${index} .module-toggle i`);
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
}
