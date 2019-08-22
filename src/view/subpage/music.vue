<template>
  <!-- <div class="play-contrals">
      <div class="player-left">
        <div class="player-button last"></div>
        <div class="player-button pause"></div>
        <div class="player-button next"></div>
      </div>
      <div class="player-center">
        <div class="player-info">王菲-流年</div>
        <div class="time-and-progress-wrap">
          <div class="player-time">02:11</div>
          <div class="progress-wrapper">
            <div class="progress-bar-wrap">
              <div class="progress-current-bar"></div>
            </div>
          </div>
          <div class="player-totaltime">02:11</div>
        </div>
      </div>
      <div class="player-right">
        <div class="player-button volume"></div>
        <div class="player-button toggle-layout"></div>
      </div>
    </div> -->
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
      <div class="search-left-list"></div>
      <div class="search-right-box">
        <mu-text-field
          class="clearMarginbottom"
          color="#ff8a65"
          v-model="title"
          label="在此处输入歌曲名"
          label-float
        ></mu-text-field>
        <mu-button round color="success">搜索</mu-button>
      </div>
    </div>

    <div class="music-box-list">
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
        </template>
      </mu-data-table>
       <div class="divpage">
      <mu-pagination
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
  data() {
    return {
      title:'',
      openAlert: true,
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
  display: flex;
  width: 95%;
  margin: 30px auto;
  /* margin-top: 30px; */
  height: 100px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.12);
}
.search-left-list {
  flex: 1;
}
.search-right-box {
  width: 370px;
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
/* 播放器控制部分 */
.play-contrals {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-image: -webkit-linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.9)
  );
  background-image: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.9)
  );
  background-repeat: no-repeat;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#e6000000', GradientType=0);
}
.player-left {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
}
.player-center {
  padding-left: 200px;
  padding-right: 200px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.player-right {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
}
.player-button {
  height: 90px;
  line-height: 90px;
  height: 100%;
  width: 50px;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;
  float: left;
  cursor: pointer;
}
.player-button.last {
  background-image: url("../../assets/img/music/previous.svg");
  background-size: 18px auto;
}
.player-button.pause {
  background-image: url("../../assets/img/music/play.svg");
  background-size: auto 18px;
}
.player-button.next {
  background-image: url("../../assets/img/music/next.svg");
  background-size: 18px auto;
}
.player-button.volume {
  background-image: url("../../assets/img/music/volume-high.svg");
  background-size: 17px auto;
}
.toggle-layout {
  background-image: url("../../assets/img/music/toggle-layout.svg");
  background-size: 20px auto;
}
.player-info {
  color: #fff;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  text-align: center;
  opacity: 0.6;
  position: relative;
  top: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.time-and-progress-wrap {
  position: relative;
  margin-top: 30px;
}
.player-time {
  position: absolute;
  top: -4px;
  left: 0;
  font-size: 11px;
  color: #aaa;
}
.player-totaltime {
  position: absolute;
  top: -4px;
  right: 0;
  font-size: 11px;
  color: #aaa;
}
.progress-wrapper {
  padding: 0 40px;
}
.progress-bar-wrap {
  height: 3px;
  background: #aaa;
}
.progress-current-bar {
  width: 90%;
  height: 3px;
  background: #fff;
}
</style>
