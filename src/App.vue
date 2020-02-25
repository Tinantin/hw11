<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
   <button
      type="button"
      class="btn"
      @click="showModal"
    >
      Open Modal!
    </button>

    <ModalWindow
      v-show="isModalVisible"
      @close="closeModal"
    >
    </ModalWindow>
  </div>

 
 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ModalWindow from './components/ModalWindow.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ModalWindow
  },
  props: {
    visible: Object
  },
    data () {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
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
  margin-top: 60px;
}
</style>
