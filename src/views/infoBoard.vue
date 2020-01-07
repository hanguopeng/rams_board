<template>
    <div style="width:425px;height:721px;background: #fff;position:absolute;margin-left: 1045px;margin-top: 30px">
      <div style="position:relative;width:435px;height:245px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);background: rgba(255, 255, 237, 1);margin-top:-20px">
        <div style="width:110px;height: 28px;background: rgb(213, 11, 38);margin-left: 0;margin-top: 20px;line-height: 28px;text-align: center;color: #fff;">公告信息</div>
        <div style="line-height: 28px;background: #fff;height: 28px;width: 100%;margin-top:20px;font-size: 15px">
          <div style="margin-left:10px;text-align: left;border-bottom: #EBEEF5 solid 1px;width: 410px;color: #606266;margin-bottom: 5px" v-for="(item,i) in list">【{{item.type}}】 {{item.title}}<div style="display: inline-block;margin-left:100px">{{item.reportTime}}</div></div>
          <div style="float: right;margin-right: 10px"><a>more</a></div>
        </div>

      </div>
      <div style="width:435px;height:200px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);background: rgba(255, 255, 237, 1);margin-top:-20px">
        <div style="width:110px;height: 28px;background: rgb(213, 11, 38);margin-left: 0;margin-top: 30px;line-height: 28px;text-align: center;color: #fff;">移动端下载</div>
        <div style="line-height: 28px;background: #fff;height: 150px;width: 100%;margin-top:20px;font-size: 15px;">
          <div  style="width:100px;height:100px;float:left;margin-left: 60px;">
            <el-image :src="androidImg"></el-image>
            <div>安卓版本</div>
          </div>
          <div style="width:100px;height:100px;margin-left: 80px;float:left">
            <el-image :src="androidImg" ></el-image>
            <div>IOS版本</div>
          </div>
        </div>

      </div>
      <div style="width:435px;height:250px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);background: rgba(255, 255, 237, 1);margin-top:-10px">
        <div style="width:110px;height: 28px;background: rgb(213, 11, 38);margin-left: 0;margin-top: 20px;line-height: 28px;text-align: center;color: #fff;">系统帮助</div>
        <div style="line-height: 28px;background: #fff;height: 28px;width: 100%;margin-top:20px;font-size: 15px">
          <div style="margin-left:10px;text-align: left;border-bottom: #EBEEF5 solid 1px;width: 410px;color: #606266;margin-bottom: 5px" v-for="(item,i) in list">【{{item.type}}】 {{item.title}}<div style="display: inline-block;margin-left:100px">{{item.reportTime}}</div></div>
          <div style="float: right;margin-right: 10px"><a>more</a></div>
        </div>

      </div>
    </div>
</template>

<script>
  export default {
    name: 'infoBoard',
    data() {
      return {
        androidImg:require('../assets/img/u68.png'),
        list:[{
          type: '重要通知',
          title:'关于代办工单的公告',
          reportTime: '4月28日'
        },
          {
            type: '系统消息',
            title:'关于代办工单的公告',
            reportTime: '4月28日'
          },
          {
            type: '重大新闻',
            title:'关于代办工单的公告',
            reportTime: '4月28日'
          },
          {
            type: '升级通知',
            title:'关于代办工单的公告',
            reportTime: '4月28日'
          },
          {
            type: '升级通知',
            title:'关于代办工单的公告',
            reportTime: '4月28日'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
