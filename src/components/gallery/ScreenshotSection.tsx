import ScreenshotCard from "./ScreenshotCard";
import { screenshotsData } from "@/data/galleryData";

const ScreenshotSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-slate-900 font-oswald mb-8">
        Скриншоты
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {screenshotsData.map((screenshot) => (
          <ScreenshotCard
            key={screenshot.id}
            title={screenshot.title}
            image={screenshot.image}
            category={screenshot.category}
          />
        ))}
      </div>
    </section>
  );
};

export default ScreenshotSection;
