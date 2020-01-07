<template>
    <div>
      <el-button type="info" @click="emitTest">测试</el-button>
    </div>
</template>

<script>
  export default {
    name: 'testChild',
    data() {
      return {
        msg:{
          name:"大壮",
          age:18,
          sex:"男"
        }
      }
    },
    methods:{
      emitTest() {
        this.$emit('parentFunc',this.msg)
      }
    }
  }
</script>

<style scoped>

</style>
