import React from "react";
import ContactCard from "./ContactCard";
import SocialMediaSection from "./SocialMediaSection";

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: "Mail",
      iconColor: "text-orange-500",
      bgColor: "bg-orange-100",
      title: "Email",
      value: "novopashin0307@gmail.com",
      description: "Ответим в течение 24 часов",
    },
    {
      icon: "MessageCircle",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-100",
      title: "Discord",
      value: "@vamapes",
      description: "Присоединяйтесь к нашему сообществу",
    },
    {
      icon: "MessageSquare",
      iconColor: "text-purple-500",
      bgColor: "bg-purple-100",
      title: "Telegram",
      value: "@novacs0",
      description: "Быстрая связь и обновления",
    },
  ];

  return (
    <div className="space-y-8">
      {contactMethods.map((contact, index) => (
        <ContactCard key={index} {...contact} />
      ))}
      <SocialMediaSection />
    </div>
  );
};

export default ContactInfo;
