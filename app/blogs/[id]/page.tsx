import { client } from '@/libs/client';
import { notFound } from 'next/navigation';
import Image from 'next/image';

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
              <Image
                src={blog.eyecatch.url}
                alt={blog.title}
                width={1200}
                height={630}
                className="w-full max-h-96 object-cover"
              />
            ) : (
              <div className="h-96 bg-base-200" />
            )
          }
        </div>
        <div className="prose max-w-none" 
             dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    );
  } catch (err) {
    console.error('Blog detail fetch error:', err);
    notFound();
  }
};

export default BlogDetailPage;
