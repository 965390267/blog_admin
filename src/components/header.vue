<template>
<mu-appbar style="width: 100%;" color="primary">
  <mu-button flat>
    <div class="iconfont icon-zhankai tooltips" @click="toggle()"></div>
  </mu-button>
  Title
  <mu-menu slot="right">
    <mu-button flat>color</mu-button>
    <mu-list slot="content">
       <mu-list-item button @click="chooseTheme('light')">
        <mu-list-item-content>
          <mu-list-item-title>默认主题</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item button @click="chooseTheme('dark')">
        <mu-list-item-content>
          <mu-list-item-title>主题黑</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item button @click="chooseTheme('LightGreen')">
        <mu-list-item-content>
          <mu-list-item-title>主题绿</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      
    </mu-list>
  </mu-menu>
  <mu-menu slot="right">
    <mu-button flat>退出登录</mu-button>
    <mu-list slot="content">
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
      isrotate: false
    };
  },
  methods: {
    chooseTheme(color){
    theme.use(color);
    },
    toggle(e) {
      //           this.isrotate=!this.isrotate;
      //           if(!this.isrotate){
      // e.target.style.cssText='transform:rotateZ(0deg)'
      //           }else{
      //               e.target.style.cssText='transform:rotateZ(90deg)'
      //           }

      this.$emit("change");
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
</style>
