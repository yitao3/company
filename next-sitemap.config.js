const blogs = require('./data/blogs').default || require('./data/blogs');

module.exports = {
  siteUrl: 'https://www.formeasily.com', // TODO: 替换为你的正式域名
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const staticPaths = [
      await config.transform(config, '/'),
      await config.transform(config, '/blog'),
      await config.transform(config, '/get-started'),
      await config.transform(config, '/register-company-hong-kong'),
      await config.transform(config, '/register-company-chinese-mainland'),
    ];
    // 动态博客详情页
    const blogPaths = blogs.map(async (blog) =>
      await config.transform(config, `/blog/${blog.slug}`)
    );
    return [
      ...staticPaths,
      ...(await Promise.all(blogPaths)),
    ];
  },
}; 