<template>
    <div id="header">
        <div class="page-header navbar navbar-fixed-top">
            <!-- BEGIN HEADER INNER -->
            <div class="page-header-inner ">
                <!-- BEGIN LOGO -->
                <div class="page-logo">
                    <a href="index.html">
                        <img src="../../../assets/layouts/layout4/img/logo-light.png" alt="logo" class="logo-default" /> </a>
                    <div class="menu-toggler sidebar-toggler">
                        <!-- DOC: Remove the above "hide" to enable the sidebar toggler button on header -->
                    </div>
                </div>
                <!-- END LOGO -->
                <!-- BEGIN RESPONSIVE MENU TOGGLER -->
                <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>
                <!-- END RESPONSIVE MENU TOGGLER -->
                <!-- BEGIN PAGE ACTIONS -->
                <!-- DOC: Remove "hide" class to enable the page header actions -->
                <div class="page-actions">
                    <headerMenu v-if="showHeaderMenus"></headerMenu>
                </div>
                <!-- END PAGE ACTIONS -->
                <!-- BEGIN PAGE TOP -->
                <div class="page-top">
                    <themeSetting class="topMenu" v-show="showThemeSetting"></themeSetting>
                    <!-- BEGIN TOP NAVIGATION MENU -->
                    <topMenu></topMenu>
                    <!-- END TOP NAVIGATION MENU -->
                </div>
                <!-- END PAGE TOP -->
            </div>
            <!-- END HEADER INNER -->
        </div>
    </div>
</template>

<script>
    import config from '../../../config/index.js'
    import headerMenu from './headerMenu'
    import themeSetting from './themeSetting'
    import topMenu from './topMenu/index.vue'
    export default {
        name: 'pageHeader',
        components: {
            headerMenu,
            themeSetting,
            topMenu
        },
        data(){
            return{
                showThemeSetting:config.showThemeSetting,
                showHeaderMenus:config.showHeaderMenus
            }
        }
    }
</script>

<style scoped>
    .topMenu {
        margin: 22px 20px 0 0;
        display: inline-block;
        width: 33px;
        float: left;
    }
</style>