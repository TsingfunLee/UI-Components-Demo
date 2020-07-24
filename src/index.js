import LeeButton from './components/button'
import LeeMessage from './components/message'

const components = [
  LeeButton,
  LeeMessage
]

const install = (Vue)=>{
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: 'v0.0.1',
  install,
  ...components
}