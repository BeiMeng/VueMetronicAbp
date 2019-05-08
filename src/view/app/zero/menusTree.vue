
<style lang='scss'>
    .menusTree{
        
    }    
</style>

<template>
  <div class="menusTree">
      <div v-show="pageState=='list'">
        <portlet-boxed icon="fa fa-bars" title="菜单列表(仅系统管理员和开发人员可见及配置)">
            <template slot="actions">
                <el-button v-if="isGranted(permissionNames.add)"  icon="el-icon-circle-plus-outline" type="success" @click="add(null)">新增业务模块</el-button>
            </template>
            <template slot="body">
                <el-table :data="treeData" border row-key="id">
                    <el-table-column label="菜单名称" prop="displayName" width="200" header-align="center"></el-table-column>
                    <el-table-column label="路由名称" prop="name" width="150" header-align="center"></el-table-column>
                    <el-table-column label="路由路径" prop="url"  header-align="center"></el-table-column>
                    <el-table-column label="权限名称" prop="permissionName"  header-align="center"></el-table-column>
                    <el-table-column label="排序" prop="order"  header-align="center" align="center"></el-table-column>
                    <el-table-column label="显示图标" width="100" header-align="center" align="center">
                        <template slot-scope="scope">
                            <i :class="scope.row.iconClass"></i>
                        </template>
                    </el-table-column> 
                    <el-table-column label="分组样式" width="80" header-align="center" align="center">
                        <template slot-scope="scope">
                            <span v-if="scope.row.url!=null"></span>
                            <el-tag type="success" v-else-if="scope.row.group">是</el-tag>
                            <el-tag type="danger" v-else>否</el-tag>
                        </template>
                    </el-table-column>            
                    <el-table-column label="默认选中" width="80" header-align="center" align="center">
                        <template slot-scope="scope">
                            <el-tag type="success" v-if="scope.row.default">是</el-tag>
                            <el-tag type="danger" v-else>否</el-tag>
                        </template>
                    </el-table-column> 
                    <el-table-column label="页签不可关闭" width="120" header-align="center" align="center">
                        <template slot-scope="scope">
                            <span v-if="scope.row.url==null"></span>
                            <el-tag type="success" v-else-if="scope.row.notClose">是</el-tag>
                            <el-tag type="danger" v-else>否</el-tag>
                        </template>
                    </el-table-column> 
                    <el-table-column label="首页" width="80" header-align="center" align="center">
                        <template slot-scope="scope">
                            <span v-if="scope.row.url==null"></span>
                            <el-tag type="success" v-else-if="scope.row.isHome">是</el-tag>
                            <el-tag type="danger" v-else>否</el-tag>
                        </template>
                    </el-table-column>                                                                               
                    <el-table-column label="操作" width="200" header-align="center" align="center">
                        <template slot-scope="scope">
                            <el-row>
                                <el-button type="success" icon="el-icon-plus" circle title="添加子节点" @click="add(scope.row.id)" v-if="!scope.row.isHome && scope.row.url==null && isGranted(permissionNames.add)"></el-button>                            
                                <el-button type="primary" icon="el-icon-edit" circle title="编辑" @click="editNode(scope.row)" v-if="isGranted(permissionNames.edit)"></el-button>
                                <el-button type="danger" icon="el-icon-delete" circle title="删除" @click="delNode(scope.row)" v-if="!scope.row.isHome && isGranted(permissionNames.del)"></el-button>
                            </el-row>
                        </template>
                    </el-table-column>       
                </el-table>   
            </template>
        </portlet-boxed> 
      </div>
    <div v-show="pageState!='list'">
        <portlet-boxed icon="fa fa-tasks" title="详细信息(菜单的结构需与后端权限配置结构保持一致)">
            <template slot="actions">
                <el-button  icon="el-icon-back" @click="goListPage">返回</el-button>
                <el-button  icon="el-icon-document" type="primary" @click="save" :disabled="formDisabled">保存</el-button>
            </template>
            <template slot="body">
                <el-form :model="mainForm" ref="mainForm" :rules="mainFormRule" label-width="100px" :disabled="formDisabled">
                     <el-row :gutter="20">
                         <el-col :span="6" :offset="2">
                             <el-form-item label="显示名称" prop="displayName">
                                 <el-input v-model="mainForm.displayName" placeholder="显示名称"></el-input>
                             </el-form-item>
                         </el-col>
                         <el-col :span="6" :offset="2">
                             <el-form-item label="显示图标" prop="iconClass">
                                 <el-input v-model="mainForm.iconClass" placeholder="显示图标">
                                      <template slot="append">
                                          <el-button type="success" @click="selectIcon">选择图标</el-button>
                                      </template>
                                 </el-input>
                             </el-form-item>
                         </el-col>                          
                    </el-row>   
                     <el-row :gutter="20">                        
                         <el-col :span="6" :offset="2">                                                     
                             <el-form-item label="路由地址">
                                 <el-select v-model="mainForm.url" placeholder="" style="width:100%" @change="urlChange" clearable>
                                   <el-option v-for="item in urlList" :key="item.key" :label="item.path" :value="item.path"></el-option>
                                 </el-select>
                             </el-form-item>
                         </el-col>
                           <el-col :span="6" :offset="2">
                              <el-form-item label="路由名称" prop="name">
                                  <el-input v-model="mainForm.name" placeholder="路由名称" :disabled="mainForm.url!=null"></el-input>
                              </el-form-item>
                          </el-col>                          
                    </el-row>
                     <el-row :gutter="20">
                        <el-col :span="6" :offset="2" >
                            <el-form-item label="权限名称" prop="permissionName">
                                 <el-select v-model="mainForm.permissionName" placeholder="" style="width:100%" @change="urlChange" clearable>
                                   <el-option v-for="item in allPermissions" :key="item.key" :label="item.name" :value="item.name"></el-option>
                                 </el-select>
                            </el-form-item>
                        </el-col>                            
                          <el-col :span="6" :offset="2">
                              <el-form-item label="排序">
                                  <el-input-number v-model="mainForm.order" placeholder="排序" style="width:100%"></el-input-number>
                              </el-form-item>
                          </el-col>                                             
                    </el-row>
                     <el-row :gutter="20">
                          <el-col :span="6" :offset="2">
                             <el-form-item label="默认选中">
                                    <el-switch v-model="mainForm.default"  active-text='否' inactive-text='是' :active-value='false' :inactive-value='true'></el-switch>
                             </el-form-item>
                         </el-col>                           
                         <el-col :span="6" :offset="2" v-if="mainForm.url==null">
                              <el-form-item label="分组样式">
                                    <el-switch v-model="mainForm.group"  active-text='否' inactive-text='是' :active-value='false' :inactive-value='true'></el-switch>
                              </el-form-item>
                         </el-col> 
                          <!-- <el-col :span="6" :offset="2">
                              <el-form-item label="是否首页">
                                    <el-switch v-model="mainForm.isHome"  active-text='否' inactive-text='是' :active-value='false' :inactive-value='true'></el-switch>
                              </el-form-item>
                          </el-col> -->
                    </el-row> 
                     <!-- <el-row :gutter="20">
                          <el-col :span="6" :offset="2">
                              <el-form-item label="路由名称">
                                  <el-input v-model="mainForm.name" placeholder="路由名称"></el-input>
                              </el-form-item>
                          </el-col>                         
                          <el-col :span="6" :offset="2">
                              <el-form-item label="页签可关闭" v-if="theme.showPageTab">
                                    <el-switch v-model="mainForm.notClose"  active-text='否' inactive-text='是' :active-value='false' :inactive-value='true'></el-switch>
                              </el-form-item>
                          </el-col>
                    </el-row>                                                                                          -->
                </el-form>
            </template>
        </portlet-boxed>                 
    </div>   
    <el-dialog title="选择图标" :visible.sync="dialogVisible" width="50%">
        <icon-list></icon-list>  
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            <el-button @click="dialogVisible = false">取 消</el-button>
        </div>
    </el-dialog>    
     
  </div>
</template>

<script>
  let defaultForm;
  import { AppNavigationServiceProxy } from '@/abpZero/shared/service-proxies/AppNavigationServiceProxy';
  let _appNavigationServiceProxy=new AppNavigationServiceProxy()
  export default {
      name: 'menusTree',
      data() {
        return { 
          dialogVisible:false,
          pageState:'list',        
          treeData: [],
          urlList:[],
          allPermissions:[],
          mainForm: {
            displayName: "",
            name: "",   
            url: null,    
            permissionName: "",  
            iconClass: "",
            order: 0,

            default: false,         
            group: false,
            isHome: false,
            notClose: false,

            id:null,
            parentId:null
          },
          mainFormRule: {
            displayName: [
                { required: true, message: '菜单名称为必须项', trigger: 'blur' },
                { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
            ],
            name: [
                { required: true, message: '路由名称为必须项', trigger: 'change' },
                { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'change' }
            ], 
            permissionName: [
                { required: true, message: '路由名称为必须项', trigger: 'change' },
                { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'change' }
            ],            
          },          
          permissionNames:{
            add:'ZeroPages.MenusTree.Create',
            edit:'ZeroPages.MenusTree.Edit',
            del:'ZeroPages.MenusTree.Delete'
          }
        }
      },
      computed: {
        formDisabled: function () {
            return this.pageState=="browse" || this.pageState=="list";
        },
        theme(){
            return this.$store.state.appSession.theme
        }               
      },        
      mounted(){
          console.log(abp.auth.allPermissions);
          console.log(this.$router.options.routes);
            Object.keys(abp.auth.allPermissions).forEach((k) => {
                this.allPermissions.push({name:k});
            });            
          let routers=this.$router.options.routes.filter(p=>p.path=="/app");
          this.urlList=routers[0].children;
          defaultForm=_.cloneDeep(this.mainForm);
          this.loadTableData();
      },    
      methods: {
        selectIcon(){
            this.dialogVisible=true;
        },
        urlChange(val){
            if(val==null){ //清空时
                this.mainForm.name=null;
                return;
            }
            let urls=this.urlList.filter(p=>p.path==val);
            this.mainForm.name=urls[0].name;
        },
        loadTableData(){
          _appNavigationServiceProxy.getMenuTree()
            .then(result => {          
                this.treeData=result;
            })
            .catch(error => {
              console.log(error)
            })
        },          
        add(parentId){
            this.pageState='add';
            Object.keys(this.mainForm).forEach((k) => {
                this.mainForm[k]=defaultForm[k];
            });
            this.mainForm.parentId=parentId;  
        },
        editNode(row) {
          _appNavigationServiceProxy.getMenuById(row.id)
            .then(result => { 
                Object.keys(this.mainForm).forEach((k) => {
                    this.mainForm[k]=result[k];
                }); 
                this.pageState="edit";                        
            })
            .catch(error => {
              console.log(error)
            })            
        },
        delNode(row){
           this.$confirm('此操作将永久删除该菜单及其子菜单, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                _appNavigationServiceProxy.delMenu(row.id)
                    .then(result => { 
                        this.$alert('数据删除成功！点击确定后,系统将重新加载', '提示', {
                            confirmButtonText: '确定',
                            callback: action => {
                                location.href="/";  
                            }
                        });                           
                    })
                    .catch(error => {
                    console.log(error)
                    }) 

            }).catch(async () => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            }); 
        },
        save(){
            this.$refs["mainForm"].validate((valid) => {
                if (!valid) {   //表单验证失败
                    return false;          
                }                      
                _appNavigationServiceProxy.saveMenu(this.mainForm)
                    .then(result => { 
                        // this.loadTableData();
                        // this.$message.success("数据保存成功！"); 
                        // this.pageState="list";
                        this.$alert('数据保存成功！点击确定后,系统将重新加载', '提示', {
                            confirmButtonText: '确定',
                            callback: action => {
                                location.href="/";  
                            }
                        });                                              
                    })
                    .catch(error => {
                        console.log(error)
                    })                               
            });
        },
        goListPage(){            
            this.pageState='list';
            this.$refs["mainForm"].clearValidate();
        }        
      }
  }
</script>

<style>

</style>