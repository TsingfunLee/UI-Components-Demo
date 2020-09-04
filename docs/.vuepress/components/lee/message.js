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
    propsData: options
  })

  instance.$mount()

  let el
  if(document.querySelector('.messages-box')){
    el = document.querySelector('.messages-box')
  }else{
    el = document.createElement('div')
    el.className = 'messages-box'
    document.body.appendChild(el)
  }
  el.appendChild(instance.$el)

  return instance
}

let types = ['primary', 'success', 'warning', 'error']
types.forEach(element => {
  Message[element] = function(options){
    let config = {
      type: element
    }
    if(typeof options === 'string'){
      config.message = options
    }else{
      config = Object.assign(options, config)
    }
    Message(config)
  }
})



export default Message

