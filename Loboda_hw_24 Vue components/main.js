
Vue.component('app-div', {
  props:  {
      obj: Object,
  },
  
  template: `
  
      <div :class="[obj.className]" >
      {{obj.name}}
      </div>
      
  `
})

Vue.component('diagram', {
  data() {
      return {
          divs: [
              {name: 'Column 1'},
              {name: 'Column 2'},
              {name: 'Column 3'},
              {name: 'Column 4'},
              {name: 'Column 5'},
              {name: 'Column 6'},
              {name: 'Column 7'}
          ]
      }
  },
  template: `
      <div class="diagram">
          <app-div 
              v-for="divItems in divs" 
              :obj="divItems"
              />
              
      </div>
  `
});



Vue.component('main-app', {
  data() {
      return {
          appName: 'Hello world'
      }
  },
  template: `
  <div>
      <header>
          <diagram />
         
      </header>
  </div>
    `
}); 

new Vue({
  el:'#app',
  data: {
    
  }
});