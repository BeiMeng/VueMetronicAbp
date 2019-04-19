<!--  -->
<style lang='scss'>


</style>

<style lang='scss' scoped>

    .dashboard{
       
    }    

</style>

<template>
  <div class='dashboard'>
        dashboard
        <el-button type="success" @click="toMenu">进入菜单页</el-button>  
         <el-button type="success" @click="toTheme">进入主题设置</el-button>                   
  </div>
</template>

<script> 

  export default {
    name:'dashboard',
    components: {
        
    },
    methods: {
        toMenu(){
          this.$router.push('/app/zero/menusTree')
        },
        toTheme(){
          this.$router.push('/app/zero/themeSetting')
        }
    },
  }

</script>