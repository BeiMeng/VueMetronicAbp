<!--  -->
<style lang='scss'>
    .portletBoxed{
        .portlet {
            margin-bottom: 10px !important;
        }
        .caption{
            font-size: 16px !important;
        }
        .portlet>.portlet-title>.caption>i {
            font-size: 16px;
        }    
    }    
</style>

<style lang='scss' scoped>
    .portletBoxed{
 
    }    

</style>

<template>
  <div class='portletBoxed'>
        <div :class="`portlet box ${color}`">
            <div class="portlet-title">
                <div class="caption">
                    <i :class="icon"></i>{{title}} 
                </div>
                <div class="actions">
                    <slot name="actions">
                    </slot>                    
                </div>                
            </div>
            <div class="portlet-body">
                <slot name="body">
                </slot>
            </div>
        </div>
  </div>
</template>

<script> 

  export default {
    name:'portletBoxed',
    components: {
        
    },
    props: {
        color: {
            type: String,
            default: 'white'
        },
        icon:{
            type: String,
            default: 'fa fa-bars'            
        },
        title:{
            type: String,
            default: ''               
        }
    },
  }

</script>