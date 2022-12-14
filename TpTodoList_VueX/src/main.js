import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: require('./components/TodosStore'),
  render: h => h(App)
})
