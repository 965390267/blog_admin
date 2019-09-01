<template>
  <div class="messagewrap">
    <!-- <h3 class="title">Gallery</h3> -->
    <!-- <mu-paper class="pic-list-wrap"  :z-depth="5">
     <div class="pic-list" :style="{background: 'url('+carouselImg1+')',backgroundSize:'cover'}"></div>
    </mu-paper>-->
    <Card></Card>
    <div class="main-middle">
      <div class="commetns" >
        <div id='myChart'></div>
        <div  id='myChart2'></div>
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
import echarts from 'echarts'
import Card from "@/components/totalmessage/card";

import Comments from "@/components/totalmessage/comments";
import Aside from "@/components/totalmessage/aside";
export default {
  components: {
    Card,Comments,Aside
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
    drawEchart(){
      let myChart =echarts.init(document.getElementById('myChart'))
var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
var yMax = 500;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}

let option = {
    title: {
        text: '特性示例：渐变色 阴影 点击缩放',
        subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
    },
    xAxis: {
        data: dataAxis,
        axisLabel: {
            inside: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                normal: {color: 'rgba(0,0,0,0.05)'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: dataShadow,
            animation: false
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#83bff6'},
                            {offset: 0.5, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
            },
            data: data
        }
    ]
};

// Enable data zoom when user click bar.
var zoomSize = 6;
myChart.on('click', function (params) {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
});


 myChart.setOption(option,true);
/* *************************************************************************** */

let myChart2 =echarts.init(document.getElementById('myChart2'))
let option2 = {
    backgroundColor: '#2c343c',

    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
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
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:274, name:'联盟广告'},
                {value:235, name:'视频广告'},
                {value:400, name:'搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
myChart2.setOption(option2,true);
/* *************************************************************************** */
let myChart3 =echarts.init(document.getElementById('myChart3'))

var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
var bgColor = '#2E2733';

var itemStyle = {
    star5: {
        color: colors[0]
    },
    star4: {
        color: colors[1]
    },
    star3: {
        color: colors[2]
    },
    star2: {
        color: colors[3]
    }
};

var data = [{
    name: '虚构',
    itemStyle: {
        normal: {
            color: colors[1]
        }
    },
    children: [{
        name: '小说',
        children: [{
            name: '5☆',
            children: [{
                name: '疼'
            }, {
                name: '慈悲'
            }, {
                name: '楼下的房客'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '虚无的十字架'
            }, {
                name: '无声告白'
            }, {
                name: '童年的终结'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '疯癫老人日记'
            }]
        }]
    }, {
        name: '其他',
        children: [{
            name: '5☆',
            children: [{
                name: '纳博科夫短篇小说全集'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '安魂曲'
            }, {
                name: '人生拼图版'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '比起爱你，我更需要你'
            }]
        }]
    }]
}, {
    name: '非虚构',
    itemStyle: {
        color: colors[2]
    },
    children: [{
        name: '设计',
        children: [{
            name: '5☆',
            children: [{
                name: '无界面交互'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '数字绘图的光照与渲染技术'
            }, {
                name: '日本建筑解剖书'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '奇幻世界艺术\n&RPG地图绘制讲座'
            }]
        }]
    }, {
        name: '社科',
        children: [{
            name: '5☆',
            children: [{
                name: '痛点'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '卓有成效的管理者'
            }, {
                name: '进化'
            }, {
                name: '后物欲时代的来临',
            }]
        }, {
            name: '3☆',
            children: [{
                name: '疯癫与文明'
            }]
        }]
    }, {
        name: '心理',
        children: [{
            name: '5☆',
            children: [{
                name: '我们时代的神经症人格'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '皮格马利翁效应'
            }, {
                name: '受伤的人'
            }]
        }, {
            name: '3☆',
        }, {
            name: '2☆',
            children: [{
                name: '迷恋'
            }]
        }]
    }, {
        name: '居家',
        children: [{
            name: '4☆',
            children: [{
                name: '把房子住成家'
            }, {
                name: '只过必要生活'
            }, {
                name: '北欧简约风格'
            }]
        }]
    }, {
        name: '绘本',
        children: [{
            name: '5☆',
            children: [{
                name: '设计诗'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '假如生活糊弄了你'
            }, {
                name: '博物学家的神秘动物图鉴'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '方向'
            }]
        }]
    }, {
        name: '哲学',
        children: [{
            name: '4☆',
            children: [{
                name: '人生的智慧'
            }]
        }]
    }, {
        name: '技术',
        children: [{
            name: '5☆',
            children: [{
                name: '代码整洁之道'
            }]
        }, {
            name: '4☆',
            children: [{
                name: 'Three.js 开发指南'
            }]
        }]
    }]
}];

for (var j = 0; j < data.length; ++j) {
    var level1 = data[j].children;
    for (var i = 0; i < level1.length; ++i) {
        var block = level1[i].children;
        var bookScore = [];
        var bookScoreId;
        for (var star = 0; star < block.length; ++star) {
            var style = (function (name) {
                switch (name) {
                    case '5☆':
                        bookScoreId = 0;
                        return itemStyle.star5;
                    case '4☆':
                        bookScoreId = 1;
                        return itemStyle.star4;
                    case '3☆':
                        bookScoreId = 2;
                        return itemStyle.star3;
                    case '2☆':
                        bookScoreId = 3;
                        return itemStyle.star2;
                }
            })(block[star].name);

            block[star].label = {
                color: style.color,
                downplay: {
                    opacity: 0.5
                }
            };

            if (block[star].children) {
                style = {
                    opacity: 1,
                    color: style.color
                };
                block[star].children.forEach(function (book) {
                    book.value = 1;
                    book.itemStyle = style;

                    book.label = {
                        color: style.color
                    };

                    var value = 1;
                    if (bookScoreId === 0 || bookScoreId === 3) {
                        value = 5;
                    }

                    if (bookScore[bookScoreId]) {
                        bookScore[bookScoreId].value += value;
                    }
                    else {
                        bookScore[bookScoreId] = {
                            color: colors[bookScoreId],
                            value: value
                        };
                    }
                });
            }
        }

        level1[i].itemStyle = {
            color: data[j].itemStyle.color
        };
    }
}

let option3 = {
    backgroundColor: bgColor,
    color: colors,
    series: [{
        type: 'sunburst',
        center: ['50%', '48%'],
        data: data,
        sort: function (a, b) {
            if (a.depth === 1) {
                return b.getValue() - a.getValue();
            }
            else {
                return a.dataIndex - b.dataIndex;
            }
        },
        label: {
            rotate: 'radial',
            color: bgColor
        },
        itemStyle: {
            borderColor: bgColor,
            borderWidth: 2
        },
        levels: [{}, {
            r0: 0,
            r: 40,
            label: {
                rotate: 0
            }
        }, {
            r0: 40,
            r: 105
        }, {
            r0: 115,
            r: 140,
            itemStyle: {
                shadowBlur: 2,
                shadowColor: colors[2],
                color: 'transparent'
            },
            label: {
                rotate: 'tangential',
                fontSize: 10,
                color: colors[0]
            }
        }, {
            r0: 140,
            r: 145,
            itemStyle: {
                shadowBlur: 80,
                shadowColor: colors[0]
            },
            label: {
                position: 'outside',
                textShadowBlur: 5,
                textShadowColor: '#333',
            },
            downplay: {
                label: {
                    opacity: 0.5
                }
            }
        }]
    }]
};
 console.log('666');  

myChart3.setOption(option3,true);
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
     this.drawEchart()
    // this.getusermes();
  }
};
</script>
<style lang="" scoped>
#myChart,#myChart2,#myChart3{
  height: 800px;
}
.messagewrap{
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
  height: 160px;
  background-image: linear-gradient(to right, #ec77ab 0%, #7873f5 100%);
  position: absolute;
  z-index: -1;
  width: 100%;
  top: 0;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}
.main-middle{
 display: flex;
}
.commetns{
flex: 1;
border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}
.rightaside-wrap{
  width: 320px;
  padding:4px 16px 0 18px;
}
</style>

