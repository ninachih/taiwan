<template>
  <section id="q1">
    <h2 class="title">好禮三重抽</h2>
    <p class="text">投保下方任一指定保險方案，即可獲得立即抽抽獎資格乙次、大獎抽獎資格乙次，投保越多、獲得越多抽獎機會!</p>
    <ul class="list">
      <li class="q1Square" v-for="item in presentList">
        <img src="../assets/icon-pushpin.svg" alt="" class="iconSpin" />
        <div class="q1Icon">
          <img :src="item.Icon" alt="icon" />
        </div>
        <h3 class="title">{{ item.title }}</h3>
        <p>{{ item.text }}</p>
        <p>{{ item.text2 }}</p>
      </li>
    </ul>
    <div class="priceList priceBg1 ">
      <h2 class="title">好禮三重抽</h2>
      <p class="text">投保指定方案即可獲得大獎抽獎資格一次，使用電子保單還有機會抽電子保單獎!</p>
      <div class="container">
        <carousel :margin="25" :nav="false"  :responsive="{0:{items:1,nav:false},768:{items:2,nav:false,dots:true},1024:{items:3,nav:false,dots:true}}">
          <div class="price">
            <div class="priceTag">大獎</div>
            <div class="pricePic">
              <img src="../assets/gift-iphone.png" alt="">
            </div>
            <div class="Pricetext">
              <p>iPhone14 Pro 128G</p>
              <p class="small">(1名)</p>
            </div> 
          </div>
          <div class="price">
            <div class="priceTag">電子保單獎</div>
            <div class="pricePic">
              <img src="../assets/gift-switch.png" alt="">
            </div>
            <div class="Pricetext">
              <p>Switch遊戲主機+遊戲組</p>
              <p class="small">(2名)</p>
            </div> 
          </div>
          <div class="price">
            <div class="priceTag">大獎</div>
            <div class="pricePic">
              <img src="../assets/gift-wait.png" alt="">
            </div>
            <div class="Pricetext wait">
            </div> 
          </div>
          <div class="price">
            <div class="priceTag">大獎</div>
            <div class="pricePic">
              <img src="../assets/gift-wait.png" alt="">
            </div>
            <div class="Pricetext wait">
            </div> 
          </div>
        </carousel>
      </div>
    </div>
    <div class="priceList priceBg2 ">
      <h2 class="title">立即抽</h2>
      <p class="text">好禮立即抽!獎品立即拿! 四千多項獎品等你來!</p>
      <div class="container">
        <carousel :margin="25" :nav="false" :responsive="{0:{items:1,nav:false},768:{items:2,nav:false,dots:true},1024:{items:3,nav:false,dots:true}}">
          <div class="price">
            <div class="priceTag">立即抽</div>
            <div class="pricePic">
              <img src="../assets/gift-100.png" alt="">
            </div>
            <div class="Pricetext">
              <p>即享券 100元</p>
              <p class="small">(250名)</p>
            </div> 
          </div>
          <div class="price">
            <div class="priceTag">立即抽</div>
            <div class="pricePic">
              <img src="../assets/gift-500.png" alt="">
            </div>
            <div class="Pricetext">
              <p>即享券 500元</p>
              <p class="small">(50名)</p>
            </div> 
          </div>
          <div class="price">
            <div class="priceTag">立即抽</div>
            <div class="pricePic">
              <img src="../assets/gift-m.png" alt="">
            </div>
            <div class="Pricetext">
              <p>豬肉滿福堡即享券</p>
              <p class="small">(300名)</p>
            </div> 
          </div>
          <div class="price">
            <div class="priceTag">立即抽</div>
            <div class="pricePic">
              <img src="../assets/gift-linepoint.png" alt="">
            </div>
            <div class="Pricetext">
              <p>LINE POINTS 10點 </p>
              <p class="small">(3900名)</p>
            </div> 
          </div>
          
        </carousel>
      </div>
    </div>
    <div class="introActivity">
      <h3 class="titleBar">立即抽</h3>
      <p>完成下方任一活動任務即可獲得<span class="green">一次</span>立即抽抽獎資格，完成越多，抽獎機會越多!</p>
      <div  class="greenLink" @click="squareFbShare"><img src="../assets/icon-nice.png" alt="">  透過分享鈕分享本活動</div>
      <router-link to="/knowledge" class="greenLink"><img src="../assets/icon-paper.svg" alt=""> 完成產險知識通問答</router-link>
    </div>
    <div class="introActivity">
      <h3 class="titleBar">電子保單加碼獎</h3>
      <span><img src="../assets/icon-v.png" alt=""><span class="number">1</span>符合大獎活動任務者</span>
      <span><img src="../assets/icon-v.png" alt=""><span class="number">2</span>同時勾選電子保單 即可獲得電子保單加碼獎抽獎機會<span class="green">一次</span></span>
    </div>
    <div class="anotherIntro">
      <div class="container">
        <div class="introFrame">
          <img src="../assets/bow.svg" alt="" class="bow">
          <div class="content">
            <h3 class="titleBar">車險加碼獎</h3>
            <p>符合加碼獎任務者，即可獲得<span class="green">立即抽</span> 抽獎機會!</p>
            <div class="introList">
              <h2>續保獎</h2>  
              <img src="../assets/plus01.svg" alt="" class="plusImg">
              <p>經由網路投保專區續保入口完成投保，且該保單同時包含強制險與任意車險</p>
            </div>
             <div class="introList">
              <h2>新保獎</h2>  
              <img src="../assets/plus02.svg" alt="" class="plusImg">
              <p>過往未曾於網路投保專區投保之新戶，經由網路投保專區投保</p>
            </div>
             <div class="introList">
              <h2>喬遷獎</h2>  
              <img src="../assets/plus03.svg" alt="" class="plusImg">
              <p>前期車險保單非新安東京海上產險之保戶，經由網路投保專區，投保強制險。</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    <div class="btnArea">
      <p class="center">(車險加碼獎詳細規則請見注意事項)</p>
    </div>
  </section>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  name: "Present",
  components: { carousel },
  data() {
    return {
      presentList: [
        {
          Icon: require("../assets/icon-car.png"),
          title: "汽、機車險",
          text: "強制險＋任意險",
          text2: "任意險＋電子保單",
        },
        {
          Icon: require("../assets/icon-travel.svg"),
          title: "旅平險",
          text: "任一方案",
        },
        {
          Icon: require("../assets/icon-house.svg"),
          title: "住火險",
          text: "任一方案＋電子保單",
        },
        {
          Icon: require("../assets/icon-accident.svg"),
          title: "傷害險",
          text: "任一方案",
        },
      ], // 好禮三重抽
     
    };
  },
  methods:{
    squareFbShare(){
      window.open('http://www.facebook.com/share.php?u='+encodeURIComponent('https://b2c.tmnewa.com.tw/events/FY23_luckydraw/'),'_blank');
      let jwtInfo = JSON.parse(sessionStorage.getItem('jwtInfo'));
      if(jwtInfo){
        this.sendRecordAction('share71', jwtInfo.token);
      }
    },
    sendRecordAction (actId, token) {
      const axios = require('axios').default;
      axios.post(
        Common.Config.Api.Activity.recordAction,
        { actionId : actId },
        { 
          headers: {
            "Authorization" : token,  
          },     
        }
      );
    },
  }
};
</script>

<style lang="scss">
@mixin triangle($color, $zindex, $position) {
  position: absolute;
  content: "";
  z-index: $zindex;
  margin-left: -5px;
  border-right: 20px solid transparent;
  border-bottom: 20px solid $color;
  transform: rotate(-45deg);
  left: 50%;
  bottom: $position;
}
.list {
  text-align: center;
  margin-top: 40px;
   
}
#q1 {
  position: relative;
  background-image: url("../assets/tree.svg");
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: $small) {
    box-sizing: border-box;
    padding:0 10px;
  }
}
.q1Square {
  position: relative;
  background-color: #fff;
  border: 3px solid $blue;
  border-radius: 10px;
  width: 18%;
  display: inline-block;
  vertical-align: top;
  margin: 0 8px;
  text-align: center;
  box-sizing: border-box;
  padding: 15px;
  min-height: 187px;
  @media screen and (max-width: $pad) {
    width:22%;
    min-height:173px;
  }
  @media screen and (max-width: $small) {
    width:45%;
    padding:10px;
    min-height:155px;
    margin:2%;
  }
  .title {
    font-size: 20px;
    border-bottom: 1px dashed $blue;
    padding: 5px;
    margin-bottom: 10px;
    @media screen and (max-width: $small) {
      font-size:16px;
    }
  }
  img {
    max-height: 50px;
  }
  p {
    @include p-style;
    @media screen and (max-width: $small) {
      font-size:14px;
    }
  }
  .iconSpin {
    position: absolute;
    left: -5px;
    top: -12px;
  }
}
.chatTitle {
  padding: 2px 0 5px;
  border-radius: 35px;
  box-sizing: border-box;
  border: 3px solid #fff;
  background: $blue;
  font-weight: bold;
  max-width: 300px;
  color: #fff;
  margin: 50px auto 10px;
  text-align: center;
  position: relative;
  z-index: 90;
  font-size: 25px;
  padding-left: 65px;
  &::before {
    @include triangle($blue, 80, -5px);
  }
  &::after {
    @include triangle(#fff, 50, -10px);
  }
  span {
    font-size: 38px;
    color: #fefebe;
  }
  .trasure {
    position: absolute;
    left: 15px;
    top: -10px;
  }
  @media screen and (max-width: $small) {
    font-size:20px;
    span{font-size:30px;}
  }
}
.note {
  background-color: #fff;
  background-image: url("../assets/noto.svg");
  background-position: center top;
  background-repeat: no-repeat;
  width: 350px;
  border-radius: 10px;
  padding: 45px 15px 25px;
  box-sizing: border-box;
  display: inline-block;
  margin: 0 20px;
  box-shadow: 0 2px 10px #cfd8d2;
   @media screen and (max-width: $pad) {
   width:45%;margin: 0 2%;height:240px;vertical-align: top;
  }
  @media screen and (max-width: $small) {
    padding: 2% 5%;
  }
  &.multi {
    margin: 0;
    @media screen and (max-width: $pad) {
        margin:2%;
        height:240px;
        vertical-align: top;
    }
    @media screen and (max-width: $small) {
        height:230px;
    }
    .giftImg {
      background: $blue;
    }
    &:nth-of-type(2) {
      position: relative;
      top: -10px;
      @media screen and (max-width: $pad) {
        top:0;
      }
    }
  }
  .name {
    float: left;
    width: 47%;
    box-sizing: border-box;
    padding: 15% 0;
    @media screen and (max-width: $small) {
      width:100%;
      margin: 0 auto;
      text-align: center;
      float:none;
      padding:15% 0 0;
      p{font-size:16px;
        height: 36px;
        span{font-size:25px;top:1px}
      }
    }
  }
  .giftImg {
    float: right;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    background: $pink;
    margin: 20px 0 0;
    @media screen and (max-width: $small) {
      float:none;
      width:100px;
      height:100px;
      margin:15px auto;
    }
    img {
      position: relative;
      top: -25px;
      height: 95%;
      @media screen and (max-width: $small) {
        top:-2%;
      }
    }
  }
  p {
    @include p-style;
    font-size: 18px;
    span {
      color: $pink;
      font-size: 40px;
      position: relative;
      top: 3px;
    }
  }
}
.inlineGift {
  text-align: center;
  margin-bottom:10px;
  .inline {
    width: 400px;
    display: inline-block;
    margin:0 2%;
    @media screen and (max-width: $pad) {
    width:45%;
      .note{width:100%;margin:0;}
    }
    .chatTitle {
      font-size: 24px;
      width: auto;
      max-width: inherit;
      display: inline-block;
      padding: 5px 20px;
      margin: 50px 0 30px;
      @media screen and (max-width: $small) {
        padding: 10px 20px;
        font-size: 18px;
        line-height:25px;
        span{font-size:30px;}
      }
    }
  }
}
.anotherIntro{
  margin:100px 0 50px;
  @media screen and (max-width: $small) {
    margin:100px 0 10px;
  }
  .introFrame{
    border:6px solid #F2AD22;
    border-radius:30px;
    background:#fff;
    padding-bottom: 20px;
    .content{text-align: center;}
    .bow{
      width:180px;
      display: block;
      margin:-80px auto 0;
    }
    .introList{
      margin:20px 1%;
      vertical-align: top;
      display:inline-block;
      width:30%;
      box-sizing:border-box;
      padding:0 10px;
      h2{color:#308582;}
      .plus{width:50px;display:inline;vertical-align: middle;margin-right:2px;}
      .plusImg{width:100%;display:inline-block;margin:10px auto;vertical-align: top;
        &.noPlus{margin-top:25px;}
      }
      @media screen and (max-width: $small) {
        width:90%;
        margin:20px auto;
        .plusImg{width:80%;display:block;margin:0 auto;
          &.noPlus{margin-top:0;}
        }
      }
    }
  }
}
.priceList{
  width:90%;
  margin:50px auto 20px;
  padding:0 0 5%;
@media screen and (max-width: $large) {
    width:95%;
}
&.priceBg1{
    background: url("../assets/slot-bg01.png");
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size:100%;
}
&.priceBg2{
    background: url("../assets/slot-bg02.png");
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size:100%;
}
  .price{
    border:2px solid #308582;
    border-radius:10px;
    background-color:#fff;
    text-align: center;
    position:relative;
    margin:0 6px;

    .priceTag{
      position:absolute;
      width:105px;
      height:45px;
      background:url(../assets/tag.png);
      background-repeat: no-repeat;
      left:-8px;
      line-height: 42px;
      top:5px;
      font-weight:bold;
      color:#fff;
    }
  }
}
.pricePic{
  width:90%;
  margin:10px auto;
  background:#fff;
  img{
    width:100%
  }
}
.Pricetext{padding:10px 0;
&.wait{height:39px;}
}
.owl-carousel {
    margin: 20px auto;
}
.owl-theme .owl-dots .owl-dot.active span{
  background: #308582;
    border: 1px solid #308582;
}
.owl-theme .owl-dots .owl-dot span {
    border: 1px solid #308582;
}
.introActivity{
  width:1000px;
  margin:20px auto;
  background:url(../assets/paper.png);
  background-repeat: repeat-y;
  background-size: cover;
  text-align: center;
  padding:20px 10px;
  @media screen and (max-width: $medium) {
    width:95%;
}
  p{
    margin:20px 0;
  }
  
  .greenLink{
    display:inline-block;
    background: #369684;
    color:#FFFDEF;
    border-radius: 10px;
    padding:8px 40px;
    margin:0 10px;
    cursor:pointer;
    @media screen and (max-width: $small) {
    width:95%;
    display:block;
    margin:10px auto;
    box-sizing: border-box;
}
    img {
    display: inline-block;
    vertical-align: middle;
    }
  }
  img{vertical-align: middle;margin:0 2px;}
  .number{
    background:#000;
    border-radius: 100%;
    width:20px;
    height:20px;
    text-align: center;
    line-height:20px;
    color:#fff;
    display:inline-block;
    margin:0 5px;
  }
}
.green{
    background: #369684;
    border-radius: 20px;
    padding:5px 10px;
    box-sizing: border-box;
    color:#FFFDEF;
    text-align: center;
  }
.titleBar{
  background:#493632;
  border:3px solid #F2AD22;
  position:relative;
  border-radius: 50px;
  padding:5px 10px;
  text-align: center;
  color:#F2AD22;
  width:300px;
  font-size:30px;
  margin:10px auto;
  &:before{
    content:"";
    width:20px;
    height:20px;
    display:inline-block;
    background-image: url(../assets/title-star.svg);
    background-size:contain;
    background-repeat: no-repeat;
    position:absolute;
    left:8px;
    top:15px;
  }
  &:after{
    content:"";
    width:20px;
    height:20px;
    display:inline-block;
    background-image: url(../assets/title-star.svg);
    background-size:contain;
    background-repeat: no-repeat;
    position:absolute;
    right:8px;
    top:15px;
  }
}
</style>
