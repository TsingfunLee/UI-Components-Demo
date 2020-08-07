import Vue from 'vue'
import MessageCmt from './message.vue'

let cmt = Vue.extend(MessageCmt)

const Message = function(options){
  if(typeof options === 'string'){
    options = {
      message: options
    }
  }

  let instance = new cmt({
    data: options
  })

  instance.$mount()
  document.body.appendChild(instance.$el)
}

export default Message