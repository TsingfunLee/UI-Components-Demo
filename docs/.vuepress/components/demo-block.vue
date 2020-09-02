<template>
  <div class="demo">
    <div class="example">
      <slot name="example"></slot>
    </div>
    <div class="source" v-show="isShow">
      <slot name="source"></slot>
    </div>
    <div class="control">
      <button class="show-control" @click="controlShow">
        {{showControlText}}
      </button>     
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isShow: false
    }
  },
  computed: {
    showControlText(){
      return this.isShow ? '收起代码' : '展开代码'
    }
  },
  methods: {
    controlShow(){
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="stylus">
.demo{
  border: 1px solid #f0f0f0;
  position: relative;
  margin-top 1em
  .example{
    padding: 42px 24px 50px;
    width: 100%;
    height: auto;
    box-sizing: border-box;  
    border-bottom: solid 1px #f0f0f0;
    background-color: white; 
  }
  .source{
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
  }
  .control{
    padding: 15px 24px;
    text-align center
    .show-control{
      border: none;
      outline : none;
      background-color: transparent;
      color rgba(0, 0, 0, 0.5)
    }
  }
}
</style>