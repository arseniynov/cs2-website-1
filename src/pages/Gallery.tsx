import Navigation from "@/components/Navigation";
import GalleryHeader from "@/components/gallery/GalleryHeader";
import VideoSection from "@/components/gallery/VideoSection";
import ScreenshotSection from "@/components/gallery/ScreenshotSection";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <GalleryHeader />

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoSection />
          <ScreenshotSection />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
