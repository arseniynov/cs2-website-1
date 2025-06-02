import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Новое обновление CS2: изменения в балансе оружия",
      excerpt:
        "Valve выпустила крупное обновление, которое затронуло баланс AK-47 и M4A4",
      date: "2 июня 2025",
      category: "Обновления",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3",
      featured: true,
    },
    {
      id: 2,
      title: "PGL Major Copenhagen 2025: результаты полуфинала",
      excerpt: "Incredible матчи в полуфинале Major турнира в Копенгагене",
      date: "1 июня 2025",
      category: "Турниры",
      image:
        "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3",
    },
    {
      id: 3,
      title: "Анализ новой карты Mirage 2.0",
      excerpt:
        "Детальный разбор изменений на обновленной версии культовой карты",
      date: "31 мая 2025",
      category: "Аналитика",
      image:
        "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-oswald mb-4">
            Последние новости
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Будьте в курсе всех событий мира Counter Strike 2
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card
              key={item.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                    index === 0 ? "h-64" : "h-48"
                  }`}
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant={
                      item.category === "Турниры" ? "default" : "secondary"
                    }
                    className={
                      item.category === "Турниры" ? "bg-orange-500" : ""
                    }
                  >
                    {item.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle
                  className={`${index === 0 ? "text-xl md:text-2xl" : "text-lg"} line-clamp-2 group-hover:text-orange-600 transition-colors`}
                >
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1 text-orange-600 group-hover:underline">
                    Читать далее
                    <Icon name="ArrowRight" size={14} />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
