import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="mb-4 bg-orange-500/20 text-orange-400 border-orange-500/30">
            <Icon name="Zap" size={14} />
            Последние обновления
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold font-oswald mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            COUNTER STRIKE 2
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Новая эра киберспорта началась. Следите за последними новостями,
            турнирами и обновлениями легендарной игры.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://rutube.ru/video/dd25bdf330b767041c4b0724b4c85307/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
              >
                <Icon name="Play" size={20} />
                Смотреть трейлер
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
            >
              <Icon name="Trophy" size={20} />
              Турниры
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
