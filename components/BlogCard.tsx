import { Blog } from '@/libs/client';
import Link from 'next/link';

type Props = {
  blog: Blog;
};

export const BlogCard = ({ blog }: Props) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  };

  return (
    <Link href={`/blogs/${blog.id}`}>
      <div className="card bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-200">
        <figure>
          {
            blog.eyecatch ? (
              <img src={blog.eyecatch.url} alt={blog.title} className="w-full h-48 object-cover" />
            ) : (
              <div className="h-48 bg-base-200" />
            )
          }
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p className="text-gray-500">{formatDate(blog.createdAt)}</p>
        </div>
      </div>
    </Link>
  );
};
