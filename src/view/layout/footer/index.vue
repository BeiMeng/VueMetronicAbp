<template>
  <div id="footer" v-if="true">
      <div class="page-footer">
            <div class="page-footer-inner"> 2014 &copy; Create by BeiDream.
                <a href="http://www.github.com/BeiMeng" title="基于Vue Cli 的Metronic 模板" target="_blank">BeiDream Vue Metronic!</a>
            </div>
            <!-- <div class="scroll-to-top">
                <i class="icon-arrow-up"></i>
            </div> -->
      </div>
  </div>
</template>

<script>
export default {
  name: 'pageFooter'
}
</script>

<style>
.page-footer .page-footer-inner {
    float:none !important;
    display:block !important;
    text-align: center;
}
</style>