<template>
  <transition name="v1-scale">
    <div v-show="show" class="el-popover el-popper contextMenu" :style="`top:${top};left:${left}`">
      <ul class="menu">
        
        <li class="item" v-for="(item,index) in itemArray" :key="index" @click="handleClick(item.title)"><i :class="`${item.icon}`"></i> {{item.title}}</li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
    name: 'contextMenu',
    data() {
        return {
            top: '0px',
            left: '0px',
            show: false
        };
    },
    props: {
        host: {
            type: String,
            default: ''
        },
        itemArray: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    mounted() {
        let vm = this;
        let host = this.$parent.$refs[this.host];
        host.addEventListener('mousedown', aevent => {
            if (window.event) aevent = window.event; //解决兼容性
            if (aevent.button == 2) {
                //当事件属性button的值为2时，表用户按下了右键
                // console.log(aevent.srcElement)
                aevent.target
                    ? aevent.target.click()
                    : aevent.srcElement.click();

                document.oncontextmenu = function() {
                    return false;
                };

                // console.log(aevent)
                // var boxX = $(host).offset().left
                // var boxY = $(host).offset().top

                // console.log(boxY + ' ' + boxX)
                //-2 实现移走鼠标自动消失效果
                vm.top = aevent.clientY-2 + 'px';
                vm.left = aevent.clientX-2 + 'px';
                // console.log(vm.top + ' ' + vm.left)
                vm.show = true;
            }
        });

        setTimeout(() => {
            vm.$el.addEventListener('mouseleave', () => {
                document.oncontextmenu = null;
                vm.show = false;
            });
        }, 300);
    },
    methods: {
        handleClick(index) {
            this.show = false;
            this.$emit('indexChange', index);
        }
    }
};
</script>

<style scopde>

.contextMenu {
    position: fixed;
}

.contextMenu > .menu {
    /* border-right: solid 1px #e6e6e6; */
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
     background-color: #fff;
}

.contextMenu > .menu > .item {
    padding-left: 10px;
    font-size: 14px;
    color: black;
    -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
    transition: border-color 0.3s, background-color 0.3s, color 0.3s;
    box-sizing: border-box;
    height: 36px;
    line-height: 36px;
    position: relative;
    -webkit-box-sizing: border-box;
    cursor: pointer;
    white-space: nowrap;
}

.contextMenu > .menu > .item:focus,
.contextMenu > .menu > .item:hover {
    outline: 0;
    color: #36c6d3;
}
</style>
