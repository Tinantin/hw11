
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
              {name: 'Column 1', className: 'block'},
              {name: 'Column 2', className: 'block'},
              {name: 'Column 3', className: 'block'},
              {name: 'Column 4', className: 'block'},
              {name: 'Column 5', className: 'block'},
              {name: 'Column 6', className: 'block'},
              {name: 'Column 7', className: 'block'}
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