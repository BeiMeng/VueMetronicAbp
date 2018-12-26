<template>
  <div id="container">
        <div class="page-container">
            <!-- BEGIN SIDEBAR -->
            <sidebar></sidebar>
            <!-- END SIDEBAR -->
            <!-- BEGIN CONTENT -->
            <div class="page-content-wrapper">
                <!-- BEGIN CONTENT BODY -->
                <div class="page-content" :style="styleObject">
                    <div class="all-page-header">
                        <tabView v-if="showPageTab"></tabView>
                        <!-- BEGIN PAGE BREADCRUMB -->
                        <breadcrumb v-if="showBreadcrumb"></breadcrumb>
                        <!-- END PAGE BREADCRUMB -->  
                    </div>
                    <el-scrollbar class="main-scrollbar">
                        <toTop></toTop>
                        <transition name="fade-transform" mode="out-in">
                            <!-- keep-alive 的 include 默认是优先匹配组件的 name ，所以在编写路由 router 和路由对应的 view component 的时候一定要确保 两者的 name 是完全一致的。
                            (切记 name 命名时候尽量保证唯一性 切记不要可某些组件的命名重复了，不然会递归引用最后内存溢出等问题) -->
                            <!-- 关闭tab页标签，会清除缓存，再次打开重新刷新页面 -->
                            <keep-alive :include="cachedViews">                           
                                <router-view></router-view>
                            </keep-alive>                            
                        </transition> 
                    </el-scrollbar>
              
                    
                </div>
                <!-- END CONTENT BODY -->
            </div>
            <!-- END CONTENT -->

            <!-- BEGIN QUICK SIDEBAR -->
            <quickSidebar v-if="showQuickSideBar"></quickSidebar>
            <!-- END QUICK SIDEBAR -->

        </div>
  </div>
</template>

<script>
import config from '../../../config/index.js'
import sidebar from './sidebar/index'
import breadcrumb from './breadcrumb'
import tabView from './tabView'
import quickSidebar from './quickSidebar'
import toTop from '../../../components/toTop'
export default {
  name: 'pageContainer',
  components:{
      sidebar,
      breadcrumb,
      tabView,
      quickSidebar,
      toTop
  }, 
  computed: {
    cachedViews() {
      return this.$store.state.tabView.cachedViews
    }
  },  
  data(){
      return{
          showBreadcrumb:config.showBreadcrumb,
          showPageTab:config.showPageTab,
          showQuickSideBar:config.showQuickSideBar,
          maxTabCount:config.maxTabCount,
          styleObject:{
              height: 'calc(100vh - 140px) !important',
          }
      }
  },
  mounted(){
      if(this.showPageTab){
          this.$set(this.styleObject,'height','calc(100vh - 140px) !important')
      }else{
          this.$set(this.styleObject,'height','calc(100vh - 85px) !important')
      }
  }
  
}
</script>

<style>
  .page-container{
     margin-top:60px !important;
     padding-right: 10px !important;
     padding-left: 10px !important;
 }
 .page-content{
     padding-top: 0px !important;
     padding-left: 10px !important;
     /* height: calc(100vh - 140px) !important; */
 }
 .main-scrollbar{
     height: 100%;
 }
 .el-scrollbar__wrap{
  overflow-x: hidden;
} 
 .el-scrollbar__bar.is-horizontal{
   display: none !important;
 } 
 @media (min-width: 992px){
    .page-sidebar-fixed .page-sidebar {
        top:80px !important;
    }
 }

</style>