<template>
    <div id="login" class="login">
        <!-- BEGIN : LOGIN PAGE 5-1 -->
        <div class="user-login-5">
            <div class="row bs-reset">
                <div class="col-md-6 bs-reset mt-login-5-bsfix">
                    <div class="login-bg lgs">
                        <img class="login-logo" src="../../assets/layouts/layout4/img/login/logo.png" /> </div>
                </div>
                <div class="col-md-6 login-container bs-reset mt-login-5-bsfix">
                    <div class="login-content">
                        <h1>Metronic Admin Login</h1>
                        <p> Lorem ipsum dolor sit amet, coectetuer adipiscing elit sed diam nonummy et nibh euismod aliquam erat volutpat. Lorem ipsum dolor sit amet, coectetuer adipiscing. </p>
                        <form action="javascript:;" class="login-form" method="post" v-show="!forgetShow">
                            <div class="alert alert-danger display-hide">
                                <button class="close" data-close="alert"></button>
                                <span>Enter any username and password. </span>
                            </div>
                            <div class="row">
                                <div class="col-xs-6">
                                    <input class="form-control form-control-solid placeholder-no-fix form-group" v-model="usernameOrEmailAddress" type="text" autocomplete="off" placeholder="Username" name="username" required/> </div>
                                <div class="col-xs-6">
                                    <input class="form-control form-control-solid placeholder-no-fix form-group" v-model="password" type="password" autocomplete="off" placeholder="Password" name="password" required/> </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="rem-password">
                                        <label class="rememberme mt-checkbox mt-checkbox-outline">
                                                            <input type="checkbox" name="rememberMe" v-model="rememberMe"/> Remember me
                                                            <span></span>
                                                        </label>
                                    </div>
                                </div>
                                <div class="col-sm-8 text-right">
                                    <div class="forgot-password">
                                        <a href="javascript:;" id="forget-password" class="forget-password" @click="showForget(true)">Forgot Password?</a>
                                    </div>
                                    <button class="btn green" type="submit" @click="login">Sign In</button>
                                </div>
                            </div>
                        </form>
                        <!-- BEGIN FORGOT PASSWORD FORM -->
                        <form class="forget-form" action="javascript:;" method="post" v-show="forgetShow">
                            <h3 class="font-green">Forgot Password ?</h3>
                            <p> Enter your e-mail address below to reset your password. </p>
                            <div class="form-group">
                                <input class="form-control placeholder-no-fix form-group" type="text" autocomplete="off" placeholder="Email" name="email" /> </div>
                            <div class="form-actions">
                                <button type="button" id="back-btn" class="btn green btn-outline" @click="showForget(false)">Back</button>
                                <button type="submit" class="btn btn-success uppercase pull-right">Submit</button>
                            </div>
                        </form>
                        <!-- END FORGOT PASSWORD FORM -->
                    </div>
                    <div class="login-footer">
                        <div class="row bs-reset">
                            <div class="col-xs-5 bs-reset">
                                <ul class="login-social">
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-social-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-social-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="icon-social-dribbble"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-xs-7 bs-reset">
                                <div class="login-copyright text-right">
                                    <p>Copyright &copy; Keenthemes 2015</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { TokenService } from '@/abpZero/abp-vue-module/auth/token.service';
    import { UtilsService } from '@/abpZero/abp-vue-module/utils/utils.service';
    import { AppConsts } from '@/abpZero/shared/AppConsts';
    import { TokenAuthServiceProxy } from '@/abpZero/shared/service-proxies/TokenAuthServiceProxy';
    let _tokenAuthServiceProxy=new TokenAuthServiceProxy();
    let _tokenService=new TokenService();
    let _utilsService=new UtilsService();
    export default {
        name: 'login',
        data() {
            return {
                usernameOrEmailAddress:'',
                password:'',
                rememberMe:false,
                forgetShow: false,
                redirect: ''
            }
        },
        watch: {
            $route: {
                handler: function(route) {
                    this.redirect = route.query && route.query.redirect
                },
                immediate: true
            }
        },
        async mounted() {
            //解决jquery监听事件在二级路由无响应问题
            this.$nextTick(async() => {
                require('../../assets/login-5.css')
                require('../../assets/global/scripts/app.js')
            })
        },
        methods: {
            showForget(show) {
                this.forgetShow = show
            },
            login() {                  
                _tokenAuthServiceProxy.authenticate(
                    {
                        usernameOrEmailAddress:this.usernameOrEmailAddress,
                        password:this.password
                    }
                )
                .then(result=>{   
                    console.log(result);            
                    //tokenAuth.setToken(response.result.accessToken)
                    let tokenExpireDate = this.rememberMe ? (new Date(new Date().getTime() + 1000 * result.expireInSeconds)) : undefined;
                    _tokenService.setToken(result.accessToken,tokenExpireDate);
                    _utilsService.setCookieValue(AppConsts.authorization.encrptedAuthTokenName,result.encryptedAccessToken,tokenExpireDate,abp.appPath)                 
                    //location.reload(); 
                    location.href="/";            
                    //this.$router.push('/');                   
                })
                .catch(function (error) {
                    console.error(error);
                });                


                //重新登陆后,加载默认展示页,此功能暂时无
                // if(this.redirect !=''){
                    
                //     return;
                // }                
            }
        }
    }
</script>

<style scoped>
    .lgs {
        background-image: url(../../assets/layouts/layout4/img/login/bg1.jpg)
    }
    .login {
        background-color: white;
    }
</style>
