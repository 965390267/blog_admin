<template>
  <transition name="scale">
    <mu-button class="gotop" v-show="isShow" fab color="red" @click="backToTop()">top</mu-button>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      // 是否允许操作返回顶部
      backTopAllow: true,
      // 返回顶部所需时间
      backSeconds: 100,
      // 往下滑动多少显示返回顶部（单位：px）
      showPx: 200
    };
  },
  methods: {
    scrollToTop() {
      let offsetTop = document.querySelector(".subcontainer").scrollTop;
      offsetTop > this.showPx
        ? (this.isShow = true)
        : (this.isShow = false);
    },
    backToTop: function() {
      if (!this.backTopAllow) return;
      this.backTopAllow = false;
      var step = document.querySelector(".subcontainer").scrollTop / this.backSeconds;
      var backTopInterval = setInterval(()=> {
        if (document.querySelector(".subcontainer").scrollTop > 0) {
          document.querySelector(".subcontainer").scrollTop -= step;    
        } else { 
          this.backTopAllow = true;
          clearInterval(backTopInterval);
        }
      }, 1);
    }
  },
  mounted() {
    this.scrollToTop();
    document
      .querySelector(".subcontainer")
      .addEventListener("scroll", this.scrollToTop);
  }
};
</script>
<style scoped>
.gotop {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 101;
}
.scale-enter-active,
.scale-leave-active {
  transition: transform 0.5s;
}
.scale-enter, .scale-leave-to {
  transform: scale(0);
}
</style>
