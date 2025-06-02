import Icon from "@/components/ui/icon";

const EmptyState = () => {
  return (
    <div className="text-center py-12">
      <Icon name="FileText" size={64} className="mx-auto text-slate-600 mb-4" />
      <h3 className="text-xl font-semibold text-slate-400 mb-2">
        Новости не найдены
      </h3>
      <p className="text-slate-500">
        Попробуйте изменить фильтры или поисковый запрос
      </p>
    </div>
  );
};

export default EmptyState;
