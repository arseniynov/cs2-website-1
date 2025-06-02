import VideoCard from "./VideoCard";
import { videosData } from "@/data/galleryData";

const VideoSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-slate-900 font-oswald mb-8">
        Видео
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videosData.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            thumbnail={video.thumbnail}
            duration={video.duration}
            views={video.views}
            category={video.category}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
