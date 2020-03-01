import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// import Vue from 'vue'
// import App from './App.vue'
// import VueRouter from 'vue-router'
// import router from './router';
// // import VueResource from 'vue-resource'

// Vue.config.productionTip = false

// Vue.use(VueRouter)
// Vue.use(VueResource)

// const router = new VueRouter({
//   routes,
//   mode: 'history'
// });




// new Vue({
//   render: h => h(App),
//   router
// }).$mount('#app')

//объект