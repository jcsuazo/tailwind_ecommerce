const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    // require('tailwindcss'),
    require('autoprefixer'),
  ],
};
