# 博客数据迁移到Supabase

这个项目包含将本地博客数据从JavaScript文件迁移到Supabase数据库的工具。

## 步骤

### 1. 提取博客数据
运行以下命令将blogs.js中的数据提取为CSV格式：
```
python export_blogs_to_csv.py
```
这将创建一个名为`blogs_for_supabase.csv`的文件。

### 2. 设置Supabase
1. 在Supabase中创建一个新表`blogs`，包含以下字段：
   - blog_id: text (primary key)
   - title: text
   - slug: text
   - excerpt: text
   - publish_date: timestamp with time zone
   - thumbnail: text
   - content: text

2. 从Supabase控制台获取API密钥（Project Settings > API）

### 3. 上传数据到Supabase
有两种方式运行上传脚本：

#### 方式1：使用环境变量（推荐）
在PowerShell中运行：
```powershell
$env:SUPABASE_KEY="your-supabase-key"; node upload_to_supabase.js
```

#### 方式2：直接修改脚本
1. 打开`upload_to_supabase.js`
2. 将`supabaseKey`变量的值替换为您的实际API密钥
3. 运行：
```
node upload_to_supabase.js
```

### 4. 更新前端代码
上传完成后，您需要修改前端代码以从Supabase而不是本地文件加载博客数据。

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
