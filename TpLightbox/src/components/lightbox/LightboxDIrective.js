import Vue from 'vue'
import store from './LightboxStore'

Vue.directive('lightbox', {
  bind: function (el, binding) {
    let index = store.addImage(el.getAttribute('href'))
    el.addEventListener('click', (e) => {
      console.log('click image')
      e.preventDefault()
      store.open(index)
    })
  }
})
