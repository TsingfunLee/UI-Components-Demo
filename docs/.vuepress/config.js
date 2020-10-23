const container = require('markdown-it-container')
const prism = require('prismjs')
const path = require('path')

module.exports = {
  title: 'UI组件官网',
  description: 'UI组件库',
  host: 'localhost',
  port: 8888,
  dest: path.resolve(__dirname, '../../site/'),
  extraWatchFiles: [],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: '更多', link: '/more/' }
    ],
    sidebar: {     
      '/components/': [
        'button/',
        'message/'
      ],
      // fallback
      '/': [
        ['/', '主页'],
        '/guide/',
        ['/more/', '更多']
      ],
    }
  },
  plugins: [
    [
      // 在根组件中混入全局组件、方法或其他代码
      require('./plugin/register-plugin.js')
    ]
  ],
  extendMarkdown: md => {
    md.use(container, 'demo', { 
      render: (tokens, idx) => { 
        let code = ''; 

        if(tokens[idx].nesting === 1){
          for(let i = idx + 1; ; i++){
            if(tokens[i].type === 'html_block'){
              code += tokens[i].content
            }else{
              break;
            }
          }
          code = prism.highlight(code, prism.languages['markup'], 'markup')

          return `<demo-block>
            <template v-slot:source>
              <pre v-pre class="language-vue"><code>${code}</code></pre>
            </template>
            <template v-slot:example>`
        }else{     
          return `</template></demo-block>`
        }
      }
    })
  },
  configureWebpack: (config, isServer) => {
    if(!isServer){
      return {
        devServer: {
          hot: true,
          open: true,
          hotOnly: false,
        },
        module: {
          rules: [
            {
              test: /\.md$/,
              include: [
                path.resolve(__dirname, '../components')
              ],
              exclude: [
                path.resolve(__dirname, '../components/README.md')
              ],
              use: [
                {
                  loader: path.resolve(__dirname, './loader/api-loader.js')
                },         
              ]
            }
          ]
        }
      }
    }
  }
}