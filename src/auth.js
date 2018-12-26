//登陆认证处理
import { Message } from 'element-ui'
import router from './router/index'
import store from './store/index'
//引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入

import config from '@/config/index'


//判断请求的页面是否在当前用户拥有的页面列表中
function pageAuth(path){
  console.log(store.state.sideBar.sideBarMenu)
  console.log(store.state.sideBar.headerMenus)
  if(config.showHeaderMenus){
    return isExistPage(store.state.sideBar.headerMenus,path);
  }else{
    return isExistPage(store.state.sideBar.sideBarMenu,path);
  }
  
  function isExistPage(menus,path){
    for (let index = 0; index < menus.length; index++) {
      const element = menus[index];
      if(element.hasOwnProperty('children')){
         if(isExistPage(element.children,path)){
           return true
         }else{
           continue;
         }
      }else{
        if(element.path==path){
          return true
        }
      }
    }
    return false;
  }
}

//登陆认证逻辑
router.beforeEach((to, from, next) => {
  NProgress.start();
  // let token=tokenAuth.getToken();
  // if (token == null) {   //未登陆情况下
  let token=abp.auth.getToken();
  if (!token) {   //未登陆情况下
    if(to.path=="/login"){  //是请求login页则直接继续
      next()
    }else{   // 否则全部重定向到登录页
      next(`/login?redirect=${to.path}`) 
      NProgress.done()
    }
  }else{   //已登陆
    if(store.state.sideBar.sideBarMenu.length==0){    //判断侧边菜单数据是否有
        store.dispatch('getAllMenus').then(() => {    //第一次登陆或者是强制刷新浏览器重新请求
            if(!pageAuth(to.path)){
              abp.message.warn("您没有当前页面的访问权限！","警告")
              //Message.error('您没有当前页面的访问权限！');
              //页面没有访问权限直接回到前一个页面
              next(`${from.path}`)
              NProgress.done()
            }else{
              next()
            }              
        }).catch(() => {})      
    }else{
      if(!pageAuth(to.path)){
        abp.message.warn("您没有当前页面的访问权限！","警告")
        //Message.error('您没有当前页面的访问权限！');
        //页面没有访问权限直接回到前一个页面
        next(`${from.path}`)
        NProgress.done()
      }else{
        next()
      }
    }
  }
  
})

router.afterEach(() => {
  NProgress.done()
})