<template>
    <div  >
      <div style="margin-top: 20px;display: block;">
        <el-image :src="itemImg" class="leftBroradsideMenuImgStyle"></el-image>
      </div>
      <div  style="margin-top: 20px;">
        <el-image :src="networkAdjustImg" class="leftBroradsideMenuImgStyle"></el-image>
        <div class="leftBroradsideMenuDivStyle">网调一期</div>
      </div>
      <div style="margin-top: 20px;">
        <el-image :src="problenmSheetImg" class="leftBroradsideMenuImgStyle"></el-image>
        <div class="leftBroradsideMenuDivStyle">故障工单</div>
      </div>
      <div style="margin-top: 20px;">
        <el-image :src="sheetManageImg" class="leftBroradsideMenuImgStyle"></el-image>
        <div class="leftBroradsideMenuDivStyle">工单管理</div>
      </div>
      <div style="margin-top: 20px;">
        <el-image :src="workOrderManageImg" class="leftBroradsideMenuImgStyle"></el-image>
        <div class="leftBroradsideMenuDivStyle">包机管理</div>
      </div>
      <div style="margin-top: 20px;">
        <el-image :src="monitoringBoardImg" class="leftBroradsideMenuImgStyle"></el-image>
        <div class="leftBroradsideMenuDivStyle">监控看板</div>
      </div>
      <div style="margin-top: 20px;margin-bottom: 50px;">
        <el-image :src="analysisImg" class="leftBroradsideMenuImgStyle"></el-image>
        <div class="leftBroradsideMenuDivStyle">统计分析</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'leftBroadsideMenu',
    data() {
      return {
        itemImg: require('@/assets/img/u90.png'),
        networkAdjustImg: require('@/assets/img/u80.png'),
        problenmSheetImg: require('@/assets/img/u88.png'),
        sheetManageImg: require('@/assets/img/u82.png'),
        workOrderManageImg: require('@/assets/img/u86.png'),
        monitoringBoardImg: require('@/assets/img/u84.png'),
        analysisImg: require('@/assets/img/u151.png'),
      }
    }
  }
</script>

<style scoped>
  .leftBroradsideMenuDivStyle{
    line-height: 28px;
    width:83px;
    font-size: 15px;
    text-align: center;
    margin-top: 8px
  }
  .leftBroradsideMenuImgStyle{
    display: block;
    width:32px;
    height: 32px;
    margin-left: 25px
  }
</style>
