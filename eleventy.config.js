const { execSync } = require('child_process');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.on('eleventy.after', () => {
    execSync(`npx pagefind --source _site --glob \"**/*.html\" --base-path /libguide-sitemap-remote/`, { encoding: 'utf-8' })
  });
};
