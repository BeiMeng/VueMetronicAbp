<!--  -->
<style lang='scss'>

</style>

<style lang='scss' scoped>
  .error{
    height: 100vh;
    //background-color:gray !important;
  }
  .img-responsive{
    z-index: 100000 !important;
  }
</style>

<template>
  <div class='error404'>
    <div class=" page-404-3 error">
            <div class="page-inner">
                <img src="../../assets/earth.jpg" class="img-responsive" alt=""> </div>
            <div class="container error-404">
                <h1>404</h1>
                <h2>Houston, we have a problem.</h2>
                <p> Actually, the page you are looking for does not exist. </p>
                <p>
                    <a href="javascript:;" @click="goHome" class="btn green btn-outline"> Return home </a>
                    <br> </p>
            </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'error404',
    components: {},
    data () {
      return {
      };
    },

    props: {

    },

    computed: {},

    async mounted() {
        //解决jquery监听事件在二级路由无响应问题
        this.$nextTick(async() => {
            require('../../assets/error.min.css')
            require('../../assets/global/scripts/app.js')
        })
    },

    methods: {
      goHome(){
        location.href="/"
      }
    }
  }

</script>