import Vue from 'vue'
import Button from '@/components/button/button'

describe('button.spec.js', () => {
  let cmp, vm

  beforeEach(() => {
    cmp = Vue.extend(Button) // Create a copy of the original component
    vm = new cmp({
    
    }).$mount() // Instances and mounts the component
  })

  it('button class', () => { 
    expect(vm.$el.classList.contains('button')).toBe(true)
  })

  it('primary class', () => { 
    expect(vm.$el.classList.contains('primary')).toBe(true)
  })

  it('plain class', () => { 
    expect(vm.$el.classList.contains('plain')).toBe(true)
  })
})
