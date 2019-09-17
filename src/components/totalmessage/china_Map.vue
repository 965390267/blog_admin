<template>
    <div>
<!-- <button id="back" @click="oBack()">返回全国</button> -->
<div ref='china_map' class="china-map"></div>
    </div>
</template>

<script>
import echarts from "echarts";
 import '../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
//import '../../../node_modules/echarts/map/js/province/yunnan.js' // 引入北京地图数据

    const  provinces= ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'];

    const provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'];
export default {
    data(){
        return{
     seriesData : [{
      name: '北京',
      value: 100
    }, {
      name: '天津',
      value: 0
    }, {
      name: '上海',
      value: 60
    }, {
      name: '重庆',
      value: 0
    }, {
      name: '河北',
      value: 60
    }, {
      name: '河南',
      value: 60
    }, {
      name: '云南',
      value: 0
    }, {
      name: '辽宁',
      value: 0
    }, {
      name: '黑龙江',
      value: 0
    }, {
      name: '湖南',
      value: 60
    }, {
      name: '安徽',
      value: 0
    }, {
      name: '山东',
      value: 60
    }, {
      name: '新疆',
      value: 0
    }, {
      name: '江苏',
      value: 0
    }, {
      name: '浙江',
      value: 0
    }, {
      name: '江西',
      value: 0
    }, {
      name: '湖北',
      value: 60
    }, {
      name: '广西',
      value: 60
    }, {
      name: '甘肃',
      value: 0
    }, {
      name: '山西',
      value: 60
    }, {
      name: '内蒙古',
      value: 0
    }, {
      name: '陕西',
      value: 0
    }, {
      name: '吉林',
      value: 0
    }, {
      name: '福建',
      value: 0
    }, {
      name: '贵州',
      value: 0
    }, {
      name: '广东',
      value: 497
    }, {
      name: '青海',
      value: 0
    }, {
      name: '西藏',
      value: 0
    }, {
      name: '四川',
      value: 60
    }, {
      name: '宁夏',
      value: 0
    }, {
      name: '海南',
      value: 60
    }, {
      name: '台湾',
      value: 0
    }, {
      name: '香港',
      value: 0
    }, {
      name: '澳门',
      value: 0
    }]

        }
    },
    methods:{

         oBack(){
 this.initEcharts("china", "中国");
         } ,             
          // 初始化echarts
     initEcharts(pName, Chinese_) {
      var tmpSeriesData = pName === "china" ? this.seriesData : [];
if(!myChart){
    	var myChart = echarts.init(this.$refs.china_map);
}
      var option = {
        title: {
          text: Chinese_ || pName,
          left: 'center'
        },
          tooltip: {
              trigger: 'item',
              formatter: '{b}<br/>{c} (p / km2)'
          }, 
           legend: {
        x:'right',
        selectedMode:false,
        data:['北京','上海','广东']
    },
              toolbox: {
        show : true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
            //左侧小导航图标
                visualMap: {  
                    show : true,  
                    x: 'left',  
                    y: 'center',  
                    splitList: [   
                        {start: 500, end:600},{start: 400, end: 500},  
                        {start: 300, end: 400},{start: 200, end: 300},  
                        {start: 100, end: 200},{start: 0, end: 100},  
                    ],  
                    color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']  
                }, 
        series: [
          {
            name: Chinese_|| pName,
            type: 'map',
            mapType: pName,
            roam: false,//是否开启鼠标缩放和平移漫游
            data: tmpSeriesData,
                 markPoint : {
                symbolSize: 5,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
             
                },
             top: "3%",//组件距离容器的距离
              zoom:1,
              selectedMode : 'single',
              label: {
                  normal: {
                      show: true,//显示省份标签
                      textStyle:{color:"#fbfdfe"}//省份标签字体颜色
                  },
                  emphasis: {//对应的鼠标悬浮效果
                      show: true,
                      textStyle:{color:"#323232"}
                  }
              },
              itemStyle: {
                  normal: {
                      borderWidth: .5,//区域边框宽度
                      borderColor: '#0550c3',//区域边框颜色
                      areaColor:"#4ea397",//区域颜色
                  },
                  emphasis: {
                      borderWidth: .5,
                      borderColor: '#4b0082',
                      areaColor:"#ece39e",
                  }
              },
          }
        ] };

      myChart.setOption(option);
      myChart.off("click");
      if (pName === "china") { // 全国时，添加click 进入省级
        myChart.on('click',  (param)=> {
          // 遍历取到provincesText 中的下标  去拿到对应的省js
          for (var i = 0; i < provincesText.length; i++) {
            if (param.name === provincesText[i]) {
              //显示对应省份的方法
              require([`../../../node_modules/echarts/map/js/province/${provinces[i]}.js`],()=>{
               this.initEcharts(param.name);
              });
               //this.showProvince(this.provinces[i], this.provincesText[i]);
              break;
            }
          }
        });
      } else { // 省份，添加双击 回退到全国
        myChart.on("dblclick",  ()=> {
          this.initEcharts("china", "中国");
        });
      }
    },
    //     // 展示对应的省
    //  showProvince(pName, Chinese_) {
    //   //这写省份的js都是通过在线构建工具生成的，保存在本地，需要时加载使用即可，最好不要一开始全部直接引入。
    //   this.loadBdScript('$' + pName + 'JS', `../../../node_modules/echarts/map/js/province/${pName}.js`,  ()=> {
    //     this.initEcharts(Chinese_);
    //   });
    // },

    // // 加载对应的JS
    //  loadBdScript(scriptId, url, callback) {
    //   var script = document.createElement("script");
    //   script.type = "text/javascript";
    //   if (script.readyState) {  //IE
    //     script.onreadystatechange = function () {
    //       if (script.readyState === "loaded" || script.readyState === "complete") {
    //         script.onreadystatechange = null;
    //         callback();
    //       }
    //     };
    //   } else {  // Others
    //     script.onload = function () {
    //       callback();
    //     };
    //   }
    //   script.src = url;
    //   script.id = scriptId;
    //   document.getElementsByTagName("head")[0].appendChild(script);
    // }
    },
    mounted(){
    this.initEcharts("china", "中国");
    }
}
</script>
<style scoped>
.china-map {
  height: 1000px;
  margin: auto;
}

</style>