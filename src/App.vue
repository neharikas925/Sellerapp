<template>
  <div id="app">
    <Search />
    <router-view/>
    <Info />
    <About />
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Info from './components/Info.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Search, Info, About
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
