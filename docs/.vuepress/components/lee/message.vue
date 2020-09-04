<template>
  <transition
    name="lee-fade"
    @after-leave="destroyInstance"
  >
    <div
      v-show="visible"
      class="message-box-wrap"
    >
      <div      
        :class="['message-box', type]"
      >
        <div class="text">
          <i
            v-if="iconClass"
            :class="[iconClass]"
          />
          {{ message }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// 消息提示
export default {
  name: 'LeeMessage',
  props: {
    // 消息图标
    iconClass: {
      // iconfont 类名
      type: String,
      default: null
    },
    // 消息类型   
    type: {
      // ``primary`` / ``success`` / ``warning`` / ``error``
      type: String,
      default: 'primary'
    },
    // 提示消息文字
    message: {
      type: String,
      default: ''
    },
    // 提示时长
    duration: {
      // 单位ms
      type: Number,
      default: 3000
    },
  },
  data() {
    return {   
      visible: false,     
    }
  },
  mounted(){
    this.visible = true
    setTimeout(()=>{
      this.visible = false
    },this.duration)
  },
  methods:{
    destroyInstance(){
      document.querySelector('.messages-box').removeChild(this.$el)
      this.$destroy()
    }
  },

}
</script>