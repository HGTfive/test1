<template>
  <div id="footer">
    <div id="nav">
        <div>首页</div>
        <div>今日推荐</div>
        <div>社团</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#footer{
    width: 100%;
    height: 44px;
}
#nav{
    width:100%;
    height: 100%;
    background-color: #f6f6f6;
    color: black;
    font-size: 16px;
    display: flex;
}
#nav div {
    text-align: center;
    line-height: 44px;
    flex: 1;
}
</style>