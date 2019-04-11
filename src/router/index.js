import Vue from 'vue'
import Router from 'vue-router'


import demo from '../router/demo'
import zero from '../router/zero'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/account/login',
      name: 'login',
      component: resolve => {
          require.ensure([],
              () => {
                  resolve(require('@/view/account/login.vue'))
              })
      }
    }, 
    {
      path: '/error404',
      name: 'error404',
      component: resolve => {
          require.ensure([],
              () => {
                  resolve(require('@/view/error/404.vue'))
              })
      }
    },          
    {
      path: '/',
      //name: 'pageLayout',
      component: resolve => {
          require.ensure([],
              () => {
                  resolve(require('@/view/layout/index.vue'))
              })
      },
      children:demo.concat(zero)
    }
  ]
})


export default router
