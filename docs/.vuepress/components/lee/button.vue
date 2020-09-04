<template>
  <button
    :class="['button', type, shape]"
    @click="clickHandle"
  >
    <!-- 按钮中的文字 -->
    <slot />
  </button>
</template>

<script>
export default {
  name: 'LeeButton',
  props: {
    // Button类型
    type: {
      // `primary`/ `success` / `warning` / `error` 
      type: String,
      default : 'primary'
    },
    // Button形状
    shape: {
      // `plain` / `round`
      type: String,
      default: 'plain'
    }
  },
  methods: {
    clickHandle(){
      // 点击按钮时触发
      this.$emit('click')
    }
  }
}
</script>