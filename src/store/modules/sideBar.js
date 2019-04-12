import Vue from 'vue'
import config from '../../config/index'
import { AppNavigationServiceProxy } from '@/abpZero/shared/service-proxies/AppNavigationServiceProxy';
let _appNavigationServiceProxy=new AppNavigationServiceProxy();
const sideBar = {
  state: {
    sideBarMenu: [],
    headerMenus: []
  },
  mutations: {
    SET_SIDEBARMENU(state, menus) {
      if(config.showHeaderMenus){
        state.headerMenus=menus
      }else{
        state.sideBarMenu = menus
      }
    },
    SET_HEADERMENUSIDEBARMENU(state, menus) {
        state.sideBarMenu = menus
    },   
    SET_SELECTEDMENUSTATE(state, itemMenu) {

       //有顶部菜单且有tab页签时，实现切换tab页签，跳转到对应的顶部菜单以及侧边菜单的切换
       if(config.showHeaderMenus && itemMenu.path !="/app/dashboard"){
        //1.判断此tab页是否在state.sideBarMenu 中
        let menu=loopFindDefaultPage(state.sideBarMenu,itemMenu)
        //不在,在state.headerMenus 找到   
        if(menu==undefined){
          for (let index = 0; index < state.headerMenus.length; index++) {
            const element = state.headerMenus[index];
            Vue.set(element,"default",false);
            if(element.hasOwnProperty('children')){
              let menu=loopFindDefaultPage(element.children,itemMenu)
              if(menu!=undefined){
                state.sideBarMenu=element.children;
                Vue.nextTick(()=>{
                  Vue.set(element,"default",true);
                })
              }
            }
          }
        }       
       }
       function loopFindDefaultPage(mn,itemMenu){
        for (let index = 0; index < mn.length; index++) {
            const element = mn[index];
            if(!element.hasOwnProperty('children')){
              if(element.name==itemMenu.name){
                return element;
              }
            }else{
              let val= loopFindDefaultPage(element.children,itemMenu)
              if(val!=undefined){
                return val
              }else{
                continue
              }
            }
        }                
       } 



      //先全部设置为未选中状态      
      for (let index = 0; index < state.sideBarMenu.length; index++) {
        const element = state.sideBarMenu[index];
        if (element.name == itemMenu.name) {
          element.default = true
        } else {
          element.default = false
        }
        setDefault(element)
      }

      function setDefault(element) {
        if (element.hasOwnProperty('children')) {
          for (let m = 0; m < element.children.length; m++) {
            const item = element.children[m];
            // //选中的叶节点设置为选中状态(todo: 父级均设置为选中状态未实现,设置初始化状态默认显示页面,有小BUG)
            if (item.name == itemMenu.name) {
              item.default = true
            } else {
              item.default = false
            }
            setDefault(item)
          }
        }
      }



      //然后把当前选中的以及其父级都设置为选中状态
      let node = null;
      let parentNode = null;

      let pArray=[];
      getAllParent(state.sideBarMenu,itemMenu);
      for (let index = 0; index < pArray.length; index++) {
          const element = pArray[index];
          element.default=true;
      }
      function getAllParent(element,currentItem){
        
        let parent=getNode(element,currentItem.name).parentNode
        node=null;
        parentNode=null;        
        if(parent!=null){
          pArray.push(parent)
          getAllParent(state.sideBarMenu,parent)  
        }
      }

      function getNode(json, nodeId) { 

        //1.第一层 root 深度遍历整个JSON
        for (var i = 0; i < json.length; i++) {
            if (node) {
                break;
            }
            var obj = json[i];
            //没有就下一个
            if (!obj || !obj.name) {
                continue;
            }

            //2.有节点就开始找，一直递归下去
            if (obj.name == nodeId) {
                //找到了与nodeId匹配的节点，结束递归
                node = obj;
                break;
            } else {
                //3.如果有子节点就开始找
                if (obj.children) {
                    //4.递归前，记录当前节点，作为parent 父亲
                    parentNode = obj;
                    //递归往下找
                    getNode(obj.children, nodeId);
                } else {
                    //跳出当前递归，返回上层递归
                    continue;
                }
            }
        }

        //5.如果木有找到父节点，置为null，因为没有父亲  
        if (!node) {
            parentNode = null;
        }

        //6.返回结果obj
        return {
            parentNode: parentNode,
            node: node
        };
      }
    }
  },
  actions: {
    getAllMenus({commit,state}) {
      return new Promise((resolve, reject) => {
        _appNavigationServiceProxy.getMenu()
          .then(result => {
            commit('SET_SIDEBARMENU', result)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    setSideBarMenu({commit,state},headerMenuOfSideBarMenus) {
      commit('SET_HEADERMENUSIDEBARMENU', headerMenuOfSideBarMenus)
    }    
  }
}

export default sideBar
