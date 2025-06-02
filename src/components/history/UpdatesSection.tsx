import Icon from "@/components/ui/icon";
import { majorUpdates } from "@/data/historyData";
import UpdateCard from "./UpdateCard";

const UpdatesSection = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
        <Icon name="Download" size={24} className="mr-3 text-orange-500" />
        Ключевые обновления
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {majorUpdates.map((update, index) => (
          <UpdateCard key={index} update={update} />
        ))}
      </div>
    </div>
  );
};

export default UpdatesSection;
