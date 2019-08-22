<template>
    <div>
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
</template>
<script>
export default {
    data(){
        return{
        isUpLOAD: true,
       column: "",
       thumbnail: "",
        imgFile: {},
       fileObj:{}
        }
    },
    methods:{
 dragover(e){
      e.preventDefault();
    },
    drop(e){
       this.ViewImg(e.dataTransfer.files[0])
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
    }
}
</script>
<style lang="" scoped>
.upload{
    display: none;
}
.small-bg-wrap{
    position: relative;
    width: 180px;
    height: 130px;
    overflow: hidden;
}
.small-bg{
    display: inline-block;
    text-align: center;
    background-size: 100% 100%;
    width: 180px;
    height: 126px;
    line-height: 120px;
}
.iconset {
    font-size: 24px;
    line-height: 120px;
}
.progress-bar{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 180px;
}
.upload-sm-img {
    margin-top: 20px;
    margin-left: 8%;
}
</style>