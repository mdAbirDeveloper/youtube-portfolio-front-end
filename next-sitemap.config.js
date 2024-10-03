// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://shahjalal.codeshinetechnology.com/', // Replace with your actual website URL
    generateRobotsTxt: true, // (Optional) Generate robots.txt file
    changefreq: 'daily', // (Optional) Change frequency of your pages
    priority: 0.7, // (Optional) Priority of your pages
    sitemapSize: 7000, // (Optional) Limit the number of URLs per sitemap file
    exclude: ['/admin/*'], // (Optional) Exclude specific routes or patterns
    // Additional configurations can be added here
  };
  