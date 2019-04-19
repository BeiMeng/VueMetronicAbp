import Vue from 'vue'
import Router from 'vue-router'


import demo from '../router/demo'
import zero from '../router/zero'

Vue.use(Router)



let app=[
  {
    path: '/app/dashboard',
    name: 'dashboard',    //首页路由name 约定为dashboard
    component: resolve => {
        require.ensure([],
            () => {
                resolve(require('@/view/app/dashboard.vue'))
            })
    },
  },  
]


//路由定义
let routes= [
  {
    path: '/',  // 默认进入路由[写在第一个]
    redirect: '/app/dashboard'   //重定向
  },    
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
];




//todo 检测路由定义的name 是否有重复
let nameList=new Array();
getRouteName(routes);  
function getRouteName(routes){
  for (let index = 0; index < routes.length; index++) {
    const element = routes[index];
    if(element.hasOwnProperty('name')){
      nameList.push(element.name)
    }
    if(element.hasOwnProperty('children')){
      getRouteName(element.children)
    }
  }
}
console.log(nameList);

let repartName=repart(nameList);
if(repartName!=""){
  alert("路由定义的name属性存在重复项，重复name："+repartName+"请检查！");
  routes=[];  
}

function repart(nameList){
  let nary=nameList.slice().sort();
  for(let i=0;i<nameList.length;i++){
    if (nary[i]==nary[i+1]){
       return nary[i]
    }
  } 
  return "";   
}







let router = new Router({
  mode: 'history',
  routes:routes
})

export default router
