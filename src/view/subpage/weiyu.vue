<template>
  <div class="wrapper">
    <ul>
      <li v-for='(item,index) in 17' :key='index' >
        <div class="picBox">
          <div class="show">
            <img height="180px" width="180px" :src="'http://img.zangzhihong.com/background'+item+'.jpg'" />
          </div>
          <div class="hide">
            <h3>Picture1</h3>
          </div>
        </div>
      </li>  
    </ul>
  </div>
</template>
<script>
export default {
    data(){
return{

}
    },
    methods:{
         pic3D(node){
          
        function Index(node) {
    this.node = node;
    this.init();
};
Index.prototype.init = function () {
    var self = this;
    this.nodes = [];
    Array.prototype.slice.call(self.node, 0).forEach(function (item, index) {
        self.nodes.push(self.update(item));
         console.log(index);
        self.bindEvents(item, index);
    });
};
Index.prototype.update = function (item) {
    return {
        w: item.offsetWidth,
        h: item.offsetHeight,
        l: item.offsetLeft,
        t: item.offsetTop
    }
};
Index.prototype.bindEvents = function (item, index) {
    item.addEventListener('mouseenter', (e)=> { 
         this.addClass(e, item, 'in', index);
        return false;
    })
  item.addEventListener('mouseleave', (e)=> {
        console.log(e);
         this.addClass(e, item, 'out', index);
        return false;
    })
};
Index.prototype.addClass = function (e, item, state, index) {
    var direction = this.getDirection(e, index);
    var class_suffix = '';
    switch (direction) {
    case 0:
        class_suffix = '-top';
        break;
    case 1:
        class_suffix = '-right';
        break;
    case 2:
        class_suffix = '-bottom';
        break;
    case 3:
        class_suffix = '-left';
        break;
    }
    item.className = '';
    item.classList.add(state + class_suffix);
};
Index.prototype.getDirection = function (e, index) {
    var w = this.nodes[index].w,
        h = this.nodes[index].h,
        x = e.pageX - this.nodes[index].l - w / 2,
        y = e.pageY - this.nodes[index].t - h / 2;
   let d = (Math.round(((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
    return d;
};
 new  Index(node);
         }
         
    },
    mounted(){
       
        this.pic3D(document.querySelectorAll('.wrapper li'))
    }
}
</script>
<style scoped>
.wrapper {
    margin: 80px auto
}
.wrapper li {
    position: relative;
    width: 180px;
    height: 180px;
    list-style: none;
    margin: 5px;
    display: inline-block;
    perspective: 300px
}
.picBox {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform-style: preserve-3d;
    transform-origin: 50% 50% -90px;
    animation: 200ms ease-out 0ms 1 normal forwards
}
.show, .hide {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}
.hide {
    color: #fff;
    background-color: #000;
    text-align: center;
    line-height: 180px;
    transform: translate3d(0, 0, -1px)
}
.in-top .hide, .out-top .hide {
    transform-origin: 0% 100%;
    transform: translate3d(0, -100%, 0) rotate3d(1, 0, 0, 90deg)
}
.in-top .picBox {
    animation-name: in-top;
    animation-play-state: running
}
.out-top .picBox {
    animation-name: out-top;
    animation-play-state: running
}
@keyframes in-top {
    from {
        transform: rotate3d(0, 0, 0, 0deg)
    }
    to {
        transform: rotate3d(-1, 0, 0, 90deg)
    }
}
@keyframes out-top {
    from {
        transform: rotate3d(-1, 0, 0, 90deg)
    }
    to {
        transform: rotate3d(0, 0, 0, 0deg)
    }
}
.in-right .hide, .out-right .hide {
    transform-origin: 0% 0%;
    transform: translate3d(100%, 0, 0) rotate3d(0, 1, 0, 90deg)
}
.in-right .picBox {
    animation-name: in-right;
    animation-play-state: running
}
.out-right .picBox {
    animation-name: out-right;
    animation-play-state: running
}
@keyframes in-right {
    from {
        transform: rotate3d(0, 0, 0, 0deg)
    }
    to {
        transform: rotate3d(0, -1, 0, 90deg)
    }
}
@keyframes out-right {
    from {
        transform: rotate3d(0, -1, 0, 90deg)
    }
    to {
        transform: rotate3d(0, 0, 0, 0deg)
    }
}
.in-bottom .hide, .out-bottom .hide {
    transform-origin: 0% 0%;
    transform: translate3d(0, 100%, 0) rotate3d(-1, 0, 0, 90deg)
}
.in-bottom .picBox {
    animation-name: in-bottom;
    animation-play-state: running
}
.out-bottom .picBox {
    animation-name: out-bottom;
    animation-play-state: running
}
@keyframes in-bottom {
    from {
        transform: rotate3d(0, 0, 0, 0deg)
    }
    to {
        transform: rotate3d(1, 0, 0, 90deg)
    }
}
@keyframes out-bottom {
    from {
        transform: rotate3d(1, 0, 0, 90deg)
    }
    to {
        transform: rotate3d(0, 0, 0, 0deg)
    }
}
.in-left .hide, .out-left .hide {
    transform-origin: 100% 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, -1, 0, 90deg)
}
@keyframes in-left {
    from {
        transform: rotate3d(0, 0, 0, 0deg)
    }
    to {
        transform: rotate3d(0, 1, 0, 90deg)
    }
}
@keyframes out-left {
    from {
        transform: rotate3d(0, 1, 0, 90deg)
    }
    to {
        transform: rotate3d(0, 0, 0, 0deg)
    }
}
.in-left .picBox {
    animation-name: in-left;
    animation-play-state: running
}
.out-left .picBox {
    animation-name: out-left;
    animation-play-state: running
}
</style>

