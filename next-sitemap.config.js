/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://chelanvalley-ageless.vercel.app", // your live site URL
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin", "/404"], // pages you don’t want indexed
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
