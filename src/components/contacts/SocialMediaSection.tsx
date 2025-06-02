import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SocialMediaSection = () => {
  return (
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
            Подписывайтесь на наши социальные сети для получения последних
            новостей
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
  );
};

export default SocialMediaSection;
