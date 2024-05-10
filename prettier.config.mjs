/** @type {import('prettier').Config} */
const config = {
  trailingComma: "all",
  printWidth: 80,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  pluginSearchDirs: false,
};

export default config;
