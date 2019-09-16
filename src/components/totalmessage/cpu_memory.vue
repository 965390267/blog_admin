<template>
    <div class="cpu-memory">
          <mu-tooltip placement="top" content="提示信息sdfffffffffffffffff">
     <div class="cpu-info">
         <i class="iconfont icon-adq-cpu"></i>
         <b class="use">50%</b>   
     </div>
         </mu-tooltip>
      <div class="cpu-info">
        <i class="iconfont icon-neicuntiao"></i>
         <b class="use">2G/8G</b>
     </div>          
      <div class="cpu-info">
        <i class="iconfont icon-wangqiaguanli"></i>
        <b class="use">网卡信息</b>
     </div>
       <div class="cpu-info">
        <i class="iconfont icon-caozuoxitong"></i>
        <b class="use">操作系统内核</b>
     </div>
      <div class="cpu-info">
        <i class="iconfont icon-yunhangshijian"></i>
        <b class="use">  系统已运行 200h:30min</b>
     </div>
    </div>
</template>
<style scoped>
.cpu-memory{
    display: flex;
    background: rgba(255, 255, 255, 0.5);
   box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
   border-radius: 7px;
   margin-bottom: 20px;
   padding: 10px 0;
}
   .cpu-info{
       display: flex;
       flex-direction: column;
       justify-content:space-between;
       align-items: center;
       flex: 1;
       text-align: center;
   }
    .cpu-info .iconfont{
        display: inline-block;
        width: 60px;
        height: 60px;
        font-size: 50px;
        color: #666;
    }
    .cpu-info .use{
        font-weight: normal;
    }
</style>