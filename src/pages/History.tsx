import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const History = () => {
  const timelineEvents = [
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

  const legendaryTeams = [
    { name: "Astralis", country: "🇩🇰", majors: 4, era: "2017-2019" },
    { name: "SK Gaming", country: "🇧🇷", majors: 2, era: "2016-2017" },
    { name: "Fnatic", country: "🇸🇪", majors: 3, era: "2013-2015" },
    { name: "NAVI", country: "🇺🇦", majors: 2, era: "2021-2022" },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "release":
        return "bg-blue-500";
      case "major":
        return "bg-orange-500";
      case "esports":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 font-oswald">
            История Counter-Strike
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            От простого мода до главной киберспортивной дисциплины мира
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Icon name="Clock" size={24} className="mr-3 text-orange-500" />
            Хронология развития
          </h2>

          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-800 hover:bg-slate-900/70 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full ${getTypeColor(event.type)} flex items-center justify-center`}
                    >
                      <Icon
                        name={event.icon as any}
                        size={20}
                        className="text-white"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge
                          variant="outline"
                          className="text-orange-400 border-orange-400"
                        >
                          {event.year}
                        </Badge>
                        <h3 className="text-xl font-semibold text-white">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-slate-300">{event.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Legendary Teams */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Icon name="Users" size={24} className="mr-3 text-orange-500" />
            Легендарные команды
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {legendaryTeams.map((team, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-800 hover:bg-slate-900/70 transition-colors"
              >
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      {team.country} {team.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <Icon
                        name="Trophy"
                        size={16}
                        className="text-yellow-500"
                      />
                      <span className="text-yellow-500">{team.majors}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">
                    Эра доминирования: {team.era}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Major Updates */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Icon name="Download" size={24} className="mr-3 text-orange-500" />
            Ключевые обновления
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Map" size={20} className="text-orange-500" />
                  Новые карты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Mirage, Cache, Overpass и другие культовые арены
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon
                    name="Crosshair"
                    size={20}
                    className="text-orange-500"
                  />
                  Баланс оружия
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Постоянные изменения урона, отдачи и экономики
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Palette" size={20} className="text-orange-500" />
                  Скины и операции
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Система кейсов и сезонные операции с 2013 года
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
