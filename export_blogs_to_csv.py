import csv
import re
import os
from datetime import datetime

# 输出文件路径
output_csv = 'blogs_for_supabase.csv'

# 直接从blogs.js文件提取博客数据
def extract_blogs_data():
    blogs_data = []
    try:
        with open('data/blogs.js', 'r', encoding='utf-8') as file:
            content = file.read()
            
            # 移除JS部分，只保留数组内容
            blogs_content = re.search(r'const blogs = \[([\s\S]*?)\];', content, re.DOTALL)
            if not blogs_content:
                raise Exception("无法在blogs.js中找到blogs数组")
                
            blogs_content = blogs_content.group(1)
            
            # 用正则表达式提取每个博客条目
            # 更灵活的匹配模式，处理各种格式的博客条目
            blog_entries = re.findall(r'\{\s*id:\s*"([^"]+)".*?title:\s*"([^"]+)".*?slug:\s*"([^"]+)".*?excerpt:\s*"([^"]*)".*?publishDate:\s*"([^"]+)".*?thumbnail:\s*"([^"]+)".*?content:\s*`([\s\S]*?)`\s*\}', blogs_content, re.DOTALL)
            
            for entry in blog_entries:
                blog = {
                    'id': entry[0],
                    'title': entry[1],
                    'slug': entry[2],
                    'excerpt': entry[3],
                    'publishDate': entry[4],
                    'thumbnail': entry[5],
                    'content': entry[6]
                }
                blogs_data.append(blog)
            
            # 检查是否找到了预期数量的博客
            print(f"成功提取 {len(blogs_data)} 篇博客")
            
            # 如果提取数量不足预期，打印一些调试信息
            if len(blogs_data) < 65:
                print(f"警告：预期提取65篇博客，但只找到 {len(blogs_data)} 篇")
                
                # 提取所有ID以检查缺失的条目
                all_ids = [blog['id'] for blog in blogs_data]
                print(f"已提取的博客ID: {sorted(all_ids)}")
                
                # 尝试使用更宽松的模式再次匹配
                print("尝试使用备用匹配模式...")
                alternative_entries = re.findall(r'\{\s*id:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?content:\s*`([\s\S]*?)`\s*\}', blogs_content, re.DOTALL)
                print(f"备用模式找到 {len(alternative_entries)} 篇博客")
            
            return blogs_data
            
    except Exception as e:
        print(f"提取博客数据时出错: {e}")
        return None

# 将博客数据转换为CSV格式
def convert_to_csv(blogs_data):
    # 定义CSV头部
    headers = [
        'blog_id',        # 原始博客ID
        'title',          # 博客标题
        'slug',           # URL友好的slug
        'excerpt',        # 博客摘要
        'publish_date',   # 发布日期 (YYYY-MM-DD格式)
        'thumbnail',      # 缩略图路径
        'content'         # 完整博客内容
    ]
    
    with open(output_csv, 'w', encoding='utf-8', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(headers)
        
        for blog in blogs_data:
            # 转换日期格式为Supabase要求的格式
            try:
                date_obj = datetime.strptime(blog['publishDate'], '%Y-%m-%d')
                formatted_date = date_obj.strftime('%Y-%m-%d %H:%M:%S')
            except ValueError:
                formatted_date = blog['publishDate']
                print(f"日期格式转换警告: {blog['publishDate']} 对于博客ID {blog['id']}")
            
            # 写入一行数据
            writer.writerow([
                blog['id'],
                blog['title'],
                blog['slug'],
                blog['excerpt'],
                formatted_date,
                blog['thumbnail'],
                blog['content']
            ])
    
    print(f"成功导出 {len(blogs_data)} 篇博客到 {output_csv}")

def main():
    print("开始从blogs.js导出数据到CSV...")
    blogs_data = extract_blogs_data()
    
    if blogs_data and len(blogs_data) > 0:
        convert_to_csv(blogs_data)
        print(f"CSV文件已生成: {os.path.abspath(output_csv)}")
    else:
        print("无法导出数据，请检查错误信息")

if __name__ == "__main__":
    main() 
 