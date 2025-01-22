import { BlogCard } from '@/components/BlogCard';
import { client } from '@/libs/client';

const BlogsPage = async () => {
  const data = await client.get({
    endpoint: 'blogs',
  });

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.contents.map((blog: any) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
