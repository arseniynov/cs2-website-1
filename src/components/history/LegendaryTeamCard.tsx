import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { LegendaryTeam } from "@/data/historyData";

interface LegendaryTeamCardProps {
  team: LegendaryTeam;
}

const LegendaryTeamCard = ({ team }: LegendaryTeamCardProps) => {
  return (
    <Card className="bg-slate-900/50 border-slate-800 hover:bg-slate-900/70 transition-colors">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <span className="flex items-center gap-2">
            {team.country} {team.name}
          </span>
          <div className="flex items-center gap-2">
            <Icon name="Trophy" size={16} className="text-yellow-500" />
            <span className="text-yellow-500">{team.majors}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-300">Эра доминирования: {team.era}</p>
      </CardContent>
    </Card>
  );
};

export default LegendaryTeamCard;
