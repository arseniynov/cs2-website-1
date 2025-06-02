import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function PopularArticles() {
  const articles = [
    {
      id: 1,
      title: "Гайд по новой системе смоков в CS2",
      views: "152K",
      icon: "Target",
    },
    {
      id: 2,
      title: "Топ-10 моментов киберспорта 2025",
      views: "89K",
      icon: "Trophy",
    },
    {
      id: 3,
      title: "Анализ мета на картах Premier",
      views: "76K",
      icon: "BarChart3",
    },
    {
      id: 4,
      title: "История команды Natus Vincere",
      views: "125K",
      icon: "Users",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Популярные статьи
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg hover:from-gray-800 hover:to-gray-700 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon
                  name={article.icon}
                  size={24}
                  className="text-orange-500"
                />
                <span className="text-gray-400 text-sm">
                  {article.views} просмотров
                </span>
              </div>
              <h3 className="text-lg font-semibold group-hover:text-orange-500 transition-colors">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
