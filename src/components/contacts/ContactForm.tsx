import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за обращение! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-2xl font-oswald">Обратная связь</CardTitle>
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
  );
};

export default ContactForm;
