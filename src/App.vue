<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  <ButtonWindow />
  </div>

</template>

<script>
import ButtonWindow from './components/ButtonWindow.vue'


export default {
  name: 'App',
  components: {
    ButtonWindow
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60
}
.btn {
  padding: 15px;
  font-size: 20px;
  font-style: italic;
  color: #41b883;
  border-radius: 7px;
  border-color: #41b883;
}
</style>

