// test_supabase_blog.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://bmykhyrmuvtforznfnst.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJteWtoeXJtdXZ0Zm9yem5mbnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMzY0NzQsImV4cCI6MjA2NDkxMjQ3NH0.3uWXeigA4C_BgRb5stG8UW1Sumh1Oe3KeBjikwNrmDs';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function main() {
  const { data, error } = await supabase.from('blog').select('*');
  if (error) {
    console.error('查询出错:', error);
  } else {
    console.log('blog表数据:', data);
  }
}

main(); 
 