<template>
  <div id="app">
    <collage/>
  </div>
</template>

<script>
import Collage from './components/Collage.vue'

export default {
  name: 'app',
  components: {
    Collage,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;

  cursor: none;
  background-color: #2c3e50;
}
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  background-color: #2c3e50;
}
</style>
