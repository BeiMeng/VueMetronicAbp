<!--  -->
<style lang='scss'>
    .crud{
  
    }    
</style>

<style lang='scss' scoped>
    .crud{
        .rowEdit{
            font-size:18px;
            color: #409EFF;
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
  <div class='crud'>
    <div v-show="pageState=='list'">
        <portlet-boxed icon="fa fa-search" title="查询条件" v-show="showQuery">
            <template slot="body">
                <el-form :inline="true" :model="queryForm" class="demo-form-inline">
                    <slot name="queryItems"></slot>
                    <el-form-item>
                        <el-button type="primary" @click="query">查 询</el-button>
                    </el-form-item>
                </el-form> 
            </template>
        </portlet-boxed>
        <portlet-boxed icon="fa fa-bars" title="数据列表">
            <template slot="actions">
                <el-button v-if="isGranted(permissionNames.add)"  icon="el-icon-circle-plus-outline" type="success" @click="add">新增</el-button>
            </template>
            <template slot="body">
                <el-table ref="tableList" :data="tableData" border style="width: 100%" 
                @selection-change="handleSelectionChange" @row-dblclick="rowDbClick" @row-click="rowClick">
                    <el-table-column type="selection" width="55" header-align="center" align="center"></el-table-column>
                    <slot name="tableItems"></slot>                  
                    <el-table-column v-if="isGranted(permissionNames.edit) || isGranted(permissionNames.del)" fixed="right" label="操作" width="120" header-align="center" align="center">
                        <template slot-scope="scope">
                            <el-row>
                                <i v-if="isGranted(permissionNames.edit)" class="el-icon-edit rowEdit" title="编辑" @click="rowEdit(scope.row)"></i>
                                <i v-if="isGranted(permissionNames.del)" class="el-icon-delete rowDel" title="删除" @click="rowDel(scope.row)"></i>
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
                <el-button  icon="el-icon-document" type="primary" @click="save" :disabled="formDisabled">保存</el-button>
            </template>
            <template slot="body">
                <el-form :model="mainForm" ref="mainForm" :rules="mainFormRule" label-width="100px" :disabled="formDisabled">
                    <slot name="formItems"></slot>                               
                </el-form>
            </template>
        </portlet-boxed>                 
    </div>      
  </div>
</template>

<script> 

  let defaultForm;
  import * as _ from 'lodash';
  import pagination from './pagination' 
  export default {
    name:'crud',
    components: {
        pagination
    },
    data() {
      return {
        pageState:'list',
        tableData: [],
        selectDataId:null,
      }
    },
    props: {
        queryForm: {
            type: Object,
            default:()=>{} 
        },
        mainForm: {
            type: Object,
            default:()=>{} 
        },
        mainFormRule: {
            type: Object,
            default:()=>{} 
        },
        //主键Id名称
        keyId:{
            type:String,
            default:'id'
        },
        keyName:{
            type:String,
            default:'item'            
        },
        //是否显示查询条件
        showQuery:{
            type:Boolean,
            default:true
        },
        //是否分页
        paged:{
            type:Boolean,
            default:true
        },
        //分页数量
        pageSize:{
            type:Number,
            default:10
        },
        //排序
        sorting:{
            type:String,
            default:''
        },
        //数据Api
        apiUrl:{
            type: Object,
            default: {
               queryList:'',
               getById:'',
               del:'',
               save:''
            }               
        },
        permissionNames:{
            type: Object,
            default: {
               add:'',
               edit:'',
               del:''
            }             
        },
        handlerAddData:{
            type:Function,
            default:()=>{return r}            
        },
        handlerEditData:{
            type:Function,
            default:(r)=>{return r}
        },
        handlerGoList:{
            type:Function,
            default:()=>{}               
        },
        handlerSaveData:{
            type:Function,
            default:(r)=>{return r}
        },                                  
    },
    computed: {
        //（分页模式才有此计算属性）
        request:{
            // getter
            get: function () {
                    return {
                    url:this.apiUrl.queryList,
                    type:'get'
                }     
            },
            // setter
            set: function (newValue) {
            }            
        },
        formDisabled: function () {
            return this.pageState=="browse" || this.pageState=="list";
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
        rowClick(row, event, column) {
            this.$refs.tableList.toggleRowSelection(row, true);
        },   
        rowDbClick(row){
            this.pageState="browse";                          
            this.setFormInfoById(row[this.keyId]);  
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
                this.getAllListByServer(queryParams)
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
            this.setFormInfoById(null);             
        },
        rowEdit(row){
            this.pageState="edit";
            this.setFormInfoById(row[this.keyId]);  
        },
        setFormInfoById(dataId){
            this.selectDataId=dataId;  

            this.getByServer(dataId)
            .then(result=>{
                let handlerResult;
                if(this.pageState=='add'){
                    handlerResult=this.handlerAddData(result);
                }else if(this.pageState=='edit'){
                    handlerResult=this.handlerEditData(result);
                } 
                this.setFormInfo(handlerResult[this.keyName]);
            })
        },
        setFormInfo(result){
            let formData;
            formData=result;    
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
                this.delByServer(row[this.keyId])
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
                data[this.keyName]=saveData;
                //todo warp
                let handlerData=this.handlerSaveData(data)

                this.saveServer(handlerData)
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
            this.handlerGoList();
            this.$refs["mainForm"].clearValidate();                    
            this.pageState='list';
        },
        //oper server
        getAllListByServer(queryParams){
            return httpClient.get(this.apiUrl.queryList,{
                params: queryParams
            })            
        },
        getByServer(dataId){
            let params={};
            params[this.keyId]=dataId;            
            return httpClient.get(this.apiUrl.getById,{
                params: params
            })            
        },
        saveServer(data){
           return httpClient.post(this.apiUrl.save,data)
        },
        delByServer(dataId){
            let params={};
            params[this.keyId]=dataId;                              
            return httpClient.delete(this.apiUrl.del,{
                params: params
            })
        }
    }    
  }

</script>