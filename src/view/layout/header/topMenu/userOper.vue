<template>
        <!-- DOC: Apply "dropdown-dark" class after below "dropdown-extended" to change the dropdown styte -->
        <li class="dropdown dropdown-user dropdown-dark">
            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                <span class="username username-hide-on-mobile">{{user==null?"":user.name}}  </span>
                <!-- DOC: Do not remove below empty space(&nbsp;) as its purposely used -->
                <img alt="" class="img-circle" src="/static/metronic/layouts/layout4/img/avatar9.jpg" /> </a>
            <ul class="dropdown-menu dropdown-menu-default">
                <li>
                    <a href="page_user_profile_1.html">
                        <i class="icon-user"></i> My Profile </a>
                </li>
                <li>
                    <a href="app_calendar.html">
                        <i class="icon-calendar"></i> My Calendar </a>
                </li>
                <li>
                    <a href="app_inbox.html">
                        <i class="icon-envelope-open"></i> My Inbox
                        <span class="badge badge-danger"> 3 </span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="icon-rocket"></i> My Tasks
                        <span class="badge badge-success"> 7 </span>
                    </a>
                </li>
                <li class="divider"> </li>
                <li>
                    <a href="javascript:;">
                        <i class="icon-lock"></i> Lock Screen </a>
                </li>
                <li>
                    <a href="javascript:;" @click="logOut">
                        <i class="icon-key"></i> Log Out </a>
                </li>
            </ul>
        </li>
</template>

<script>
    import { AppAuthService } from '@/abpZero/app/shared/common/auth/app-auth.service';
    let _appAuthService=new AppAuthService();
    export default {
        name: "userOper",
        components: {
        },
        computed: {
            user() {
                return this.$store.state.appSession.user
            }
        },        
        methods:{
            logOut(){
                _appAuthService.logout(true,'/')
                //this.$router.push('/login')
                //强制刷新页面,因为token已经清除了，自动会跳转到登陆页面(解决引用外部js失效问题)                
            }
        }
    }
</script>

<style>

</style>