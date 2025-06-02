import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { MajorUpdate } from "@/data/historyData";

interface UpdateCardProps {
  update: MajorUpdate;
}

const UpdateCard = ({ update }: UpdateCardProps) => {
  return (
    <Card className="bg-slate-900/50 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Icon
            name={update.icon as any}
            size={20}
            className="text-orange-500"
          />
          {update.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-300">{update.description}</p>
      </CardContent>
    </Card>
  );
};

export default UpdateCard;
