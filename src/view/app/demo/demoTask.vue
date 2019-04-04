<!--  -->
<style lang='scss'>
    .demoTask{
        .portlet {
            margin-bottom: 10px !important;
        }
        .caption{
            font-size: 16px !important;
        }
        .portlet>.portlet-title>.caption>i {
            font-size: 16px;
        }        
    }

</style>

<style lang='scss' scoped>
    .demoTask{
        .rowEdit{
            font-size:18px;
            color: grey-salt;
            cursor:pointer;        
        }
        .rowDel{
            margin-left:15px;
            font-size:18px;
            color: red;
            cursor:pointer;        
        }   
    }    

</style>

<template>
  <div class='demoTask'>
    <div v-show="pageState=='list'">
        <div class="portlet box white">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-search"></i>查询条件 
                </div>
            </div>
            <div class="portlet-body">
                <el-form :inline="true" :model="queryForm" class="demo-form-inline">
                    <el-form-item label="任务名称">
                        <el-input v-model="queryForm.name" placeholder="名称关键字"></el-input>
                    </el-form-item>
                    <el-form-item label="是否发布">
                        <el-select v-model="queryForm.isPublish" placeholder="" clearable >
                            <el-option label="是" :value="true"></el-option>
                            <el-option label="否" :value="false"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="query">查 询</el-button>
                    </el-form-item>
                </el-form>          
            </div>
        </div>
        <div class="portlet box white">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa-bars"></i>数据列表 </div>
                <div class="actions">
                    <el-button  icon="el-icon-circle-plus-outline" type="success" @click="add">新增</el-button>
                </div>
            </div>
            <div class="portlet-body">
                <el-table :data="tableData" border style="width: 100%">
                    <el-table-column type="selection" width="55" header-align="center" align="center"></el-table-column>
                    <el-table-column label="任务名称" prop="name" header-align="center"></el-table-column>  
                    <el-table-column label="任务数量" prop="count" header-align="center" align="center" width="120"></el-table-column>
                    <el-table-column label="是否发布"  header-align="center" align="center" width="120">
                        <template slot-scope="scope">
                            <el-tag type="success" v-if="scope.row.isPublish">是</el-tag>
                            <el-tag type="danger" v-else>否</el-tag>
                        </template> 
                    </el-table-column> 
                    <el-table-column label="发布时间" header-align="center" align="center" width="150">
                        <template slot-scope="scope">
                            {{timeFormat(scope.row.publishTime)}}
                        </template>
                    </el-table-column>
                    <el-table-column label="创建时间" header-align="center" align="center" width="150">
                        <template slot-scope="scope">
                            {{timeFormat(scope.row.creationTime)}}
                        </template>                        
                    </el-table-column>                           
                    <el-table-column fixed="right" label="操作" width="120" header-align="center" align="center">
                        <template slot-scope="scope">
                            <el-row>
                                <i class="el-icon-edit rowEdit" title="编辑" @click="rowEdit(scope.row)"></i>
                                <i class="el-icon-delete rowDel" title="删除" @click="rowDel(scope.row)"></i>
                            </el-row>
                        </template>
                    </el-table-column> 
                </el-table>
            </div>
        </div>   
    </div>
    <div v-show="pageState!='list'">
        <div class="portlet box white">
            <div class="portlet-title">
                <div class="caption">
                    <i class="fa fa tasks"></i>详细信息 </div>
                <div class="actions">
                    <el-button  icon="el-icon-back" @click="goListPage">返回</el-button>
                    <el-button  icon="el-icon-document" type="primary" @click="save" :disabled="pageState=='browse'">保存</el-button>
                </div>
            </div>
            <div class="portlet-body">

            </div>
        </div>           
    </div>
</div>
</template>

<script> 

  export default {
    name:'demoTask',
    components: {
        
    },
    data() {
      return {
        pageState:'list',
        queryForm: {
          name: '',
          isPublish: null
        },
        tableData: [],
        mainForm:{

        },
        mainFormRule:{

        },


        showQuery:true,
        sorting:''
      }
    },
    mounted(){
         this.loadTableData();
    },    
    methods: {
      query() {
        this.loadTableData();
      },
      loadTableData(){
        let queryParams={};
        if(this.showQuery){
            queryParams=this.queryForm;
        }            
        if(this.sorting!==""){
            queryParams=Object.assign({sorting:this.sorting},queryParams);
        }
        httpClient.get('/api/services/app/DemoTask/GetDemoTasks',{
            params: queryParams
        })
        .then(result => {
            this.tableData=result.items;
        })  
      },
      add(){
          this.pageState='add';
      },
      save(){
        
      },
      goListPage(){
        this.pageState='list';
      }
    }    
  }

</script>