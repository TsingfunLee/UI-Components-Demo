import Button from './components/button'
import Message from './components/message'

const components = [
  Button,
]

const install = (Vue)=>{
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: 'v0.0.1',
  install,
  ...components
}