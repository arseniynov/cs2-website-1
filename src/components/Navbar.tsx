import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/history", label: "История", icon: "BookOpen" },
    { path: "/news", label: "Новости", icon: "Newspaper" },
    { path: "/gallery", label: "Галерея", icon: "Image" },
    { path: "/contacts", label: "Контакты", icon: "MessageCircle" },
  ];

  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-orange-500/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">CS2</span>
            </div>
            <span className="text-xl font-bold">Counter Strike 2</span>
          </Link>

          <div className="flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "bg-orange-500 text-black"
                    : "hover:bg-gray-800 text-gray-300 hover:text-white"
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
