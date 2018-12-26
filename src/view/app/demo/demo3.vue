<template>
  <div id="demo3">
      {{msg}}
      demo3<el-button type="primary" @click="open">主要按钮</el-button>
      <el-button type="primary" @click="gooo">带参路由</el-button>
  </div>
</template>

<script>
export default {
  name: 'demo3',
  data(){
      return{
          msg:'啊哈哈哈'
      }
  },
  mounted(){
    console.log(this.$route.params.id)      
  },
    watch: {
        $route() {
           console.log(this.$route.params.id)
        }
    },  
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
    gooo(){
      this.msg="哈啊哈哈哈哈888"
      //this.$router.push('/demo3/3')
    }
  }
}
</script>

<style>

</style>