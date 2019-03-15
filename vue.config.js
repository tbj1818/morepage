let pageMethod = require('./util/getPages.js');
pages = pageMethod.pages();
module.exports = {
    pages,
    // 基本路径
  baseUrl: './',
  // 输出文件目录
  outputDir: 'dist',
  lintOnSave:false,  // 关闭eslint
  // webpack-dev-server 相关配置
  devServer: {
    port: 8888,
  },
}