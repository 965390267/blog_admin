<template>
  <div class="music">
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
      <mu-button slot="actions" flat class="cancel"  @click="closeAlertDialog">取消</mu-button>
      <mu-button slot="actions" flat class="save" @click="closeAlertDialog">保存</mu-button>
     </div>

    </mu-dialog>
        <!-- <h3 class="music-title">歌曲列表</h3> -->
    <div class="search-box">
      <!-- <div class="search-left-list"></div>
      <div class="search-right-box">
        <mu-text-field
          class="clearMarginbottom"
          color="#ff8a65"
          v-model="title"
          label="在此处输入歌曲名"
          label-float
        ></mu-text-field>
        <mu-button round color="success">搜索</mu-button>
      </div> -->
      歌曲列表
    </div>

    <div class="music-box-list">
      <div class="add-music-btn-wrap">
        <mu-button class="add-music-btn add-btn-bg" round  @click="openAlert=true">添加歌曲</mu-button>
      </div>
     
      <mu-data-table
        stripe
        :columns="columns"
        :sort.sync="sort"
        @sort-change="handleSortChange"
        :data="list.slice(0, 6)"
      >
        <template slot-scope="scope">
          <td>{{scope.row.name}}</td>
          <td class="is-right">{{scope.row.calories}}</td>
          <td class="is-right">{{scope.row.fat}}</td>
          <td class="is-right">{{scope.row.carbs}}</td>
          <td class="is-right">{{scope.row.protein}}</td>
          <td class="is-right">{{scope.row.iron}}%</td>
           <td class="is-right"> <a class="edit" @click="openAlertDialog()">编辑</a><a class="delate">删除</a> </td>
        </template>
      </mu-data-table>
       <div class="divpage">
      <mu-pagination class="page-next-last"
        raised
        circle
        :total="count"
        :page-size="pageSize"
        @change="currentPageChange()"
        :current.sync="currentPage"
      ></mu-pagination>
    </div>
    </div>
  
  </div>
</template>
<script>

export default {
  components:{

  },
  data() {
    return {
      title:'',
      openAlert: false,
      sort: {
        name: "",
        order: "asc"
      },
      columns: [
        { title: "排序", name: "name" },
        { title: "标题", name: "calories", align: "center", sortable: true },
        { title: "简介", name: "fat", align: "center", sortable: true },
        { title: "歌曲", name: "carbs", align: "center", sortable: true },
        { title: "上传时间", name: "protein", align: "center", sortable: true },
        { title: "播放量", name: "iron", align: "center", sortable: true },
        { title: "操作", name: "iron", align: "center", sortable: true }
      ],
      list: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6
        }
      ],
       currentPage: 1,
      count: 0,
      pageSize: 5 /* 每页默认显示5条 */,
    };
  },
  methods: {
    openAlertDialog() {
      this.openAlert = true;
    },
    closeAlertDialog() {
      this.openAlert = false;
    },
    handleSortChange({ name, order }) {
      this.list = this.list.sort((a, b) =>
        order === "asc" ? a[name] - b[name] : b[name] - a[name]
      );
    },
        currentPageChange() {
      this.currentPage = Math.floor(this.count / this.pageSize);
    },
  },
  mounted() {}
};
</script>
<style lang="" scope>
.music {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
}
.search-box {
  width: 95%;
  margin: 30px auto;
  font-family: "Ruda", sans-serif;
    font-size: 24px;
    color: rgb(121, 121, 121);
    text-align: center;
  padding: 15px 0;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.12);
}

.music-title {
  width: 95%;
  margin: 20px auto;
  font-family: "Ruda", sans-serif;
  font-size: 24px;
  color: rgb(121, 121, 121);
  text-align: left;
}
.music-box-list {
  flex: 1;
  width: 95%;
  margin: 0 auto;
  margin-bottom: 60px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.12);
}
.add-music-btn-wrap{
  display: flex;
  justify-content: flex-end;
  padding: 10px 40px 4px 0;

}
.add-music-btn{
   width: 120px;
   height: 32px;
   color: #fff;
   /* background-image:  linear-gradient(to right, #0078FF 0%, #04C3FF 100%); */

}
/* mu表格样式修复 */
.is-right {
  padding: 24px;
  text-align: center !important;
}
/* mu表格样式修复 */
/* 编辑和删除按钮样式 */
.edit{
    font-size: 14px;
    color: #207FF8;
    padding: 10px;
}
.delate{
   margin-left: 15px;
   font-size: 14px;
   color: #A6A6A6;
     padding: 10px;
}
/* 编辑和删除按钮样式 */
/* 上一页下一页居中 */
.page-next-last{
 justify-content: center;
 padding: 15px 0 0 0;
}
/* 上一页下一页居中 */
/* 弹出遮罩层内容 */
.alert-header{
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 15px;
  letter-spacing: 2px;
}
.alert-content{
 background: #F6FAFD;
}
.alert-button{
 display: flex;
 justify-content: space-between;
 padding: 15px 0;
 background: #fff;
}
.cancel{
  border-radius: 20px;
  background:#BCBCBC;
  color: #fff;
}
.save{
  border-radius: 20px;
  background-image:  linear-gradient(to right, #0078FF 0%, #04C3FF 100%);
    color: #fff;
}
/* 弹出遮罩层内容 */

</style>
