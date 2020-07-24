<template>
  <div :class="['message-box', type]">
    <div class="text">
      <i
        v-if="icon"
        :class="['icon', icon]"
      />
      <!-- 提示消息文字 -->
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeeMessage',
  props: {
    // 消息图标
    icon: {
      // iconfont
      type: String,
      default: null
    },
    // 消息类型
    type: {
      // ``primary`` / ``success`` / ``warning`` / ``error``
      type: String,
      default: 'primary'
    }
  }
}
</script>