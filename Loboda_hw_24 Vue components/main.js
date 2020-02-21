
Vue.component('app-div', {
  props: {
    obj: Object
  },
  data() {
    return {
      sizeRender: '',
      columnName: ''
    }
  },
  computed: {
    activeColor: function () {
      return {
        'background-color': this.obj.activeColor
      }
    },
    sizeStyle: function () {
      let curObj = {
        columnName: this.obj.name,
        height: this.sizeRender,
        width: this.sizeRender,
      };

      this.$emit('resize', curObj);
      return {
        height: this.sizeRender + 'px',
        width: this.sizeRender + 'px',
      }
    }
  },
  created: function () {
    this.sizeRender = this.obj.width;
    this.columnName = this.obj.name;
  },
  template: `
  
      <div :class="[obj.className]" >
        <div class="wrapper" :style = "[activeColor, sizeStyle]" >
        {{obj.name}}
         </div>
         <input type="range" min="0" max="300" step="1" v-model="sizeRender"> 
      </div>
      
  `
})


Vue.component('main-app', {
  data() {
    return {
      divs: [
        { name: 'Column 1', className: 'block', activeColor: 'red', height: 250, width: 250 },
        { name: 'Column 2', className: 'block', activeColor: 'blue', height: 200, width: 200 },
        { name: 'Column 3', className: 'block', activeColor: 'green', height: 100, width: 50 },
        { name: 'Column 4', className: 'block', activeColor: 'gray', height: 210, width: 150 },
        { name: 'Column 5', className: 'block', activeColor: 'yellow', height: 330, width: 350 },
        { name: 'Column 6', className: 'block', activeColor: 'pink', height: 270, width: 340 },
        { name: 'Column 7', className: 'block', activeColor: 'purple', height: 330, width: 330 }
      ],
      items: []
    }
  },
  methods: {
    readLocalStorage() {
      return JSON.parse(localStorage.getItem('app-data'));
    },
    writeLocalStorage(data) {
      localStorage.setItem('app-data', JSON.stringify(data));
    },
    changeSize(item) {
      const index = this.items.map(e => e.name).indexOf(item.columnName);
      this.items[index].height = item.height;
      this.items[index].width = item.width;
      this.writeLocalStorage(this.items);
    }
  },
  mounted() {
    if (localStorage.getItem('app-data')) {
      this.items = this.readLocalStorage();
    } else {
      this.items = this.divs;
      this.writeLocalStorage(this.divs);
    }
    // console.log(this.readLocalStorage());
  },
  template: `
  <div>
      <header>
      <div class="diagram">
        <app-div 
            v-for="item in items" 
            :obj="item"
            v-on:resize="changeSize"
            />
        </div>
      </header>
  </div>
    `
});

new Vue({
  el: '#app',
  data: {

  }
});