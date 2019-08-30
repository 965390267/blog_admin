<template>
    <div class="translate-container">
        <transition name="scale">
      <!-- :style="{backgroundImage:'url('+piclist_item+')'}" -->
      <div class="swipebox-slider" v-show="showPic">
        <img :src="piclist_item" alt srcset />
        <div class="close iconfont icon-gouwuche" @click="showPic=false"></div>
      </div>
    </transition>
          <div class="box"  @click="openPhoto(imgSrc)">
            <div class="box-img">
              <img :src="imgSrc" alt />
            </div>
            <div class="box-content">
              <h4 class="title">Duende</h4>
              <p
                class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               
                </p>
              <ul class="social-links">
                <li>
                  <a href="#" class="fa fa-qq">云南</a>
                </li>
                <li>
                  <a href="#" class="fa fa-weibo">昆明瀑布公园</a>
                </li>
                <li>
                  <a href="#" class="fa fa-weixin">2019-5-8 5:20</a>
                </li>
              </ul>
            </div>
          </div>
  </div>
</template>
<script>
export default {
  props: {
    imgSrc: {
      type: String
    },
    desc:{
        type:String
    },
    time:{
        type:[String,Number]
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
/* 图片item的样式 */
.translate-container{
    height: 100%;
    width: 100%;
     padding: 10px 10px;
  box-shadow: 0px 0px 9px #bdbdbd;
}
.box {
     height: 100%;
    width: 100%;
  position: relative;
  perspective: 1000px;
  overflow: hidden;
}
.box .box-img {
     height: 100%;
    width: 100%;
  transform: rotateY(0);
  transition: all 0.5s ease-in-out 0s;
}
.box:hover .box-img {
  /* transform: rotateY(180deg); */
}
.box .box-img img {
  width: 100%;
  height: 100%;
}
.box .box-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  position: absolute;
    width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  transform: rotateY(90deg);
  transition: all 0.5s ease-in-out 0s;
}
.box:hover .box-content {
  transform: rotateY(0deg);
}
.box .title {
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
}
.box .description {
  font-size: 14px;
  line-height: 24px;
  color: #fff;
}
.box .title:after,
.box .description:after {
  content: "";
  width: 80%;
  display: block;
  border-bottom: 1px solid #fff;
  margin: 15px auto;
}
.box .social-links {
  margin: 0;
  padding: 0;
  list-style: none;
}
.box .social-links li {
  display: inline-block;
  margin: 0 10px;
}
.box .social-links li a {
  font-size: 20px;
  color: #a6a6a6;
}
.box .social-links li a:hover {
  text-decoration: none;
  color: #fff;
}
@media only screen and (max-width: 990px) {
  .box {
    margin-bottom: 20px;
  }
}
@media only screen and (max-width: 479px) {
  .box .box-content {
    padding: 20px;
  }
}
/* 图片item的样式 */
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