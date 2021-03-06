# UI-DEMO

## About
基于Vue.js的UI组件

## NPM Script
``npm run``
```
start //编译启动服务器并热更新进行开发
build:js //打包js文件
build:css //打包css文件
build:site // 生成说明文档网站
build //打包
lint:es //语法检查es并fix
lint:style //语法检查scss文件并fix
lint //语法检查并fix
test //单元测试
publish //发布包至NPM
cm // 提交代码至git
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Development
``src/components``文件夹中创建组件,``src/style``文件夹中创建对应组件样式文件。样式和组件分离，方便管理。

每个组件分别单独导出注册，样式文件也需要各自引入公共变量等通用文件。方便单独打包，便于按需引入。

组件在``src/index.js``中进行注册。

``example``文件夹中创建文件进行组件预览。

## Unit Test
使用Jest进行单元测试。

Jest配置在[jest.config.js](./jest.config.js)中。

在``tests/unit``文件夹中创建单元测试文件，命名为``xxxx.spec.js``

组件单元测试主要有以下几个部分：
+ 组件渲染，快照对比

+ props传递

- 回调函数执行

- 模拟事件触发，检测核心交互逻辑

可在[Vue Test Utils](https://vue-test-utils.vuejs.org/zh/)中查看更多测试技巧。

## Type Defination
TypeScript类型定义文件``“.d.ts"``，用于使用TypeScript项目使用组件库。暂不需要生成。

TO DO

## Build
在``build``文件夹中存放构建配置文件。

js用webpack打包，配置在[webpack.components.js](build/webpack.components.js)文件中。

css用gulp打包，配置在[gulp.css.js](build/gulp.css.js)文件中。

``dist``文件夹存放构建后的文件。

## Docs
文档使用VuePress生成静态网页。参考[vuepress官方文档](https://vuepress.vuejs.org/zh/)。

``docs``文件夹中存放说明文档，用markdown格式编写。
``.vupress``文件夹中存放VuePress配置文件。

### MarkDown
+ 在``:::``中编写示例代码，会自动生成样式
+ 在文档末尾加上``## API``，会自动在文档末尾插入API说明

API文档由@vuese解析生成，书写方式可参考示例。更多请参考[@vuese/cli官方文档](https://vuese.org/cli/)

## Commit
使用commitizen工具规范commit message。

## License
[MIT](http://opensource.org/licenses/MIT)
