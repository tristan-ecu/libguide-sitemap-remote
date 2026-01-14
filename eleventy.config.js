const { execSync } = require('child_process');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.on('eleventy.after', () => {
    execSync(`npx pagefind --site _site --output-path _site/pagefind --glob \"**/*.html\"`, { encoding: 'utf-8' })
  });
};
