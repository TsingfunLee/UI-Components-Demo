import LeeButton from './button.vue'

LeeButton.install = function(Vue) {
  Vue.component(LeeButton.name, LeeButton)
}

export default LeeButton