import { createClient } from '@supabase/supabase-js';

// Supabase配置
const supabaseUrl = 'https://bmykhyrmuvtforznfnst.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJteWtoeXJtdXZ0Zm9yem5mbnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMzY0NzQsImV4cCI6MjA2NDkxMjQ3NH0.3uWXeigA4C_BgRb5stG8UW1Sumh1Oe3KeBjikwNrmDs';

// 创建Supabase客户端
export const supabase = createClient(supabaseUrl, supabaseKey);

// 获取所有博客
export async function getAllBlogs(page = 1, pageSize = 6) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error, count } = await supabase
    .from('blog')
    .select('id, title, slug, excerpt, thumbnail, publish_date', { count: 'exact' })
    .order('publish_date', { ascending: false })
    .range(from, to);
  
  if (error) {
    console.error('Error fetching blogs:', error);
    return { blogs: [], total: 0 };
  }
  
  return { 
    blogs: data || [], 
    total: count || 0 
  };
}

// 获取指定数量的最新博客
export async function getRecentBlogs(limit = 10) {
  const { data, error } = await supabase
    .from('blog')
    .select('*')
    .limit(limit);
  
  if (error) {
    console.error('Error fetching recent blogs:', error);
    return [];
  }
  
  return data || [];
}

// 通过slug获取单个博客
export async function getBlogBySlug(slug) {
  const { data, error } = await supabase
    .from('blog')
    .select('id, title, slug, excerpt, thumbnail, publish_date, content')
    .eq('slug', slug)
    .single();
  
  if (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error);
    return null;
  }
  
  return data;
}

// 通过ID获取单个博客
export async function getBlogById(id) {
  const { data, error } = await supabase
    .from('blog')
    .select('*')
    .eq('blog_id', id)
    .single();
  
  if (error) {
    console.error(`Error fetching blog with ID ${id}:`, error);
    return null;
  }
  
  return data;
} 
 