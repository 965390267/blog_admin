<template>
  <div class="editarticle">
    <h3 class="aticle-title">
      <i class="fa fa-angle-right"></i> 文章发布
    </h3>
    <hr />
    <div class="efitwrap">
      <div class="article-base">
        <div class="article-base-left">
          <div>
            <mu-text-field class="clearMarginbottom"  color='#ff8a65' v-model="title" label="请在此处输入文章标题" label-float></mu-text-field>
          </div>
          <div>
            <mu-text-field class="clearMarginbottom"  color='#ff8a65' v-model="author" label="作者" label-float></mu-text-field>
          </div>
          <div>
            <mu-date-input
             color='#ff8a65'
              class="clearMarginbottom"
              v-model="time"
              label="日期"
              container="dialog"
              label-float
              type="dateTime"
            ></mu-date-input>
          </div>
        </div>
        <div class="article-base-mid">
          <div>
            <mu-text-field class="clearMarginbottom"  color='#ff8a65' v-model="title" label="标签 多个标签用,号隔开" label-float></mu-text-field>
          </div>
          <div>
            <mu-text-field class="clearMarginbottom"  color='#ff8a65' v-model="title" label="归类" label-float></mu-text-field>
          </div>
          <div class="mu-info-text-color setfontsize">
           <i class="mu-error-text-color">#</i>默认富文本，可选MD<mu-switch v-model="switchEdit" @change='chooseEdit()'></mu-switch>
          </div>
        </div>
        <div class="article-base-right">
          <div>
            <input class="upload" type="file" ref="file" multiple @change="ViewImg($event.target.files[0])" />
            <mu-paper            
              class="small-bg-wrap"
              :z-depth="5"
              @click="openfile()"
              @drop='drop($event)'
              @dragover="dragover($event)"
            >
            <div class="small-bg"  :style="{backgroundImage:'url('+thumbnail+')'}">
              <i v-if="isUpLOAD" class="iconfont icon-iconfontadd iconset"></i>
              <!-- 图片容器 -->
            </div>
              
              <div class="progress-bar">
            <mu-linear-progress :value="50" mode="determinate"></mu-linear-progress>
            </div>
            </mu-paper>
            
          </div>
          <mu-button class="upload-sm-img" round @click="uploadimg()" color="success">上传缩略图</mu-button>
        </div>
      </div>
      <div class="adminstration-right toolbar self-background-color">
        <!-- 富文本编辑器 -->
        <Edit v-if='!switchEdit'></Edit>
        <MarkEdit v-if='switchEdit'></MarkEdit>
      </div>
      <div class="send-article">
      <mu-button  round  color="success">文章发布</mu-button>
      </div>
 
    </div>
  </div>
</template>
<script>
import Edit from "@/components/edit.vue";
import MarkEdit from "@/components/markdownedit.vue";
import * as qiniu from 'qiniu-js';
export default {
  components: {
    Edit,
    MarkEdit
  },
  data() {
    return {
      switchEdit:false,
      isUpLOAD: true,
      column: "",
      thumbnail: "",
      title: "",
      author: "",
      time: "",
      head_img: "",
      imgsrc: "",
      tag: "",
      imgFile: {},
      fileObj:{}
    };
  },
  methods: {
    dragover(e){
      e.preventDefault();
    },
    drop(e){
       this.ViewImg(e.dataTransfer.files[0])
    },
    chooseEdit(){
     toast.success({message:this.switchEdit?'已切换到markdown':'已切换到富文本'})
    },
    openfile() {
      this.$refs.file.click();
    },
    ViewImg(filsobj) {
      this.fileObj=filsobj;
      const fileread = new FileReader();
      fileread.readAsDataURL(filsobj);
      fileread.onload = e => {
        this.isUpLOAD = false;
        this.thumbnail = e.target.result;
      };
      fileread.onerror=()=>{this.isUpLOAD = true;}
    },
    uploadimg() {
    const file = this.fileObj;
      const key = file.name;
      const token = 'mRJ2s77P9ZvQVefN-UstJeQTaO4APnL1YO8qRQ-M:qtAP-1il2oJmJI6OFFrlRHu0z6c=:eyJzY29wZSI6ImZpcnN0X3p6aCIsImRlYWRsaW5lIjoxNTY1MzQ4MzY4fQ=='; //从服务器拿的并存在本地data里
      const putExtra = {
        fname: '',
        params: {},
        mimeType: ['image/png', 'image/jpeg', 'image/gif'],
      };
      const config = {
        useCdnDomain: true, //使用cdn加速
      };
      const observable = qiniu.upload(file, key, token, putExtra, config);

      observable.subscribe({
        next: (result) => {
          // 主要用来展示进度
          console.warn(result);
        },
        error: () => {
          this.$notify('上传图片失败');
        },
        complete: (res) => {
          console.log(res);
        },
      });
    },

  },
  mounted() {}
};
</script>
<style scoped>
.aticle-title {
  font-family: "Ruda", sans-serif;
  font-size: 24px;
  color: rgb(121, 121, 121);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #797979;
}
.article-base {
  display: flex;
  justify-content: space-between;
}
.article-base-left,
.article-base-mid,
.article-base-right {
  flex: 1;
}
.clearMarginbottom {
  margin-bottom: 0;
}
.upload {
  display: none;
}
.setfontsize{
  padding-top: 20px;
  font-size: 12px;
}
.small-bg-wrap {
 position: relative;
  width: 180px;
  height: 130px;
}
.small-bg{
  display: inline-block;
   text-align: center;
  background-size: 100% 100%;
  width: 180px;
 height: 126px;
 line-height: 120px;
}
.progress-bar{
  position: absolute;
  bottom: 0;
  left: 0;
   width: 180px;
  
}
.upload-sm-img{
    margin-top: 20px;
  margin-left:8%;
}
.iconset {
  font-size: 24px;
  line-height: 120px;
}
.send-article{
  text-align: right;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-right: 80px;
}
</style>


