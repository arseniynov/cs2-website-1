import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { categories } from "@/data/newsData";

interface NewsFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const NewsFilters = ({
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
}: NewsFiltersProps) => {
  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Icon
            name="Search"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
            size={20}
          />
          <Input
            placeholder="Поиск новостей..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-slate-400"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "border-slate-600 text-slate-300 hover:bg-slate-800"
            }
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default NewsFilters;
