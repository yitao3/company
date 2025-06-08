// test_fetch_blogs.js
// 用于测试从Supabase获取博客数据

const { createClient } = require('@supabase/supabase-js');

// Supabase配置
const supabaseUrl = 'https://bmykhyrmuvtforznfnst.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJteWtoeXJtdXZ0Zm9yem5mbnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMzY0NzQsImV4cCI6MjA2NDkxMjQ3NH0.3uWXeigA4C_BgRb5stG8UW1Sumh1Oe3KeBjikwNrmDs';

// 初始化Supabase客户端
const supabase = createClient(supabaseUrl, supabaseKey);

// 测试获取博客数据
async function testFetchBlogs() {
  console.log('正在测试从Supabase获取博客数据...');
  
  try {
    // 1. 读取所有博客
    console.log('1. 尝试读取所有博客:');
    const { data: allBlogs, error: allError } = await supabase
      .from('blog')
      .select('*');
      
    if (allError) {
      console.error('查询所有博客失败:', allError);
    } else {
      console.log(`成功获取到 ${allBlogs ? allBlogs.length : 0} 条博客记录`);
      if (allBlogs && allBlogs.length > 0) {
        console.log('第一条博客:', {
          blog_id: allBlogs[0].blog_id,
          title: allBlogs[0].title,
          slug: allBlogs[0].slug
        });
        console.log('可用字段:', Object.keys(allBlogs[0]));
      }
    }
    
    // 2. 通过blog_id查询特定博客
    console.log('\n2. 通过blog_id查询博客:');
    const { data: blogById, error: byIdError } = await supabase
      .from('blog')
      .select('*')
      .eq('blog_id', '1');
      
    if (byIdError) {
      console.error('通过blog_id查询失败:', byIdError);
    } else {
      console.log(`查询结果: ${blogById ? blogById.length : 0} 条记录`);
      if (blogById && blogById.length > 0) {
        console.log('博客详情:', {
          blog_id: blogById[0].blog_id,
          title: blogById[0].title,
          excerpt: blogById[0].excerpt ? blogById[0].excerpt.substring(0, 50) + '...' : '无摘要'
        });
      }
    }
    
    // 3. 通过slug查询特定博客
    if (allBlogs && allBlogs.length > 0) {
      const testSlug = allBlogs[0].slug;
      console.log(`\n3. 通过slug查询博客 (${testSlug}):`);
      
      const { data: blogBySlug, error: slugError } = await supabase
        .from('blog')
        .select('blog_id, title, slug, excerpt')
        .eq('slug', testSlug);
        
      if (slugError) {
        console.error(`通过slug查询失败:`, slugError);
      } else if (blogBySlug && blogBySlug.length > 0) {
        console.log('查询结果:', blogBySlug[0]);
      } else {
        console.log(`未找到slug为 ${testSlug} 的博客`);
      }
    }
    
  } catch (err) {
    console.error('测试过程中出错:', err);
  }
}

// 执行测试
testFetchBlogs(); 
 