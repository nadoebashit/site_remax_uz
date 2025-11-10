// Optimize JSON loading
document.addEventListener('DOMContentLoaded', function() {
    // Inline the JSON data to avoid extra HTTP request
    const modulesData = [
  {
    "name": "МОДУЛЬ A1 | «ОНЛАЙН КУРС «БАЗОВЫЙ» ВВЕДЕНИЕ В ПРОФЕССИЮ",
    "parts": [
      {
        "name": "Часть А.1.1. | введение в профессию",
        "lectures": [
          {
            "number": "1",
            "code": "А.1.1.1",
            "title": "Добро пожаловать в RE/MAX - Ваше Будущее Начинается СЕЙЧАС - Приветствие от Регионального Директора"
          },
          {
            "number": "2",
            "code": "А.1.1.2",
            "title": "О компании и ее истории, структуре и филиалах:"
          },
          {
            "number": "3",
            "code": "А.1.1.3",
            "title": "Код Лидерства RE/MAX– Ваша Миссия и Ценности на Пути к Успеху"
          },
          {
            "number": "4",
            "code": "А.1.1.4",
            "title": "Кодекс Этики RE/MAX– Ваш Щит и Репутация"
          },
          {
            "number": "5",
            "code": "А.1.1.5",
            "title": "Ваш Доход в RE/MAX"
          }
        ]
      }
    ] 
  },
  {
    "name": "МОДУЛЬ А2 | «КОМПЛЕКСНАЯ ПОДГОТОВКА ОТ ОСНОВ ДО ПРОДВИНУТЫХ ТЕХНИК С АКЦЕНТОМ НА ПРАКТИКУ И РЕАЛЬНЫЕ КЕЙСЫ»",
    "parts": [
      {
        "name": "Часть А.2.1 | ОСНОВЫ ПРОФЕССИИ АГЕНТА ПО НЕДВИЖИМОСТИ",
        "lectures": [
          {
            "number": "6",
            "code": "А.2.1.1",
            "title": "Общий обзор роли агента в рынке недвижимости"
          },
          {
            "number": "7",
            "code": "А.2.1.2",
            "title": "Отличия агента от наёмного работника"
          },
          {
            "number": "8",
            "code": "А.2.1.3",
            "title": "Основные этапы работы агента и их содержание"
          },
          {
            "number": "9",
            "code": "А.2.1.4",
            "title": "Понимание потребностей клиента"
          },
          {
            "number": "10",
            "code": "А.2.1.5",
            "title": "Поручение, а не услуга"
          }
        ]
      },
      {
        "name": "Часть А.2.2. | УГЛУБЛЕНИЕ В РЫНОК И ЕГО АНАЛИЗ",
        "lectures": [
          {
            "number": "11",
            "code": "А.2.2.1",
            "title": "Понятие и характеристики недвижимости"
          },
          {
            "number": "12",
            "code": "А.2.2.2",
            "title": "Государство как фактор рынка"
          },
          {
            "number": "13",
            "code": "А.2.2.3",
            "title": "Виды недвижимости и сегменты рынка"
          },
          {
            "number": "14",
            "code": "А.2.2.4",
            "title": "Индикаторы рынка недвижимости"
          },
          {
            "number": "15",
            "code": "А.2.2.5",
            "title": "Методы оценки недвижимости"
          },
          {
            "number": "16",
            "code": "А.2.2.6",
            "title": "Районные технологии и анализ локации"
          }
        ]
      },
      {
        "name": "Часть А.2.3. | РАБОТА С КЛИЕНТАМИ И ПЕРЕГОВОРЫ",
        "lectures": [
          {
            "number": "17",
            "code": "А.2.3.1",
            "title": "Психология клиента"
          },
          {
            "number": "18",
            "code": "А.2.3.2",
            "title": "Нейролингвистическое программирование (НЛП) в переговорах"
          },
          {
            "number": "19",
            "code": "А.2.3.3",
            "title": "Методы ведения переговоров"
          },
          {
            "number": "20",
            "code": "А.2.3.4",
            "title": "Путь клиента от мечты до сделки (Customer Journey Map)"
          }
        ]
      }, 
      {  
          "name": "Часть А.2.4. | ЛИДОГЕНЕРАЦИЯ И МАРКЕТИНГ",
          "lectures": [
            {
              "number": "21",
              "code": "А.2.4.1",
              "title": "Методы лидогенерации и создание УТП"
            },
            {
              "number": "22",
              "code": "А.2.4.2",
              "title": "Создание «полки товаров»"
            },
            {
              "number": "23",
              "code": "А.2.4.3",
              "title": "Стратегии поиска покупателей"
            },
            {
              "number": "24",
              "code": "А.2.4.4",
              "title": "Коммуникационные инструменты и home staging"
            }
        ]
      },
      {
        "name": "Часть А.2.5. | РАБОТА С КЛИЕНТАМИ И ПЕРЕГОВОРЫ",
        "lectures": [
          {
            "number": "25",
            "code": "А.2.5.1",
            "title": "Этика работы агента и агентства"
          },
          {
            "number": "26",
            "code": "А.2.5.2",
            "title": "Нейролингвистическое программирование (НЛП) в переговорах"
          },
          {
            "number": "27",
            "code": "А.2.5.3",
            "title": "Долгосрочное партнерство и профессиональный рост"
          },
          {
            "number": "28",
            "code": "А.2.5.4",
            "title": "Личный бренд и персональный маркетинг"
          },
          {
            "number": "29",
            "code": "А.2.5.5",
            "title": "Юридические риски"
          }
        ]
      }, 
    ]
  },
  {
    "name": "МОДУЛЬ А3. | «ОСНОВНЫЕ БИЗНЕС-ПРОЦЕССЫ И ЕЖЕДНЕВНАЯ ПРАКТИКА АГЕНТА»",
    "parts": [
      {
        "name": "Часть А.3.1. | АНАЛИЗ РЫНКА И СРАВНИТЕЛЬНО-МАРКЕТИНГОВЫЙ АНАЛИЗ",
        "lectures": [
          {
            "number": "30",
            "code": "А.3.1.1",
            "title": "Структура и механизмы рынка недвижимости"
          },
          {
            "number": "31",
            "code": "А.3.1.2",
            "title": "Индикаторы рынка и влияние финансово-кредитной сферы"
          },
          {
            "number": "32",
            "code": "А.3.1.3",
            "title": "Понятие СМАК (Сравнительно-маркетинговый анализ конкурентов)"
          },
          {
            "number": "33",
            "code": "А.3.1.4",
            "title": "Шаги исследования: от сбора информации к презентации результата"
          }
        ]
      },
      {
        "name": "Часть А.3.2. | ПЕРЕГОВОРНЫЙ ПРОЦЕСС И РАБОТА С ВОЗРАЖЕНИЯМИ",
        "lectures": [
          {
            "number": "34",
            "code": "А.3.2.1",
            "title": "Базовые модели ведения переговоров"
          },
          {
            "number": "35",
            "code": "А.3.2.2",
            "title": "Когнитивные искажения при ценообразовании"
          },
          {
            "number": "36",
            "code": "А.3.2.3",
            "title": "Конфликты при торге: типичные возражения"
          },
          {
            "number": "37",
            "code": "А.3.2.4",
            "title": "Мониторинг результатов и обратная связь"
          }
        ]
      },
      {
        "name": "Часть А.3.3. | ЛИДОГЕНЕРАЦИЯ И МАРКЕТИНГ ОБЪЕКТОВ",
        "lectures": [
          {
            "number": "38",
            "code": "А.3.3.1",
            "title": "Методы лидогенерации"
          },
          {
            "number": "39",
            "code": "А.3.3.2",
            "title": "Home staging и предпродажная подготовка"
          },
          {
            "number": "40",
            "code": "А.3.3.3",
            "title": "Реклама в интернете"
          },
          {
            "number": "41",
            "code": "А.3.3.4",
            "title": "Личный бренд агента"
          }
        ]
      },
      {
        "name": "Часть А.3.4. | ПОВСЕДНЕВНЫЕ БИЗНЕС-ПРОЦЕССЫ",
        "lectures": [
          {
            "number": "42",
            "code": "А.3.4.1",
            "title": "«Воронка» работы с клиентами"
          },
          {
            "number": "43",
            "code": "А.3.4.2",
            "title": "Организация показов и безопасность"
          },
          {
            "number": "44",
            "code": "А.3.4.3",
            "title": "Алгоритм «поиска иголки в стоге сена»"
          },
          {
            "number": "45",
            "code": "А.3.4.4",
            "title": "Коммуникации: телефон и мессенджеры"
          }
        ]
      },
      {
        "name": "Часть А.3.5. | СОПРОВОЖДЕНИЕ СДЕЛКИ",
        "lectures": [
          {
            "number": "46",
            "code": "А.3.5.1",
            "title": "«Договор поручения vs. классический договор услуг"
          },
          {
            "number": "47",
            "code": "А.3.5.2",
            "title": "Основные этапы сопровождения сделки"
          },
          {
            "number": "48",
            "code": "А.3.5.3",
            "title": "Проверка юридической чистоты"
          },
          {
            "number": "49",
            "code": "А.3.5.4",
            "title": "Финальное оформление сделки"
          }
        ]
      }
    ]
  },
  {
    "name": "МОДУЛЬ А4. | «СПЕЦИАЛИЗАЦИЯ: КОММЕРЧЕСКАЯ И ЭЛИТНАЯ НЕДВИЖИМОСТЬ, ПАРТНЁРСТВО»",
    "parts": [
      {
        "name": "Часть А.4.1. | Коммерческая недвижимость",
        "lectures": [
          {
            "number": "50",
            "code": "А.4.1.1",
            "title": "Классификация объектов"
          },
          {
            "number": "51",
            "code": "А.4.1.2",
            "title": "Потребности клиентов"
          },
          {
            "number": "52",
            "code": "А.4.1.3",
            "title": "Юридические аспекты сделок"
          },
          {
            "number": "53",
            "code": "А.4.1.4",
            "title": "Риск-менеджмент"
          }
        ]
      },
      {
        "name": "Часть А.4.2. | ЭЛИТНАЯ НЕДВИЖИМОСТЬ",
        "lectures": [
          {
            "number": "54",
            "code": "А.4.2.1",
            "title": "Психология клиента класса «люкс»"
          },
          {
            "number": "55",
            "code": "А.4.2.2",
            "title": "Оценка и маркетинг объектов элитной недвижимости"
          },
          {
            "number": "56",
            "code": "А.4.2.3",
            "title": "Возражения и риски"
          },
          {
            "number": "57",
            "code": "А.4.2.4",
            "title": "Переговорный процесс"
          }
        ]
      },
      {
        "name": "Часть А.4.3. | ИНВЕСТИЦИИ В НЕДВИЖИМОСТЬ",
        "lectures": [
          {
            "number": "58",
            "code": "А.4.3.1",
            "title": "Инвестиционные модели"
          },
          {
            "number": "59",
            "code": "А.4.3.2",
            "title": "Соотношение риска и доходности"
          },
          {
            "number": "60",
            "code": "А.4.3.3",
            "title": "Компетенции агента"
          }
        ]
      },
      {
        "name": "Часть А.4.4. | ПАРТНЁРСТВО",
        "lectures": [
          {
            "number": "61",
            "code": "А.4.4.1",
            "title": "Партнёрство vs. работодатели"
          },
          {
            "number": "62",
            "code": "А.4.4.2",
            "title": "Профессиональные объединения и сети"
          },
          {
            "number": "63",
            "code": "А.4.4.3",
            "title": "Этика и стандарты"
          }
        ]
      },
      {
        "name": "Часть А.4.5. | ЗАВЕРШЕНИЕ И РАЗВИТИЕ",
        "lectures": [
          {
            "number": "64",
            "code": "А.4.5.1",
            "title": "Этика и саморегуляция"
          },
          {
            "number": "65",
            "code": "А.4.5.2",
            "title": "Карьерный рост"
          },
          {
            "number": "66",
            "code": "А.4.5.3",
            "title": "Персональный маркетинг"
          },
          {
            "number": "67",
            "code": "А.4.5.4",
            "title": "Адаптация к изменениям"
          }
        ]
      }
    ]
  },
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
