<template>
  <div id="app">
   <Music></Music>
    <router-view/>
  </div>
</template>

<script>
import Music from '@/components/musicContral'
export default {
  components:{
Music
  },
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
.mu-button{
  text-transform: capitalize;
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

</style>
