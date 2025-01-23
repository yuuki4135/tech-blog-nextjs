"use client"
import { Blog } from '@/libs/client';
import { BlogCard } from '@/components/BlogCard';
import { QiitaArticleCard } from '@/components/QiitaArticleCard';
import type { QiitaArticle } from '@/components/QiitaArticleCard';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export const Top = () => {
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [qiitaArticles, setQiitaArticles] = React.useState<QiitaArticle[]>([]);
  const router = useRouter();

  React.useEffect(() => {
    const fetchContents = async () => {
      try {
        // ブログ記事の取得
        const blogResponse = await fetch('/api/blogs?limit=3');
        const blogData = await blogResponse.json();
        setBlogs(blogData.contents);

        // Qiita記事の取得
        const qiitaResponse = await fetch('/api/qiita?limit=3');
        const qiitaData = await qiitaResponse.json();
        setQiitaArticles(qiitaData);
      } catch (error) {
        console.error('Failed to fetch contents:', error);
      }
    };

    fetchContents();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* ブログ記事セクション */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">ブログ記事</h2>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => router.push('/blogs')}
          >
            もっと見る
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>

      {/* Qiita記事セクション */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Qiita記事</h2>
          <button 
            className="btn btn-primary btn-sm"
            onClick={() => router.push('/articles')}
          >
            もっと見る
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qiitaArticles.map((article, index) => (
            <QiitaArticleCard key={index} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};
