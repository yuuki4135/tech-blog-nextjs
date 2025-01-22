import { Blog } from '@/libs/client';
import Link from 'next/link';

type Props = {
  blog: Blog;
};

export const BlogCard = ({ blog }: Props) => {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <div className="card bg-base-100 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-200">
        <figure>
          <img src={blog.thumbnail.url} alt={blog.title} className="w-full h-48 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p className="text-gray-500">{new Date(blog.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </Link>
  );
};
