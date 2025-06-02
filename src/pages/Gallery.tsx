import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Gallery = () => {
  const videos = [
    {
      id: 1,
      title: "CS2 Official Trailer",
      thumbnail:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3",
      duration: "2:34",
      views: "2.5M",
      category: "Трейлеры",
    },
    {
      id: 2,
      title: "Лучшие моменты PGL Major",
      thumbnail:
        "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3",
      duration: "15:42",
      views: "890K",
      category: "Турниры",
    },
    {
      id: 3,
      title: "Обзор новой карты Mirage 2.0",
      thumbnail:
        "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3",
      duration: "8:17",
      views: "1.2M",
      category: "Карты",
    },
  ];

  const screenshots = [
    {
      id: 1,
      title: "Dust2 - вид на A-сайт",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&w=800&q=80",
      category: "Карты",
    },
    {
      id: 2,
      title: "AK-47 Redline",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=800&q=80",
      category: "Скины",
    },
    {
      id: 3,
      title: "Mirage - коннектор",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&w=800&q=80",
      category: "Карты",
    },
    {
      id: 4,
      title: "Inferno - банана",
      image:
        "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&w=800&q=80",
      category: "Карты",
    },
    {
      id: 5,
      title: "AWP Dragon Lore",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&w=800&q=80",
      category: "Скины",
    },
    {
      id: 6,
      title: "Cache - главная арена",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&w=800&q=80",
      category: "Карты",
    },
    {
      id: 7,
      title: "M4A4 Howl",
      image:
        "https://images.unsplash.com/photo-1538300342682-cf57afb97285?ixlib=rb-4.0.3&w=800&q=80",
      category: "Скины",
    },
    {
      id: 8,
      title: "Overpass - тоннели",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&w=800&q=80",
      category: "Карты",
    },
    {
      id: 9,
      title: "Knife | Karambit Fade",
      image:
        "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&w=800&q=80",
      category: "Скины",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-oswald mb-4">
            Галерея CS2
          </h1>
          <p className="text-xl text-slate-300">
            Скриншоты, видео и лучшие моменты Counter Strike 2
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 font-oswald mb-8">
            Видео
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {videos.map((video) => (
              <Card
                key={video.id}
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
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
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-orange-500">{video.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Icon name="Eye" size={14} />
                    {video.views} просмотров
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-slate-900 font-oswald mb-8">
            Скриншоты
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((screenshot) => (
              <Card
                key={screenshot.id}
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="mb-2 bg-orange-500">
                        {screenshot.category}
                      </Badge>
                      <h3 className="text-white font-semibold">
                        {screenshot.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
