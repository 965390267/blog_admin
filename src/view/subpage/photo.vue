<template>
  <div class="photo">
    <h3>
      <i class="fa fa-angle-right"></i> Gallery
    </h3>
    <hr />

    <div class="row mt mb">
      <div
        class="col-lg-4 col-md-4 col-sm-4 col-xs-12 desc"
        v-for="(item,index,key) in imglist"
        :key="key"
      >
        <div class="project-wrapper">
          <div class="project">
            <div class="photo-wrapper">
              <div class="photo">
                <a class="fancybox" href="@/assets/img/portfolio/port04.jpg">
                  <img class="img-responsive" :src="'http://localhost:3000/'+item.photopath" alt />
                </a>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- col-lg-4 -->
    </div>
    <!-- /row -->
    <div class="divpage">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
      ></el-pagination>
    </div>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList2"
      list-type="picture"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 5,
      imglist: [],
      fileList2: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
  mounted() {
    this.$http.get("api/photo").then(res => {
      console.log(res);
      this.imglist = res.data.piclist;
    });
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
</style>
