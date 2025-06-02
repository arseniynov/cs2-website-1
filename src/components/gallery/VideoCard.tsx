import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  category: string;
}

const VideoCard = ({
  title,
  thumbnail,
  duration,
  views,
  category,
}: VideoCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="lg"
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
          >
            <Icon name="Play" size={24} />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
          {duration}
        </div>
        <div className="absolute top-2 left-2">
          <Badge className="bg-orange-500">{category}</Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Icon name="Eye" size={14} />
          {views} просмотров
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
