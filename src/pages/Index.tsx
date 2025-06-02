import Hero from "@/components/Hero";
import NewsPreview from "@/components/NewsPreview";
import PopularArticles from "@/components/PopularArticles";
import GameStats from "@/components/GameStats";

export default function Index() {
  return (
    <div>
      <Hero />
      <NewsPreview />
      <PopularArticles />
      <GameStats />
    </div>
  );
}
