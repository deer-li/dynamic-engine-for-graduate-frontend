const TerserPlugin = require('terser-webpack-plugin')
//TerserPlugin-在项目打包的时候，处理js代码的压缩和混淆
module.exports = {
  productionSourceMap: false,
  publicPath: './',
  configureWebpack: config => {
    let plugins = [
      new TerserPlugin({
        terserOptions: {
          compress: {
            warnings: false,
            drop_debugger: false,
            drop_console: true,
          },
        },
        sourceMap: false,
        parallel: true,
      })
    ]
    if (process.env.NODE_ENV !== 'development') {
      config.plugins = [...config.plugins, ...plugins]
    }
  },
  devServer: {
    port: 8080,
  }
};