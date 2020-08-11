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
          <!-- 提示消息文字 -->
          <slot>{{ message }}</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// 消息提示
export default {
  name: 'LeeMessage',
  data() {
    return {
      // @vuese
      // 消息图标
      iconClass: null,
      // @vuese
      // 消息类型
      // ``primary`` / ``success`` / ``warning`` / ``error``
      type: 'primary',
      // @vuese
      // 提示消息文字
      message: '',
      // @vuese
      // 提示时长
      duration: 3000,
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