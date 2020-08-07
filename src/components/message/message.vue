<template>
  <transition
    name="lee-fade"
    @after-leave="destroyInstance"
  >
    <div
      v-show="visible"
      :class="['message-box', type]"
    >
      <div class="text">
        <i
          v-if="icon"
          :class="['icon', icon]"
        />
        <!-- 提示消息文字 -->
        <slot>{{ message }}</slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LeeMessage',
  data() {
    return {
      // 消息图标
      icon: null,
      // 消息类型
      // ``primary`` / ``success`` / ``warning`` / ``error``
      type: 'primary',
      // 提示消息文字
      message: '',
      visible: false,
      duration: 3000
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
      document.body.removeChild(this.$el)
    }
  },

}
</script>