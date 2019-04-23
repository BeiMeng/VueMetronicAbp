<!--  -->
<style lang='scss'>


</style>

<style lang='scss' scoped>

    .metroTabItem{
     
    }    

</style>

<template>
        <div :class="`tab-pane ${isActive(this.name)}`" >
                <slot></slot>
        </div>
</template>

<script> 

  export default {
    name:'metroTabItem',
    components: {
        
    },
    props: {
        name: {
            type: String,
            default: '',
            validator: function (value) {
                return value!=null && value!="";
            }            
        },
        label:{
            type: String,
            default: ''            
        }
    },
    methods: {
        isActive(tabName) {
           return this.$parent.isActive(tabName);
        }
    },
  }

</script>