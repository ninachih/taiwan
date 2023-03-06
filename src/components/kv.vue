<template>
<div class="kv">

    <img src="../assets/kvTxt.svg" alt="" class="title">
</div>
</template>
<script>
export default {
  name: "kv"
}
</script>
<style lang="scss">
.kv {
   background:url("../assets/KV.svg");
   background-color:#cceff2;
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center top;
   margin-top:95px;
   text-align:center;
   @media screen and (max-width: $small) {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center top;
   }
  .bg{position:relative;top:0;z-index: 10;}
  .title{
    display:inline-block;
    margin:0 auto;
    padding:3% 0 16%;

  @media screen and (max-width: $small) {
     width:250px;
     padding:20% 0 80%;
   }
  }
}
</style>
