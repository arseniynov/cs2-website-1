import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { NewsArticle } from "@/data/newsData";

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard = ({ article }: NewsCardProps) => {
  return (
    <Card className="bg-slate-800 border-slate-700 overflow-hidden group hover:border-orange-500 transition-colors">
      <div className="aspect-video overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="bg-slate-700 text-slate-300">
            {article.category}
          </Badge>
          <span className="text-xs text-slate-400">{article.readTime}</span>
        </div>
        <CardTitle className="text-lg text-white hover:text-orange-400 transition-colors cursor-pointer line-clamp-2">
          {article.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-slate-300 text-sm mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400">{article.date}</span>
          <Button
            size="sm"
            variant="ghost"
            className="text-orange-400 hover:text-orange-300 hover:bg-slate-700 p-2"
          >
            <Icon name="ExternalLink" size={14} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
