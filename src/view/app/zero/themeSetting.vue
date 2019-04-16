<!--  -->
<style lang='scss'>


</style>

<style lang='scss' scoped>

    .themeSetting{
       
    }    

</style>

<template>
  <div class='themeSetting'>
        <portlet-boxed icon="fa fa-tasks" title="主题设置">
            <template slot="actions">
                <el-button  icon="el-icon-document" type="primary" @click="save">保存</el-button>
            </template>
            <template slot="body">
                <el-form :model="mainForm" ref="mainForm" :rules="mainFormRule" label-width="120px">
                    <div style="width:25vw;margin-left:30px">
                        <el-form-item label="顶部菜单">
                            <el-switch v-model="mainForm.showHeaderMenus"  active-text='否' inactive-text='是' :active-value='false' :inactive-value='true'></el-switch>
                        </el-form-item> 
                        <el-form-item label="显示tab页签">
                            <el-switch v-model="mainForm.showPageTab"  active-text='否' inactive-text='是' :active-value='false' :inactive-value='true'></el-switch>
                        </el-form-item> 
                        <el-form-item label="tab页签数量" v-if="mainForm.showPageTab">
                            <el-input-number v-model="mainForm.maxTabCount" placeholder="" style="width:100%"></el-input-number>
                        </el-form-item>                             
                    </div>                                                                                         
                </el-form>
            </template>
        </portlet-boxed>  
  </div>
</template>

<script> 
  import { ThemeSettingServiceProxy } from '@/abpZero/shared/service-proxies/ThemeSettingServiceProxy';
  let _themeSettingServiceProxy=new ThemeSettingServiceProxy()
  export default {
    name:'themeSetting',
    components: {
        
    },
    computed: {
        theme(){
            return this.$store.state.appSession.theme
        }               
    },
    mounted(){
        this.mainForm.showHeaderMenus=this.theme.showHeaderMenus;
        this.mainForm.showPageTab=this.theme.showPageTab;
        this.mainForm.maxTabCount=this.theme.maxTabCount;
    },     
    data() {
        return {
            mainForm: {
                showHeaderMenus:true,     //是否有顶部菜单
                showPageTab:true,       //是否显示tab页标签
                maxTabCount:15          //允许最多打开多少tab页面                    
            },
            mainFormRule:{

            }
        }
    },
    methods: {
        save() {
            _themeSettingServiceProxy.saveThemeSetting(this.mainForm)
            .then(result => { 
                this.$alert('主题设置成功！点击确定后,系统将重新加载', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        location.href="/";  
                    }
                });                                              
            })
            .catch(error => {
                console.log(error)
            })             
        }
    },
  }

</script>