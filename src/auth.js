//登陆认证处理
import { Message } from 'element-ui'
import router from './router/index'
import store from './store/index'
//引入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' //这个样式必须引入

function findItem(items,name){
  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    if(element.children.length>0){
       let item=findItem(element.children,name);
       if(item!=null){
         return item
       }else{
         continue;
       }
    }else{
      if(element.name==name){
        return element
      }
    }
  }
  return null;
}
function findMenuInfo(name){
  if(store.state.appSession.theme.showHeaderMenus){
    return findItem(store.state.sideBar.headerMenus,name);
  }else{
    return findItem(store.state.sideBar.sideBarMenu,name);
  }  
}

let noAuthPaths=['/account/login','/error404']   //不需要权限的页面


//判断请求的页面是否在当前用户拥有的页面列表中
function pageAuth(name){
  if(findMenuInfo(name)==null){
    return false
  }
  return true
}

function routerHander(routes,to,from, next){
  if (to.matched.length === 0) {  //判断路径是否在路由中定义
    next('/error404')
    NProgress.done()
  }else if(!pageAuth(to.name)){       //判断路径是否在当前用户拥有的页面列表中
    abp.message.warn("您没有当前页面的访问权限！","警告")
    //Message.error('您没有当前页面的访问权限！');
    //页面没有访问权限直接回到前一个页面
    if(to.path=="/"){
      next(`/account/login?redirect=${to.path}`) 
    }else{
      next(`${from.path}`)
    }

    NProgress.done()
  }else{
    //store.commit('SET_SELECTEDMENUSTATE',to)
    store.dispatch('setSelectedMenuState', to)      
    store.dispatch('addView', findMenuInfo(to.name))              
    next()
  }  
}

function loadShowHomePage(){
  if(store.state.appSession.theme.showHeaderMenus){ //展示头部菜单则在头部菜单加载
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
function loadDefaultPage(){
  let sideBarMenu=store.state.sideBar.sideBarMenu;
  findDefaultPageAndLoad(sideBarMenu);

  function findDefaultPageAndLoad(menus){
    for (let index = 0; index < sideBarMenu.length; index++) {
      const element = sideBarMenu[index];
      if(element.default){
        if(element.children.length==0){
          store.dispatch('addView', element);
          break;
        }else{
          findDefaultPageAndLoad(element.children);
        }
      }
    }
  }
}

//登陆认证逻辑
router.beforeEach((to, from, next) => {
    console.log(to);
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
            store.dispatch('getAllMenus');            
            routerHander(router.options.routes,to, from, next)                      
        }else{
          routerHander(router.options.routes,to, from, next)
        }
      }
    }     
})

router.afterEach(() => {
  NProgress.done()
})