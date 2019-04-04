<!--  -->
<style >

</style>

<style scoped>

</style>

<template>
  <div class='menusManage'>
    <div class="portlet light">
        <div class="portlet-title">
            <div class="caption">
                <i class="icon-paper-plane font-yellow-casablanca"></i>
                <span class="caption-subject bold font-yellow-casablanca uppercase"> Form Input </span>
                <span class="caption-helper">more samples...</span>
            </div>
            <div class="inputs">
                <div class="portlet-input input-inline input-medium">
                    <div class="input-group">
                        <input type="text" class="form-control input-circle-left" placeholder="search...">
                        <span class="input-group-btn">
                            <button class="btn btn-circle-right btn-default" type="submit">Go!</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="portlet-body">
             <tree-table :data="data" :columns="columns" border>
                <el-table-column label="显示图标" width="100" header-align="center" align="center">
                    <template slot-scope="scope">
                        <i :class="scope.row.icon"></i>
                    </template>
                </el-table-column>   
                <el-table-column label="是否默认显示到标签" width="200" header-align="center" align="center">
                    <template slot-scope="scope">
                        <span v-if="scope.row.path==null"></span>
                        <el-tag type="success" v-else-if="scope.row.showTab">是</el-tag>
                        <el-tag type="danger" v-else>否</el-tag>
                    </template>
                </el-table-column>   
                <el-table-column label="是否默认显示页" width="200" header-align="center" align="center">
                    <template slot-scope="scope">
                        <span v-if="scope.row.path==null"></span>
                        <el-tag type="success" v-else-if="scope.row.default">是</el-tag>
                        <el-tag type="danger" v-else>否</el-tag>
                    </template>
                </el-table-column> 
                <el-table-column label="页签是否不可关闭" width="200" header-align="center" align="center">
                    <template slot-scope="scope">
                        <span v-if="scope.row.path==null"></span>
                        <el-tag type="success" v-else-if="scope.row.notClose">是</el-tag>
                        <el-tag type="danger" v-else>否</el-tag>
                    </template>
                </el-table-column> 
                <el-table-column label="是否首页" width="200" header-align="center" align="center">
                    <template slot-scope="scope">
                        <span v-if="scope.row.path==null"></span>
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
             </tree-table>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import { AppNavigationServiceProxy } from '@/abpZero/shared/service-proxies/AppNavigationServiceProxy';
  let _appNavigationServiceProxy=new AppNavigationServiceProxy()
  export default {
    name:'menusManage',
    components: {

    },
    data () {
      return {
        columns: [
            {
                text: '名称',
                value: 'displayName',
                width: 200
            },
            {
                text: '路由name',
                value: 'name'
            },
            {
                text: '路由路径',
                value: 'path'
            }
        ],
        data: []
      };
    },

    props: {
      isOk:{
         type: Boolean,
         default: false
      }
    },

    computed: {},

    mounted(){
        _appNavigationServiceProxy.getMenu()
          .then(result => {
              this.data=result;
          })
          .catch(error => {
            console.log(error)
          })
    },

    methods: {
        editNode(id){
            alert(id)
        }
    }
  }

</script>