export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
  readTime: string;
}

export const categories = ["Все", "Обновления", "Турниры", "Аналитика", "Мета"];

export const allNews: NewsArticle[] = [
  {
    id: 1,
    title: "Новое обновление CS2: изменения в балансе оружия",
    excerpt:
      "Valve выпустила крупное обновление, которое затронуло баланс AK-47 и M4A4. Также добавлены новые скины и исправлены критические баги.",
    content: "Подробный анализ всех изменений в новом патче...",
    date: "2 июня 2025",
    category: "Обновления",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3",
    featured: true,
    readTime: "5 мин",
  },
  {
    id: 2,
    title: "PGL Major Copenhagen 2025: результаты полуфинала",
    excerpt:
      "Incredible матчи в полуфинале Major турнира в Копенгагене. NAVI против FaZe и G2 против ENCE.",
    content: "Детальный разбор игр полуфинала Major турнира...",
    date: "1 июня 2025",
    category: "Турниры",
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3",
    readTime: "8 мин",
  },
  {
    id: 3,
    title: "Анализ новой карты Mirage 2.0",
    excerpt:
      "Детальный разбор изменений на обновленной версии культовой карты. Новые углы, измененные позиции.",
    content: "Полный гайд по обновленной Mirage...",
    date: "31 мая 2025",
    category: "Аналитика",
    image:
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3",
    readTime: "12 мин",
  },
  {
    id: 4,
    title: "Мета CS2 в 2025: доминирующие стратегии",
    excerpt:
      "Как изменилась игра после последних обновлений. Анализ популярных тактик про-команд.",
    content: "Глубокий анализ текущей меты...",
    date: "29 мая 2025",
    category: "Мета",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3",
    readTime: "10 мин",
  },
  {
    id: 5,
    title: "BLAST Premier Spring Final: превью турнира",
    excerpt:
      "Что ожидать от финала весенней серии BLAST Premier. Фавориты и темные лошадки.",
    content: "Детальный превью предстоящего турнира...",
    date: "28 мая 2025",
    category: "Турниры",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3",
    readTime: "6 мин",
  },
];
