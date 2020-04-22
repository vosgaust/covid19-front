const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV == "production" ? "/admin" : "/",
  configureWebpack: {
    optimization: {
      namedChunks: false
    },
    mode: process.env.NODE_ENV || "development",
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9001,
      liveReload: true,
      open: true,
      disableHostCheck: true
    }
  }
};
