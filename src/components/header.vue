<template>
<mu-appbar style="width: 100%;" color="primary">

  <mu-button flat  @click="toggle()">
    <div class="iconfont icon-zhankai tooltips"></div>
  </mu-button>
  Title

 <div class="inline-block">
     <div class="iconfont icon-36 tooltips"></div>
  <div class="notify">
                <span class="heartbit"></span>
                <span class="point"></span>
            </div>
  </div>

  <div class="inline-block">
     <div class="iconfont icon-iconset0336 tooltips"></div>
  <div class="notify">
                <span class="heartbit"></span>
                <span class="point"></span>
            </div>
  </div>

    <mu-menu slot="right">
      <mu-tooltip :content="isFullScreen?'退出全屏':'打开全屏'" placement='left'>
    <mu-button flat @click="setFullscreen()"><div class="iconfont icon-quanping tooltips"></div></mu-button>
 </mu-tooltip>
  </mu-menu>

  <mu-menu slot="right" open-on-hover placement='bottom'>
     <mu-tooltip content="主题色" placement='bottom'>
    <mu-button flat><div class="iconfont icon-yanse tooltips"></div></mu-button>
     </mu-tooltip>
    <mu-list slot="content">
       <mu-list-item button @click="chooseTheme('light')">
        <mu-list-item-content>
          <mu-list-item-title>默认主题</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item button @click="chooseTheme('dark')">
        <mu-list-item-content>
          <mu-list-item-title>酷炫黑</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item button @click="chooseTheme('green')">
        <mu-list-item-content>
          <mu-list-item-title>护眼绿</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
       <mu-list-item button @click="chooseTheme('pink')">
        <mu-list-item-content>
          <mu-list-item-title>淡雅粉</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      
    </mu-list>
  </mu-menu>

    <mu-menu slot="right" open-on-hover >
         <mu-tooltip content="退出登录" placement='bottom'>
    <mu-button flat><div class="iconfont icon-guanji tooltips"></div></mu-button>
    </mu-tooltip>
    <mu-list slot="content" >
      <mu-list-item button>
        <mu-list-item-content>
          <mu-list-item-title>退出登录</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-content>
          <mu-list-item-title>Menu Item 2</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
  </mu-menu>

</mu-appbar>
</template>
<script>
import theme from '@/theme'
export default {
  data() {
    return {
      isrotate: false,
      isFullScreen:false,
      isCollapse:true
    };
  },
  methods: {
    setFullscreen(){/* 切换全屏 */
          this.isFullScreen=!this.isFullScreen;
          this.isFullScreen&&this.launchFullscreen()
          !this.isFullScreen&&this.exitFullscreen();
    },
    launchFullscreen(){/* 打开全屏 */
      const element=document.documentElement;
 if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
    },
    exitFullscreen() {/* 退出全屏 */
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  },
    chooseTheme(color){/* 选择主题色 */
    theme.use(color);
    },
    toggle(e) {
      console.log('99');
      
      this.isCollapse=!this.isCollapse;
      this.bus.$emit('isCollapse',this.isCollapse)
    },
    logout() {
      this.$http.get("api/logout").then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$router.push({ path: "/" });
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconfont {
  width: 30px;
  height: 30px;
  margin-top: 16px;
  color: #fff;
  font-size: 20px;
  transition: all 0.5s;
}
.inline-block{
  position: relative;
  display: inline-block;
}
.notify {
    position: absolute;
    top: 30px;
    right: 11px;
}
.notify .heartbit {
    position: absolute;
    top: -20px;
    right: -16px;
    height: 25px;
    width: 25px;
    z-index: 10;
    border: 4px solid;
    border-color: #fc4b6c;
    border-radius: 70px;
    animation: heartbit 1s ease-out;
    animation-iteration-count: infinite;
}
.notify .point {
    width: 6px;
    height: 6px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    background-color: #fc4b6c;
    position: absolute;
    right: -6px;
    top: -10px;
}
@keyframes heartbit {
  0% {
    -webkit-transform: scale(0);
    opacity: 0;
}
25% {
    -webkit-transform: scale(0.1);
    opacity: .1;
}
50% {
    -webkit-transform: scale(0.5);
    opacity: .3;
}
75% {
    -webkit-transform: scale(0.8);
    opacity: .5;
}
100% {
    -webkit-transform: scale(1);
    opacity: 0;
}
}
</style>
