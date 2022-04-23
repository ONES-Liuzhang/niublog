const isSSr = !!process.env.SSR;
const isDev = process.env.NODE_ENV === "development";
const createWebpackConfig = require("./scripts/config");

const webpackConfig = createWebpackConfig(isSSr, isDev);

module.exports = webpackConfig;
