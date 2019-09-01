<template>
  <div class="editarticle">
   
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
         <Upload></Upload>
        </div>
      </div>
      <div class="adminstration-right toolbar self-background-color">
        <!-- 富文本编辑器 -->
        <Edit v-if='!switchEdit'></Edit>
        <MarkEdit v-if='switchEdit'></MarkEdit>
      </div>   
    </div>
  </div>
</template>
<script>
import Upload from '@/components/upload'
import Edit from "@/components/edit.vue";
import MarkEdit from "@/components/markdownedit.vue";
import * as qiniu from 'qiniu-js';
export default {
  components: {
    Edit,
    MarkEdit,
    Upload
  },
  data() {
    return {
      switchEdit:false,  
      title: "",
      author: "",
      time: "",
      head_img: "",
      imgsrc: "",
      tag: "",
     
    };
  },
  methods: {
   
    chooseEdit(){
     toast.success({message:this.switchEdit?'已切换到markdown':'已切换到富文本'})
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
.setfontsize{
  padding-top: 20px;
  font-size: 12px;
}

</style>


