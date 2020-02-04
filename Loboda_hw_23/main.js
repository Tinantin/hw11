var app = new Vue({
  el: '#app',
  data: {
  newItems: [],
    items: [
      { text: 'bla' },
      { text: 'bla bla' },
      { text: 'bla  bla  bla ' }
    ]
  },
  methods:{
    transfer(){
      this.newItems.push(this.items.pop());
    }
  },
})