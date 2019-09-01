<template>
  <div class="editarticle">
    <h3 class="aticle-title">
      <i class="fa fa-angle-right"></i> 文章发布
    </h3>
    <hr />
   <ArticleEdit></ArticleEdit>
    <div class="send-article">
      <mu-button  round  class="add-btn-bg">文章发布</mu-button>
      </div>
  </div>
</template>
<script>
 import ArticleEdit from '@/components/ArticleEdit'
// import Edit from "@/components/edit.vue";
// import MarkEdit from "@/components/markdownedit.vue";
// import * as qiniu from 'qiniu-js';
export default {
  components: {
    // Edit,
    // MarkEdit,
    // Upload
    ArticleEdit
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

.send-article{
  text-align: right;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-right: 80px;
}
</style>


