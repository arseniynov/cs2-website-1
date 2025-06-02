import React from "react";

const ContactHeader = () => {
  return (
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
  );
};

export default ContactHeader;
