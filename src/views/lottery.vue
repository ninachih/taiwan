<template>
  <section id="slot">
    <div id="top">
      <div class="topTresure">
        <div class="container">
          <div class="inner" @click="showUnder"></div>
        </div>
      </div>
    </div>
    <div id="bottom">
      <div id="underTresure">
         <img src="../assets/slot-boy.svg" alt="" class="slotBoy">
        <h2>
          <img
            src="../assets/slot-title.svg"
            alt="網路投保好禮四重抽
          豪禮大放送"
          />
        </h2>
        <div class="container">
         
          <div class="tresure tresure1" @click="lotteryEntry" @touchstart.prevent="handleTouchStart"></div>
          <div class="tresure tresure2" @click="lotteryEntry" @touchstart.prevent="handleTouchStart"></div>
          <div class="tresure tresure3" @click="lotteryEntry" @touchstart.prevent="handleTouchStart"></div>
          <img src="../assets/slot-table.svg" alt="" class="table">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import Swal from 'sweetalert2';
import _ from 'lodash';
export default {
  name: "lottery",
  data(){
    return{
      hovered:false
    }
  },
  methods: {
    showUnder() {
      $("#top").fadeOut();
      $("#underTresure").show();
    },
    lotteryEntry: _.debounce(function () {
      //('computer touch!')
      var self = this;
      const axios = require('axios').default;
      var userData = JSON.parse(sessionStorage.getItem('jwtInfo'));
      var token = userData.token;
      axios.get(Common.Config.Api.Activity.lottery, {
        headers: { "Authorization": token }
      }).then((response) => {
        if (response.data.code == 200) {
          if(response.data.data.whetherWinLottery == 'Y'){
            Swal.fire({
              title: response.data.data.prizeName,
              html:
              '<p class="prizeIntro">' + response.data.data.prizeInstruction +'</p>'+
              '<a href="'+ response.data.data.prizeLink +' " target="_blank">' + response.data.data.prizeLink +'</a>'+
              '<p>開啟密碼 : ' + response.data.data.prizeCode +'</p>'+
              '<p>'+ response.data.data.prizeDescription +'</p>',
              imageUrl:response.data.data.prizeImageLink,
              confirmButtonText: "關閉",
              customClass: {
                container: "lotterySuccess",
              },
            })
          }else{
            Swal.fire({
              title: response.data.data.prizeName,
              html:
              '<p>'+ response.data.data.prizeDescription +'</p>',
              imageUrl:response.data.data.prizeImageLink,
              confirmButtonText: "關閉",
              customClass: {
                container: "lotterySuccess",
              },
            })
          }
          
        }
        else if (response.data.code == 404) {
          Swal.fire({
            title: "很可惜~",
            text: "未中獎",
            confirmButtonText: "關閉",
            customClass: {
              container: "lotteryFail",
            },
          })
        }
        else if (response.data.code == 400) {
          Swal.fire({
            title: "謝謝您的參加",
            text: response.data.message,
            confirmButtonText: "關閉",
            customClass: {
              container: "lotteryFail",
            },
          }).then(
            function () {
              // window.location.href="#/search"
              self.$router.push('/');
            },
          );
        }
      });
    }, 500),
    handleTouchStart:_.debounce(function (){ //手機及移動裝置點擊一次觸發
      var self = this;
      const axios = require('axios').default;
      var userData = JSON.parse(sessionStorage.getItem('jwtInfo'));
      var token = userData.token;
      axios.get(Common.Config.Api.Activity.lottery, {
        headers: { "Authorization": token }
      }).then((response) => {
        if (response.data.code == 200) {
          if(response.data.data.whetherWinLottery == 'Y'){
            Swal.fire({
              title: response.data.data.prizeName,
              html:
              '<p class="prizeIntro">' + response.data.data.prizeInstruction +'</p>'+
              '<a href="'+ response.data.data.prizeLink +' " target="_blank">' + response.data.data.prizeLink +'</a>'+
              '<p>開啟密碼 : ' + response.data.data.prizeCode +'</p>'+
              '<p>'+ response.data.data.prizeDescription +'</p>',
              imageUrl:response.data.data.prizeImageLink,
              confirmButtonText: "關閉",
              customClass: {
                container: "lotterySuccess",
              },
            })
          }else{
            Swal.fire({
              title: response.data.data.prizeName,
              html:
              '<p>'+ response.data.data.prizeDescription +'</p>',
              imageUrl:response.data.data.prizeImageLink,
              confirmButtonText: "關閉",
              customClass: {
                container: "lotterySuccess",
              },
            })
          }
          
        }
        else if (response.data.code == 404) {
          Swal.fire({
            title: "很可惜~",
            text: "未中獎",
            confirmButtonText: "關閉",
            customClass: {
              container: "lotteryFail",
            },
          })
        }
        else if (response.data.code == 400) {
          Swal.fire({
            title: "謝謝您的參加",
            text: response.data.message,
            confirmButtonText: "關閉",
            customClass: {
              container: "lotteryFail",
            },
          }).then(
            function () {
              // window.location.href="#/search"
              self.$router.push('/');
            },
          );
        }
      });
    },500)

  },
};
</script>

<style lang="scss">
#slot {
  padding: 0;
}
#top {
  background-image: url("../assets/tip.svg");
  background-position: center top;
  background-size: 1920px;
  min-height: 88vh;
  background-color: #72917a;
  @media screen and (max-width: 1280px) {
    min-height: 115vh;
  }
    @media screen and (max-width: $pad) {
     background-image: url("../assets/tipM.png");
     background-size:cover;
     min-height: 90vh;
    }
    @media screen and (max-width: $small) {
      min-height: 70vh;
    }
    
  .container {
    position: relative;
    width: 790px;
    top: 250px;
    @media screen and (max-width: $padLandscape) {  
      width:100%;
    }
    @media screen and (max-width: $small) {
      top:0
    }
   .inner {
    position: absolute;
    z-index: 95;
    left:0;
    width: 100%;
    height: 45vh;
    cursor: pointer;
    top: 100px;
}
  }
  
  .tip {
    width: 950px;
    margin: 0 auto;
    display: block;
    padding-top: 237px;
    position: relative;
    z-index: 90;
   
     @media screen and (max-width: $padLandscape) {
      display:none
    }
   
  }
  .tipM{
    display:none;
     position: relative;
    z-index: 90;
      margin: 0 auto;
     padding-top:57%;
    @media screen and (max-width: 1000px) {
      display:block;
      width:88%;
    }
  }

}
#underTresure {
  display: none;
  background-image: url("../assets/slot-bg-1.svg");
  background-position: center top;
  background-size: 1920px;
  background-color: #231c1e;
  position:relative;
  background-repeat: no-repeat;
  overflow: hidden;
  @media screen and (max-width: $padLandscape) {
      background-size: cover;
      background-image: url("../assets/slot-bg-1-m.png");

  }
  @media screen and (max-width: $pad) {
    min-height:80vh

  }
  @media screen and (max-width: $small) {
        min-height:70vh
  }
  .slotBoy{
      position: absolute;
      bottom:0;
      left:0;
      z-index: 96;
      width: 400px;
      @media screen and (max-width: 1600px) {
        width:280px;
      }
      @media screen and (max-width: $medium) {
        width:180px;
        left:1%;
      }
       @media screen and (max-width: $small) {
        width:32%;
      }
      @media screen and (max-width: $iphone678) {
        width:28%;
      }
     
    }
  h2 {
    padding-top: 100px;
    text-align: center;
    background:url("../assets/slot-bg-wood.svg");
    background-repeat: no-repeat;
    background-position: center top 100px;
    min-height:407px;
  @media screen and (max-width: $padLandscape) {
    background-size:70%;
  }
  @media screen and (max-width: $pad) {
    min-height:55vh;
    background-image:url("../assets/slot-bg-wood.svg");
    background-position: center top 120px;
  }
   @media screen and (max-width: $small) {
    min-height:30vh;
    background-position: center top 112px;
    background-size:80%;
    padding-top: 135px;
  }
    img {
      display: inline-block;
      margin: 0 auto;
      padding:35px 0;
      @media screen and (max-width: $padLandscape) {
      width:50%;
      padding:5% 0;
      }
      @media screen and (max-width: $pad) {
        padding:8% 0;
      }
      @media screen and (max-width: $small) {
        padding:0;
         width:60%;
      }
    }
  }
  .container {
    position: relative;
    @media screen and (max-width: $pad) {
       position:absolute;
       bottom:0;
       padding:0;
    }
    @media screen and (max-width: $small) {
    bottom:10%
  }
   
  @media screen and (max-width: $iphone678) {
    bottom:0;
  }
  @media (max-width: $iphone678)and(min-height: 812px) {
    bottom:10%
    }
  
    .tresure {
      position: absolute;
      z-index: 90;
      width:300px;
      height: 300px;
      cursor: pointer;
      background-image: url("../assets/hat-close.svg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center bottom;
      @media screen and (max-width: $padLandscape) {
        width:170px;
        height:170px;
  
      }
      @media screen and (max-width: $small) {
        width:100px;
        height:100px;
      }
      &:hover{
        background-image: url("../assets/hat-open.svg");
      }
      &.open{
        background-image: url("../assets/hat-open.svg");
      }
      &.tresure1 {
        left: 90px;
        top:-220px;
        @media screen and (max-width: $padLandscape) {
          top:-110px;
          left:12%;
        }
        @media screen and (max-width: $small) {
          top:-70px;
          left:8%;
        }
        
      }
      &.tresure2 {
        left: 50%;
        margin-left:-140px;
        top: -70px;
        @media screen and (max-width: $padLandscape) {
        width:200px;
        height:200px;
        margin-left:-100px;
        }
        @media screen and (max-width: $padMini) {
          top:-20%
        }
        @media screen and (max-width: $small) {
          width:120px;
          height:120px;
          margin-left:-60px;
        }
     
      }
      &.tresure3 {
        right:70px;
        top: -220px;
        @media screen and (max-width: $padLandscape) {
          top:-110px;
          right:10%
        }
        @media screen and (max-width: $small) {
          top:-70px;
          right:5%;
        }
      }
      
    }
    .table{
      display: block;margin:0 auto;width: 100%;
      @media screen and (max-width: $small) {
        width: 110%;
        margin-left: -5%;
      }

    }
  }
}
.lotteryFail{
  .swal2-show {
    &::before {
      content: url("../assets/pop-treasure02.svg");
      margin: -60px auto 0;
    }
  }
  .swal2-html-container{
    color:$blue;
    font-weight:bold;
    font-size:25px;
  }
  .swal2-popup{
    width:25em;
    border-radius:20px;
  }
}
.lotterySuccess{
  .swal2-image{ margin: -120px auto 0;}
  .swal2-html-container{
    color:#2D2D2D;
    text-align:left;
    p{font-size:18px;
      &.prizeIntro{
        font-weight:bold;
      }
    }
    a{font-size:18px;color:#2D2D2D;word-break: break-all;text-decoration: underline;text-align: left;}
  }
  .swal2-title{
    color:$blue;
  }
  .swal2-popup{
    width:25em;
    border-radius:20px;
  }
}
</style>
