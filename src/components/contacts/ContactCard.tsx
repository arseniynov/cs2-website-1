import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ContactCardProps {
  icon: string;
  iconColor: string;
  bgColor: string;
  title: string;
  value: string;
  description: string;
}

const ContactCard = ({
  icon,
  iconColor,
  bgColor,
  title,
  value,
  description,
}: ContactCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`${bgColor} p-3 rounded-lg`}>
            <Icon name={icon} size={24} className={iconColor} />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
            <p className="text-slate-600">{value}</p>
            <p className="text-sm text-slate-500 mt-1">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
