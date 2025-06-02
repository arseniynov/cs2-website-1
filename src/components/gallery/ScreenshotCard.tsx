import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ScreenshotCardProps {
  title: string;
  image: string;
  category: string;
}

const ScreenshotCard = ({ title, image, category }: ScreenshotCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <Badge className="mb-2 bg-orange-500">{category}</Badge>
            <h3 className="text-white font-semibold">{title}</h3>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ScreenshotCard;
