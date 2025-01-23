import { client } from '@/libs/client';
import { notFound } from 'next/navigation';

const BlogDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  try {
    const blog = await client.get({
      endpoint: 'blogs',
      contentId: id,
    });

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <div className="mb-4">
          { 
            blog.eyecatch ? (
              <img src={blog.eyecatch.url} alt={blog.title} className="w-full max-h-96 object-cover" />
            ) : (
              <div className="h-96 bg-base-200" />
            )
          }
        </div>
        <div className="prose max-w-none" 
             dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    );
  } catch (error) {
    notFound();
  }
};

export default BlogDetailPage;
