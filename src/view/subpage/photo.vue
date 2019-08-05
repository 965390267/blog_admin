<template>
  <div class="photo">
    <h3>
      <i class="fa fa-angle-right"></i> Gallery
    </h3>
    <hr />
    <mu-menu placement='bottom' :open='isOpen'>
      <mu-button color="primary">{{currentType}}</mu-button>
      <mu-list slot="content">
        <mu-list-item button @click="chooseType('风景')">
          <mu-list-item-title>风景</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button @click="chooseType('旅游')">
          <mu-list-item-title>旅游</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button @click="chooseType('次元')">
          <mu-list-item-title>次元</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button @click="chooseType('美食')">
          <mu-list-item-title>美食</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button @click="chooseType('人物')">
          <mu-list-item-title>人物</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-menu>
    <transition name="scale">
      <!-- :style="{backgroundImage:'url('+piclist_item+')'}" -->
      <div class="swipebox-slider"  v-show="showPic" >
        <img :src="piclist_item" alt="" srcset="">
        <div class="close iconfont icon-gouwuche" @click="showPic=false"></div>
      </div>
    </transition>
    <div class="gallery-grids">
      <template v-for="(item,index) in resultImgList">
        <div class="col-md-6 baner-top" v-if="item.bigOrSmall" :key="index">
         
          <a  class="b-link-stripe b-animate-go swipebox">
              <div class="choose-btn">
                <mu-checkbox v-model="checkbox" value="eat" label="单选"></mu-checkbox>
                </div>
            <div class="gal-spin-effect vertical" @click="openPhoto(item.src)">
              
              <img :src="item.src" height="420" alt=" " />
              <div class="gal-text-box">
                <div class="info-gal-con">
                  <h4>View</h4>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-md-3 baner-top ban-mar" v-else :key="index">
          <a class="b-link-stripe b-animate-go swipebox">
            <div class="choose-btn">
                <mu-checkbox v-model="checkbox" value="eat" label="单选"></mu-checkbox>
                </div>
            <div class="gal-spin-effect vertical" @click="openPhoto(item.src)">
              <img :src="item.src" height="240" alt=" " />
              <div class="gal-text-box">
                <div class="info-gal-con">
                  <h4>View</h4>
                </div>
              </div>
            </div>
          </a>
        </div>
      </template>
      <div class="clearfix"></div>
    </div>
    <!-- /row -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPic: false,
      piclist_item: "",
      currentPage: 5,
      resultImgList: [],
      currentType:'风景',
      isOpen:false,
      checkbox:false
    };
  },
  computed: {},
  methods: {
    chooseType(type){
 this.currentType=type
 this.isOpen=false;
    },
    openPhoto(src) {
      this.piclist_item = src;
      this.showPic = true;
    },
    computedBigImgAndSmallImg() {
      var arr = [];
      for (let index = 1; index < 18; index++) {
        arr.push("http://img.zangzhihong.com/background" + index + ".jpg");
      }
      var telemptArr = [true, true,false,false,false,false]; /* 模板，1，2为大图，3，4,5为大图,利用该模板无限循环即可循环所有的图 */
      let index = 0;
      arr.map(item => {
        if (index > 5) index = 0;
        this.resultImgList.push({ src: item, bigOrSmall: telemptArr[index] });
        index++;
      });
    }
  },
  mounted() {
    this.computedBigImgAndSmallImg();
    this.$http.get("api/photo").then(res => {
      console.log(res);
      this.imglist = res.data.piclist;
    });
  }
};
</script>
<style scoped>

.photo h3 {
  font-family: "Ruda", sans-serif;
  font-size: 24px;
  color: rgb(121, 121, 121);
  text-align: left;
  margin-top: 20px;
  margin-bottom: 10px;
}
.photo hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #797979;
}
.swipebox-slider {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  z-index: 9999;
}
.swipebox-slider img{
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
/* .choose-btn{
 position: absolute;
    right: 10px;
    bottom: -5px;
    z-index: 900;
} */
/*--gallery--*/
.gallery-grids {
  width: 95%;
  margin: 0 auto;
  overflow: hidden;
  font-family: "open Sans", sans-serif;
}
#gallery {
  text-align: center;
}

.ban-mar {
  margin: 35px 0;
}
.baner-top {

  float: left;
}
.baner-top a {
    position: relative;
  padding: 10px 10px;
    padding-bottom: 24px;
  display: block;
  box-shadow: 0px 0px 9px #bdbdbd;
}
.baner-top img {
  width: 100%;
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
  font-family: 'Marck Script';
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

.scale-enter-active,
.scale-leave-active {
  transition: transform 0.5s;
}
.scale-enter,
.scale-leave-to {
  transform: scale(0);
}
</style>
