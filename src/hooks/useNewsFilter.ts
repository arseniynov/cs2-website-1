import { useState, useMemo } from "react";
import { NewsArticle } from "@/data/newsData";

export const useNewsFilter = (articles: NewsArticle[]) => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNews = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "Все" || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchTerm]);

  const featuredNews = useMemo(
    () => filteredNews.filter((article) => article.featured),
    [filteredNews],
  );

  const regularNews = useMemo(
    () => filteredNews.filter((article) => !article.featured),
    [filteredNews],
  );

  return {
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    filteredNews,
    featuredNews,
    regularNews,
  };
};
