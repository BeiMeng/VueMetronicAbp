<!--  -->
<style lang='scss'>


</style>

<style lang='scss' scoped>

    .metroTabs{
     
    }    

</style>

<template>
        <div class="tabbable-line">
            <ul class="nav nav-tabs ">
                <li v-for="item in navTabs" :key="item.key" :class="isActive(item.name)" @click="setActiveTab(item.name)">
                    <a  data-toggle="tab" aria-expanded="true"> {{item.label}} </a>
                </li>
            </ul>
            <div class="tab-content">
                    <slot></slot>
            </div>
        </div>    
</template>

<script> 

  export default {
    name:'metroTabs',
    data() {
        return {
            navTabs:[]
        }
    },
    model: {
        prop: "activeName",
        event: "setActiveTab"
    },    
    props: {
        activeName: {
            type: String,
            default:'',
            validator: function (value) {
                return value!=null && value!="";
            }      
        },
    },
    components: {
        
    },
    mounted() {
        this.navTabs=this.$children.map(p=>{
            return {
                label:p.label,
                name:p.name
            }
        });
    },
    methods: {
        setActiveTab(tabName){
            //this.activeName=tabName;
            this.$emit('setActiveTab', tabName);
        },
        isActive(tabName) {
            if(tabName==this.activeName){
                return 'active'
            }
            return '';
        } 
    },
  }

</script>