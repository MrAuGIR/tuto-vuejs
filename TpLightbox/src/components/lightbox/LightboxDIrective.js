import Vue from 'vue'
import store from './LightboxStore'

Vue.directive('lightbox', {
  bind: function (el, binding) {
    let group = binding.value === undefined ? 'default' : binding.value
    store.addImage(el.getAttribute('href'), group)
    el.addEventListener('click', (e) => {
      e.preventDefault()
      // au depart on passait l'index de l'url a ouvrir mais cela peut poser problème lors de binding et unbinding -> les index peuvent devenir incoherent
      // la solution passer l'url directement
      store.open(el.getAttribute('href'), group)
    })
  },
  update: function (el) {
    console.log('update')
  },
  unbind: function (el, binding) {
    console.log('unbind')
    let group = binding.value === undefined ? 'default' : binding.value
    // lorsque les elements disparaissent du virtual dom (exemple image paris -> image bresil )
    // il faut les enlever du tableau store
    store.remove(el.getAttribute('href'), group)
  }
})
