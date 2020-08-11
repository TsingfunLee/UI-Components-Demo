import Message from '@/components/message/'

describe('message.spec.js',()=>{
  afterEach(() => {
    const el = document.querySelector('.message-box')
    if (!el) return
    if (el.parentNode) {
      el.parentNode.removeChild(el)
    }
    if (el.__vue__) {
      el.__vue__.$destroy()
    }
  })

  it('create', ()=>{
    Message('message')

    let el = document.querySelector('.message-box')
    expect(el).toBeDefined()
  })

  it('type', ()=>{
    ['primary', 'warning', 'success', 'error'].forEach(val=>{
      Message({
        type: val
      })

      let el = document.querySelector('.message-box.' + val)
      expect(el).toBeDefined()
    })
  })

  it('message',()=>{
    let vm = Message({
      message: 'message'
    })

    expect(vm.$el.children[0].textContent.trim()).toBe('message')
  })
})