export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "release" | "major" | "esports";
  icon: string;
}

export interface LegendaryTeam {
  name: string;
  country: string;
  majors: number;
  era: string;
}

export interface MajorUpdate {
  title: string;
  description: string;
  icon: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: "1999",
    title: "Рождение Counter-Strike",
    description: "Мин Ле и Джесс Клифф создают мод для Half-Life",
    type: "release",
    icon: "Gamepad2",
  },
  {
    year: "2000",
    title: "Counter-Strike 1.0",
    description: "Официальный релиз первой версии игры от Valve",
    type: "release",
    icon: "Star",
  },
  {
    year: "2012",
    title: "CS:GO Launch",
    description: "Запуск Counter-Strike: Global Offensive",
    type: "major",
    icon: "Rocket",
  },
  {
    year: "2013",
    title: "Первый Major",
    description: "DreamHack Winter 2013 - первый крупный турнир",
    type: "esports",
    icon: "Trophy",
  },
  {
    year: "2016",
    title: "ELEAGUE Major",
    description: "Турнир на телевидении с призовым фондом $1M",
    type: "esports",
    icon: "Tv",
  },
  {
    year: "2023",
    title: "Counter-Strike 2",
    description: "Переход на Source 2, новая эра игры",
    type: "major",
    icon: "Zap",
  },
];

export const legendaryTeams: LegendaryTeam[] = [
  { name: "Astralis", country: "🇩🇰", majors: 4, era: "2017-2019" },
  { name: "SK Gaming", country: "🇧🇷", majors: 2, era: "2016-2017" },
  { name: "Fnatic", country: "🇸🇪", majors: 3, era: "2013-2015" },
  { name: "NAVI", country: "🇺🇦", majors: 2, era: "2021-2022" },
];

export const majorUpdates: MajorUpdate[] = [
  {
    title: "Новые карты",
    description: "Mirage, Cache, Overpass и другие культовые арены",
    icon: "Map",
  },
  {
    title: "Баланс оружия",
    description: "Постоянные изменения урона, отдачи и экономики",
    icon: "Crosshair",
  },
  {
    title: "Скины и операции",
    description: "Система кейсов и сезонные операции с 2013 года",
    icon: "Palette",
  },
];
