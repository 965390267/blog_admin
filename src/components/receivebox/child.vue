<template>
<div>
  <span class="EmotionButton" @click="OpenEmotions()">
    <i class="iconfont icon-face IconfontSize"></i>
  </span>

  <Emotion ref="EmotionB" @AppendInputValue="AppendMessageText"></Emotion>
</div>

</template>
<script>
import Emotion from './index'
export default {
    name: "BlogDetail",
    methods:{
       // 打开表情包弹框
       OpenEmotions:function () {
         this.$refs.EmotionB.OpenEmotion(true);
       },
       //表情选中后追加在input
       AppendMessageText:function (EmotionChinese) {
         this.ArticleCommentText += EmotionChinese;
       }
    }
}
</script>
