# Button
## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

按钮类型
::: demo

<lee-button type="primary">主要按钮</lee-button>
<lee-button type="success">成功按钮</lee-button>
<lee-button type="warning">警告按钮</lee-button>
<lee-button type="error">错误按钮</lee-button>

:::

给按钮添加事件
::: demo

<lee-button @click="clickFunc">{{text}}</lee-button>

<script>
// 注释
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