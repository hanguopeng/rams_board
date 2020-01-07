<template>
  <el-container>
    <el-main>
      <div style="width:100%;height:853px">
      <el-form ref="form" :model="form" label-width="80px"  class="backImg" style="">
        <el-row>
          <el-col :span="6">
          <el-form-item label="" style="margin-top:400px;margin-left:250px;width:400px;" prop="username">
            <el-input v-model="form.username" placeholder="用户名"></el-input>
          </el-form-item>
          </el-col>
            <el-col :span="6">
          <el-form-item label="" style="margin-top:400px;margin-left:200px;width:400px;" prop="password">
            <el-input v-model="form.password" placeholder="******"></el-input>
          </el-form-item>
            </el-col>
        </el-row>
        <el-row>
      <el-form-item style="margin-left:-878px">
        <el-button type="primary" @click="onSubmit" style="background: #d43f3a" size="medium">登陆</el-button>
      </el-form-item>
        </el-row>
        <el-row  class="infoStyle">
          <el-col>
            <span>支持浏览器版本：支持IE10、Firefox等主流浏览器
            </span>
          </el-col>
          <el-col style="margin-top:10px;margin-left:50px;">
            <span>友情提示：请不要使用同一浏览器同时登录多个账号</span>
          </el-col>
        </el-row>
    </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'login',
    data(){
      return{
        userId:666,
        token:'',
        form:{
          username:'wangbowen',
          password:'123456',
        }
      }
    },
    methods:{
      onSubmit(){
        console.log(111111)
      this.$refs['form'].validate((valid)=> {
        if(valid){
          window.location.href="http://localhost:8080/rams_v3/worksheetReportManage.jsp?j_username="+ this.form.username+"&j_password=" +this.form.password + "&j_url=" + "vueFlag-home";
        }
      })
      }
  }
  }
</script>

<style scoped>
.el-main{
  width:100%;
  height: 100%;
  text-align:center;
  padding:0;
}
  .backImg{
    position: absolute;
    background-image:url("../../assets/login.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width:100%;
    height: 100%;
  }
  .infoStyle{
    font-size:12px;
    margin-left:-578px;
    color:#999
  }
</style>
