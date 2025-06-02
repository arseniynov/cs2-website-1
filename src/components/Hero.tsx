import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/files/bacec3ab-2068-4eba-b5e1-6dff0f4c475d.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          COUNTER STRIKE 2
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Новая эра тактического шутера. Обновленная графика, улучшенная физика,
          бесконечные возможности.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/news"
            className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
          >
            <Icon name="Zap" size={20} />
            <span>Последние новости</span>
          </Link>
          <Link
            to="/history"
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
          >
            <Icon name="BookOpen" size={20} />
            <span>История игры</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
