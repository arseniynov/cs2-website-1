import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-oswald mb-4">
            Контакты
          </h1>
          <p className="text-xl text-slate-300">
            Свяжитесь с нами для предложений и вопросов
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl font-oswald">
                  Обратная связь
                </CardTitle>
                <p className="text-slate-600">
                  Есть предложения по улучшению сайта или вопросы? Напишите нам!
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Ваше имя"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Тема</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Тема сообщения"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      placeholder="Ваше сообщение..."
                      required
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600"
                  >
                    <Icon name="Send" size={18} />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Icon name="Mail" size={24} className="text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Email
                      </h3>
                      <p className="text-slate-600">info@cs2portal.com</p>
                      <p className="text-sm text-slate-500 mt-1">
                        Ответим в течение 24 часов
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Icon
                        name="MessageCircle"
                        size={24}
                        className="text-blue-500"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Discord
                      </h3>
                      <p className="text-slate-600">CS2Portal Community</p>
                      <p className="text-sm text-slate-500 mt-1">
                        Присоединяйтесь к нашему сообществу
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Icon name="Clock" size={24} className="text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        Время работы
                      </h3>
                      <p className="text-slate-600">Пн-Пт: 9:00 - 18:00 МСК</p>
                      <p className="text-sm text-slate-500 mt-1">
                        Выходные: только критические вопросы
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="bg-orange-500 text-white p-3 rounded-full w-fit mx-auto mb-4">
                      <Icon name="Users" size={24} />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Станьте частью сообщества
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      Подписывайтесь на наши социальные сети для получения
                      последних новостей
                    </p>
                    <div className="flex justify-center gap-3">
                      <Button variant="outline" size="sm">
                        <Icon name="MessageSquare" size={16} />
                        Telegram
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Users" size={16} />
                        VK
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
