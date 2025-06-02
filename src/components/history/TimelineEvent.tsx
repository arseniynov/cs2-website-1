import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { TimelineEvent as TimelineEventType } from "@/data/historyData";
import { getTypeColor } from "@/utils/historyUtils";

interface TimelineEventProps {
  event: TimelineEventType;
}

const TimelineEvent = ({ event }: TimelineEventProps) => {
  return (
    <Card className="bg-slate-900/50 border-slate-800 hover:bg-slate-900/70 transition-colors">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 rounded-full ${getTypeColor(event.type)} flex items-center justify-center`}
          >
            <Icon name={event.icon as any} size={20} className="text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <Badge
                variant="outline"
                className="text-orange-400 border-orange-400"
              >
                {event.year}
              </Badge>
              <h3 className="text-xl font-semibold text-white">
                {event.title}
              </h3>
            </div>
            <p className="text-slate-300">{event.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimelineEvent;
