# Button
## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示
:::
<lee-button @click="clickFunc">{{text}}</lee-button>

<script>
export default {
  data() {
    return {
      text: '按钮'
    }
  },
  mounted () {
  },
  methods: {
    clickFunc(){
      this.text = '按钮事件'
    }
  }
}
</script>
:::