
Vue.component('app-div', {
  props:  {
      obj: Object,
      // className: String
  },
  computed:{
    activeColor: function(){
        return {
            'background-color': this.obj.activeColor
        }
      },
      sizeStyle: function(){
          return {
              height: this.obj.height + 'px'
          }
    }
  },
  
  template: `
  
      <div :class="[obj.className]" :style = "[activeColor, sizeStyle]">
    
        {{obj.name}}
          
      </div>
      
  `
})

Vue.component('diagram', {
  data() {
      return {
          divs: [
            {name: 'Column 1', className: 'block', activeColor: 'red', height: 220},
            {name: 'Column 2', className: 'block', activeColor: 'blue', height: 200},
            {name: 'Column 3', className: 'block', activeColor: 'green', height: 100},
            {name: 'Column 4', className: 'block', activeColor: 'gray', height: 170},
            {name: 'Column 5', className: 'block', activeColor: 'yellow', height: 230},
            {name: 'Column 6', className: 'block', activeColor: 'pink', height: 270},
            {name: 'Column 7', className: 'block', activeColor: 'purple', height: 300}
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