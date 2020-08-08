import Vue from 'vue'
import Message from '@/components/message/'

describe('message.spec.js',()=>{
  it('create', ()=>{
    Message('message')

    let el = document.querySelector('.message-box')
    expect(el).toBeDefined()
  })
})