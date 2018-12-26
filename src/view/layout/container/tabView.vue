<template>
    <div id="tabView" class="tabView">
        <div class="tabbable-line" style="background-color:white">
            <ul class="nav nav-tabs " ref="tab">
                <li v-for="tag in Array.from(visitedViews)" ref="tag" :class="isActive(tag)?'active tabLink':'tabLink'" :key="tag.path" @contextmenu.prevent.native="openMenu(tag,$event)">
                    <i :class="`${tag.icon}`"></i>
                    <a href="#tab_15_2" data-toggle="tab" class="tabLink" aria-expanded="false" @click="clickLink(tag,$event)"> {{ tag.displayName }} </a>
                    <i class="el-message-box__close el-icon-close" v-show="isActive(tag) && !tag.notClose" @click.prevent.stop="closeSelectedTag(tag)" />
                </li>
            </ul>
            <contextMenu host="tab" :itemArray="contextMenu" @indexChange="handleIndexChange"></contextMenu>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabView",
        components: {

        },
        data() {
            return {
                visible: false,
                top: 0,
                left: 0,
                selectedTag: {},
                currentMenu: null,
                contextMenu: [
                    {
                        title: '刷新',
                        icon: 'icon-diamond'
                    },                    
                    {
                        title: '关闭当前',
                        icon: 'icon-diamond'
                    },
                    {
                        title: '关闭其他',
                        icon: 'icon-diamond'
                    },
                    {
                        title: '关闭全部',
                        icon: 'icon-diamond'
                    }
                ]
            }
        },
        computed: {
            visitedViews() {
                return this.$store.state.tabView.visitedViews
            }
        },
        watch: {
            // $route() {
            //     this.addViewTags()
            //     //this.moveToCurrentTag()
            // },
            visible(value) {
                if (value) {
                    document.body.addEventListener('click', this.closeMenu)
                } else {
                    document.body.removeEventListener('click', this.closeMenu)
                }
            }
        },
        mounted() {
            //this.addViewTags()
        },
        methods: {
            generateRoute() {
                if (this.$route.name) {
                    return this.$route
                }
                return false
            },
            isActive(route) {
                return route.path === this.$route.path
            },
            // addViewTags() {
            //     const route = this.generateRoute()
            //     if (!route) {
            //         return false
            //     }
            //     this.$store.dispatch('addView', route)
            // },
            // moveToCurrentTag() {
            //     const tags = this.$refs.tag
            //     this.$nextTick(() => {
            //         for (const tag of tags) {
            //             if (tag.to.path === this.$route.path) {
            //                 this.$refs.scrollPane.moveToTarget(tag.$el)
            //                 break
            //             }
            //         }
            //     })
            // },
            refreshSelectedTag(view) {
                //1.先只删除当前页面的缓存
                this.$store.dispatch('delCachedView', view).then(()=>{
                    //首页没法刷新
                    this.$router.push('/')  //2 路由重定向到首页

                    this.$nextTick(() => {
                            this.$store.dispatch('addView', view)
                            // this.$store.commit('SET_SELECTEDMENUSTATE',view) 
                            console.log(view.path)               
                            this.$router.push(view.path)  //3 再重新加载到此页,因为缓存已经清除了，路由也有变化，所以页面会重新加载                                         
                        })                    
                })
            },
            closeSelectedTag(view) {
                this.$store.dispatch('delView', view).then(({
                    visitedViews
                }) => {
                    if (this.isActive(view)) {
                        const latestView = visitedViews.slice(-1)[0]
                        if (latestView) {
                            console.log(latestView)
                            //this.$router.push(latestView)  todo 这个会根据name 寻找缓存的路由页面？
                            //this.$store.commit('SET_SELECTEDMENUSTATE', latestView)
                            this.$router.push(latestView.path)                             
                        } else {
                            this.$router.push('/')
                        }
                    }
                })
            },
            closeOthersTags() {
                this.$store.dispatch('delOthersViews', this.currentMenu).then(() => {
                    //this.moveToCurrentTag()
                })
            },
            closeAllTags() {
                this.$store.dispatch('delAllViews')
                this.$router.push('/')
            },
            // openMenu(tag, e) {
            //     this.visible = true
            //     this.selectedTag = tag
            //     const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
            //     this.left = e.clientX - offsetLeft + 15 // 15: margin right
            //     this.top = e.clientY
            // },
            // closeMenu() {
            //     this.visible = false
            // },
            clickLink(itemMenu, e) {
                if (itemMenu.notClose) {
                    this.contextMenu = [
                        {
                            title: '刷新',
                            icon: 'icon-diamond'
                        },                        
                        {
                            title: '关闭其他',
                            icon: 'icon-diamond'
                        },
                        {
                            title: '关闭全部',
                            icon: 'icon-diamond'
                        }
                    ]
                } else {
                    this.contextMenu = [
                        {
                            title: '刷新',
                            icon: 'icon-diamond'
                        },                        
                        {
                            title: '关闭当前',
                            icon: 'icon-diamond'
                        },                        
                        {
                            title: '关闭其他',
                            icon: 'icon-diamond'
                        },
                        {
                            title: '关闭全部',
                            icon: 'icon-diamond'
                        }
                    ]                    
                }
                this.currentMenu = itemMenu;
                //this.$store.commit('SET_SELECTEDMENUSTATE', itemMenu)
                e.preventDefault();
                this.$router.push(itemMenu.path)
            },
            handleIndexChange(title) {
                switch (title) {
                    case "刷新":
                        this.refreshSelectedTag(this.currentMenu);                      
                        break;
                    case "关闭当前":
                        this.closeSelectedTag(this.currentMenu)
                        break;
                    case "关闭其他":
                        this.closeOthersTags();
                        break;
                    case "关闭全部":
                        this.closeAllTags()
                        break;                        
                }
            }
        }
    };
</script>
<style scoped>

</style>

<style>
    .tabView{
        margin-bottom: 10px;
    }
    .tabView .tabbable-line a {
        line-height: 40px !important;
        display: inline;
        padding-left: 5px !important;
        padding-right: 5px !important;
    }
    .tabView .tabbable-line li {
        margin-right: 15px;
    }
    .tabView .tabbable-line .nav li:first-child {
        margin-left: 10px;
    }
    /* .tabView .el-icon-close {
        width: 16px;
        height: 16px;
        vertical-align: 2px;
        border-radius: 50%;
        text-align: center;
        transition: all .3s cubic-bezier(.645, .045, .355, 1);
        transform-origin: 100% 50%;
    }
    .tabView .el-icon-close:before {
        transform: scale(.6);
        display: inline-block;
        vertical-align: -3px;
    } */
    .tabView .el-icon-close:hover {
        vertical-align: 0px;
        background-color: #b4bccc;
        color: #fff;
    }
    .tabLink{
        cursor: pointer !important;
    }
</style>
