# UI-DEMO

## About
基于Vue.js的UI组件

## Project setup
### 安装依赖
```
npm install
```

### 编译启动服务器并热更新进行开发
```
npm run serve
```

### 打包
```
npm run build
```

### 语法检查并fix
```
npm run lint
```

### 语法检查es并fix
```
npm run lint:es
```

### 语法检查scss文件并fix
```
npm run lint:style
```

### 单元测试
```
npm run test
```

### 生成各组件说明文档
```
npm run doc
```

### 发布包至 [NPM](https://www.npmjs.com/)
```
npm run publish
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

## Type Defination
TypeScript类型定义文件``“.d.ts"``，用于使用TypeScript项目使用组件库。暂不需要生成。

TO DO

## Build
在``build``文件夹中存放构建配置文件。

js总包用vue-cli lib模式默认配置打包，各组件js用webpack单独打包，配置在[webpack.components.js](build/webpack.components.js)文件中。

css用gulp打包，配置在[gulp.css.js](build/gulp.css.js)文件中。

``dist``文件夹存放构建后的文件。``dist/libs``文件夹中是组件单独打包文件。

## Docs
使用``@vuese/cli``生成组件说明。配置文件是[vuese.config.js](vuese.config.js)

运行``npm run doc``命令可自动生成组件说明。

文档说明在docs文件夹中。

写法参照示例组件中的注释。

更多请参考[@vuese/cli官方文档](https://vuese.org/cli/)

## License
[MIT](http://opensource.org/licenses/MIT)
