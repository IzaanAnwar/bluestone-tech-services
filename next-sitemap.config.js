/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://blustonetech.com/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/admin/*"],
};
