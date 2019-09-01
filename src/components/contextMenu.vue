<template>
   <div v-show='isShowcontextmenu' class="contextmenu" :style="{left:positonX,top:positionY}">
     <slot name="content">

     </slot>
  
    </div>
</template>
<script>
export default {
      data() {
    return {
      isShowcontextmenu:false,
      positonX:0,/* 右键弹出位置 */
      positionY:0/* 右键弹出位置 */
    };
  },
  props:[
    'mouseRightBtn'
  ],
  methods:{

  },
  watch:{
   mouseRightBtn(e){
     console.log(e.articleId);
       e=e.event;
         if (e.button == 2) {
        this.isShowcontextmenu = true;
        let { pageX, pageY } = e;
        this.positonX = pageX + "px";
        this.positionY = pageY + "px";
      }
   }
  },
  mounted() {
    document.oncontextmenu = function(e) {
      return false;
    };

    document.onclick = e => {
      e.preventDefault();
      e.stopPropagation();
      this.isShowcontextmenu = false;
    };
    document.onscroll = () => {
      this.isShowcontextmenu = false;
    };
    document.onwheel = () => {
      this.isShowcontextmenu = false;
    };
  },
  destroyed(){
     document.oncontextmenu = function(e) {
      return true;
    };
  }
};
</script>

<style scope>
/* 右键样式 */
.contextmenu{
  position: fixed;
  width: 80px;
  background: #fff;
  box-shadow: 0 0 15px 6px rgba(0, 0, 0, .2);
}
/* 右键样式 */
</style>