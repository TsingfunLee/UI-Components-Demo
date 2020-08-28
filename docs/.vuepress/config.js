module.exports = {
  title: 'UI组件官网',
  description: 'UI组件库',
  port: 8888,
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: '更多', link: '/more/' }
    ],
    sidebar: {     
      '/components/': [
        ['button', 'Button'],
        'message'
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
    require('./plugin/genDemo.js')
  ]
}