<template>
  <div class="hello">
        afdsfasfafafasfasf 
        <el-button type="success" @click="toMenu">进入菜单页</el-button>                 
                </div>

</template>

<script>
export default {
  name: "helloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods:{
    toMenu(){
      this.$router.push('/menusManage')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
