<!--  -->
<style lang='scss'>


</style>

<style lang='scss' scoped>
    .permissionSetting{
   
    }    

</style>

<template>
  <div class='permissionSetting'>
        <metro-tabs v-model="activeTab">
            <metro-tab-item name="funPerm" label="功能权限">
                <el-tree ref="permissionTree" node-key="name" class="permission-tree" :data="permissionTreeData" :props="defaultProps" 
                show-checkbox :default-expanded-keys="defaultExpandedKeys"></el-tree>                
            </metro-tab-item>
            <metro-tab-item name="dataPerm" label="数据权限">
                        待开发....                
            </metro-tab-item>
        </metro-tabs>        
  </div>
</template>

<script> 

  export default {
    name:'permissionSetting',
    data() {
        return {
            activeTab: 'funPerm',
            defaultExpandedKeys:[],
            permissionTreeData:[],
            defaultProps:{
                children: 'children',
                label: 'displayName'                
            },
        }
    },
    components: {

    },
    mounted(){
        this.init();
        this.permissionTreeData=[];
        httpClient.get("/api/services/app/Common/GetAllPermissionTree")
        .then(result => { 
            this.permissionTreeData.push(result)                 
        })          
    },
    methods: {
        init(){
            this.activeTab="funPerm";   
            this.$refs.permissionTree.setCheckedKeys([]);      
        },
        setGrantedPermissions(grantedPermissions){
            this.$refs.permissionTree.setCheckedKeys(grantedPermissions);
            this.defaultExpandedKeys=grantedPermissions;            
        },
        getPermissions(){
            let checkedNodes=this.$refs.permissionTree.getCheckedNodes(false,true);
            let grantedPermissionNames=checkedNodes.map((p)=>{
                return p.name
            });
            return grantedPermissionNames;            
        }      
    },
  }

</script>