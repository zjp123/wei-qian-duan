const path = require('path');
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { VueLoaderPlugin } = require('vue-loader')
const packageName = 'vue3'

function resolve(dir) {
  return path.join(__dirname, dir);
}

const port = 9005;

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  publicPath: 'http://localhost:9005',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    disableHostCheck: true,
    port,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      extensions: ['.vue', '.ts', '.js'],
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      // libraryExport: 'default',
      filename: 'vue3.js',
      library: `${packageName}`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
    module: { //这个节点用于配置所有的第三方模块加载器
      rules: [
        // {test: /\.css$/, use:['vue-style-loader','css-loader']},//配置处理.css文件的第三方处理规则
        // // {test: /\.less$/, use: ["vue-style-loader",'css-loader','less-loader']},
        // {test: /\.scss$/, use: ["vue-style-loader ",'css-loader','sass-loader']},
        {test:/\.js$/, use:'babel-loader', exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )},
        {test: /\.vue$/, use: 'vue-loader'}
      ]
    },
    // plugins:[new VueLoaderPlugin()]
  },
};
