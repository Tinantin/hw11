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
      change(){
        this.newItems.push(this.items.pop());
        console.log(this.newItems);
      }
      // add(){
      //     this.items.push('added');
      // }
  },
})
