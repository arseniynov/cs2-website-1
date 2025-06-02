import Navigation from "@/components/Navigation";
import { allNews } from "@/data/newsData";
import { useNewsFilter } from "@/hooks/useNewsFilter";
import NewsFilters from "@/components/news/NewsFilters";
import FeaturedNewsCard from "@/components/news/FeaturedNewsCard";
import NewsCard from "@/components/news/NewsCard";
import EmptyState from "@/components/news/EmptyState";

const News = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    filteredNews,
    featuredNews,
    regularNews,
  } = useNewsFilter(allNews);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-oswald mb-4">
            Новости CS2
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Все самые важные события из мира Counter-Strike 2
          </p>
        </div>

        <NewsFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {featuredNews.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 font-oswald">
              Главные новости
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {featuredNews.map((article) => (
                <FeaturedNewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}

        {regularNews.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 font-oswald">
              Все новости
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularNews.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}

        {filteredNews.length === 0 && <EmptyState />}
      </div>
    </div>
  );
};

export default News;
