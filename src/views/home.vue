<template>
  <el-container>
    <el-header style="width: 101.2%;">
      <div><el-image :src="src" class="icon-pic"></el-image></div>
      <span class="title">吉林联通网运生产调度平台</span>
      <div><el-image :src="alertSrc" class="new-alert"  style="width: 28px;height: 28px;"></el-image></div>
      <div class="userInfo"><span>{{msg}}</span></div>
    </el-header>
    <title-menu></title-menu>
    <el-aside width="5.5%" style="background: #fff;margin-left:10px;position: absolute;margin-top: 110px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);z-index: 999" >
      <left-broadside-menu></left-broadside-menu>
    </el-aside>
    <el-container style="position: relative;margin-top: -56px;width:1450px;height:765px;">
      <el-main style="background: #fff">
        <index-charts></index-charts>
        <sheet-table></sheet-table>
        <info-board></info-board>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import TitleMenu from '../components/titleMenu'
  import leftBroadsideMenu from '../components/leftBroadsideMenu'
  import indexCharts from '../views/indexCharts'
  import SheetTable from './sheetTable'
  import Index from 'element-ui/src/utils/popup'
  import InfoBoard from './infoBoard'
  export default {
    name: "home",
    components: {
      InfoBoard,
      Index,
      SheetTable,
      leftBroadsideMenu,
      TitleMenu,
      indexCharts
    },
    data() {
      return {
        src: require('@/assets/img/u4.png'),    //联通图标
        alertSrc: require('@/assets/img/u102.png'),   //新工单提醒图标
        msg:'哈库呐玛塔塔'
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  .el-col {
    border-radius: 1px;
  }

  .bg-purple {
    background: rgb(213, 11, 38);
  }
  .bg-purple-light {
    background: #e5e9f2;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-header, .el-footer {
    background-color: rgb(213, 11, 38);
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 870px;
  }

  body > .el-container {
    padding: 0;
    margin: 0;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 20px;
  }
  .title{
    position: absolute;
    left: 80px;
    top: 2px;
    font-size: 22px;
    color: #fff;
    font-weight: bolder;
  }
  .icon-pic{
    width: 45px;
    height: 40px;
    position: absolute;
    left: 24px;
    top: 12px;
  }
  .new-alert{
    position: absolute;
    right:204px;
    width: 33px;
    height: 33px;
    top:12px;
  }
  .userInfo{
    position: absolute;
    right:74px;
    font-size: 18px;
    color: #fff;
  }
  .title-font{
    line-height: 35px;
    font-size: 16px;
    color: #fff;
  }
  .title-font-color{
    color:yellow;
    line-height: 35px;
    font-size: 15px;
    text-align: left;
    font-weight: bolder;
  }
  .menu-hover{
    width: 192px;
    background-color: #000;
    filter:alpha(opacity=10);
    /* CSS3 standard */
    opacity:0.1
  }
  .childItem{
    margin-left: 30px;
  }

</style>
