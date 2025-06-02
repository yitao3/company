import Head from "next/head";
import { useState } from "react";
import CTA from "../components/ui/CTA";
import BlogCard from "../components/ui/BlogCard";

// 本地博客数据
const blogs = [
  {
    id: "1",
    title: "How to Register a Company in Hong Kong",
    slug: "how-to-register-company-hong-kong",
    excerpt: "A comprehensive guide on registering your company in Hong Kong, including required documents and procedures.",
    publishDate: "2024-03-20",
    thumbnail: "/img/benefit-one.png"
  },
  {
    id: "2",
    title: "Understanding China's Business Environment",
    slug: "understanding-china-business-environment",
    excerpt: "Key insights into China's business landscape, market opportunities, and regulatory framework.",
    publishDate: "2024-03-19",
    thumbnail: "/img/benefit-two.png"
  },
  {
    id: "3",
    title: "Essential Documents for Company Registration",
    slug: "essential-documents-company-registration",
    excerpt: "A checklist of required documents for registering a company in Hong Kong and Mainland China.",
    publishDate: "2024-03-18",
    thumbnail: "/img/hero.png"
  },
  {
    id: "4",
    title: "Understanding Business Licenses in China",
    slug: "understanding-business-licenses-china",
    excerpt: "A guide to different types of business licenses and permits required in Mainland China.",
    publishDate: "2024-03-17",
    thumbnail: "/img/benefit-one.png"
  },
  {
    id: "5",
    title: "Hong Kong vs Mainland China: Business Setup Comparison",
    slug: "hong-kong-vs-mainland-china-comparison",
    excerpt: "A detailed comparison of business setup processes, costs, and requirements between Hong Kong and Mainland China.",
    publishDate: "2024-03-16",
    thumbnail: "/img/benefit-two.png"
  },
  {
    id: "6",
    title: "Tax Considerations for Foreign Companies in China",
    slug: "tax-considerations-foreign-companies-china",
    excerpt: "Understanding tax obligations, incentives, and compliance requirements for foreign companies operating in China.",
    publishDate: "2024-03-15",
    thumbnail: "/img/hero.png"
  }
];

export async function getStaticProps() {
  return {
    props: {
      blogs: blogs,
    },
  };
}

export default function Blog({ blogs }) {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  
  // 获取当前页的博客文章
  const currentBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  // 处理页码点击
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Blog - FormEasily</title>
        <meta name="description" content="Latest insights and guides about company registration in Hong Kong and Mainland China" />
      </Head>

      <main>
        <div className="custom-screen">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
              FormEasily Blog
            </h1>
            <p className="mt-4 text-gray-600">
              Expert insights and guides for company registration in Hong Kong and Mainland China
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* 分页控制 */}
          <div className="mt-12 flex justify-center items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-200`}
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === index + 1
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-200`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-200`}
            >
              Next
            </button>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <CTA />
    </>
  );
} 