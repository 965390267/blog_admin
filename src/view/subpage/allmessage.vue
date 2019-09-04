<template>
  <div class="messagewrap">
    <!-- <h3 class="title">Gallery</h3> -->
    <!-- <mu-paper class="pic-list-wrap"  :z-depth="5">
     <div class="pic-list" :style="{background: 'url('+carouselImg1+')',backgroundSize:'cover'}"></div>
    </mu-paper>-->
    <Card></Card>
    <div class="main-middle">
      <div class="commetns">
          <div class="echart">
 <div id="myChart"></div>
        <div id="myChart2"></div>
          </div>
       <!-- <Comments></Comments> -->
        <div  id='myChart3'></div>
      </div>

      <div class="rightaside-wrap">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>
<script>
// 引入echarts
import echarts from "echarts";
import Card from "@/components/totalmessage/card";

import Comments from "@/components/totalmessage/comments";
import Aside from "@/components/totalmessage/aside";
export default {
  components: {
    Card,
    Comments,
    Aside
  },

  data() {
    return {
      visitnums: "",
      carouselImg1: "http://img.zangzhihong.com/background1.jpg",
      carouselImg2: "http://img.zangzhihong.com/background2.jpg",
      carouselImg3: "http://img.zangzhihong.com/background3.jpg",
      carouselImg4: "http://img.zangzhihong.com/background4.jpg"
    };
  },
  methods: {
    drawEchart() {
      let myChart1 = echarts.init(document.getElementById("myChart"));
   
const option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', '7yue']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130,400],
        type: 'line'
    }]
};


      myChart1.setOption(option);
       window.onresize = myChart1.resize;
      /* *************************************************************************** */

      let myChart2 = echarts.init(document.getElementById("myChart2"));
      let option2 = {
        backgroundColor: "#fff",

        title: {
          text: "浏览器访问占比",
          left: "center",
          top: 20,
          textStyle: {
            color: "#333"
          }
        },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "Chorme" },
              { value: 310, name: "IE" },
              { value: 274, name: "firefox" },
              { value: 235, name: "opera" },
              { value: 400, name: "safari" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            label: {
              normal: {
                textStyle: {
                  color: "rgba(50, 50, 50, 0.5)"
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "rgba(50, 50, 50, 0.5)"
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                color: "#c23531",
                shadowBlur: 200,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      };
      myChart2.setOption(option2, true);
      /* *************************************************************************** */
      // let myChart3 =echarts.init(document.getElementById('myChart3'))
//var dom = document.getElementById("myChart3");
 // 基于准备好的dom，初始化echarts实例

    },
    getusermes() {
      // this.$http.get("api/login").then(res => {
      //   if (res.data.code == 200) {
      //     this.visitnums = res.data.data[0].visitnums;
      //   }
      // });
    }
  },
  mounted() {
    // window.onresize=()=>{

    // this.drawEchart()
    // }
    this.drawEchart();
    // this.getusermes();
  }
};
</script>
<style lang="" scoped>
#myChart {
 flex: 1;
}
#myChart2 {
  width:360px;
}
#myChart3{
    height:800px;
}
.messagewrap {
  position: relative;
  overflow: hidden;
}
.messagewrap .title {
  position: relative;
  font-family: "Marck Script", cursive;
  letter-spacing: 1px;
  font-size: 24px;
  color: rgb(121, 121, 121);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.messagewrap::after {
  content: "";
  height: 140px;
  background-image: linear-gradient(to right, #ec77ab 0%, #7873f5 100%);
  position: absolute;
  z-index: -1;
  width: 100%;
  top: 0;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}
.main-middle {
  display: flex;
}
.commetns {
 
  flex: 1;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.echart{
 display: flex;
 height: 600px;
}
.rightaside-wrap {
  width: 320px;
  padding: 4px 16px 0 18px;
}
</style>

