module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
           @import "@/assets/style/layout.scss";
        `
      }
    }
  },
  publicPath: "./",
  devServer: {
    disableHostCheck: true,
    https: true,
  }
};