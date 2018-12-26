<template>
  <div id="sys2">
      sys2<el-button type="primary" @click="open">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'sys2',
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
      }
    }
}
</script>

<style>

</style>