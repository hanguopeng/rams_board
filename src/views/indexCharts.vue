<template>
  <div style="position:absolute;margin-left: 80px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);z-index: 999;margin-top: 30px;width:950px;height: 280px;background: rgba(255, 255, 237, 1)">
    <div style="position:relative;width:110px;height: 28px;background: rgb(213, 11, 38);;margin-left: 0;line-height: 28px;text-align: center;color: #fff;">工单汇总</div>
    <div id="myChart" style="position: absolute;margin-left: 20px;width:950px;height:250px;z-index: 20;margin-top: -10px">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      this.drawLine();
    },
    methods: {
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        let  colors = ['#5793f3', '#d14a61', '#675bba'];
        let option = {
          color: colors,

          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          grid: {
            right: '20%'
          },
          legend: {
            data:['归档','未归档','归档率']
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {interval:0,rotate:30 },
              data: ['故障工单流程','互联网专线业务','本地电路流程','电路调度流程','账户管理流程','IP地址申请流程','局数据管理流程','任务调度流程',
                '线路割接流程','故障工单疏通流程','光缆资源更新流程','中台-任务调度','资源入网流程']
            },
          ],
          yAxis: [
            {
              type: 'value',
              name: '归档',
              min: 0,
              max: 250,
              position: 'right',
              axisLine: {
                lineStyle: {
                  color: colors[0]
                }
              },
              axisLabel: {
                formatter: '{value} '
              }
            },
            {
              type: 'value',
              name: '未归档',
              min: 0,
              max: 250,
              position: 'right',
              offset: 80,
              axisLine: {
                lineStyle: {
                  color: colors[1]
                }
              },
              axisLabel: {
                formatter: '{value} '
              }
            },
            {
              type: 'value',
              name: '归档率',
              min: 0,
              max: 100,
              position: 'left',
              axisLine: {
                lineStyle: {
                  color: colors[2]
                }
              },
              axisLabel: {
                formatter: '{value} %'
              }
            }
          ],
          series: [
            {
              name:'归档',
              type:'bar',
              barGap: '0%',
              data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,5.6]
            },
            {
              name:'未归档',
              type:'bar',
              yAxisIndex: 1,
              data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,67]
            },
            {
              name:'归档率',
              type:'line',
              yAxisIndex: 2,
              data:[12,25,36,46,54,78,95,14,76,16,23,61,48,92]
            }
          ]
        };
        // 绘制图表
        myChart.setOption(option);
      }
    }
  }
</script>

<style scoped>

</style>
