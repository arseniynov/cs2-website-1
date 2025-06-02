import Icon from "@/components/ui/icon";

export default function GameStats() {
  const stats = [
    { label: "Активных игроков", value: "1.2M+", icon: "Users" },
    { label: "Призовой фонд 2024", value: "$15M+", icon: "DollarSign" },
    { label: "Профессиональных команд", value: "500+", icon: "Trophy" },
    { label: "Официальных карт", value: "9", icon: "Map" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500/10 to-red-500/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Counter Strike 2 сегодня
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat.icon} size={28} className="text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
