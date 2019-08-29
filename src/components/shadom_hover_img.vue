<template>
  <!-- <div class="shadom-alert"> -->
  <div class="b-link-stripe b-animate-go swipebox">
    <transition name="scale">
      <!-- :style="{backgroundImage:'url('+piclist_item+')'}" -->
      <div class="swipebox-slider" v-show="showPic">
        <img :src="piclist_item" alt srcset />
        <div class="close iconfont icon-gouwuche" @click="showPic=false"></div>
      </div>
    </transition>
    <div class="gal-spin-effect vertical" @click="openPhoto(imgSrc)">
      <img :src="imgSrc" alt=" " />
      <div class="gal-text-box">
        <div class="info-gal-con">
          <h4>View</h4>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  props: {
    imgSrc: {
      type: String
    }
  },
  data() {
    return {
      showPic: false,
      piclist_item: ""
    };
  },
  methods: {
    openPhoto(src) {
        console.log(src);
        
      this.piclist_item = src;
      this.showPic = true;
    }
  }
};
</script>
<style lang="" scope>
.b-animate-go {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.b-animate-go {
  height: 100%;
  width: 100%;
  position: relative;
  padding: 10px 10px;
  padding-bottom: 24px;
  display: block;
  box-shadow: 0px 0px 9px #bdbdbd;
}
.b-animate-go img {
  width: 100%;
  height: 100%;
}
.img-box-content,
.gal-text-box {
  display: block;
  width: 100%;
  height: 100%;
  transform: scale(1, 1);
  transition: all 0.4s ease-in-out;
  backface-visibility: hidden;
}
.img-box-content img,
.gal-text-box img {
  display: block;
  position: relative;
  max-width: 100%;
  max-height: 100%;
  transition: all 0.4s ease-in-out;
}
.img-box-content {
  position: relative;
}
.gal-text-box {
  top: 0;
  left: 0;
  position: absolute;
}
.gal-text-box .info-gal-con {
  display: block;
  position: relative;
  padding: 2%;
  left: 50%;
  top: 50%;
  position: relative;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
}
.gal-spin-effect {
  height: 100%;
  display: block;
  overflow: hidden;
  position: relative;
}
.gal-spin-effect .gal-text-box {
  filter: alpha(opacity=0);
  -wekbit-opacity: 0;
  -moz-opacity: 0;
  opacity: 0;
  transform: translateZ(0) scale(2, 2);
  color: #e6e6e6;
}
.gal-spin-effect .gal-text-box * {
  z-index: 3;
  font-family: "Marck Script";
  font-style: normal;
  font-weight: 400;
}
.gal-spin-effect .gal-text-box:after,
.gal-spin-effect .gal-text-box:before {
  content: "";
  display: block !important;
  position: absolute;
  visibility: visible !important;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: 0.6s ease-in-out;
}
.gal-spin-effect.vertical .gal-text-box:before {
  transform: translateZ(0) translateX(100%) rotateZ(180deg);
}
.gal-spin-effect.vertical .gal-text-box:after {
  transform: translateZ(0) translateX(-100%) rotateZ(180deg);
}
.gal-spin-effect.vertical:hover .gal-text-box {
  filter: alpha(opacity=100);
  -wekbit-opacity: 1;
  -moz-opacity: 1;
  opacity: 1;
  transform: translateZ(0) scale(1, 1);
}
.gal-spin-effect.vertical:hover .gal-text-box:before {
  transform: translateZ(0) translateX(50%) rotateZ(0deg);
}
.gal-spin-effect.vertical:hover .gal-text-box:after {
  transform: translateZ(0) translateX(-50%) rotateZ(0deg);
}
.gal-spin-effect.horizontal .gal-text-box:before {
  transform: translateZ(0) translateY(100%) rotateZ(180deg);
}
.gal-spin-effect.horizontal .gal-text-box:after {
  transform: translateZ(0) translateY(-100%) rotateZ(180deg);
}
.gal-spin-effect.horizontal:hover .gal-text-box {
  filter: alpha(opacity=100);
  -wekbit-opacity: 1;
  -moz-opacity: 1;
  opacity: 1;
  transform: translateZ(0) scale(1, 1);
}
.gal-spin-effect.horizontal:hover .gal-text-box:before {
  transform: translateZ(0) translateY(50%) rotateZ(0deg);
}
.gal-spin-effect.horizontal:hover .gal-text-box:after {
  transform: translateZ(0) translateY(-50%) rotateZ(0deg);
}
.info-gal-con h4 {
  font-size: 45px;
  margin-bottom: 30px;
  color: #ffde3a;
  font-family: "open Sans", sans-serif;
}
/*--//gallery--*/
/* vue打开图片动画 */
.scale-enter-active,
.scale-leave-active {
  transition: transform 0.5s;
}
.scale-enter,
.scale-leave-to {
  transform: scale(0);
}
/* vue打开图片动画 */


/* 全屏打开图片样式 */
.swipebox-slider {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  z-index: 9999;
}
.swipebox-slider img {
  width: 100%;
  height: 100%;
}
.close {
  position: absolute;
  right: 100px;
  top: 100px;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #999;
  font-size: 50px;
  background: rgba(0, 0, 0, 0.8);
}
/* 全屏打开图片样式 */
</style>