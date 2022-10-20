<template>
  <div id="goods">
    <div id="goodcon"
     v-for="i in 20" 
     :key="i">
      <Good></Good>
    </div>
  </div>
</template>

<script>
import Good from "@/components/Good.vue";
export default {
  data() {
    return {
      url: "",
    };
  },
  components: { Good },
};
</script>

<style scoped>
    #goods{
        width: 100%;
        /* height: ;    */
        display: flex;
        /* flex-direction: column; */
        flex-wrap: wrap; 
    }
    #goodcon{
        width: 33.33%;
        /* height: 100%; */
        /* flex: 1; */
        
    }
    
</style>