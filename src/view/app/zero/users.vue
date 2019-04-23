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

    .users{
       .rowSetting{
            font-size:18px;
            color: #409EFF;
            cursor:pointer;           
       }
    }    

</style>

<template>
  <div class='users'>
      <crud v-show="!showPermission" :showQuery="true" :queryForm="queryForm" :mainForm="mainForm" :mainFormRule="mainFormRule" 
      :apiUrl="apiUrl" :permissionNames="permissionNames" :paged="true" 
      :handlerAdd="handlerAdd" :handlerEditData="handlerEditData" :handlerGoList="handlerGoList" :handlerSaveData="handlerSaveData">
          <template slot="queryItems">
                <el-form-item label="模糊搜索">
                    <el-input v-model="queryForm.filter" placeholder=""></el-input>
                </el-form-item> 
                <el-form-item label="选择角色">
                   <el-select v-model="queryForm.role" placeholder="">
                     <el-option v-for="item in roleList" :key="item.key" :label="item.displayName" :value="item.id"></el-option>
                   </el-select>
                </el-form-item> 
                <el-form-item label="锁定的用户">
                    <el-switch v-model="queryForm.onlyLockedUsers"  active-text='否' inactive-text='是' :active-value='false' :inactive-value='true'></el-switch>
                </el-form-item>                                  
          </template>      
          <template slot="tableItems">
                <el-table-column label="用户名" prop="userName" header-align="center"></el-table-column> 
                <el-table-column label="姓名" prop="name" header-align="center"></el-table-column> 
                <el-table-column label="邮箱" prop="emailAddress" header-align="center"></el-table-column> 
                <el-table-column label="手机号" prop="phoneNumber" header-align="center"></el-table-column>
                <el-table-column label="邮箱验证"  header-align="center" align="center" width="120">
                    <template slot-scope="scope">
                        <el-tag type="success" v-if="scope.row.isEmailConfirmed">已验证</el-tag>
                        <el-tag type="danger" v-else>未验证</el-tag>
                    </template> 
                </el-table-column>                  
                <el-table-column label="激活"  header-align="center" align="center" width="120">
                    <template slot-scope="scope">
                        <el-tag type="success" v-if="scope.row.isActive">是</el-tag>
                        <el-tag type="danger" v-else>否</el-tag>
                    </template> 
                </el-table-column> 
                <el-table-column label="创建时间" header-align="center" align="center" width="150">
                    <template slot-scope="scope">
                        {{dateTimeFormat(scope.row.creationTime)}}
                    </template>                        
                </el-table-column>
                <el-table-column label="权限设置" header-align="center" align="center" width="80" v-if="isGranted(permissionNames.permission)">
                    <template slot-scope="scope">
                        <i class="el-icon-setting rowSetting" @click="permissionSetting(scope.row)"></i>
                    </template>                        
                </el-table-column>                    
          </template>
          <template slot="formItems">
                <el-tabs type="card" v-model="activeName">
                  <el-tab-pane label="用户" name="User">
                    <div style="width:25vw;margin-left:30px">
                        <el-form-item label="用户名" prop="userName">
                            <el-input v-model="mainForm.userName" placeholder=""></el-input>
                        </el-form-item> 
                        <el-form-item label="姓名" prop="name">
                            <el-input v-model="mainForm.name" placeholder=""></el-input>
                        </el-form-item>   
                        <el-form-item label="邮箱" prop="emailAddress">
                            <el-input v-model="mainForm.emailAddress" placeholder=""></el-input>
                        </el-form-item>                           
                        <el-form-item label="手机号" prop="phoneNumber">
                            <el-input v-model="mainForm.phoneNumber" placeholder=""></el-input>
                        </el-form-item>                                                
                        <el-form-item label="随机密码">
                            <el-switch v-model="mainForm.setRandomPassword"  active-text='否' inactive-text='是' :active-value='false' :inactive-value='true'></el-switch>
                        </el-form-item> 
                        <el-form-item label="密码" prop="password" v-if="!mainForm.setRandomPassword">
                            <el-input v-model="mainForm.password" placeholder=""></el-input>
                        </el-form-item> 
                        <el-form-item label="密码(核对)" prop="againPassword" v-if="!mainForm.setRandomPassword">
                            <el-input v-model="mainForm.againPassword" placeholder=""></el-input>
                        </el-form-item>  
                        <el-form-item label="是否激活">
                            <el-switch v-model="mainForm.isActive"  active-text='否' inactive-text='是' :active-value='false' :inactive-value='true'></el-switch>
                        </el-form-item>                                                                                                 
                    </div> 
                  </el-tab-pane>
                  <el-tab-pane label="角色" name="Role">
                        <el-checkbox-group v-model="selectedRoleList">
                          <el-checkbox :label="item.name" v-for="item in roleList" :key="item.key">{{item.displayName}}</el-checkbox>
                        </el-checkbox-group>
                  </el-tab-pane>
                </el-tabs>               
          </template>
      </crud>
        <portlet-boxed icon="fa fa-tasks" title="权限设置" v-show="showPermission">
            <template slot="actions">
                <el-button  icon="el-icon-back" @click="goCrud">返回</el-button>
                <el-button  icon="el-icon-document" type="primary" @click="savePermission">保存设置</el-button>
            </template>
            <template slot="body">
                <permission-setting ref="permissionSetting" ></permission-setting>
            </template>
        </portlet-boxed>        

  </div>
</template>

<script> 
  import permissionSetting from './components/permissionSetting'
  export default {
    name:'users',
    components: {
        permissionSetting
    },
    mounted(){
        httpClient.get("/api/services/app/Role/GetRoles")
        .then(result => { 
            this.roleList=result.items;                 
        })        
    },
    data() {
        return {
            showPermission:false,
            activeName:'User',
            roleList:[],
            selectedRoleList:[],
            selectedUserId:null,
            queryForm:{
              filter:"",
              role:null,
              onlyLockedUsers:false
            },
            mainForm:{
                userName:'',
                name:'',
                emailAddress:'',
                phoneNumber:'',
                password:'',
                againPassword:'',
                isActive:'',
                setRandomPassword:false
            },
            mainFormRule:{
                userName: [
                    { required: true, message: '用户名为必须项', trigger: 'blur' },
                    { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
                ],
            },
            apiUrl:{
               queryList:'/api/services/app/User/GetUsers',
               getById:'/api/services/app/User/GetUserForEdit',
               del:'/api/services/app/User/DeleteUser',
               save:'/api/services/app/User/CreateOrUpdateUser'
            },
            permissionNames:{
                add:'ZeroPages.Users.Create',
                edit:'ZeroPages.Users.Edit',
                del:'ZeroPages.Users.Delete',
                permission:'ZeroPages.Users.Permission'
            }
        }
    },
    methods: {
        handlerAdd(){
            this.selectedRoleList=[];
        },
        handlerEditData(result) {
            this.selectedRoleList=result.roles.map(p=>{return p.name});
            return result;
        },
        handlerGoList(){
            this.activeName="User";
        },
        handlerSaveData(data){
            data.assignedRoleNames=this.selectedRoleList;
            data.setRandomPassword=this.mainForm.setRandomPassword;
            return data;
        },


        //权限设置
        permissionSetting(row){
          this.selectedUserId=row.id;
          this.showPermission=true;  
          this.$refs.permissionSetting.init();
          httpClient.get("/api/services/app/User/GetUserPermissionsForEdit",{
            params:{
              Id:this.selectedUserId
            }
          })
          .then(result => { 
              this.$refs.permissionSetting.setGrantedPermissions(result.grantedPermissionNames);                   
          })                                   
        },
        goCrud(){
          this.showPermission=false;
        },
        savePermission(){
          let grantedPermissionNames=this.$refs.permissionSetting.getPermissions();
          httpClient.put("/api/services/app/User/UpdateUserPermissions",{
            id:this.selectedUserId,
            grantedPermissionNames:grantedPermissionNames
          })
          .then(result => { 
               this.$message.success("权限设置成功！");  
               this.showPermission=false;               
          })           
        }
    },
  }

</script>