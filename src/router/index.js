import Vue from 'vue'
import Router from 'vue-router'


import demo from '../router/demo'
import zero from '../router/zero'

Vue.use(Router)



let app=[
  {
    path: '/app/dashboard',
    name: 'dashboard',
    component: resolve => {
        require.ensure([],
            () => {
                resolve(require('@/view/app/dashboard.vue'))
            })
    },
  },  
]




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
      path: '/app',
      //name: 'pageLayout',
      component: resolve => {
          require.ensure([],
              () => {
                  resolve(require('@/view/layout/index.vue'))
              })
      },
      children:demo.concat(zero).concat(app)
    }
  ]
})


export default router
