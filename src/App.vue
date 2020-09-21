<template>
  <div id="app">
    <Search />
    <router-view/>
    <HelloWorld/>
    <Info />
    <About />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Search from './components/Search.vue'
import Info from './components/Info.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, Search, Info, About
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
