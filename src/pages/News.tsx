import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import Navigation from "@/components/Navigation";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["Все", "Обновления", "Турниры", "Аналитика", "Мета"];

  const allNews = [
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

  const filteredNews = allNews.filter((article) => {
    const matchesCategory =
      selectedCategory === "Все" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews.filter((article) => article.featured);
  const regularNews = filteredNews.filter((article) => !article.featured);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-oswald mb-4">
            Новости CS2
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Все самые важные события из мира Counter-Strike 2
          </p>
        </div>

        {/* Поиск и фильтры */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={20}
              />
              <Input
                placeholder="Поиск новостей..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-slate-400"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "border-slate-600 text-slate-300 hover:bg-slate-800"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Основные новости */}
        {featuredNews.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 font-oswald">
              Главные новости
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {featuredNews.map((article) => (
                <Card
                  key={article.id}
                  className="bg-slate-800 border-slate-700 overflow-hidden group hover:border-orange-500 transition-colors"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-orange-500 text-white"
                      >
                        {article.category}
                      </Badge>
                      <span className="text-sm text-slate-400">
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-white hover:text-orange-400 transition-colors cursor-pointer">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">
                        {article.date}
                      </span>
                      <Button
                        size="sm"
                        className="bg-orange-500 hover:bg-orange-600"
                      >
                        Читать далее
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Остальные новости */}
        {regularNews.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 font-oswald">
              Все новости
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularNews.map((article) => (
                <Card
                  key={article.id}
                  className="bg-slate-800 border-slate-700 overflow-hidden group hover:border-orange-500 transition-colors"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-slate-700 text-slate-300"
                      >
                        {article.category}
                      </Badge>
                      <span className="text-xs text-slate-400">
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-white hover:text-orange-400 transition-colors cursor-pointer line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        {article.date}
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-orange-400 hover:text-orange-300 hover:bg-slate-700 p-2"
                      >
                        <Icon name="ExternalLink" size={14} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Пустое состояние */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="FileText"
              size={64}
              className="mx-auto text-slate-600 mb-4"
            />
            <h3 className="text-xl font-semibold text-slate-400 mb-2">
              Новости не найдены
            </h3>
            <p className="text-slate-500">
              Попробуйте изменить фильтры или поисковый запрос
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
