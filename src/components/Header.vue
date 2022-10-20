<template>
  <div id="header">
    <div id="nav">
      <span >
        <el-button
          ref="btn"
          @click="drawer = true"
          type="primary"
          style="margin-left: 16px"
        >
          我的
        </el-button>
      </span>
      <span id="title">今日好物</span>
      <span id="last">搜索</span>
      <el-drawer
  title="我是标题"
  :visible.sync="drawer"
  :before-close="handleClose">
  <span>我来啦!</span>
</el-drawer>
    </div>
    
  </div>
</template>

<script>
export default {
    data(){
        return {
            drawer: false,

        }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }

    },
    mounted(){
        console.log(this.$refs)
        let btn = this.$refs.btn;
        // console.log(btn1);
        // console.log(btn.className)
    
    }

};
</script>

<style scoped>
#header {
  width: 100%;
  height: 46px;
  background-color: rgb(69, 69, 217);
}
#nav {
  width: 100%;
  height: 100%;
  position: relative;
}
span {
  position: absolute;
  display: block;
  font-size: 16px;
  color: white;
  line-height: 46px;
}
#title {
  float: left;
  left: 45%;
  /* margin: 0 auto; */
  line-height: 46px;
  text-align: center;
}
span:first-child {
  left: 5px;
}
#last {
  right: 5px;
}
</style>