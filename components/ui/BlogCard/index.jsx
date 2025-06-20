import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.slug}`} className="block">
      <article className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 h-128 flex flex-col">
        <div className="relative h-64">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="text-sm text-gray-500 mb-2">
            {new Date(blog.publish_date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {blog.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
            {blog.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard; 