<template>
    <li :class="`nav-item ${item.default?'start active open':''}`" :key="item.displayName">
        <a href="javascript:;" :class="`nav-link ${item.hasOwnProperty('children')?'nav-toggle':''}`" @click="clickLink(item,$event)">
            <i :class="item.icon"></i>
            <span class="title">{{item.displayName}}</span>
            <span class="arrow" v-if="item.hasOwnProperty('children')"></span>
            <span class="selected" v-if="item.default"></span>
        </a>
        <ul class="sub-menu" :style="`display:${item.default?'block':''}`">
            <template v-for="menu in item.children" v-if="item.hasOwnProperty('children')">
                <sidebarItem :item="menu" :key="menu.displayName"></sidebarItem>
            </template>
        </ul>
    </li>
</template>

<script>
    import config from '../../../../config/index.js'
    export default {
        name: 'sidebarItem',
        data() {
            return {
                maxTabCount:config.maxTabCount
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
                if(!item.path){
                    return;
                }
                //限制打开过多的tab页，防止缓存过多
                let tabPageCount=this.$store.state.tabView.visitedViews.length
                if(tabPageCount>=this.maxTabCount){
                    this.$message({
                        type: 'warning',
                        message: `当前打开页面太多,请关闭一些不使用页面再点击！`
                    });
                    return                   
                }                                                                             
                e.preventDefault();
                this.$router.push(item.path)
            }
        }
    }
</script>

<style>

</style>