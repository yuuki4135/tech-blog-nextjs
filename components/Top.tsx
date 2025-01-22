"use client"
import { Blog } from '@/libs/client';
import { BlogCard } from '@/components/BlogCard';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export const Top = () => {
  const [blogs, setBlogs] = React.useState<Blog[]>([]);
  const [limit, setLimit] = React.useState(4);
  const router = useRouter();

  React.useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`/api/blogs?limit=${limit}`);
        const data = await response.json();
        setBlogs(data.contents);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };

    fetchBlogs();
  }, [limit]);

  const handleShowMore = () => {
    router.push('/blogs');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button 
          className="btn btn-primary"
          onClick={handleShowMore}
        >
          もっと見る
        </button>
      </div>
    </div>
  );
};
