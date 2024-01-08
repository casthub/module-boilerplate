const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const postcssUrl = require('postcss-url');
const tailwind = require('tailwindcss');
const tailwindNesting = require('tailwindcss/nesting');
const tailwindConfig = require('./tailwind.config.js');

module.exports = {
  plugins: [postcssImport, tailwindNesting, postcssUrl, tailwind(tailwindConfig), autoprefixer],
};
