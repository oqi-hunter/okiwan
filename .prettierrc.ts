import * as prettierPluginTailwindcss from 'prettier-plugin-tailwindcss';

export default {
  tailwindStylesheet: './src/style.css',
  plugins: [prettierPluginTailwindcss],
  singleQuote: true,
  semi: true,
};
