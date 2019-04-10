<!--  -->
<style lang='scss'>
  

</style>

<style lang='scss' scoped>

    .crudDemo{
     
    }    

</style>

<template>
  <div class='crudDemo'>
      <crud :queryForm="queryForm" :mainForm="mainForm" :mainFormRule="mainFormRule" 
      :apiUrl="apiUrl" :paged="false">
          <template slot="queryItems">
                <el-form-item label="任务名称">
                    <el-input v-model="queryForm.name" placeholder="名称关键字"></el-input>
                </el-form-item>
                <el-form-item label="是否发布">
                    <el-select v-model="queryForm.isPublish" placeholder="" clearable >
                        <el-option label="是" :value="true"></el-option>
                        <el-option label="否" :value="false"></el-option>
                    </el-select>
                </el-form-item>
          </template>
          <template slot="tableItems">
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
          </template>
          <template slot="formItems">
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
          </template>
      </crud>
  </div>
</template>

<script> 

  export default {
    name:'crudDemo',
    components: {
        
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
            apiUrl:{
               queryList:'/api/services/app/DemoTask/GetDemoTasks',
               getById:'/api/services/app/DemoTask/GetDemoTaskForEdit',
               del:'/api/services/app/DemoTask/DeleteDemoTask',
               save:'/api/services/app/DemoTask/CreateOrUpdateDemoTaskForOutput'
            }
        }
    },
  }

</script>