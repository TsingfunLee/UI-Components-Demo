# Message

## 何时使用

可提供成功、警告和错误等反馈信息。

顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 代码演示

::: demo

<lee-button @click="click('primary')">primary</lee-button>
<lee-button type="success" class="btn" @click="click('success')">success</lee-button>
<lee-button type="warning" class="btn" @click="click('warning')">warning</lee-button>
<lee-button type="error" class="btn" @click="click('error')">error</lee-button>

<script>
export default {
  methods: {
    click(type){
      this.$message({
        type: type,
        message: '这是一条提示消息'
      })
    }
  }
}
</script>

:::

## API