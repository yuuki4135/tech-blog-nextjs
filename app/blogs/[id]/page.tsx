import { client } from '@/libs/client';
import { notFound } from 'next/navigation';

const BlogDetailPage = async ({ params }: { params: { id: string } }) => {
  try {
    const blog = await client.get({
      endpoint: 'blogs',
      contentId: params.id,
    });

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <div className="mb-4">
          <img src={blog.thumbnail.url} alt={blog.title} className="w-full max-h-96 object-cover" />
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
