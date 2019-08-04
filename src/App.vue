<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.el-menu{
    border: none;
}
.is-center{
 padding: 24px;
}
.article-content p  {/* 文章列表页下的文章展开样式 */
color: #58666e;
padding: 5px 0;
font-size: 16px;
letter-spacing: 2px;
}
.article-content p img {
  border: 1px solid #dee5e7;
  padding: 5px;
  background-color: #fff;
}
.sheep {
  position: absolute;
  width: 164px;
  height: 122px;
  background-image: url("./assets/img/sheep.png");
  background-position: 0 0;
  cursor: -webkit-grabbing;
  background-repeat: no-repeat;
  bottom: 20px;
  right: -164px;
}
</style>
