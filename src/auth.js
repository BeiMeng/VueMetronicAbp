//登陆认证处理
import { Message } from 'element-ui'
import router from './router/index'
import store from './store/index'
//引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入

import config from '@/config/index'


function findItem(items,path){
  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    if(element.hasOwnProperty('children')){
       let item=findItem(element.children,path);
       if(item!=null){
         return item
       }else{
         continue;
       }
    }else{
      if(element.path==path){
        return element
      }
    }
  }
  return null;
}
function findMenuInfo(path){
  if(config.showHeaderMenus){
    return findItem(store.state.sideBar.headerMenus,path);
  }else{
    return findItem(store.state.sideBar.sideBarMenu,path);
  }  
}

let noAuthPaths=['/account/login','/error404']   //不需要权限的页面


//判断请求的页面是否在当前用户拥有的页面列表中
function pageAuth(path){
  if(findMenuInfo(path)==null){
    return false
  }
  return true
}
//判断请求页是否存在
// function pageIsExist(routers,path){
//   if(findItem(routers,path)==null){
//     return false
//   }
//   return true
// }


function routerHander(routes,to,from, next){
  // if(!pageIsExist(routes,to.path)){    //判断路径是否在路由中定义
  //   next('/error404')
  //   NProgress.done()
  // }else 
  if (to.matched.length === 0) {
    next('/error404')
    NProgress.done()
  }else if(!pageAuth(to.path)){       //判断路径是否在当前用户拥有的页面列表中
    abp.message.warn("您没有当前页面的访问权限！","警告")
    //Message.error('您没有当前页面的访问权限！');
    //页面没有访问权限直接回到前一个页面
    next(`${from.path}`)
    NProgress.done()
  }else{
    store.commit('SET_SELECTEDMENUSTATE',to)      
    store.dispatch('addView', findMenuInfo(to.path))              
    next()
  }  
}

function loadShowHomePage(){
  if(config.showHeaderMenus){ //展示头部菜单则在头部菜单加载
    let homePage=store.state.sideBar.headerMenus.find(p=>p.isHome);
    if(homePage!=undefined){
        store.dispatch('addView', homePage)
    }
  }else{
    let homePage=store.state.sideBar.sideBarMenu.find(p=>p.isHome);
    if(homePage!=undefined){
       store.dispatch('addView', homePage)
    }  
  }
}

//登陆认证逻辑
router.beforeEach((to, from, next) => {
    NProgress.start();

    //不受权限控制的路由页面,直接进入。eg 404页面
    if(noAuthPaths.find(p=>p==to.path)){
      next()
      NProgress.done()
    }else{
      if (!store.state.appSession.user) {   //通过判断user信息是否存在,确定用户是否登陆,解决token失效问题
        next(`/account/login?redirect=${to.path}`) 
        NProgress.done();
        return
      }      
      else{   //已登陆

        if(store.state.sideBar.sideBarMenu.length==0){    //判断侧边菜单数据是否有
            store.dispatch('getAllMenus').then(() => {    //第一次登陆或者是强制刷新浏览器重新请求

              loadShowHomePage();
              if(to.path=="/"){
                next('/app/dashboard') 
                return
              }

              routerHander(router.options.routes,to, from, next)
            })
            .catch(() => {
              abp.message.error("获取应用程序菜单失败！","错误")
            })      
        }else{
          routerHander(router.options.routes,to, from, next)
        }
      }
    }     
})

router.afterEach(() => {
  NProgress.done()
})