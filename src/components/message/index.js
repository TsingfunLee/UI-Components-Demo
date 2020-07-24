import LeeMessage from './message.vue'

LeeMessage.install = function(Vue){
  Vue.components(LeeMessage.name, LeeMessage)
}

export default LeeMessage