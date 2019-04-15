
<style lang='scss'>
    .menusTree{
        
    }    
</style>

<template>
  <div class="menusTree">
    <el-table :data="treeData" border row-key="id">
        <el-table-column label="菜单名称" prop="displayName" width="200" header-align="center"></el-table-column>
        <el-table-column label="路由名称" prop="name" width="150" header-align="center"></el-table-column>
        <el-table-column label="路由路径" prop="url" width="200" header-align="center"></el-table-column>
        <el-table-column label="权限名称" prop="permissionName" width="200" header-align="center"></el-table-column>
        <el-table-column label="显示图标" width="100" header-align="center" align="center">
            <template slot-scope="scope">
                <i :class="scope.row.iconClass"></i>
            </template>
        </el-table-column>   
        <el-table-column label="是否默认显示到标签" width="80" header-align="center" align="center">
            <template slot-scope="scope">
                <span v-if="scope.row.url==null"></span>
                <el-tag type="success" v-else-if="scope.row.showTab">是</el-tag>
                <el-tag type="danger" v-else>否</el-tag>
            </template>
        </el-table-column>   
        <el-table-column label="是否默认显示页" width="80" header-align="center" align="center">
            <template slot-scope="scope">
                <span v-if="scope.row.url==null"></span>
                <el-tag type="success" v-else-if="scope.row.default">是</el-tag>
                <el-tag type="danger" v-else>否</el-tag>
            </template>
        </el-table-column> 
        <el-table-column label="页签是否不可关闭" width="80" header-align="center" align="center">
            <template slot-scope="scope">
                <span v-if="scope.row.url==null"></span>
                <el-tag type="success" v-else-if="scope.row.notClose">是</el-tag>
                <el-tag type="danger" v-else>否</el-tag>
            </template>
        </el-table-column> 
        <el-table-column label="是否首页" width="80" header-align="center" align="center">
            <template slot-scope="scope">
                <span v-if="scope.row.url==null"></span>
                <el-tag type="success" v-else-if="scope.row.isHome">是</el-tag>
                <el-tag type="danger" v-else>否</el-tag>
            </template>
        </el-table-column>                                                                               
        <el-table-column label="操作" width="200" header-align="center" align="center">
            <template slot-scope="scope">
                <el-row>
                    <el-button type="success" icon="el-icon-plus" circle title="添加子节点" v-if="!scope.row.isHome"></el-button>                            
                    <el-button type="primary" icon="el-icon-edit" circle title="编辑" @click="editNode(scope.row.id)"></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle title="删除" v-if="!scope.row.isHome"></el-button>
                </el-row>
            </template>
        </el-table-column>       
    </el-table>    
  </div>
</template>

<script>
  import { AppNavigationServiceProxy } from '@/abpZero/shared/service-proxies/AppNavigationServiceProxy';
  let _appNavigationServiceProxy=new AppNavigationServiceProxy()
  export default {
      name: 'menusTree',
      data() {
        return {         
          treeData: []
        }
      },
      mounted(){
          _appNavigationServiceProxy.getMenu()
            .then(result => {          
                this.treeData=result;
            })
            .catch(error => {
              console.log(error)
            })
      },    
      methods: {
        editNode() {
        }
      }
  }
</script>

<style>

</style>