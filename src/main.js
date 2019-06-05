// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//引入vue
//import Vue from 'vue'
Vue.config.productionTip = false
import abpMixins from '@/abpZero/shared/abpMixin'

Vue.mixin(abpMixins) 


//引入ElementUI组件库及其相关样式
//import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//设置ElementUI 组件库 组件大小，以及模拟弹窗的zIndex 值
Vue.use(ELEMENT, { size: 'small', zIndex: 100000 });



//import TokenAuth from './utils/TokenAuth'
//window.tokenAuth=new TokenAuth('LocalStorageStore')
//window.tokenAuth=new TokenAuth('Cookie')



import HttpClient from './utils/HttpClient'
window.httpClient=HttpClient


//import './abpZero/index'

//引入全局自定义样式
import './style/index.css'

//引入模拟数据
//import './_mock/index'

//引入入口vue文件
import App from './App'
//引入路由文件
import router from './router'
//引入状态库文件
import store from './store/index'

import './components/index'

import './directives/dialogDrag'

import './auth'




/* eslint-disable no-new */

import appconfig from '@/abpZero/appconfig'

import { AppAuthService } from '@/abpZero/app/shared/common/auth/app-auth.service';

import { UrlHelper } from '@/abpZero/shared/helpers/UrlHelper';

import { AppPreBootstrap } from '@/abpZero/AppPreBootstrap';

import { SignalRHelper } from '@/abpZero/shared/helpers/SignalRHelper';

(function () {

    abp.ui.setBusy();

    AppPreBootstrap.run(appconfig, () => {
        handleLogoutRequest(new AppAuthService()); 
        store.dispatch('init')  //初始化appSession
        .then((result) => {
            new Vue({
                render: h => h(App),
                router,
                store,
                mounted () {
                    if(result!=null){
                        SignalRHelper.initSignalR(()=>{
                            abp.ui.clearBusy(); 
                        })    
                    }else{
                        abp.ui.clearBusy();
                    }                    
                }
            }).$mount('#app')               
               
        }).catch(() => {})                            
    });

})();


function handleLogoutRequest(authService) {
    let currentUrl = UrlHelper.initialUrl;
    let returnUrl = UrlHelper.getReturnUrl();
    if (currentUrl.indexOf(('account/logout')) >= 0 && returnUrl) {
        authService.logout(true, returnUrl);
    }
}