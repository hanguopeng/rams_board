<template>
  <div style="width:600px;height:400px;" id="testChart">
111
  </div>
</template>

<script>
  import '../../static/jilin'
  import '../../src/assets/echartImg/u56.png'
  export default {
    name: 'test',
    data () {
      return {
        pmsg: '1111111',
      }
    },
    mounted() {
      this.canvasChinaMap()
    },
    methods:{
      canvasChinaMap () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById("testChart"));
        var coldCar = [
          {
            "name": "车辆1",
            "value": [124.823608, 45.118243]
          },
          {
            "name": "车辆2",
            "value": [126.55302, 43.843577]
          }
        ]
        var coldFood = [
          {
            "name": "车辆3",
            "value": [124.370785, 43.170344]
          },
          {
            "name": "车辆4",
            "value": [125.145349, 42.902692]
          }
        ]
        var coldMed = [
          {
            "name": "车辆5",
            "value": [125.936501, 41.721177]
          },
          {
            "name": "车辆6",
            "value": [126.427839, 41.942505]
          }
        ]
        var coldStore = [
          {
            "name": "车辆7",
            "value": [129.513228, 42.904823],
          },
          {
            "name": "车辆8",
            "value": [122.841114, 45.619026],
          }
        ]
        var option = {
          tooltip: {
            show: true,
            trigger: 'item',
            triggerOn: 'mousemove',
            formatter: "名称:{b}<br />"
          },
          series: [
            {
              name: '冷链仓储分布',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              rippleEffect: {
                brushType: 'stroke'
              },
              label: {
                emphasis: {
                  show: true,
                  position: 'right',
                  formatter: '{b}'
                }
              },
              symbolSize: 10,
              showEffectOn: 'render',
              itemStyle: {
                normal: {
                  color: '#46bee9'
                }
              },
              data: coldStore
            }, {
              name: "冷链运输车分布",
              type: 'effectScatter',//配置显示方式为用户自定义
              coordinateSystem: 'geo',
              itemStyle: {
                normal: {
                  color: '#bce922'
                }
              },
              renderItem: function (params, api) {//具体实现自定义图标的方法
                return {
                  type: 'image',
                  style: {
                    image: "../../src/assets/echartImg/u56.png",
                    x: api.coord([
                      coldCar[params.dataIndex].value[0], coldCar[params.dataIndex]
                        .value[1]
                    ])[0],
                    y: api.coord([
                      coldCar[params.dataIndex].value[0], coldCar[params.dataIndex]
                        .value[1]
                    ])[1]
                  }
                }
              },
              data: coldCar
            }, {
              name: "高风险食品安全分布",
              type: 'effectScatter',
              coordinateSystem: 'geo',
              rippleEffect: {
                brushType: 'stroke'
              },
              label: {
                emphasis: {
                  show: true,
                  position: 'right',
                  formatter: '{b}'
                }
              },
              symbolSize: 10,
              showEffectOn: 'render',
              zlevel: 2,
              itemStyle: {
                normal: {
                  color: '#FF4500'
                }
              },
              data: coldFood
            }, {
              name: "药品安全分布",
              type: 'effectScatter',
              coordinateSystem: 'geo',
              rippleEffect: {
                brushType: 'stroke'
              },
              label: {
                emphasis: {
                  show: true,
                  position: 'right',
                  formatter: '{b}'
                }
              },
              symbolSize: 10,
              showEffectOn: 'render',
              zlevel: 2,
              itemStyle: {
                normal: {
                  color: '#9932CC'
                }
              },
              data: coldMed
            }
          ],
          legend: {
            type: "plain",
            show: true,
            orient: 'vertical',
            top: 'middle',
            left: 'left',
            data: [
              {
                name: "冷链仓储分布",
                icon: "circle",
                textStyle: {
                  color: "#a9d6fa"
                }
              },
              {
                name: "冷链运输车分布",
                icon: "circle",
                textStyle: {
                  color: "#a9d6fa"
                }
              },
              {
                name: "高风险食品安全分布",
                icon: "circle",
                textStyle: {
                  color: "#a9d6fa"
                }
              },
              {
                name: "药品安全分布",
                icon: "circle",
                textStyle: {
                  color: "#a9d6fa"
                }
              }
            ]
          },
          geo: {//引入贵州省的地图
            map: '吉林',
            label: {
              emphasis: {
                show: false
              }
            },
            roam: false,
            zoom: 1,
            itemStyle: {
              normal: {
                borderColor: '#919191',
                borderWidth:0.5,
                shadowOffsetX:1,
                shadowOffsetY:'',
                //shadowColor: 'rgba(0, 0, 0, 0.5)',  //阴影颜色
                //shadowBlur: 10,         //阴影模糊大小
              },
              emphasis: {
                areaColor: '#b3f3f3'
              }
            },
            regions: [//对不同的区块进行着色
              {
                name: '吉林市',
                itemStyle: {
                  normal: {

                  }
                },
                label:{
                  show:true,
                }
              }, {
                name: '长春市',
                itemStyle: {
                  normal: {

                  }
                },
                label:{
                  show:true,
                }
              }, {
                name: '松原市',
                itemStyle: {
                  normal: {

                  }
                },
                label:{
                  show:true,
                }
              }, {
                name: '大安市',
                itemStyle: {
                  normal: {

                  }
                },
                label:{
                  show:true,
                }
              }, {
                name: '白城市',
                itemStyle: {
                  normal: {

                  }
                },
                label:{
                  show:true,
                }
              }, {
                name: '四平市',
                itemStyle: {
                  normal: {

                  }
                },
                label:{
                  show:true,
                }
              }, {
                name: '辽源市',
                itemStyle: {
                  normal: {

                  }
                },
                label:{
                  show:true,
                }
              }, {
                name: '通化市',
                itemStyle: {
                  normal: {

                  }
                },
                label:{
                  show:true,
                }
              }, {
                name: '白山市',
                itemStyle: {
                  normal: {

                  }
                },
                label:{
                  show:true,
                }
              }, {
                name: '延边朝鲜族自治州',
                itemStyle: {
                  normal: {

                  }
                },
                label:{
                  show:true,
                }
              }
            ]
          }
        };
        myChart.setOption(option);
      }
    }
  }
</script>

<style scoped>
  .form-group{
    margin:10px;
  }
  .form-group>label{
    display: inline-block;
    width: 5rem;
    text-align: right;
  }
</style>
