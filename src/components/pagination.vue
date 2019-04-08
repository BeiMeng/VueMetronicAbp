<template>
  <el-pagination :small="small" :style="`text-align: ${position};margin-top:0.5rem`" :total="totalCount" :current-page="pageIndex" :page-size="pageSize" @current-change="pageChange" @size-change="sizeChange" :layout="paginLayout">
  </el-pagination>
</template>

<script>
  export default {
    name: "pagination",
    data() {
      return {
        totalCount: 0,
        pageIndex: 1,
        allData:[],
        params:{}        
      }
    },
    props: {
      request: {
        type: Object,
        default: function() {
          return {
            url:'',
            type:'post'            
          }
        }
      },
      pageSize: {
        type: Number,
        default: 20
      },
      paginLayout:{
         type: String,
         default: 'total, sizes, prev, pager, next, jumper'       
      },
      position: {
        type: String,
        default: 'left'
      },
      small: {
        type: Boolean,
        default: false
      },
      serverPagin:{
        type: Boolean,
        default: true
      }
    },
    watch: {

    },
    methods: {
      query(newParams){
        this.params=newParams;
        this.pageIndex = 1
        this.allData=[]
        this.getTableData()        
      },      
      pageChange(pageIndex) {
        this.pageIndex = pageIndex
        this.getTableData()
      },
      sizeChange(pageSize) {
        //不能直接修改父组件传过来的props 属性,可以给props属性添加.sync关键字,并触发以下事件,通过父组件来间接修改pageSize
        this.$emit("update:pageSize", pageSize)
        //通过上面方式修改pageSize属性之后,不能立即获得，下面方法将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新，可以获取最新修改后的pageSize
        this.$nextTick(() => {
          this.getTableData()
        })
      },
      async getTableData() {     
        // const loading = this.$loading({
        //   lock: false,
        //   fullscreen: false,
        //   text: 'Loading',
        //   spinner: 'el-icon-loading',
        //   background: 'rgba(0, 0, 0, 0.7)'
        // })
        if(this.serverPagin){ 
          await this.loadServerPagin()
          return          
        }
        //内存分页逻辑
        await this.loadNoServerPagin()

        // setTimeout(() => {
        //   loading.close()
        // }, 1000)
      },
      async loadServerPagin(){
          let pagedParams={
            ...this.params,
            ...{
              MaxResultCount: this.pageSize,
              SkipCount: this.pageIndex-1
            }            
          }
          try {
            let data = {}
            if (this.request.type == 'post') {
              httpClient.post(this.request.url,pagedParams)
              .then(result=>{
                this.totalCount = result.totalCount                   
                this.$emit("paginationData", result.items) 
              })
            }else {
              httpClient.get(this.request.url,{
                params:pagedParams
              })
              .then(result=>{
                this.totalCount = result.totalCount                   
                this.$emit("paginationData", result.items) 
              })
            }
          } catch (e) {            
            console.log(e)
            this.$emit("paginationData", [])
            this.$message.error(e)
          }
      },
      async loadNoServerPagin(){
        if(this.allData.length!=0){
          this.$emit("paginationData", this.pagination(this.pageIndex,this.pageSize,this.allData))
          return
        }
        try {
            let data = {}
            if (this.request.type == 'post') {
              data = await httpCalc.postAsync(
                this.request.url,
                this.params
              )
            } else {
              data = await httpCalc.getAsync(
                this.request.url, this.params
              )
            }
            if (this.request.type == 'post') {
              httpClient.post(this.request.url,pagedParams)
              .then(result=>{
                this.totalCount = result.items.length
                this.allData=result.items                   
                this.$emit("paginationData", this.pagination(this.pageIndex,this.pageSize,this.allData))                 
              })
            }else {
              httpClient.get(this.request.url,{
                params:pagedParams
              })
              .then(result=>{
                this.totalCount = result.items.length
                this.allData=result.items                   
                this.$emit("paginationData", this.pagination(this.pageIndex,this.pageSize,this.allData))     
              })
            }            

        } catch (e) {
          console.log(e)
          this.$message.error(e)
        }        
      },
      pagination(pageNo, pageSize, array) {
        var offset = (pageNo - 1) * pageSize;
        return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
      }
    },
    mounted() {
      
    }
  }
</script>

<style>

</style>
