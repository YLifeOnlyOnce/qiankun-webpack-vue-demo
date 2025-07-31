const { name } = require('./package');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: `/microapps/${name}`,
  devServer: {
    // 因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`, // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    },
  },
};