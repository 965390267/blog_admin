<template>
    <aside>
          <div id="sidebar" class="nav-collapse " :style="{marginLeft:move+'px'}" tabindex="5000" style="overflow: hidden; outline: none; margin-left: 0px;">
              <!-- sidebar menu start-->
               <el-menu
      default-active="1" style="margin-top:75px;"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#424a5d"
      text-color="#aeb2b7"
      active-text-color="#68dff0">
       <p class="centered">
           <a href="profile.html"><img src="../../assets/img/ui-sam.jpg" class="img-circle" width="60"></a>
           </p>   
       <h5 class="centered">{{username}}</h5>
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>信息总览</span>
        </template>
        
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
       <el-menu-item index="1" route="/main">
        <i class="el-icon-menu"></i>
        <span slot="title">信息总览</span>
      </el-menu-item>
      <el-menu-item index="2" route="/main/sendarticle">
        <i class="el-icon-document"></i>
        <span slot="title">文章发布</span>
      </el-menu-item>
          <el-menu-item index="3" route="/main/articlelist">
        <i class="el-icon-document"></i>
        <span slot="title">文章列表</span>
      </el-menu-item>
       <el-menu-item index="4"  route="/main/suibi">
        <i class="iconfont icon-bi"></i>
        <span slot="title">&nbsp;&nbsp;随&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;笔</span>
      </el-menu-item>
      <el-menu-item index="5" route="/main/photo">
        <i class="el-icon-picture"></i>
        <span slot="title">图&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;片</span>
      </el-menu-item>
       <el-menu-item index="6"  route="/main/music">
        <i class="iconfont icon-yinle"></i>
        <span slot="title">&nbsp;&nbsp;音&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;乐</span>
      </el-menu-item>
       <el-menu-item index="7" route="/main/liuyan">
        <i class="iconfont icon-liuyan"></i>
        <span slot="title">&nbsp;&nbsp;留&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;言</span>
      </el-menu-item>
       <el-menu-item index="8" route="/main/setting">
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
  data(){
return{
move:0,
username:''
}
  },
 
  methods: {
    getusermes(){
 this.$http
          .get("api/login")
          .then(res => {
          
          if(res.data.code==200){
               this.username=res.data.data[0].username;
               this.headimg=res.data.data[0].headimg;
          }
          });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggle(){
if(this.move==-210){
  this.move=0
}else{
  this.move=-210;
}
    }
  },
  mounted(){
this. getusermes()
    
  }
};
</script>
<style scoped>
.iconfont::before{
  font-size: 18px;
}
.centered {
    text-align: center;
    letter-spacing: 5px;
        margin: 0 0 10px;
}
.img-circle {
    border-radius: 50%;
        vertical-align: middle;
}
</style>

