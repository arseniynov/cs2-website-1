import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">CS2</span>
              </div>
              <span className="text-xl font-bold">Counter Strike 2</span>
            </div>
            <p className="text-gray-400">
              Официальный фан-сайт Counter Strike 2 с последними новостями,
              историей игры и киберспорта.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/history"
                  className="text-gray-400 hover:text-orange-500"
                >
                  История CS
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-400 hover:text-orange-500">
                  Новости
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Галерея
                </a>
              </li>
              <li>
                <a
                  href="/contacts"
                  className="text-gray-400 hover:text-orange-500"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Следите за нами</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Counter Strike 2 Fan Site. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
