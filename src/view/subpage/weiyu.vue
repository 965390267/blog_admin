<template>
  <div class="weiyuwrapper">
       <h3>
      <i class="fa fa-angle-right"></i> 微语
    </h3>
    <hr />
    <ul>
      <template v-for="(item,index) in 17">
        <li class="weiyuItem in" :key="index" v-if="index%2==0">
          <div class="picwrap">
            <div class="direat">
              <div class="picBox">
                <div class="show">
                  <img
                    height="180px"
                    width="180px"
                    :src="'http://img.zangzhihong.com/background'+item+'.jpg'"
                  />
                </div>
                <div class="hide">
                  <img
                    height="180px"
                    width="180px"
                    :src="'http://img.zangzhihong.com/background'+item+'.jpg'"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="leftcontent">
            <div class="message">
              <span class="arrow"></span>
              <a href="#" class="name" data-original-title>zzh</a>
              <span class="date-time">at Jul 12th, 2013 12:21</span>
              <span
                class="body"
              >Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Reprehenderit butcher retro keffiyeh dreamcatcher synth terry richardsoAustin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</span>
            </div>
          </div>
          <div class="right_edit">
            <!-- <mu-button flat>删除</mu-button>
            <mu-button flat @click="edit()">编辑</mu-button> -->
          </div>
        </li>
        <li class="weiyuItem out" v-else :key="index">
          <div class="right_edit"></div>
          <div class="leftcontent">
            <div class="message">
              <span class="arrow"></span>
              <a href="#" class="name" data-original-title>zzh</a>
              <span class="date-time">at Jul 12th, 2013 12:21</span>
              <span
                class="body"
              >Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Reprehenderit butcher retro keffiyeh dreamcatcher synth terry richardsoAustin. Nesciunt tofu stumptown aliqua, retro synth master cleanse.</span>
            </div>
          </div>
          <div class="picwrap">
            <div class="direat">
              <div class="picBox">
                <div class="show">
                  <img
                    height="180px"
                    width="180px"
                    :src="'http://img.zangzhihong.com/background'+item+'.jpg'"
                  />
                </div>
                <div class="hide">
                  <img
                    height="180px"
                    width="180px"
                    :src="'http://img.zangzhihong.com/background'+item+'.jpg'"
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
      </template>
    </ul>
    <mu-dialog  title="Phone Ringtone" max-width="1080" scrollable :open.sync="openScroll">
      <!-- <mu-list>
      <mu-list-item :key="option" v-for="option in options">
        <mu-list-item-content>
          <mu-radio  :label="option" :value="option" v-model="ringtone"></mu-radio>
        </mu-list-item-content>
      </mu-list-item>
      </mu-list>-->
      <mu-button slot="actions" flat color="primary" @click="closeFrame()">ok</mu-button>
    </mu-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openScroll: false
    };
  },
  methods: {
    edit() {
      this.openScroll = true;
    },
    delate() {},
    closeFrame() {
      this.openScroll = false;
    },
    pic3D(node) {
      function Index(node) {
        this.node = node;
        this.init();
      }
      Index.prototype.init = function() {
        var self = this;
        this.nodes = [];
        Array.prototype.slice.call(self.node, 0).forEach(function(item, index) {
          self.nodes.push(self.update(item));
          self.bindEvents(item, index);
        });
      };
      Index.prototype.update = function(item) {
        return {
          w: item.offsetWidth,
          h: item.offsetHeight,
          l: item.offsetLeft,
          t: item.offsetTop
        };
      };
      Index.prototype.bindEvents = function(item, index) {
        item.addEventListener("mouseenter", e => {
          this.addClass(e, item, "in", index);
          item.removeEventListener("mouseenter", e => {
            this.addClass(e, item, "in", index);
            return false;
          });
          return false;
        });
        item.addEventListener("mouseleave", e => {
          this.addClass(e, item, "out", index);
          item.removeEventListener("mouseleave", e => {
            this.addClass(e, item, "out", index);
            return false;
          });
          return false;
        });
      };
      Index.prototype.addClass = function(e, item, state, index) {
        var direction = this.getDirection(e, index);
        var class_suffix = "";
        switch (direction) {
          case 0:
            class_suffix = "-top";
            break;
          case 1:
            class_suffix = "-right";
            break;
          case 2:
            class_suffix = "-bottom";
            break;
          case 3:
            class_suffix = "-left";
            break;
        }
        item.className = "";
        item.classList.add(state + class_suffix);
      };
      Index.prototype.getDirection = function(e, index) {
        var w = this.nodes[index].w,
          h = this.nodes[index].h,
          x = e.pageX - this.nodes[index].l - w / 2,
          y = e.pageY - this.nodes[index].t - h / 2;
        let d =
          (Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90) + 3) % 4;
        return d;
      };
      new Index(node);
    }
  },
  mounted() {
    this.pic3D(document.querySelectorAll(".weiyuItem .direat"));
  }
};
</script>
<style scoped>
.weiyuwrapper{
  padding:0 40px 0 30px;
}
 .weiyuwrapper h3 {
  font-family: "Ruda", sans-serif;
  font-size: 24px;
  color: rgb(121, 121, 121);
  text-align: center;
  /* margin-top: 20px; */
  margin-bottom: 10px;
}
.weiyuwrapper hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #797979;
}
.weiyuItem {
  display: flex;
  margin: 10px 0;
  /* border-bottom: 1px solid #e6e6e6; */
}
.leftcontent {
  flex: 1;
}

/* 3D鼠标随动效果 */
.weiyuwrapper .picwrap {
  position: relative;
  width: 180px;
  height: 180px;
  list-style: none;
  margin: 5px;
  display: inline-block;
  perspective: 300px;
}
.picBox {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-style: preserve-3d;
  transform-origin: 50% 50% -90px;
  animation: 200ms ease-out 0ms 1 normal forwards;
}
.show,
.hide {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.hide {
  color: #fff;
  background-color: #000;
  text-align: center;
  line-height: 180px;
  transform: translate3d(0, 0, -1px);
}
.in-top .hide,
.out-top .hide {
  transform-origin: 0% 100%;
  transform: translate3d(0, -100%, 0) rotate3d(1, 0, 0, 90deg);
}
.in-top .picBox {
  animation-name: in-top;
  animation-play-state: running;
}
.out-top .picBox {
  animation-name: out-top;
  animation-play-state: running;
}
@keyframes in-top {
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(-1, 0, 0, 90deg);
  }
}
@keyframes out-top {
  from {
    transform: rotate3d(-1, 0, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
}
.in-right .hide,
.out-right .hide {
  transform-origin: 0% 0%;
  transform: translate3d(100%, 0, 0) rotate3d(0, 1, 0, 90deg);
}
.in-right .picBox {
  animation-name: in-right;
  animation-play-state: running;
}
.out-right .picBox {
  animation-name: out-right;
  animation-play-state: running;
}
@keyframes in-right {
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(0, -1, 0, 90deg);
  }
}
@keyframes out-right {
  from {
    transform: rotate3d(0, -1, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
}
.in-bottom .hide,
.out-bottom .hide {
  transform-origin: 0% 0%;
  transform: translate3d(0, 100%, 0) rotate3d(-1, 0, 0, 90deg);
}
.in-bottom .picBox {
  animation-name: in-bottom;
  animation-play-state: running;
}
.out-bottom .picBox {
  animation-name: out-bottom;
  animation-play-state: running;
}
@keyframes in-bottom {
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(1, 0, 0, 90deg);
  }
}
@keyframes out-bottom {
  from {
    transform: rotate3d(1, 0, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
}
.in-left .hide,
.out-left .hide {
  transform-origin: 100% 0;
  transform: translate3d(-100%, 0, 0) rotate3d(0, -1, 0, 90deg);
}
@keyframes in-left {
  from {
    transform: rotate3d(0, 0, 0, 0deg);
  }
  to {
    transform: rotate3d(0, 1, 0, 90deg);
  }
}
@keyframes out-left {
  from {
    transform: rotate3d(0, 1, 0, 90deg);
  }
  to {
    transform: rotate3d(0, 0, 0, 0deg);
  }
}
.in-left .picBox {
  animation-name: in-left;
  animation-play-state: running;
}
.out-left .picBox {
  animation-name: out-left;
  animation-play-state: running;
}
/* 3D鼠标随动效果 */
/* 右边消息 */
.message {
  position: relative;
  height: 90%;
  margin: 8px 0;
  padding: 5px 10px;
}
.in .right_edit {
  width: 60px;
  border-left: 1px solid #e6e6e6;
background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
}
.out .right_edit {
  width: 45px;
  border-right: 1px solid #e6e6e6;
background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
}
.in .message {
  margin-left: 12px;
  border-left: 2px solid #f08c56;
}
.out .message {
  margin-right: 12px;
  text-align: right;
  border-right: 2px solid #40acd6;
}
.in .message .arrow {
  display: block;
  position: absolute;
  top: 7px;
  left: -8px;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid #f08c56;
}
.out .message .arrow {
  display: block;
  position: absolute;
  top: 7px;
  right: -8px;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid #40acd6;
}
.in .name {
  color: #f08c56;
  font-size: 13px;
  font-weight: 400;
}
.out .name {
  color: #40acd6;
  font-size: 13px;
  font-weight: 400;
}
.message .date-time {
  color: #1a1a1a;
  font-size: 11px;
  font-weight: 400;
}
.message .body {
  display: block;
  color: #333333;
  padding-top: 10px;
}
</style>

