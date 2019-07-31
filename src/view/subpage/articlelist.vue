<template>
  <div class="sendarticle">
    <h4>文章列表</h4>
    <el-table highlight-current-row ref="multipleTable" :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标题" width="180">
        <template slot-scope="scope">
          <div class="list_sl">{{ scope.row.title }}</div>
        </template>
      </el-table-column>
      <el-table-column label="栏目" width="180">
        <template slot-scope="scope">
          <div class="list_sl">{{ scope.row.column }}</div>
        </template>
      </el-table-column>
      <el-table-column label="标签" width="180">
        <template slot-scope="scope">
          <div class="list_sl">{{scope.row.tag }}</div>
        </template>
      </el-table-column>
      <el-table-column label="作者" width="180">
        <template slot-scope="scope">
          <div class="list_sl">{{scope.row.author }}</div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      currentPage: 5
    };
  },
  methods: {
    getArtMes() {
      this.$http.get("api/getarticle").then(res => {
        this.tableData = res.data.data;
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
.divpage {
  margin-top: 25px;
}
</style>
