import Head from "next/head";
import { useState } from "react";
import CTA from "../components/ui/CTA";
import BlogCard from "../components/ui/BlogCard";
import { getAllBlogs } from '../lib/supabase';

export async function getServerSideProps({ query }) {
  const page = parseInt(query.page) || 1;
  const pageSize = 6;
  
  // 从Supabase获取博客数据
  const { blogs, total } = await getAllBlogs(page, pageSize);
  
  return {
    props: {
      blogs: blogs || [],
      total,
      currentPage: page,
      pageSize,
      title: "Blog - FormEasily"
    }
  };
}

export default function Blog({ blogs, total, currentPage, pageSize }) {
  const totalPages = Math.ceil(total / pageSize);

  return (
    <>
      <Head>
        <title>Blog - FormEasily</title>
        <meta name="description" content="Latest insights and guides about company registration in Hong Kong and Mainland China" />
      </Head>

      <main className="pt-20">
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
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          {/* 分页控制 */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center space-x-2">
              <a
                href={`/blog?page=${currentPage - 1}`}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-200`}
              >
                Previous
              </a>
              
              {[...Array(totalPages)].map((_, index) => (
                <a
                  key={index + 1}
                  href={`/blog?page=${index + 1}`}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  } border border-gray-200`}
                >
                  {index + 1}
                </a>
              ))}

              <a
                href={`/blog?page=${currentPage + 1}`}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-200`}
              >
                Next
              </a>
            </div>
          )}
        </div>
      </main>

      {/* CTA Section */}
      <CTA />
    </>
  );
} 