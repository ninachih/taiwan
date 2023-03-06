<template>
  <div id="count1">
    <goTop/>
    <div class="content">
      <div class="container">
        <h2>保單試算</h2>
      </div>  
    </div>
  </div>
</template>
<script>
import goTop from "@/components/gotop.vue";
export default {
  name: "count1",
  components:{
    goTop,
  }
};
</script>
<style lang="scss">
#count1{
   .content{
    padding-top:100px;
   }
}

</style>