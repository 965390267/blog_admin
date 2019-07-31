<template>
  <div class="messagewrap">
    <h3 class="title">Gallery</h3>
   <!-- <mu-paper class="pic-list-wrap"  :z-depth="5">
     <div class="pic-list" :style="{background: 'url('+carouselImg1+')',backgroundSize:'cover'}"></div>
   </mu-paper> -->
  </div>
</template>
<script>
import CalendarBox from "@/components/calendar";

export default {
  components: {
    CalendarBox
  },

  data() {
    return {
      visitnums: "",
      carouselImg1:'http://img.zangzhihong.com/background1.jpg',
      carouselImg2:'http://img.zangzhihong.com/background2.jpg',
      carouselImg3:'http://img.zangzhihong.com/background3.jpg',
      carouselImg4:'http://img.zangzhihong.com/background4.jpg'
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
<style scoped>

.messagewrap .title{
font-family: 'Marck Script', cursive;
    letter-spacing: 1px;
  font-size: 24px;
  color: rgb(121, 121, 121);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.messagewrap hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #797979;
}
.bannerheight{
  height: 200px;
}
.pic-list-wrap{
  width: 180px;
  height: 160px;
}
.pic-list{
  width: 180px;
  height: 160px;
  
}
</style>

