<template>
  <div class="picwrap">
    <div :class="setDirecttionClass"  @mouseenter="mouseEnter($event)" @mouseleave="mouseLeave($event)">
      <div class="picBox">
        <div class="show">
          <img height="180px" width="180px" :src="imgSrc" />
        </div>
        <div class="hide">
          <img height="180px" width="180px" :src="imgSrc" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      setDirecttionClass:'direct '
    };
  },
  props: {
    imgSrc: {
      type: String
    }
  },
  methods: {
    mouseEnter(e) {
      this.addClass(e, e.target, "in");
    },
    mouseLeave(e) {
      this.addClass(e, e.target, "out");
    },
    addClass(e, item, state) {
      let domMes = this.getDom_LEFT_TOP_WIDTH_HEIGHT(e.target);
      var direction = this.getDirection(e, domMes);
      this.setDirecttionClass="direat ";
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
      this.setDirecttionClass+=state + class_suffix;
    },
    getDom_LEFT_TOP_WIDTH_HEIGHT(dom) {
      var getBounding = dom.getBoundingClientRect();
      return {
        w: getBounding.width,
        h: getBounding.height,
        l: getBounding.left,
        t: getBounding.top
      };
    },
    getDirection(e, dommes) {
      var w = dommes.w,
        h = dommes.h,
        x = e.pageX - dommes.l - w / 2,
        y = e.pageY - dommes.t - h / 2;
      let d =
        (Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90) + 3) % 4;
      return d;
    }
  },
  mounted() {}
};
</script>
<style scoped>
/* 3D鼠标随动效果 */
.picwrap {
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
.direat {
  height: 180px;
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
</style>

