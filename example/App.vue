<template>
  <div id="app">
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-list-item">
          <router-link to="/button">
            Button
          </router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/message">
            Message 
          </router-link>
        </li>
      </ul>
    </nav>

    <router-view class="container" />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {},
}
</script>

<style lang="scss">
#app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .nav {
    .nav-list {
      display: flex;

      .nav-list-item {
        margin-right: 30px;
        list-style: disc;
      }
    }
  }

  .container {
    margin-top: 60px;
  }
}
</style>
