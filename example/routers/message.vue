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
  </div>
</template>

<script>
export default {
  methods: {
    click(type){
      this.$message({
        message: '这是一条提示消息',
        type: type
      })
    }
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