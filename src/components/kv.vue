<template>
<div class="kv">
 
    <img src="../assets/kv-title.png" alt="" class="title">
</div>
</template>
<script>
export default {
  name: "kv"
}
</script>
<style lang="scss">
.kv {
   background:url("../assets/kv-bg.jpg");
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center top;
   @media screen and (max-width: $small) {
      background:url("../assets/kv-mob-bg.png"); 
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center top;
   }
  .bg{position:relative;top:0;z-index: 10;}
  .title{
    display:block;
    margin:0 auto;
    padding:150px 0 150px;
  @media screen and (max-width: $small) {
     width:250px;
     padding:20% 0 80%;
   }
  }
}
</style>
