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
      v-bind="visible"
      v-show="modalVisible"
      @close="closeModal"
    >
    <template v-slot:body>
          This is Text!
    </template>

    <template v-slot:footer>
          This is Text!
    </template>  
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
			visible: Boolean
    },  
    data () {
      return {
        modalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.modalVisible = true;
      },
      closeModal() {
        this.modalVisible = false;
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

