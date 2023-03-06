<template>
  <section id="linePay">
    <img src="../assets/linepay-clock.svg" alt="" class="clock" />
    <img src="../assets/linepay-paper.svg" alt="" class="paper" />
    <div class="container">
      <div class="left">
        <img src="../assets/linepay-cabinet.svg" alt="" />
        <h2>新安產險小教室-產險知識通</h2>
        <p class="text">答題完成可以獲得<span>立即抽</span>抽獎資格</p>
        <router-link to="/knowledge" class="btnLogin" onclick="dos.beaconSend(4,2,1,7,'','好禮三重抽','產險知識通_前往挑戰','活動首頁')"
          >登入挑戰</router-link
        >
      </div>
      <div class="right"><img src="../assets/linepay.svg" alt="" /></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Linepay",
};
</script>
<style lang="scss">
#linePay {
  background-image: url("../assets/linepay-bg.svg");
  background-repeat: no-repeat;
  background-color: #fee566;
  overflow: hidden;
  position: relative;
  padding: 0;
  @media screen and (max-width: $small) {
    text-align: center;    
  }
  .clock,
  .paper {
    position: absolute;
    @media screen and (max-width: 1500px) {
      display: none;
    }
  }
  .clock {
    left: 5%;
    top: 3%;
  }
  .paper {
    right: 2%;
    top: 3%;
  }
  .container {
    padding: 20px 0;
    @media screen and (max-width: $medium) {
      padding: 5% 3%;
    }
  }
  h2 {
    font-size: 40px;
    color: $mainBlue;
    font-weight: bolder;
    float: left;
    @media screen and (max-width: $small) {
      font-size:25px;
      float:none;
      margin:10px 0;
    }
  }
  .left {
    padding: 6% 0;
    overflow: hidden;
    img {
      position: absolute;
      left: -25px;
      bottom: 0;
      @media screen and (max-width: 1350px) {
        display: none;
      }
    }
  }
  .text {
    text-align: left;
    span {
      color: $mainBlue;
    }
  }
  .btnLogin {
    padding: 5px 40px;
    color: #fff;
    background: $pink;
    border-radius: 20px;
    margin: 25px 0;
    display: inline-block;
    @media screen and (max-width: $small) {
      margin:0 auto;
      
    }
  
  }
  @media screen and (max-width: $small) {
    .right{float:none;
      img{width:80%;display: block;margin:0 auto;}
    }
  }
}
</style>
