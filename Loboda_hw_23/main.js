var app = new Vue({
  el: '#app',
  data: {
 
    items: [
      { text: 'bla' },
      { text: 'bla bla' },
      { text: 'bla  bla  bla ' }
    ]
  },
  methods:{
    transfer(){
        this.items.pop();
        
      }
  },
})