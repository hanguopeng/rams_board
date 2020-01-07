<template>
  <div>
  <el-row :gutter="3" style="margin-top: 2px;z-index: 20;margin-left:6px">
    <el-col style="width:188px;">
      <div class="grid-content bg-purple">
        <span class="el-dropdown-link title-font">
          首页
        </span>
      </div>
    </el-col>
    <el-col style="width:188px">
      <div class="grid-content bg-purple title-font" @mouseover="showItem('problemCharge')">
          <span class="el-dropdown-link title-font" style="width:auto">
            故障管控
          </span>
      </div>
    </el-col>
    <el-col style="width:188px">
      <div class="grid-content bg-purple title-font" @mouseover="showItem('sheetManage')">
          <span class="el-dropdown-link title-font" style="width:auto">
            工单管理
          </span>
      </div>
    </el-col>
    <el-col style="width:188px">
      <div class="grid-content bg-purple title-font" @mouseover="showItem('resourceCharge')">
          <span class="el-dropdown-link title-font" style="width:auto">
            资源支撑
          </span>
      </div>
    </el-col>
    <el-col style="width:188px">
      <div class="grid-content bg-purple title-font" @mouseover="showItem('businessStart')">
          <span class="el-dropdown-link title-font" style="width:auto">
            业务开通
          </span>
      </div>
    </el-col>
    <el-col style="width:188px">
      <div class="grid-content bg-purple title-font" @mouseover="showItem('dailyDefend')">
          <span class="el-dropdown-link title-font" style="width:auto">
            日常运维
          </span>
      </div>
    </el-col>
    <el-col style="width:188px">
      <div class="grid-content bg-purple title-font" @mouseover="showItem('analysis')">
          <span class="el-dropdown-link title-font" style="width:auto">
            综合分析
          </span>
      </div>
    </el-col>
    <el-col style="width:188px">
      <div class="grid-content bg-purple title-font" @mouseover="showItem('systemManage')">
          <span class="el-dropdown-link title-font" style="width:auto">
            系统管理
          </span>
      </div>
    </el-col>
  </el-row>
  <el-row style="position: relative;">
    <el-col style="width:188px">&nbsp</el-col>
    <el-col style="width:18%;position: absolute;top: 0;z-index: 9999;left: 12.8%;">
      <div @mouseleave="closeItem">
        <div class="title-font-color" v-if="problemChargeFlag"  style="background: black;opacity:0.7;">
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold"  @click="openWin('dm/faultaccepting.do?method=waitWorksheetList')">1.1 故障工单处理流程</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold"  @click="openWin('dm/checkReduce.do?method=wait')">1.2 故障工单核减流程</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold"  @click="openWin('board_index.jsp')">1.3 监控看板</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold"  @click="openWin('board_order.jsp')">1.4 工单监控</el-link></div>
          <div class="childItem" style="color: #fff;">1.5 资源配置：<el-link style="font-size: 15px;color: #FFFF00;font-weight: bold;"  @click="openWin('responsible/responsibleresource.do?method=responsibleResourceResult&flag=1  ')">&nbsp&nbsp&nbsp包机管理</el-link></div>
          <div style="margin-left: 140px;"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold;"  @click="openWin('dm/highIronBaseStation.do?method=hibsList')">设备网格管理</el-link></div>
          <div style="margin-left: 140px;"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold;"  @click="openWin('dm/directSendConfig.do?method=directSendConfigList')">高铁基站管理</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('main.jsp?id=27')">1.6 故障工单统计分析</el-link></div>
        </div>
      </div>
    </el-col>
    <el-col style="width:15%;position: absolute;top: 0;z-index: 9999;left: 25.1%;">
      <div @mouseleave="closeItem">
        <div class="title-font-color" v-if="sheetManageFlag"  style="background: black;opacity:0.7;">
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm/localCircuitCommon.do?method=prUndoWork')">2.1 本地电路流程</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm/circuitCommon.do?method=prUndoWork')">2.2 电路调度流程</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm/accountManagement.do?method=waitWorksheet')">2.3 账户管理流程</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm/ipaddress.do?method=waitList')">2.4 IP地址申请流程</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm/lists.do?method=prUndoWork')">2.5 局数据管理流程</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm/taskdispatch.do?method=waitWorksheet')">2.6 任务调度流程</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm/taskScheduling.do?method=taskWaitWorksheetList')">2.7 中台-任务调度</el-link></div>
        </div>
      </div>
    </el-col>
    <el-col style="width:15%;position: absolute;top: 0;z-index: 9999;left: 37.4%;">
      <div @mouseleave="closeItem">
        <div class="title-font-color" v-if="resourceChargeFlag"  style="background: black;opacity:0.7;">
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm/opticalcable.do?method=waitList')">3.1 光缆资源更新流程</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm/cutoverList.do?method=prUndoWork')">3.2 线路割接流程</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm/resourceAccessCommon.do?method=prUndoWork')">3.3 资源入网流程</el-link></div>
        </div>
      </div>
    </el-col>
    <el-col style="width:15%;position: absolute;top: 0;z-index: 9999;left: 49.7%;">
      <div @mouseleave="closeItem">
        <div class="title-font-color" v-if="businessStartFlag"  style="background: black;opacity:0.7;">
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm')">4.1 互联网专业业务开通流程</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('')">4.2 统计分析</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm')">4.3 自动开通监控</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm')">4.3 开通进展跟踪</el-link></div>
        </div>
      </div>
    </el-col>
    <el-col style="width:16%;position: absolute;top: 0;z-index: 9999;left: 62%;">
      <div @mouseleave="closeItem">
        <div class="title-font-color" v-if="dailyDefendFlag"  style="background: black;opacity:0.7;">
          <div class="childItem"><el-link style="font-size: 15px;color:#ffffff;font-weight: bold" @click="openWin('dm/onduty.do?method=onDutyList&dutyType=1020101')">5.1 值班管理：</el-link></div>
          <div style="margin-left: 50px;"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold;width:100px;"  @click="openWin('dm/onduty.do?method=onDutyList&dutyType=1020101')">部门值班管理
          </el-link><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold;float: left;width:100px"  @click="openWin('dm/onduty.do?method=onDutyList&dutyType=1020103')">角色值班管理</el-link></div>
          <div class="childItem" style="margin-left: 50px"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm/selectPatrolDutyAction.do?method=selectPatrolDutyOne')">专业值班巡检</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm/systemConfig.do?method=systemconfigSx')">5.2 工单语音督办管理（IVR）</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('main.jsp?id=32')">5.3 备品备件管理</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('main.jsp?id=38')">5.4 资源模板管理</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('main.jsp?id=34')">5.5 需求管理</el-link></div>
        </div>
      </div>
    </el-col>
    <el-col style="width:25%;margin-left: 60%;">

    </el-col>
    <el-col style="width:20%;position: absolute;top: 0;z-index: 9999;left: 1203px;">
      <div @mouseleave="closeItem">
        <div class="title-font-color" v-if="systemManageFlag"  style="background: black;opacity:0.7;">
          <div class="childItem" style="color: #fff;">1.1 辅助功能：<span style="color:yellow"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm/systemConfig.do?method=systemconfigSx')">&nbsp&nbsp&nbsp时限配置</el-link>
          </span><span style="color:yellow"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm/faultaccepting.do?method=messageTZ')">&nbsp&nbsp&nbsp&nbsp短信发送</el-link></span></div>
          <div style="margin-left: 40px;"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('msg/smsserviceBasicDataCfg.do')">消息发送管理</el-link>
            <el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('resourceUpdate.jsp')">&nbsp&nbsp&nbsp&nbsp测试资源接口</el-link></div>
          <div style="margin-left: 40px;"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm/SsistUser.do?method=ssistUserList')">省网管监控人员维护（报表使用）</el-link></div>
          <div class="childItem"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold">1.2 接口管理：</el-link></div>
          <div class="childItem" style="color: #fff;">1.5 组织管理：<span style="color:yellow">
            <el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('role/role.do')">&nbsp&nbsp&nbsp角色管理</el-link></span><span style="color:yellow">
            <el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('priv/tawSystemPrivAssigns.do?method=init')">&nbsp&nbsp&nbsp&nbsp权限管理</el-link></span></div>
          <div style="margin-left: 40px;">
            <el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dict/dictBasicDataCfg.do')">字典管理</el-link>
            <span style="color:yellow"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('sysuser/sysuserBasicDataCfg.do')">
            &nbsp&nbsp&nbsp&nbsp用户管理</el-link></span></div>
          <div style="margin-left: 40px;"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('area/areaBasicDataCfg.do')">地域管理</el-link><span style="color:yellow">
            <el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dept/deptBasicDataCfg.do')">&nbsp&nbsp&nbsp&nbsp部门管理</el-link></span></div>
          <div style="margin-left: 40px;"><el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('job/tawCommonsJobsorts.do')">调度管理</el-link><span style="color:yellow">
            <el-link style="font-size: 15px;color: #FFFF00;font-weight: bold" @click="openWin('dm/upload.do?method=uploadTZ')">&nbsp&nbsp&nbsp&nbsp人员批量导入</el-link></span></div>
        </div>
      </div>
    </el-col>
  </el-row>
  </div>
</template>

<script>
  export default {
    name: 'titleMenu',
    data () {
      return{
        problemChargeFlag: false,
        sheetManageFlag:false,
        resourceChargeFlag:false,
        businessStartFlag:false,
        dailyDefendFlag:false,
        analysisFlag:false,
        systemManageFlag:false,
      }
    },
    methods:{
      showItem(str)
      {
        this.problemChargeFlag = false;
        this.sheetManageFlag = false;
        this.resourceChargeFlag = false;
        this.businessStartFlag = false;
        this.dailyDefendFlag = false;
        this.analysisFlag = false;
        this.systemManageFlag = false;
        if(str==='problemCharge') {
          this.problemChargeFlag = true
        }
        if(str==='sheetManage') {
          this.sheetManageFlag = true
        }
        if(str==='resourceCharge') {
          this.resourceChargeFlag = true
        }
        if(str==='businessStart') {
          this.businessStartFlag = true;
        }
        if(str==='dailyDefend') {
          this.dailyDefendFlag = true;
        }
        if(str==='analysis') {
          this.analysisFlag = true;
        }
        if(str==='systemManage') {
          this.systemManageFlag = true;
        }
      },
      closeItem()
      {
        this.problemChargeFlag = false;
        this.sheetManageFlag = false;
        this.resourceChargeFlag = false;
        this.businessStartFlag = false;
        this.dailyDefendFlag = false;
        this.analysisFlag = false;
        this.systemManageFlag = false;
      },
      openWin(url){
        window.location.href= "http://localhost:8080/rams_v3/" + url;
      }
    }
  }
</script>

<style scoped>
  .grid-content {
    border-radius: 2px;
    min-height: 35px;
  }
  .bg-purple {
    background: rgb(213, 11, 38);
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
  .childItem{
    margin-left: 30px;
  }
</style>
