import Vue from 'vue'
import Button from '@/components/button/button'

describe('button.spec.js', () => {
  let cmp, vm

  beforeEach(() => {
    cmp = Vue.extend(Button) // Create a copy of the original component   
  })

  afterEach(()=>{
    vm.$destroy && vm.$destroy()
    vm.$el &&
    vm.$el.parentNode &&
    vm.$el.parentNode.removeChild(vm.$el)
  })

  it('create',()=>{
    vm = new cmp().$mount() 

    expect(vm.$el.classList.contains('button') && vm.$el.classList.contains('primary') && vm.$el.classList.contains('plain')).toBe(true)
  })

  it('type', ()=>{
    let type = ['success', 'warning', 'error']
    type.forEach(val=>{
      vm = new cmp({
        propsData: {
          type: val
        }
      }).$mount()

      expect(vm.$el.classList.contains(val)).toBe(true)   
    })    
  })

  it('shape', ()=>{
    let shape = ['round']
    shape.forEach(val => {
      vm = new cmp({
        propsData: {
          shape: val
        }
      }).$mount()

      expect(vm.$el.classList.contains(val)).toBe(true)
    })
  })

  it('click', ()=>{
    let result
    vm = new Vue({
      methods:{
        clickHandle(evt){
          result = evt
        }
      },
      template: '<lee-button @click="clickHandle"></lee-button>'
    })

    expect(result).toBeUndefined()
  })
})

