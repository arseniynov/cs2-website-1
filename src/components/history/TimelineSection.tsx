import Icon from "@/components/ui/icon";
import { timelineEvents } from "@/data/historyData";
import TimelineEvent from "./TimelineEvent";

const TimelineSection = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
        <Icon name="Clock" size={24} className="mr-3 text-orange-500" />
        Хронология развития
      </h2>

      <div className="space-y-6">
        {timelineEvents.map((event, index) => (
          <TimelineEvent key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;
