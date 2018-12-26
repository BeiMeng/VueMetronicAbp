<template>
  <div id="pageLayout">
    <!-- BEGIN HEADER -->
    <pageHeader></pageHeader>
    <!-- END HEADER -->
    <!-- BEGIN HEADER & CONTENT DIVIDER -->
    <div class="clearfix"> </div>
    <!-- END HEADER & CONTENT DIVIDER -->
    <!-- BEGIN CONTAINER -->
    <pageContainer></pageContainer>
    <!-- END CONTAINER -->
    <!-- BEGIN FOOTER -->
    <pageFooter v-if="showFooter"></pageFooter>
    <!-- END FOOTER -->
    <!-- BEGIN QUICK NAV -->
    <quickNav v-if="showQuickNav"></quickNav>
    <!-- END QUICK NAV -->
  </div>
</template>

<script>
  import config from '../../config/index.js' 
  
  import pageFooter from './footer/index.vue'
  import pageHeader from './header/index.vue'
  import quickNav from './quickNav.vue'
  import pageContainer from './container/index.vue' 
  export default {
    name: "pageLayout",
    components: {
      pageFooter,
      pageHeader,
      pageContainer,
      quickNav
    },
    async mounted() {
        //解决jquery监听事件在二级路由无响应问题
        this.$nextTick(async () => {
            require('../../assets/layouts/layout4/css/layout.css')
            require('../../assets/layouts/layout4/css/themes/light.css')
            require('../../assets/layouts/layout4/css/custom.css')          
            require('../../assets/global/scripts/app.js')
            require('../../assets/layouts/layout4/scripts/layout.js')
            require('../../assets/layouts/layout4/scripts/demo.js')
            require('../../assets/layouts/global/scripts/quick-sidebar.js')
            require('../../assets/layouts/global/scripts/quick-nav.js')
        })
    },   
    data(){
      return{
        showFooter:config.showFooter,
        showQuickNav:config.showQuickNav
      }
    }
  }
</script>

<style>

</style>