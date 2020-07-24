<template>
  <div class="btn-container">
    <lee-button
      class="btn-item"
      type="primary"
      shape="plain"
      @click="clickFunc"
    >
      按钮
    </lee-button>    
    <lee-button
      class="btn-item"
      type="success"
      shape="plain"
      @click="clickFunc"
    >
      按钮
    </lee-button>
    <lee-button
      class="btn-item"
      type="warning"
      shape="plain"
      @click="clickFunc"
    >
      按钮
    </lee-button>
    <lee-button
      class="btn-item"
      type="error"
      shape="plain"
      @click="clickFunc"
    >
      按钮
    </lee-button>
    <lee-button
      class="btn-item"
      type="primary"
      shape="round"
      @click="clickFunc"
    >
      按钮
    </lee-button>        
    <lee-button
      class="btn-item"
      type="success"
      shape="round"
      @click="clickFunc"
    >
      按钮
    </lee-button>
    <lee-button
      class="btn-item"
      type="warning"
      shape="round"
      @click="clickFunc"
    >
      按钮
    </lee-button>
    <lee-button
      class="btn-item"
      type="error"
      shape="round"
      @click="clickFunc"
    >
      按钮
    </lee-button>     
  </div>
</template>

<script>
export default {
  components: {
    
  },
  methods:{
    clickFunc(){
      alert('点击事件')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-container {
  display: flex;

  .btn-item {
    margin-left: 20px;
  }
}
</style>