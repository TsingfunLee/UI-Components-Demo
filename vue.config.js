'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports={
  publicPath: '',
  outputDir:'dist',
  devServer: {
    port: 2333,
    open: true
  },
  lintOnSave: true,
  configureWebpack: {
    entry: './example/main.js',
    resolve : {
      alias: {
        '@': resolve('src')
      }
    },
    module:{
      rules: [{
        test: /\.scss$/,
        use: [{
          loader: 'sass-loader',
          options: {
            // 你也可以从一个文件读取，例如 `variables.scss`
            // 如果 sass-loader 版本 < 8，这里使用 `data` 字段
            // prependData: `@import './src/style/var';`
            // 新版sass-loader使用`additionalData`
            // additionalData: '@import \'./src/style/common/var\';'    // 公共变量
          }
        }]
      }]
    }
  }
}