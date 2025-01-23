import { QiitaArticleCard } from '@/components/QiitaArticleCard';
import type { QiitaArticle } from '@/components/QiitaArticleCard';

const ArticlesPage = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/qiita?limit=20`, {
    cache: 'no-store'
  });
  const articles = await response.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">個人記事一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article: QiitaArticle, index: number) => (
          <QiitaArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
