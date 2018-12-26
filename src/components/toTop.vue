<template>
    <transition name="v1-flyUp">
        <div class="scroll-to-top" @click="goTop" v-show="show">
                <i class="icon-arrow-up"></i>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ToTop',
    data() {
        return {
            show: false
        };
    },
    props: {
        plain: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleScroll() {
            let ele=this.$parent.$refs['wrap'];
            var scrollTop =
                ele.pageYOffset ||
                ele.scrollTop ||
                ele.scrollTop;
            if (scrollTop > 100) {
                this.show = true;
            } else {
                this.show = false;
            }
        },
        goTop() {
            let ele=this.$parent.$refs['wrap'];
            ele.scrollTop = 0;
            this.show = false;
        }
    },
    mounted() {
        console.log(this.$parent.$refs['wrap']);
        let ele=this.$parent.$refs['wrap'];
        ele.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        let ele=this.$parent.$refs['wrap'];
        ele.removeEventListener('scroll', this.handleScroll);
    }
};
</script>

<style scoped>
.btn {
    position: absolute;
    right: 12px;
    bottom: 12px;
}
.scroll-to-top {
  display: inline-block;
  padding: 2px;
  text-align: center;
  position: fixed;
  z-index: 10001;
  bottom: 10px;

  right: 10px; }
  .scroll-to-top > i {
    display: inline-block;
    color: #36c6d3;
    font-size: 32px;
    opacity: 0.7 ;
    filter: alpha(opacity=70) ; }
  .scroll-to-top:hover {
    cursor: pointer; }
    .scroll-to-top:hover > i {
      opacity: 1 ;
      filter: alpha(opacity=100) ; }

@media (min-width: 992px) {
  /* 992px */
  .scroll-to-top {
    right: 10px; } }

@media (max-width: 991px) {
  /* 991px */
  .scroll-to-top {
    right: 10px; }
    .scroll-to-top > i {
      font-size: 28px; } }

</style>
