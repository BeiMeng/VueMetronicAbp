<template>
    <div id="sidebar">
        <div class="page-sidebar-wrapper">
            <!-- BEGIN SIDEBAR -->
            <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
            <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
            <div class="page-sidebar navbar-collapse collapse">
                <!-- BEGIN SIDEBAR MENU -->
                <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
                <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
                <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
                <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
                <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
                <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
                <ul class="page-sidebar-menu  " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
                    <template v-for="item in menus">
                        <li class="heading" v-if="item.group" :key="item.displayName">
                            <h3 class="uppercase">{{item.displayName}}</h3>
                        </li>                    
                        <template v-if="item.group">
                                <template v-for="item in item.children">
                                <sidebarItem :key="item.displayName" :item="item"></sidebarItem>
                            </template>
                            </template>
                        <template v-else>
                            <sidebarItem :key="item.displayName" :item="item">
                            </sidebarItem>
                        </template>
                    </template>
            </ul>
            <!-- END SIDEBAR MENU -->
        </div>
        <!-- END SIDEBAR -->
    </div>
  </div>
</template>

<script>
    import axios from "axios"
    import sidebarItem from './sidebarItem'
    import config from '../../../../config/index.js'
    export default {
        name: "Sidebar",
        components: {
            sidebarItem
        },
        data() {
            return {

            }
        },
        computed: {
            menus() {
                return this.$store.state.sideBar.sideBarMenu
            }
        },
        mounted() {          

        }
    }
</script>

<style>

</style>