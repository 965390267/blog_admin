<template>
  <div class="photo">
    <h3>
      <i class="fa fa-angle-right"></i> Gallery
    </h3>
    <hr />
    <mu-menu placement="bottom" :open="isOpen">
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
   
    <div class="gallery-grids">
      <template v-for="(item,index) in resultImgList">
        <div class="col-md-6 baner-top bigImg" v-if="item.bigOrSmall" :key="index" >
           <Photo :imgSrc='item.src'  @mousedown.native="downPosition($event,item.src)"></Photo>
         
        </div>
        <div class="col-md-3 baner-top ban-mar smallImg" v-else :key="index"  >
           <Photo :imgSrc='item.src' @mousedown.native="downPosition($event,item.src)"></Photo>
         
        </div>
      </template>
      <div class="clearfix"></div>
    </div>
    <!-- /row -->
    <ContextMenu :mouseRightBtn='btnObj'>
 <mu-list slot="content">
        <mu-list-item button @click="test($event)">
          <mu-list-item-content >
            <mu-list-item-title >删除</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-content>
            <mu-list-item-title @click="test($event)">删除</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
</ContextMenu>
  </div>
</template>

<script>
import ContextMenu from "@/components/contextMenu";
import Photo from '@/components/translate_3D_img'
export default {
  components:{
Photo,ContextMenu
  },

  data() {
    return {
     
      currentPage: 5,
      resultImgList: [],
      currentType: "风景",
      isOpen: false,
      checkbox: false,
      btnObj:null
    };
  },
  computed: {},
  methods: {
     downPosition(e,articleId){
      this.btnObj={event:e,articleId:articleId};    
    },
    chooseType(type) {
      this.currentType = type;
      this.isOpen = false;
    },
  
    computedBigImgAndSmallImg() {
      var arr = [];
      for (let index = 1; index < 18; index++) {
        arr.push("http://img.zangzhihong.com/background" + index + ".jpg");
      }
      var telemptArr = [
        true,
        true,
        false,
        false,
        false,
        false
      ]; /* 模板，1，2为大图，3，4,5为大图,利用该模板无限循环即可循环所有的图 */
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
    // this.$http.get("api/photo").then(res => {
    //   console.log(res);
    //   this.imglist = res.data.piclist;
    // });
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
.baner-top{
  float: left;
}
.ban-mar {
  margin: 35px 0;
}
.bigImg{
  height: 420px;
}
.smallImg{
  height: 240px;
}
</style>
