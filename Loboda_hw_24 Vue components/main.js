
Vue.component('app-div', {
  props:  {
      obj: Object,
      // className: String
  },
  data() {
    return {
      sizeRender: 'inputs'
    }
  },
  computed:{
    activeColor: function(){
        return {
            'background-color': this.obj.activeColor
        }
      },
      sizeStyle: function(){
          return {
              height: this.sizeRender + 'px'
          }
    }
  },
  created: function (){
      this.sizeRender = this.obj.height  
    },
      mounted() {
    if (localStorage.sizeRender) {
      this.sizeRender = localStorage.sizeRender;
    }
  },
  watch: {
    name(newSizeRender) {
      localStorage.sizeRender = newSizeRender;
    }
  },
  
  template: `
  
  <div :class="[obj.className]" >
    <div class="wrapper" :style = "[activeColor, sizeStyle]">
          {{obj.name}}
     </div>
     <input type="range" min="0" :max="obj.height" step="1" v-model="sizeRender"> 
  </div>
  
`
})

Vue.component('diagram', {
  data() {
      return {
          divs: [
            {name: 'Column 1', className: 'block', activeColor: 'red', height: 220, },
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