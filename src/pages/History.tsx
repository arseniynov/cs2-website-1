import Navigation from "@/components/Navigation";
import TimelineSection from "@/components/history/TimelineSection";
import TeamsSection from "@/components/history/TeamsSection";
import UpdatesSection from "@/components/history/UpdatesSection";

const History = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 font-oswald">
            История Counter-Strike
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            От простого мода до главной киберспортивной дисциплины мира
          </p>
        </div>

        <TimelineSection />
        <TeamsSection />
        <UpdatesSection />
      </div>
    </div>
  );
};

export default History;
