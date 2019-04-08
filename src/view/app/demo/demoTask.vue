<!--  -->
<style lang='scss'>
    .demoTask{
     
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
        <portlet-boxed icon="fa fa-search" title="查询条件">
            <template slot="body">
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
            </template>
        </portlet-boxed>
        <portlet-boxed icon="fa fa-bars" title="数据列表">
            <template slot="actions">
                <el-button  icon="el-icon-circle-plus-outline" type="success" @click="add">新增</el-button>
            </template>
            <template slot="body">
                <el-table ref="tableList" :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
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
                            {{dateTimeFormat(scope.row.publishTime)}}
                        </template>
                    </el-table-column>
                    <el-table-column label="创建时间" header-align="center" align="center" width="150">
                        <template slot-scope="scope">
                            {{dateTimeFormat(scope.row.creationTime)}}
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
                <pagination v-if="paged" ref="pagin" class="pagin" :request="request" :pageSize.sync="pageSize" @paginationData="getPaginData" :serverPagin="true" position="center"></pagination>
            </template>
        </portlet-boxed> 
    </div>
    <div v-show="pageState!='list'">
        <portlet-boxed icon="fa fa-tasks" title="详细信息">
            <template slot="actions">
                <el-button  icon="el-icon-back" @click="goListPage">返回</el-button>
                <el-button  icon="el-icon-document" type="primary" @click="save" :disabled="pageState=='browse'">保存</el-button>
            </template>
            <template slot="body">
                <el-form :model="mainForm" ref="mainForm" :rules="mainFormRule" label-width="100px">
                    <div style="width:25vw;margin-left:30px">
                        <el-form-item label="任务名称" prop="name">
                            <el-input v-model="mainForm.name" placeholder=""></el-input>
                        </el-form-item> 
                        <el-form-item label="数量" prop="count">
                            <el-input-number v-model="mainForm.count" placeholder="" style="width:100%"></el-input-number>
                        </el-form-item>    
                        <el-form-item label="是否发布">
                            <el-switch v-model="mainForm.isPublish"  active-text='否' inactive-text='是' :active-value='false' :inactive-value='true'></el-switch>
                        </el-form-item>
                        <el-form-item label="发布时间">
                            <el-date-picker type="datetime" v-model="mainForm.publishTime" :disabled="!mainForm.isPublish" style="width:100%"></el-date-picker>                      
                        </el-form-item>       
                    </div>                                 
                </el-form>
            </template>
        </portlet-boxed>                 
    </div>
</div>
</template>

<script> 
  let defaultForm;
  import * as _ from 'lodash';
  import pagination from '../../../components/pagination' 
  export default {
    name:'demoTask',
    components: {
        pagination
    },
    data() {
      return {
        queryForm: {
          name: '',
          isPublish: null
        },
        mainForm:{
            name:'',
            count:0,
            isPublish:false,
            publishTime:''
        },
        mainFormRule:{
              name: [
                  { required: true, message: '任务名称为必须项', trigger: 'blur' },
                  { min: 2, max: 50, message: '长度在 2 到 50 个字符', trigger: 'blur' }
              ],
        },

        pageState:'list',
        tableData: [],
        selectDataId:null,

        showQuery:true,
        sorting:'',
        keyId:'id',
        paged:true,
        pageSize:10,

        request:{
            url:'/api/services/app/DemoTask/GetPagedDemoTasks',
            type:'get'
        }
      }
    },
    mounted(){
         defaultForm=_.cloneDeep(this.mainForm);
         this.loadTableData();
    },    
    methods: {
        handleSelectionChange(rows) {
            if (rows) {
                if(rows.length==0){
                    this.selectDataId =null;
                    return
                }
                for (let index = 0; index < rows.length - 1; index++) {
                    const row = rows[index];
                    this.$refs.tableList.toggleRowSelection(row, false);
                }
                this.$refs.tableList.toggleRowSelection(rows[rows.length - 1], true);
                this.selectDataId = rows[rows.length - 1][this.keyId];
            } else {
                this.$refs.tableList.clearSelection();
                this.selectDataId =null;
            }
        },        
        query() {
            this.selectDataId=null;
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
            //todo warp

            if(this.paged){
                this.$refs.pagin.query(queryParams);
            }else{
                httpClient.get('/api/services/app/DemoTask/GetDemoTasks',{
                    params: queryParams
                })
                .then(result => {
                    this.tableData=result.items;
                    //设置之前选择数据的选中状态
                    this.$nextTick(()=>{
                        if(this.selectDataId){
                            for (let index = 0; index < this.tableData.length; index++) {
                                const element = this.tableData[index];
                                if(element[this.keyId]==this.selectDataId){
                                    this.$refs.tableList.toggleRowSelection(this.tableData[index], true);
                                }
                            }
                        }  
                    })                  
                }) 
            }
        },
        //设置分页数据
        getPaginData(list){
            let newTableData;

            //todo warp
            newTableData=list;        
            this.tableData = newTableData;
            //设置之前选择数据的选中状态
            this.$nextTick(()=>{
                if(this.selectDataId){
                    for (let index = 0; index < this.tableData.length; index++) {
                        const element = this.tableData[index];
                        if(element[this.keyId]==this.selectDataId){
                            this.$refs.tableList.toggleRowSelection(this.tableData[index], true);
                        }
                    }
                }  
            })                                    
        },        
        add(){
            this.pageState='add';
            Object.keys(this.mainForm).forEach((k) => {
                this.mainForm[k]=defaultForm[k];
            });              
        },
        rowEdit(row){
            this.pageState="edit";
            this.setFormInfoById(row[this.keyId]);  
        },
        setFormInfoById(dataId){
            this.selectDataId=dataId;  

            let params={};
            params[this.keyId]=dataId;            
            httpClient.get('/api/services/app/DemoTask/GetDemoTaskForEdit',{
                params: params
            })
            .then(result=>{
                this.setFormInfo(result['demoTask']);
            })
        },
        setFormInfo(result){
            let formData;
            formData=result;            
            //todo warp      
            Object.keys(this.mainForm).forEach((k) => {
                this.mainForm[k]=formData[k];
            });                   
        },
        rowDel(row){
           this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {

                //后端删除
                let params={};
                params[this.keyId]=row[this.keyId];                              
                httpClient.delete('/api/services/app/DemoTask/DeleteDemoTask',{
                    params: params
                })
                .then(()=>{
                    this.selectDataId=null;
                    this.pageState="list";
                    this.loadTableData();
                    this.$message.success("数据删除成功！");
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
                let saveData=_.cloneDeep(this.mainForm);
                if(this.pageState=="edit"){   
                    saveData[this.keyId]=this.selectDataId;
                }
                let data=new Object();
                data['demoTask']=saveData;
                //todo warp
                httpClient.post('/api/services/app/DemoTask/CreateOrUpdateDemoTaskForOutput',data)
                .then((result)=>{
                    console.log(result);
                    this.$refs.tableList.clearSelection();
                    this.selectDataId=result[this.keyId];                                
                    this.loadTableData();
                    this.pageState="list";
                    this.$message.success("数据保存成功！");  
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