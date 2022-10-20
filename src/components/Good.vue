<template>
  <div id="good">
    <div id="box">
      
        <img v-lazy="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name:"Good",
    data(){
        return {
          item:"https://img2.baidu.com/it/u=2032441110,532981321&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666285200&t=c647b9b46577899d1f47dbfda70235d0",
          
        }
    }
}
</script>

<style scoped>
#good{
  width: 100%;
  background-color: pink;
}

img {
  width:100%;
  /* width: 33.33%; */
  height: 370px;
}
</style>