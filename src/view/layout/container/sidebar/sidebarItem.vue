<template>
    <li :class="`nav-item ${item.default?'start active open':''}`" :key="item.displayName">
        <a href="javascript:;" :class="`nav-link ${item.children.length>0?'nav-toggle':''}`" @click="clickLink(item,$event)">
            <i :class="item.iconClass"></i>
            <span class="title">{{item.displayName}}</span>
            <span class="arrow" v-if="item.children.length>0"></span>
            <span class="selected" v-if="item.default"></span>
        </a>
        <ul class="sub-menu" :style="`display:${item.default?'block':''}`">
            <template v-for="menu in item.children" v-if="item.children.length>0">
                <sidebarItem :item="menu" :key="menu.displayName"></sidebarItem>
            </template>
        </ul>
    </li>
</template>

<script>
    export default {
        name: 'sidebarItem',
        data() {
            return {
            }
        },
        computed: {
            formDisabled: function () {
                return this.pageState=="browse" || this.pageState=="list";
            },
            theme(){
                return this.$store.state.appSession.theme
            }               
        },         
        props: {
            item: {
                type: Object,
                default: null
            }
        },
        methods:{
            clickLink(item,e){
                if(!item.url){
                    return;
                }
                //限制打开过多的tab页，防止缓存过多
                let tabPageCount=this.$store.state.tabView.visitedViews.length
                if(tabPageCount>=this.theme.maxTabCount){
                    this.$message({
                        type: 'warning',
                        message: `当前打开页面太多,请关闭一些不使用页面再点击！`
                    });
                    return                   
                }                                                                             
                e.preventDefault();
                this.$router.push(item.url)
            }
        }
    }
</script>

<style>

</style>