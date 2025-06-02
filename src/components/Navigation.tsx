import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navItems = [
    { name: "Главная", href: "/", icon: "Home" },
    { name: "История", href: "/history", icon: "Clock" },
    { name: "Новости", href: "/news", icon: "Newspaper" },
    { name: "Галерея", href: "/gallery", icon: "Image" },
    { name: "Контакты", href: "/contacts", icon: "Mail" },
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Icon name="Target" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white font-oswald">
              CS2 Portal
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-slate-600 hover:text-orange-500 transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/news"
              className="text-slate-600 hover:text-orange-500 transition-colors"
            >
              Новости
            </Link>
            <Link
              to="/history"
              className="text-slate-600 hover:text-orange-500 transition-colors"
            >
              История
            </Link>
            <Link
              to="/gallery"
              className="text-slate-600 hover:text-orange-500 transition-colors"
            >
              Галерея
            </Link>
            <Link
              to="/contacts"
              className="text-slate-600 hover:text-orange-500 transition-colors"
            >
              Контакты
            </Link>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          >
            <Icon name="Bell" size={16} />
            Уведомления
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
