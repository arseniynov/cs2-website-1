import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { NewsArticle } from "@/data/newsData";

interface FeaturedNewsCardProps {
  article: NewsArticle;
}

const FeaturedNewsCard = ({ article }: FeaturedNewsCardProps) => {
  return (
    <Card className="bg-slate-800 border-slate-700 overflow-hidden group hover:border-orange-500 transition-colors">
      <div className="aspect-video overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="bg-orange-500 text-white">
            {article.category}
          </Badge>
          <span className="text-sm text-slate-400">{article.readTime}</span>
        </div>
        <CardTitle className="text-xl text-white hover:text-orange-400 transition-colors cursor-pointer">
          {article.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-300 mb-4">{article.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">{article.date}</span>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
            Читать далее
            <Icon name="ArrowRight" size={16} className="ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedNewsCard;
