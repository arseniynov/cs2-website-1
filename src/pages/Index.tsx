import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import TournamentBanner from "@/components/TournamentBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <NewsSection />
      <TournamentBanner />
    </div>
  );
};

export default Index;
