<template>
        <div class="top-menu">
            <ul class="nav navbar-nav pull-right">
                <li class="separator hide" v-if="showNotifications"> </li>
                <!-- BEGIN NOTIFICATION DROPDOWN -->
                <notifications v-if="showNotifications"></notifications>
                <!-- END NOTIFICATION DROPDOWN -->
                <li class="separator hide" v-if="showMessages"> </li>
                <!-- BEGIN INBOX DROPDOWN -->
                <messages v-if="showMessages"></messages>
                <!-- END INBOX DROPDOWN -->
                <li class="separator hide" v-if="showTasks"> </li>
                <!-- BEGIN TODO DROPDOWN -->
                <tasks v-if="showTasks"></tasks>
                <!-- END TODO DROPDOWN -->
                <!-- BEGIN USER LOGIN DROPDOWN -->
                <userOper></userOper>
                <!-- END USER LOGIN DROPDOWN -->
                <!-- BEGIN QUICK SIDEBAR TOGGLER -->
                <li class="dropdown dropdown-extended quick-sidebar-toggler" v-if="showQuickSideBar">
                    <span class="sr-only">Toggle Quick Sidebar</span>
                    <i class="icon-logout"></i>
                </li>
                <!-- END QUICK SIDEBAR TOGGLER -->
            </ul>
        </div>
</template>

<script>
    import config from '../../../../config/index.js'
    import notifications from './notifications.vue'
    import messages from './messages.vue'
    import tasks from './tasks.vue'
    import userOper from './userOper.vue'
    export default {
        name: "topMenu",
        components: {
            notifications,
            messages,
            tasks,
            userOper
        },
        data(){
            return {
                showQuickSideBar:config.showQuickSideBar,
                showNotifications:config.showNotifications,
                showMessages:config.showMessages,
                showTasks:config.showTasks
            }
        }
    }
</script>

<style>

</style>