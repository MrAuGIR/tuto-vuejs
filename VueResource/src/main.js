import Vue from 'vue'
import VueResourceEsm from 'vue-resource'
import App from './App'

Vue.config.productionTip = false
Vue.use(VueResourceEsm)
Vue.http.options.root = 'https://jsonplaceholder.typicode.com'

Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if (request.after) {
      request.after.call(this, response)
    }
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
