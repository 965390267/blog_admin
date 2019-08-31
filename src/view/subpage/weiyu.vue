<template>
  <div class="weiyuwrapper">
       <h3>
      <i class="fa fa-angle-right"></i> 微语
    </h3>
    <hr />
    <ul>
      <template v-for="(item,index) in 17">
        <li class="weiyuItem in" :key="index" v-if="index%2==0">
           <rotate :imgSrc="'http://img.zangzhihong.com/background'+item+'.jpg'"></rotate>
          <div class="leftcontent">
            <div class="message">
              <span class="arrow"></span>
              <a href="#" class="name" data-original-title>zzh</a>
              <span class="date-time">at Jul 12th, 2013 12:21</span>
              <span
                class="body"
              >Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Reprehenderit butcher retro keffiyeh dreamcatcher synth terry richardsoAustin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</span>
            </div>
          </div>
          <div class="right_edit">
            <!-- <mu-button flat>删除</mu-button>
            <mu-button flat @click="edit()">编辑</mu-button> -->
          </div>
        </li>
        <li class="weiyuItem out" v-else :key="index">
          <div class="right_edit"></div>
          <div class="leftcontent">
            <div class="message">
              <span class="arrow"></span>
              <a href="#" class="name" data-original-title>zzh</a>
              <span class="date-time">at Jul 12th, 2013 12:21</span>
              <span
                class="body"
              >Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Reprehenderit butcher retro keffiyeh dreamcatcher synth terry richardsoAustin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</span>
            </div>
          </div>
           <rotate :imgSrc="'http://img.zangzhihong.com/background'+item+'.jpg'"></rotate>
        </li>
      </template>
    </ul>
    <mu-dialog  title="Phone Ringtone" max-width="1080" scrollable :open.sync="openScroll">
      <!-- <mu-list>
      <mu-list-item :key="option" v-for="option in options">
        <mu-list-item-content>
          <mu-radio  :label="option" :value="option" v-model="ringtone"></mu-radio>
        </mu-list-item-content>
      </mu-list-item>
      </mu-list>-->
      <mu-button slot="actions" flat color="primary" @click="closeFrame()">ok</mu-button>
    </mu-dialog>
    <!-- <div class="contextmenu" :style="{left:positonX,top:positionY}">
dfdsf
    </div> -->
  </div>
</template>
<script>
import rotate from '@/components/rotate_3D_img'
export default {
    components:{
rotate
  },
  data() {
    return {
      openScroll: false,
      positonX:0,/* 右键弹出位置 */
      positionY:0/* 右键弹出位置 */
    };
  },
  methods: {
    edit() {
      this.openScroll = true;
    },
    delate() {},
    closeFrame() {
      this.openScroll = false;
    }
  },
  mounted() {
   document.oncontextmenu = function(e) {
    return false;
}
document.onmousedown = (e)=> {

if(e.button==2){
  console.log(this);
  
  let {pageX,pageY}=e;
   this.positonX=pageX+'px';
   this.positionY=pageY+'px';
}
}
  }
};
</script>
<style scoped>
.weiyuwrapper{
  padding:0 40px 0 30px;
}
 .weiyuwrapper h3 {
  font-family: "Ruda", sans-serif;
  font-size: 24px;
  color: rgb(121, 121, 121);
  text-align: center;
  /* margin-top: 20px; */
  margin-bottom: 10px;
}
.weiyuwrapper hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #797979;
}
.weiyuItem {
  display: flex;
  margin: 10px 0;
  /* border-bottom: 1px solid #e6e6e6; */
}
.leftcontent {
  flex: 1;
}
/* 右键样式 */
.contextmenu{
  position: fixed;
  width: 80px;
  height: 200px;
  box-shadow: 0 0 15px 6px rgba(0, 0, 0, .6);
}
/* 右键样式 */
/* 右边消息 */
.message {
  position: relative;
  height: 90%;
  margin: 8px 0;
  padding: 5px 10px;
}
.in .right_edit {
  width: 60px;
  border-left: 1px solid #e6e6e6;
background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
}
.out .right_edit {
  width: 45px;
  border-right: 1px solid #e6e6e6;
background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
}
.in .message {
  margin-left: 12px;
  border-left: 2px solid #f08c56;
}
.out .message {
  margin-right: 12px;
  text-align: right;
  border-right: 2px solid #40acd6;
}
.in .message .arrow {
  display: block;
  position: absolute;
  top: 7px;
  left: -8px;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid #f08c56;
}
.out .message .arrow {
  display: block;
  position: absolute;
  top: 7px;
  right: -8px;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid #40acd6;
}
.in .name {
  color: #f08c56;
  font-size: 13px;
  font-weight: 400;
}
.out .name {
  color: #40acd6;
  font-size: 13px;
  font-weight: 400;
}
.message .date-time {
  color: #1a1a1a;
  font-size: 11px;
  font-weight: 400;
}
.message .body {
  display: block;
  color: #333333;
  padding-top: 10px;
}
</style>

