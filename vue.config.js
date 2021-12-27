const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: true,
  productionSourceMap: false,
  css: {
    sourceMap: false,
    extract: false,
    loaderOptions: {
      sass: {
        // Whatever you do, do not remove the semicolon in the import statement below, or 💥
        additionalData: '@import "@/styles/config_assets_vars.scss";',
      },
    },
  },
});
