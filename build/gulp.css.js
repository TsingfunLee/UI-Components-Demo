const { series, parallel, src, dest} = require('gulp')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')
// const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

// 全部编译
function all () {
  return src('../src/style/index.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(dest('../dist/style'))
}

// 各组件单独编译
function css (){
  return src('../src/style/components/*.scss')
    .pipe(sass.sync())   
    .pipe(autoprefixer())    
    .pipe(cleanCSS())
    .pipe(dest('../dist/style'))
}

// 拷贝字体文件
function font(){
  return src('../src/style/fonts/*')
    .pipe(dest('../dist/style/fonts'))
}

exports.default = parallel(all, css, font)