import Icon from "@/components/ui/icon";
import { legendaryTeams } from "@/data/historyData";
import LegendaryTeamCard from "./LegendaryTeamCard";

const TeamsSection = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
        <Icon name="Users" size={24} className="mr-3 text-orange-500" />
        Легендарные команды
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {legendaryTeams.map((team, index) => (
          <LegendaryTeamCard key={index} team={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamsSection;
