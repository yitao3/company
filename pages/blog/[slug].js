import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import blogs from '../../data/blogs';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export async function getStaticPaths() {
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blog },
  };
}

const BlogDetail = ({ blog }) => {
  return (
    <>
      <Head>
        <title>{blog.title} - FormEasily</title>
        <meta name="description" content={blog.excerpt} />
      </Head>

      <main className="custom-screen pt-20">
        <div className="max-w-3xl mx-auto">
          <div className="relative h-64 mb-8">
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
          <div className="text-sm text-gray-500 mb-6">
            {new Date(blog.publishDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                h2: ({node, ...props}) => (
                  <h2 className="text-2xl font-bold text-[#4F46E5] mb-6" {...props} />
                ),
                h3: ({node, ...props}) => (
                  <h3 className="text-xl font-bold text-[#4F46E5] mb-4" {...props} />
                ),
                p: ({node, ...props}) => (
                  <p className="mb-6" {...props} />
                ),
                ul: ({node, ...props}) => (
                  <ul className="list-disc pl-6 mb-6" {...props} />
                ),
                ol: ({node, ...props}) => (
                  <ol className="list-decimal pl-6 mb-6" {...props} />
                ),
                li: ({node, ...props}) => (
                  <li className="mb-2" {...props} />
                ),
                div: ({node, ...props}) => (
                  <div {...props} />
                ),
                a: ({node, ...props}) => (
                  <Link href={props.href} {...props} />
                ),
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
          <div className="mt-8">
            <Link href="/blog" className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center">
              Back to Blog
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          </div>
          <div className="mt-12 text-center bg-indigo-600 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Get started with FormEasily today</h2>
            <p className="text-indigo-100 mb-6">
              Register your business effortlessly with expert support. Follow industry best practices, eliminate complexities, and launch on time with our seamless registration process for Hong Kong and Mainland China.
            </p>
            <Link href="/get-started" className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogDetail; 