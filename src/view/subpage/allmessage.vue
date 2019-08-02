<template>
  <div class="messagewrap">
    <!-- <h3 class="title">Gallery</h3> -->
    <!-- <mu-paper class="pic-list-wrap"  :z-depth="5">
     <div class="pic-list" :style="{background: 'url('+carouselImg1+')',backgroundSize:'cover'}"></div>
    </mu-paper>-->
    <Card></Card>
    <div class="main-middle">
      <div class="commetns">
     <Comments></Comments>
      </div>
      <div class="rightaside-wrap">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/totalmessage/card";
import Comments from "@/components/totalmessage/comments";
import Aside from "@/components/totalmessage/aside";
export default {
  components: {
    Card,Comments,Aside
  },

  data() {
    return {
      visitnums: "",
      carouselImg1: "http://img.zangzhihong.com/background1.jpg",
      carouselImg2: "http://img.zangzhihong.com/background2.jpg",
      carouselImg3: "http://img.zangzhihong.com/background3.jpg",
      carouselImg4: "http://img.zangzhihong.com/background4.jpg"
    };
  },
  methods: {
    getusermes() {
      this.$http.get("api/login").then(res => {
        if (res.data.code == 200) {
          this.visitnums = res.data.data[0].visitnums;
        }
      });
    }
  },
  mounted() {
    this.getusermes();
  }
};
</script>
<style lang="" scoped>
.messagewrap{
  position: relative;
  overflow: hidden;
}
.messagewrap .title {
  position: relative;
  font-family: "Marck Script", cursive;
  letter-spacing: 1px;
  font-size: 24px;
  color: rgb(121, 121, 121);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.messagewrap::after {
  content: "";
  height: 160px;
  background-image: linear-gradient(to right, #ec77ab 0%, #7873f5 100%);
  position: absolute;
  z-index: -1;
  width: 100%;
  top: 0;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}
.main-middle{
 display: flex;
}
.commetns{
flex: 1;
border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}
.rightaside-wrap{
  width: 320px;
  padding:4px 16px 0 18px;
}
</style>

