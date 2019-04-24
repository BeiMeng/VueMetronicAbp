<!--  -->
<style lang='scss'>
   .permission-tree{
        margin-left: 15px;
        overflow-y: auto;
        //background: $background;
        height: calc(100vh - 280px);
        .el-tree-node__expand-icon {
            font-size: 18px;
            color: #409EFF;
        }
        .el-tree-node__expand-icon.is-leaf {
            color: transparent;
            cursor: default;
        }
        .el-tree-node__label {
            font-size: 16px;
        }
        .el-tree-node {
            margin-top: 10px;
        }
        .el-tree-node:focus > .el-tree-node__content {
            background-color: #a0cffd;
        }       
   }

</style>

<style lang='scss' scoped>

    .roles{
       
    }    

</style>

<template>
  <div class='roles'>
      <crud :showQuery="false" :mainForm="mainForm" :mainFormRule="mainFormRule" 
      :apiUrl="apiUrl" :permissionNames="permissionNames" :paged="false" 
      :handlerAddData="handlerAddData" :handlerEditData="handlerEditData" :handlerGoList="handlerGoList" :handlerSaveData="handlerSaveData">
          <template slot="tableItems">
                <el-table-column label="角色名称" prop="displayName" header-align="center"></el-table-column> 
                <el-table-column label="系统"  header-align="center" align="center" width="120">
                    <template slot-scope="scope">
                        <el-tag type="success" v-if="scope.row.isStatic">是</el-tag>
                        <el-tag type="danger" v-else>否</el-tag>
                    </template> 
                </el-table-column>                  
                <el-table-column label="默认"  header-align="center" align="center" width="120">
                    <template slot-scope="scope">
                        <el-tag type="success" v-if="scope.row.isDefault">是</el-tag>
                        <el-tag type="danger" v-else>否</el-tag>
                    </template> 
                </el-table-column> 
                <el-table-column label="创建时间" header-align="center" align="center" width="150">
                    <template slot-scope="scope">
                        {{dateTimeFormat(scope.row.creationTime)}}
                    </template>                        
                </el-table-column>    
          </template>
          <template slot="formItems">
                <el-tabs type="card" v-model="activeName">
                  <el-tab-pane label="角色" name="role">
                    <div style="width:25vw;margin-left:30px">
                        <el-form-item label="角色名称" prop="displayName">
                            <el-input v-model="mainForm.displayName" placeholder=""></el-input>
                        </el-form-item> 
                        <el-form-item label="是否默认">
                            <el-switch v-model="mainForm.isDefault"  active-text='否' inactive-text='是' :active-value='false' :inactive-value='true'></el-switch>
                        </el-form-item>   
                    </div> 
                  </el-tab-pane>
                  <el-tab-pane label="权限" name="permission">
                        <permission-setting ref="permissionSetting"></permission-setting>
                  </el-tab-pane>
                </el-tabs>               
          </template>
      </crud>
  </div>
</template>

<script> 
  import permissionSetting from './components/permissionSetting'
  export default {
    name:'roles',
    components: {
        permissionSetting
    },
    mounted(){
    },
    data() {
        return {
            activeName:'role',
            mainForm:{
                displayName:'',
                isDefault:false
            },
            mainFormRule:{
                displayName: [
                    { required: true, message: '角色名称为必须项', trigger: 'blur' },
                    { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
                ],
            },
            apiUrl:{
               queryList:'/api/services/app/Role/GetRoles',
               getById:'/api/services/app/Role/GetRoleForEdit',
               del:'/api/services/app/Role/DeleteRole',
               save:'/api/services/app/Role/CreateOrUpdateRole'
            },
            permissionNames:{
                add:'ZeroPages.Roles.Create',
                edit:'ZeroPages.Roles.Edit',
                del:'ZeroPages.Roles.Delete'
            }
        }
    },
    methods: {
        handlerAddData(result){
            this.$refs.permissionSetting.init();
            return result;
        },
        handlerEditData(result) {
            this.$refs.permissionSetting.init();
            this.$refs.permissionSetting.setGrantedPermissions(result.grantedPermissionNames);
            return result;
        },
        handlerGoList(){
            this.activeName="role";
        },
        handlerSaveData(data){
            data.grantedPermissionNames=this.$refs.permissionSetting.getPermissions();
            return data;
        }
    },
  }

</script>