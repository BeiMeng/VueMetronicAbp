<template>
  <div id="demo2" class="demo2">
        <div class="portlet light bordered">
            <div class="portlet-title">
                <div class="caption">
                    <i class="icon-social-dribbble font-purple-soft"></i>
                    <span class="caption-subject font-purple-soft bold uppercase">Default Tabs</span>
                </div>
                <div class="actions">
                    <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                        <i class="icon-cloud-upload"></i>
                    </a>
                    <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                        <i class="icon-wrench"></i>
                    </a>
                    <a class="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                        <i class="icon-trash"></i>
                    </a>
                </div>
            </div>
            <div class="portlet-body">
                {{msg}} hahaahaahhh
                <el-button type="primary" @click="open">主要按钮</el-button>
                <el-button type="primary" @click="gooo">带参路由</el-button>
                <el-button type="text" @click="dialogVisible = true">点击打开 Dialog{{l("AboutUs")}}</el-button>
            </div>
        </div>
        <el-dialog
          title="提示"
          v-dialogDrag
          :visible.sync="dialogVisible"
          width="30%"
          >
          <span>这是一段信息</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>        
  </div>
</template>

<script>
  export default {
    name: 'demo2',
    data() {
      return {
        msg: '啊啊啊啊啊啊啊啊',
        dialogVisible:false
      }
    },
    mounted() {},
    methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
      gooo() {
        this.msg = "哈啊哈哈哈哈888"
        httpClient.post('http://www.ruianer.com:8008/api/services/app/Caching/GetAllCaches')
          .then(function(response) {
            console.log(response);
            abp.notify.info("AAAA","BBBB");
            abp.message.info("AAAA","BBBB");
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
</script>

<style>

</style>
<style scoped>
 .demo2{

 }
</style>
