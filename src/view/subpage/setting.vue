<template>
  <div> <div class="col-md-9">
            <h1 class="page-header">常规设置</h1>
            <div class="add-article-box">
              <h2 class="add-article-box-title"><span>站点标题</span></h2>
              <div class="add-article-box-content">
                <mu-text-field class="clearMarginbottom"  color='#ff8a65' v-model="title" label="请输入站点标题" label-float></mu-text-field>
              </div>
            </div>
            <div class="add-article-box">
              <h2 class="add-article-box-title"><span>副标题</span></h2>
              <div class="add-article-box-content">
                 <mu-text-field class="clearMarginbottom"  color='#ff8a65' v-model="title" label="请输入站点副标题" label-float></mu-text-field>
            </div>
            </div>

            <div class="add-article-box">
              <h2 class="add-article-box-title"><span>站点关键字</span></h2>
              <div class="add-article-box-content">
                 <mu-text-field v-model="value9"  color='#ff8a65' placeholder="关键字会出现在网页的keywords属性中。" multi-line :rows="3" :rows-max="6"></mu-text-field>
                <!-- <textarea class="form-control" name="keywords" autocomplete="off"></textarea>
                <span class="prompt-text">关键字会出现在网页的keywords属性中。</span> -->
                 </div>
            </div>
            <div class="add-article-box">
              <h2 class="add-article-box-title"><span>站点描述</span></h2>
              <div class="add-article-box-content">
                  <mu-text-field v-model="value9"  color='#ff8a65' placeholder="描述会出现在网页的description属性中。" multi-line :rows="3" :rows-max="6"></mu-text-field>
                <!-- <textarea class="form-control" name="describe" rows="4" autocomplete="off"></textarea>
                <span class="prompt-text">描述会出现在网页的description属性中。</span> -->
                 </div>
            </div>
          </div>
          <div class="col-md-3">
            <h1 class="page-header">站点</h1>
            <div class="add-article-box">
              <h2 class="add-article-box-title"><span>电子邮件地址</span></h2>
              <div class="add-article-box-content">
                 <mu-text-field class="clearMarginbottom"  color='#ff8a65' v-model="title" label="在此处输入邮箱" label-float></mu-text-field>
           </div>
            </div>
            <div class="add-article-box">
              <h2 class="add-article-box-title"><span>ICP备案号</span></h2>
              <div class="add-article-box-content">
                <mu-text-field class="clearMarginbottom"  color='#ff8a65' v-model="title" label="在此处输入备案号" label-float></mu-text-field>
              </div>
            </div>
            <div class="add-article-box">
              <div class="add-article-box-content"> <span class="prompt-text">请确定您对所有选项所做的更改</span> </div>
              <div class="add-article-box-footer">
           <mu-button color="primary">更新</mu-button>
              </div>
            </div>
          </div>
          </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    },
    mounted(){

    }
};
</script>
<style >
 
</style>