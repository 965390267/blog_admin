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
            <mu-text-field class="clearMarginbottom" v-model="title" label="请在此处输入文章标题" label-float></mu-text-field>
          </div>
          <div>
            <mu-text-field class="clearMarginbottom" v-model="author" label="作者" label-float></mu-text-field>
          </div>
          <div>
            <mu-date-input
              class="clearMarginbottom"
              v-model="time"
              label="日期"
              container="dialog"
              label-float
            ></mu-date-input>
          </div>
        </div>
        <div class="article-base-right">
          <div>
            <mu-text-field class="clearMarginbottom" v-model="title" label="标签" label-float></mu-text-field>
          </div>
          <div>
             <mu-radio :value="0" v-model="column"  :label="'个人'"></mu-radio>
              <mu-radio :value="1" v-model="column"  :label="'技术'"></mu-radio>
          </div>
          <div>
           <mu-paper class="small-bg" :z-depth="5">
           </mu-paper>
          </div>
        </div>
      </div>

      <div class="adminstration-right toolbar">
        <!-- 富文本编辑器 -->
        <Edit></Edit>
      </div>
    </div>
  </div>
</template>
<script>
import Edit from "@/components/edit.vue";
export default {
  components: {
    Edit
  },
  data() {
    return {
      column: "",
      thumbnail: "",
      title: "",
      author: "",
      time: "",
      head_img: "",
      imgsrc: "",
      tag: "",
      imgFile: {}
    };
  },
  methods: {
    showd() {
      // this.$refs.thumb.click()
      //      console.log(this.titlemessage,this.authormessage,this.timemessage)
      // console.log(this.edit.txt.html())

      var formdata = new FormData();

      formdata.append("uploadarticleimg", this.imgFile);
      let config = { headers: { "Content-Type": "multipart/form-data" } };
      this.$http
        .post("api/Authentication/articleimg", formdata, config)
        .then(res => {
          this.thumbnail = res.data.data.newPath;
          console.log(res.data);
          this.$http
            .post("api/Authentication/createarticle", {
              column: this.column,
              thumbnail: this.thumbnail,
              tag: this.tag,
              picsrc: this.imgsrc,
              title: this.title,
              author: this.author,
              time: new Date().getTime(),
              article: this.edit.txt.html()
            })
            .then(res => {
              console.log(res);
              if (res.status == 200) {
                alert("文章添加成功");
              }
            });
        });
    },
    ViewImg(e) {
      this.imgFile = e.target.files[0];
      var newfile = new FileReader();
      newfile.readAsDataURL(e.target.files[0]);
      var that = this;
      newfile.onload = function() {
        that.head_img = this.result;
      };
    },
    choosecolumn(e) {
      this.column = e.target.value;
      console.log((e.target.value = "个人"));
    }
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
.article-base{
  display: flex;
}
.article-base-left,.article-base-right{
  flex: 1;
}
.clearMarginbottom {
  margin-bottom: 0;
}
.small-bg{
  display: inline-block;
  width: 80px;
  height: 80px;
}
input:focus {
  border: 1px solid rgb(214, 107, 107);
  box-shadow: 0px 0px 8px rgb(214, 107, 107) inset 0px 0px 8px
    rgb(214, 107, 107);
}
</style>


