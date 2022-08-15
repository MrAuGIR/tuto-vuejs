import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import error404 from '@/components/error404'
import PageA from '../components/PageA'
import PageB from '../components/PageB'
import PageC from '../components/PageC'

Vue.use(Router)

// chargement asynchrone du component
require(['../components/PageD'], function (PageD) {
  console.log(PageD)
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'a',
      beforeEnter (route, redirect, next) {
        let confirm = window.confirm('voulez vous vraiment vous rendre sur la page A ')
        if (confirm) {
          next()
        } else {
          next('/')
        }
      },
      component: resolve => require(['../components/PageA'], resolve), // leazyloading pour eviter de charger tous les components d'un coup
      children: [
        {
          path: 'b',
          component: PageB,
          name: 'a.b'
        },
        {
          path: 'c',
          component: PageC,
          name: 'a.c'
        }
      ]
    },
    {
      path: '/article/:id(\\d+)',
      component: PageA,
      name: 'post'
    },
    {
      path: '/categories/:id(\\d+)',
      components: {
        default: PageA,
        sidebar: PageB
      }
    },
    {
      path: '/error404',
      name: 'Error404',
      component: error404
    },
    {
      path: '*',
      redirect: '/error404'
    }
  ]
})
