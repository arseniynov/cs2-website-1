import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function NewsPreview() {
  const news = [
    {
      id: 1,
      title: "Новое обновление карты Mirage",
      summary:
        "Valve выпустила крупное обновление одной из самых популярных карт",
      date: "2025-06-01",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Обновления",
    },
    {
      id: 2,
      title: "IEM Cologne 2024: Результаты",
      summary:
        "Завершился один из крупнейших турниров года по Counter Strike 2",
      date: "2025-05-29",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Киберспорт",
    },
    {
      id: 3,
      title: "Изменения в экономике игры",
      summary: "Разработчики внесли коррективы в систему покупки оружия",
      date: "2025-05-25",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Баланс",
    },
  ];

  return (
    <section className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">Последние новости</h2>
          <Link
            to="/news"
            className="text-orange-500 hover:text-orange-400 flex items-center space-x-2"
          >
            <span>Все новости</span>
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-orange-500 text-sm font-medium">
                    {item.category}
                  </span>
                  <span className="text-gray-400 text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.summary}</p>
                <Link
                  to={`/news/${item.id}`}
                  className="text-orange-500 hover:text-orange-400 flex items-center space-x-1"
                >
                  <span>Читать далее</span>
                  <Icon name="ArrowRight" size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
