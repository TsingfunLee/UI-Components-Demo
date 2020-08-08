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
// 消息提示
export default {
  name: 'LeeMessage',
  data() {
    return {
      // @vuese
      // 消息图标
      icon: null,
      // @vuese
      // 消息类型
      // ``primary`` / ``success`` / ``warning`` / ``error``
      type: 'primary',
      // @vuese
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