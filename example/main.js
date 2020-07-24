import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import UI from '@/index.js'
import '@/style/index.scss'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(UI)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/button',
    component: (resolve)=> require(['./routers/button.vue'], resolve)},{
    path: '/message',
    component: (resolve)=> require(['./routers/message.vue'], resolve)
  }]
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
