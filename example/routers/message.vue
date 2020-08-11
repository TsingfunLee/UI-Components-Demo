<template>
  <div class="msg-container">
    <lee-button
      type="primary"
      class="btn"
      @click="click('primary')"
    >
      主要
    </lee-button>
    <lee-button
      type="success"
      class="btn"
      @click="click('success')"
    >
      成功
    </lee-button>
    <lee-button
      type="warning"
      class="btn"
      @click="click('warning')"
    >
      警告
    </lee-button>
    <lee-button
      type="error"
      class="btn"
      @click="click('error')"
    >
      错误
    </lee-button>
    <lee-button
      class="btn"
      @click="click('primary', 'icon-yonghushu')"
    >
      带icon
    </lee-button>
  </div>
</template>

<script>
export default {
  methods: {
    click(type, icon){
      this.$message({
        message: '这是一条提示消息',
        type: type,
        iconClass: icon
      })

      // this.$message[type]('这是一条提示消息')
    },

  }
}
</script>

<style lang="scss" scoped>
.msg-container {
  display: flex;
  justify-content: flex-start;

  .btn {
    margin: 15px;
  }
}
</style>