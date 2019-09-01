<template>
  <div class="weiyuwrapper">
    <h3>
      <i class="fa fa-angle-right"></i> 微语
    </h3>
    <hr />
    <div class="add-music-btn-wrap">
      <mu-button class="add-music-btn add-btn-bg" round @click="openAlert=true">添加微语</mu-button>
    </div>
    <ul>
      <template v-for="(item,index) in 17">
        <li class="weiyuItem in" :key="index" v-if="index%2==0" @mousedown="downPosition($event,'2656596')">
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
            <mu-button flat @click="edit()">编辑</mu-button>-->
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
    <mu-dialog
      width="1000"
      max-width="80%"
      :esc-press-close="false"
      :overlay-close="false"
      :open.sync="openAlert"
    >
      <div class="alert-header">音乐上传</div>
      <div class="alert-content">
        <div class="alert-content-input">
          <mu-text-field
            class="clearMarginbottom"
            color="#ff8a65"
            v-model="title"
            label="在此处输入歌曲名"
            label-float
          ></mu-text-field>
          <mu-text-field
            class="clearMarginbottom"
            color="#ff8a65"
            v-model="title"
            label="在此处输入歌曲名"
            label-float
          ></mu-text-field>
        </div>

        <div class="alert-content-input">
          <mu-text-field
            class="clearMarginbottom"
            color="#ff8a65"
            v-model="title"
            label="在此处输入歌曲名"
            label-float
          ></mu-text-field>
          <mu-text-field
            class="clearMarginbottom"
            color="#ff8a65"
            v-model="title"
            label="在此处输入歌曲名"
            label-float
          ></mu-text-field>
        </div>

        <div class="alert-content-input">
          <mu-text-field
            class="clearMarginbottom"
            color="#ff8a65"
            v-model="title"
            label="在此处输入歌曲名"
            label-float
          ></mu-text-field>
          <mu-text-field
            class="clearMarginbottom"
            color="#ff8a65"
            v-model="title"
            label="在此处输入歌曲名"
            label-float
          ></mu-text-field>
        </div>
      </div>
      <div class="alert-button">
        <mu-button slot="actions" flat class="cancel" @click="closeAlertDialog">取消</mu-button>
        <mu-button slot="actions" flat class="save" @click="closeAlertDialog">保存</mu-button>
      </div>
    </mu-dialog>

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
import rotate from "@/components/rotate_3D_img";
import ContextMenu from "@/components/contextMenu";
export default {
  components: {
    rotate,ContextMenu
  },
  data() {
    return {
      title: "",
      openAlert: false,
      openScroll: false,
      btnObj:null,

    };
  },
  methods: {
    test(){

    },
    downPosition(e,articleId){
      this.btnObj={event:e,articleId:articleId};    
    },
    openAlertDialog() {
      this.openAlert = true;
    },
    closeAlertDialog() {
      this.openAlert = false;
    },
    edit() {
      this.openScroll = true;
    },
    delate() {},
    closeFrame() {
      this.openScroll = false;
    }
  },
  mounted() {}
};
</script>
<style scoped>
.weiyuwrapper {
  padding: 0 40px 0 30px;
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
/* 新增文件按钮 */
.add-music-btn-wrap {
  display: flex;
  justify-content: flex-end;
  padding: 10px 40px 4px 0;
}
.add-music-btn {
  width: 120px;
  height: 32px;
  color: #fff;
  /* background-image:  linear-gradient(to right, #0078FF 0%, #04C3FF 100%); */
}
/* 新增文件按钮 */
.weiyuItem {
  display: flex;
  margin: 10px 0;
  /* border-bottom: 1px solid #e6e6e6; */
}
.leftcontent {
  flex: 1;
}

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
/* li左右方向样式 */

/* 弹出遮罩层内容 */
.alert-header {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 15px;
  letter-spacing: 2px;
}
.alert-content {
  background: #f6fafd;
}
.alert-button {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  background: #fff;
}
.cancel {
  border-radius: 20px;
  background: #bcbcbc;
  color: #fff;
}
.save {
  border-radius: 20px;
  background-image: linear-gradient(to right, #0078ff 0%, #04c3ff 100%);
  color: #fff;
}
/* 弹出遮罩层内容 */
</style>

