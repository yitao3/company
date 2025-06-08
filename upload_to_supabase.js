// upload_to_supabase.js
// 用于将CSV中的博客数据上传到Supabase数据库

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const csv = require('csv-parser');

// Supabase配置
const supabaseUrl = 'https://bmykhyrmuvtforznfnst.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJteWtoeXJtdXZ0Zm9yem5mbnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMzY0NzQsImV4cCI6MjA2NDkxMjQ3NH0.3uWXeigA4C_BgRb5stG8UW1Sumh1Oe3KeBjikwNrmDs';

// 初始化Supabase客户端
const supabase = createClient(supabaseUrl, supabaseKey);

// 读取CSV文件并上传到Supabase
async function uploadBlogsToSupabase() {
  console.log('开始上传博客数据到Supabase...');
  
  const blogs = [];
  let successCount = 0;
  let failCount = 0;
  
  // 读取CSV文件
  fs.createReadStream('blogs_for_supabase.csv')
    .pipe(csv())
    .on('data', (data) => blogs.push(data))
    .on('end', async () => {
      console.log(`已读取 ${blogs.length} 篇博客，准备上传...`);
      
      // 逐条上传博客数据
      for (const blog of blogs) {
        try {
          // 插入数据到Supabase的blog表
          const { data, error } = await supabase
            .from('blog')
            .insert([
              {
                blog_id: blog.blog_id,
                title: blog.title,
                slug: blog.slug,
                excerpt: blog.excerpt,
                publish_date: blog.publish_date,
                thumbnail: blog.thumbnail,
                content: blog.content
              }
            ]);
          
          if (error) {
            console.error(`博客 ${blog.blog_id} 上传失败:`, error);
            failCount++;
          } else {
            console.log(`博客 ${blog.blog_id} 上传成功`);
            successCount++;
          }
        } catch (err) {
          console.error(`处理博客 ${blog.blog_id} 时出错:`, err);
          failCount++;
        }
        
        // 添加短暂延迟以避免请求过快
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      console.log(`上传完成! 成功: ${successCount}, 失败: ${failCount}`);
    });
}

// 执行上传
uploadBlogsToSupabase(); 
 