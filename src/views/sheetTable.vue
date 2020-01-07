<template>
  <div style="position:absolute;margin-left: 80px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);z-index: 999;margin-top: 325px;width:950px;height: 420px;background: rgba(255, 255, 237, 1)">
    <div style="position:relative;width:110px;height: 28px;background: rgb(213, 11, 38);;margin-left: 0;line-height: 28px;text-align: center;color: #fff;">待办工单&nbsp ({{sheetNum}})</div>
    <div style="position: relative;margin-left: 10px;margin-top:10px;width:950px;line-height: 20px;text-align: center;">
      <el-table :position="relative"
        :data="tableData"
        stripe="true"
        :header-cell-style="{background:'#333333',color:'#fff'}"
        :row-style="{color:'#000'}"
        height="360"
        border
        style="width: 98%">
        <el-table-column
          prop="date"
          label="序号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="sheetType"
          label="工单类型"
          width="120">
        </el-table-column>
        <el-table-column
          prop="sheetNo"
          label="工单流水号"
          width="230">
        </el-table-column>
        <el-table-column
          prop="sheetTitle"
          label="工单主题"
          width="295">
        </el-table-column>
        <el-table-column
          prop="userOfPart"
          label="建单人及其所属部门"
          width="95">
        </el-table-column>
        <el-table-column
          prop="sendTime"
          label="派发时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="sheetStatus"
          label="工单环节"
          width="80">
        </el-table-column>
        <el-table-column
          prop="checkTime"
          width="80"
          label="剩余处理时间">
        </el-table-column>
      </el-table>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sheetNum:20 ,
        tableData: [{
          date: '1',
          sheetType: '故障工单流程',
          sheetNo:'SH-TW-ydwfw-1911114-2333300',
          sheetTitle:'中兴:1215经济干部学院---1231',
          userOfPart: '网管中心',
          sendTime: '2019-12-26 22:22:22',
          sheetStatus: '已返单',
          checkTime: '23分',
        }, {
          date: '2',
          sheetType: '故障工单流程',
          sheetNo:'SH-TW-ydwfw-1911114-2333300',
          sheetTitle:'中兴:1215经济干部学院---1231',
          userOfPart: '网管中心',
          sendTime: '2019-12-26 22:22:22',
          sheetStatus: '已返单',
          checkTime: '23分',
        },{
          date: '3',
          sheetType: '故障工单流程',
          sheetNo:'SH-TW-ydwfw-1911114-2333300',
          sheetTitle:'中兴:1215经济干部学院---1231',
          userOfPart: '网管中心',
          sendTime: '2019-12-26 22:22:22',
          sheetStatus: '已返单',
          checkTime: '23分',
        },{
          date: '4',
          sheetType: '故障工单流程',
          sheetNo:'SH-TW-ydwfw-1911114-2333300',
          sheetTitle:'中兴:1215经济干部学院---1231',
          userOfPart: '网管中心',
          sendTime: '2019-12-26 22:22:22',
          sheetStatus: '已返单',
          checkTime: '23分',
        },{
          date: '5',
          sheetType: '故障工单流程',
          sheetNo:'SH-TW-ydwfw-1911114-2333300',
          sheetTitle:'中兴:1215经济干部学院---1231',
          userOfPart: '网管中心',
          sendTime: '2019-12-26 22:22:22',
          sheetStatus: '已返单',
          checkTime: '23分',
        },{
          date: '6',
          sheetType: '故障工单流程',
          sheetNo:'SH-TW-ydwfw-1911114-2333300',
          sheetTitle:'中兴:1215经济干部学院---1231',
          userOfPart: '网管中心',
          sendTime: '2019-12-26 22:22:22',
          sheetStatus: '已返单',
          checkTime: '23分',
        },{
          date: '7',
          sheetType: '故障工单流程',
          sheetNo:'SH-TW-ydwfw-1911114-2333300',
          sheetTitle:'中兴:1215经济干部学院---1231',
          userOfPart: '网管中心',
          sendTime: '2019-12-26 22:22:22',
          sheetStatus: '已返单',
          checkTime: '23分',
        },{
          date: '8',
          sheetType: '故障工单流程',
          sheetNo:'SH-TW-ydwfw-1911114-2333300',
          sheetTitle:'中兴:1215经济干部学院---1231',
          userOfPart: '网管中心',
          sendTime: '2019-12-26 22:22:22',
          sheetStatus: '已返单',
          checkTime: '23分',
        }]
      }
    }
  }
</script>

<style scoped>

</style>
