<template>
  <section id="learning">
    <div class="container">
      <ul id="learnArea">
        <li class="frame" v-for="item in learnData">
          <h2 class="title">
            {{ item.title }} <img :src="item.titleImg" alt="" />
          </h2>
          <h3>網路投保</h3>
          <div v-html="item.text" class="textArea"></div>
          <a :href="item.link1" class="btn" target="_blank" :onclick="item.clickFunc1">立即投保</a>
          <a :href="item.link2" class="btn" target="_blank" :onclick="item.clickFunc2">了解更多</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Learning",
  data() {
    return {
      learnData: [
        {
          title: "汽車險",
          titleImg: require("../assets/icon-car-white.svg"),
          text: '<p class="text">強制險現省<span>330</span>元</p><p class="text">任意險享<span>82折</span>優惠</p><p class="text">&emsp;</p>',
          link1:
            "https://www.tmnewa.com.tw/b2c_v2/insurancecarweb/frontstage/calculate.aspx?InsCategory=Car&Project",
          link2: "https://www.tmnewa.com.tw/b2c_v2/contents/car.html",

          clickFunc1:"dos.beaconSend(4,2,1,7,'','好禮三重抽','汽車險_立即投保','活動首頁')",
          clickFunc2:"dos.beaconSend(4,2,1,7,'','好禮三重抽','汽車險_了解更多','活動首頁')",
        },
        {
          title: "機車險",
          titleImg: require("../assets/icon-motor-white.svg"),
          text: '<p class="text">強制險</p><p class="text">一年期現省<span>145</span>元  兩年期現省<span>215</span>元</p><p class="text">任意險享<span>82折</span>優惠</p>',
          link1:
            "https://www.tmnewa.com.tw/b2c_v2/insurancecarweb/frontstage/calculate.aspx?InsCategory=Motorcycle",
          link2: "https://www.tmnewa.com.tw/b2c_v2/contents/motor.html",
          clickFunc1:"dos.beaconSend(4,2,1,7,'','好禮三重抽','機車險_立即投保','活動首頁')",
          clickFunc2:"dos.beaconSend(4,2,1,7,'','好禮三重抽','機車險_了解更多','活動首頁')",
        },
        {
          title: "旅平險",
          titleImg: require("../assets/icon-travel-white.svg"),
          text: '<p class="text">國旅出發一小時前都來得及!</p><p class="text">一天只要<span>36</span>元起！</p><p class="text">&emsp;</p>',
          link1: "https://b2c.tmnewa.com.tw/portal/insurance/travel/index",
          link2: "https://b2c.tmnewa.com.tw/portal/insurance/travel/taiwan/",
          clickFunc1:"dos.beaconSend(4,2,1,7,'','好禮三重抽','旅平險_立即投保','活動首頁')",
          clickFunc2:"dos.beaconSend(4,2,1,7,'','好禮三重抽','旅平險_了解更多','活動首頁')",
        },
        {
          title: "住火險",
          titleImg: require("../assets/icon-house-white.svg"),
          text: '<p class="text">住火險享<span>84折</span>優惠</p><p class="text">&emsp;</p><p class="text">&emsp;</p>',
          link1:
            "https://www.tmnewa.com.tw/b2c_v2/insurancefirweb/frontstage/house-build.aspx?InsCategory=House&Project",
          link2: "https://www.tmnewa.com.tw/b2c_v2/contents/house.html",
          clickFunc1:"dos.beaconSend(4,2,1,7,'','好禮三重抽','住火險_立即投保','活動首頁')",
          clickFunc2:"dos.beaconSend(4,2,1,7,'','好禮三重抽','住火險_了解更多','活動首頁')",
        },
        {
          title: "傷害險",
          titleImg: require("../assets/icon-accident-white.svg"),
          text: '<p class="text">方便又快速！</p><p class="text">百元的保費，百萬的保障！</p><p class="text">&emsp;</p>',
          link1: "https://b2c.tmnewa.com.tw/insurance/accident/index",
          link2: "https://www.tmnewa.com.tw/b2c_v2/contents/accident.html",
          clickFunc1:"dos.beaconSend(4,2,1,7,'','好禮三重抽','傷害險_立即投保','活動首頁')",
          clickFunc2:"dos.beaconSend(4,2,1,7,'','好禮三重抽','傷害險_了解更多','活動首頁')",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#learning {
  background-image: url("../assets/teacher.png");
  background-repeat: no-repeat;
  background-position: left 5% bottom -20px;
  background-size: 28%;
  padding-bottom: 30px;
  @media screen and (max-width: $small) {
    padding-bottom:180px;
    background-size:70%;
    background-position: center bottom -20px;
  }
  .container {
    text-align: center;
    .frame {
      display: inline-block;
      width: 29%;
      margin: 1%;
      background: #fefbe8;
      border-radius: 10px;
      overflow: hidden;
      vertical-align: top;
      min-height: 300px;
      @media screen and (max-width: $pad) {
        width: 31%;
        min-height:280px;
      }
      @media screen and (max-width: $small) {
        width:100%;
        min-height:inherit;
        padding:0 0 20px;
        margin:10px 0;
      }
      h2 {
        color: #fefbe8;
        position: relative;
        background: $deepBlue;
        img {
          position: absolute;
          right: 5%;
          bottom: 0;
          @media screen and (max-width: $pad) {
            width: 50px;
            right:2%;
          }
        }
      }
      h3 {
        margin: 8px 0;
        color: $deepBlue;
      }
      .textArea {
        margin-bottom: 10px;
      }
      .text {
        font-size: 16px;
        span {
          font-size: 20px;
          color: $deepBlue;
        }
        @media screen and (max-width: $pad) {
          font-size:14px;
          span {
            font-size: 17px;
            color: $deepBlue;
          }
        }
       
      }
      .btn {
        width: 40%;
        padding: 5px 30px;
        margin: 5px 0;
        @media screen and (max-width: $small) {
          width:43%;
          box-sizing:border-box;
          margin:0 1%;
        }
      }
    }
  }
}
</style>
