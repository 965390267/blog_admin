<template>
  <aside id="sidebar">
    <div class="nav-collapse">
      <!-- sidebar menu start-->
      <el-menu
        :default-active="$route.fullPath"
        router
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        active-text-color="#68dff0"
        :collapse="isCollapse"
      >
        <p class="avator">
          <img src="@/assets/img/ui-sam.jpg" class="img-circle" width="60" />
        </p>

        <h5 class="username">{{username}}</h5>

        <el-menu-item index="/index/home">
          <i class="el-icon-menu"></i>
          <span slot="title">信息总览</span>
        </el-menu-item>
        <el-menu-item index="/index/sendarticle">
          <i class="iconfont icon-bi"></i>
          <span slot="title">&nbsp;&nbsp;&nbsp;文章发布</span>
        </el-menu-item>
        <el-menu-item index="/index/articlelist">
          <i class="el-icon-document"></i>
          <span slot="title">文章列表</span>
        </el-menu-item>
        <el-menu-item index="/index/weiyu">
          <i class="iconfont icon-weiyuqiang-"></i>
          <span slot="title">&nbsp;&nbsp;微&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;语</span>
        </el-menu-item>
        <el-menu-item index="/index/photo">
          <i class="el-icon-picture"></i>
          <span slot="title">图&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;片</span>
        </el-menu-item>
        <el-menu-item index="/index/music">
          <i class="iconfont icon-yinle"></i>
          <span slot="title">&nbsp;&nbsp;音&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乐</span>
        </el-menu-item>
        <el-menu-item index="/index/liuyan">
          <i class="iconfont icon-liuyan"></i>
          <span slot="title">&nbsp;&nbsp;留&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;言</span>
        </el-menu-item>
        <el-menu-item index="/index/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">设&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置</span>
        </el-menu-item>
      </el-menu>
      <!-- sidebar menu end-->
    </div>
  </aside>
</template>
<script>
export default {
  data() {
    return {
      username: "Admin",
      isCollapse: false
    };
  },

  methods: {
    getusermes() {
      this.$http.get("api/login").then(res => {
        if (res.data.code == 200) {
          this.username = res.data.data[0].username;
          this.headimg = res.data.data[0].headimg;
        }
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggle() {}
  },
  mounted() {
    this.getusermes();
    this.bus.$on("isCollapse", data => {
      console.log("999");

      this.isCollapse = !!data;
    });
  }
};
</script>
<style scoped>
#sidebar {
  /* width: 200px; */
  height: 100%;
  box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.08);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
.iconfont::before {
  font-size: 18px;
}
.avator {
  margin: 20px 0 0px;
  text-align: center;
}

.img-circle {
  border-radius: 50%;
  vertical-align: middle;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14),
    0 1px 14px 0 rgba(0, 0, 0, 0.12);
}
.username {
  text-align: center;
  letter-spacing: 3px;
  margin: 8px 0;
}
.el-menu-item {
  font-weight: 700;
}
</style>

