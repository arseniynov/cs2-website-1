import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const TournamentBanner = () => {
  const tournaments = [
    {
      name: "PGL Major Copenhagen 2025",
      status: "Live",
      prize: "$1,000,000",
      teams: "NAVI vs G2",
      time: "Финал • Начало в 19:00 МСК",
      image:
        "https://images.unsplash.com/photo-1538300342682-cf57afb97285?ixlib=rb-4.0.3",
    },
    {
      name: "ESL Pro League Season 19",
      status: "Upcoming",
      prize: "$750,000",
      teams: "32 команды",
      time: "Начало 15 июня",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-oswald mb-4">
            Турниры и события
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Следите за крупнейшими турнирами и чемпионатами
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tournaments.map((tournament, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 overflow-hidden group hover:bg-slate-800/70 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={tournament.image}
                  alt={tournament.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge
                    className={
                      tournament.status === "Live"
                        ? "bg-red-500 animate-pulse"
                        : "bg-blue-500"
                    }
                  >
                    <Icon
                      name={tournament.status === "Live" ? "Radio" : "Clock"}
                      size={14}
                    />
                    {tournament.status === "Live" ? "В эфире" : "Скоро"}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2 font-oswald">
                    {tournament.name}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span className="flex items-center gap-1">
                      <Icon name="DollarSign" size={14} />
                      {tournament.prize}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Users" size={14} />
                      {tournament.teams}
                    </span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-300 mb-2">{tournament.time}</p>
                  </div>
                  <Button
                    variant={
                      tournament.status === "Live" ? "default" : "outline"
                    }
                    className={
                      tournament.status === "Live"
                        ? "bg-red-500 hover:bg-red-600"
                        : "border-slate-600 text-slate-300 hover:bg-slate-700"
                    }
                  >
                    <Icon
                      name={tournament.status === "Live" ? "Play" : "Calendar"}
                      size={16}
                    />
                    {tournament.status === "Live" ? "Смотреть" : "Подписаться"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TournamentBanner;
