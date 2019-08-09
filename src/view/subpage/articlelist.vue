<template>
  <div class="sendarticle">
    <h4>文章列表</h4>
    <mu-data-table
      selectable
      select-all
      no-data-text="暂无数据"
      hover
      auto-expand
      @row-click="preventStop"
      :selects.sync="selects"
      checkbox
      :columns="columns"
      :sort.sync="sort"
      @sort-change="handleSortChange"
      :data="list.slice(0, 6)"
    >
      <template slot="expand" slot-scope="prop">
        <div class="article-content" v-html="prop.row.article"></div>
      </template>
      <template slot-scope="scope">
        <td>{{scope.row.time}}</td>
        <td class="is-right">{{scope.row.visitnumber}}</td>
        <td class="is-right">{{scope.row.title}}</td>
        <td class="is-right">{{scope.row.column}}</td>
        <td class="is-right">{{scope.row.tag}}</td>
        <td class="is-right">{{scope.row.author}}</td>
        <td class="is-right">
          <mu-button small color='success'  @click="edit($event)"><div class="iconfont icon-bianji iconfontcolor"></div></mu-button>
          <mu-button small class="set-margin-left"  @click="delate($event)" color="error"><div class="iconfont icon-dustbin_icon iconfontcolor"></div></mu-button>
        </td>
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
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      currentPage: 1,
      count: 0,
      pageSize: 5 /* 每页默认显示5条 */,
      selects: [],
      sort: {
        name: "time",
        order: "asc"
      },
      columns: [
        { title: "日期", name: "time", align: "center", sortable: true },
        {
          title: "被观看",
          name: "visitnumber",
          align: "center",
          sortable: true
        },
        { title: "标题", name: "title", align: "center" },
        { title: "栏目", name: "column", align: "center" },
        { title: "标签", name: "tag", align: "center" },
        { title: "作者", name: "author", align: "center" },
        { title: "操作", name: "操作", align: "center", width: 260 }
      ],
      list: []
    };
  },
  methods: {
    delate(e){
 e.preventDefault();
      e.stopPropagation();
    },
    edit(e) {
      e.preventDefault();
      e.stopPropagation();
    },
    preventStop(index, row, event) {
      console.log(row);
    },
    handleSortChange({ name, order }) {
      this.list = this.list.sort((a, b) =>
        order === "asc" ? a[name] - b[name] : b[name] - a[name]
      );
    },
    currentPageChange() {
      this.currentPage = Math.floor(this.count / this.pageSize);
    },
    getArtMes() {
      this.$http.post("api/getarticle").then(res => {
        this.list = res.data.data;
        this.count = res.data.count;
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      //删除文章按钮事件
      this.$confirm("此操作将永久删除该文章, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          var articleId = row._id;

          this.$http
            .post("api/Authentication/deletearticle", { artid: articleId })
            .then(res => {
              console.log(res.data);
              if (res.data.code == 200) {
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
              } else {
                this.$message({
                  type: "info",
                  message: "服务器错误，删除失败"
                });
              }
              this.getArtMes();
            });
        })
        .catch(() => {
          this.$message({
            type: "warning",
            message: "取消删除"
          });
        });
      console.log(index, row);
    }
  },
  mounted() {
    this.getArtMes();
  }
};
</script>
<style scoped>
.list_sl {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.sendarticle h4 {
  font-family: "Ruda", sans-serif;
  font-size: 24px;
  color: rgb(121, 121, 121);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.article-content {
  padding: 24px;
}

.divpage {
  margin: 0 auto;
  margin-top: 25px;
  width: 460px;
}
.is-right {
  padding: 24px;
  text-align: center !important;
}
.set-margin-left {
  margin-left: 12px;
}
</style>
