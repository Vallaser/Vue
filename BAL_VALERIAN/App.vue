<template>
  <div id="app">
    <div id="nav">
      <header-panda />
    </div>
    <router-view/>
  </div>
</template>
<script>
  import HeaderPanda from './components/Menu';
  import Home from "./views/Home";
  export default {
    components: {
      HeaderPanda,
      Home
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
