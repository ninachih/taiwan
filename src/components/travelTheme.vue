<template>
    <div class="travelTheme">
        <div class="container scrollContainer">
                        <div class="travel-nav-container">
                            <div class="travel-nav-fixed">
                                <div class="title-wrapper center">
                                    <h2 class="title">跟著旅遊主題買 旅行保險好簡單</h2>
                                </div>
                                <ul class="travel-nav">
                                    <li data-anchor="rails" class="active">
                                        <a href="#rails" v-smooth-scroll="{ duration: 1000, offset: -321, container: '.scrollContainer' }">鐵道客運遊</a>
                                    </li>
                                    <li data-anchor="moto">
                                        <a href="#moto" v-smooth-scroll="{ duration: 1000, offset: -321, container: '.scrollContainer' }">離島租車遊</a>
                                    </li>
                                    <li data-anchor="car">
                                        <a href="#car" v-smooth-scroll="{ duration: 1000, offset: -321, container: '.scrollContainer' }">租車自駕遊</a>
                                    </li>
                                    <li data-anchor="basic">
                                        <a href="#basic" v-smooth-scroll="{ duration: 1000, offset: -321, container: '.scrollContainer' }">基本保障款</a>
                                    </li>
                                    <li data-anchor="camp">
                                        <a href="#camp" v-smooth-scroll="{ duration: 1000, offset: -321, container: '.scrollContainer' }">自然露營趣</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="theme-container">
                            <div id="rails" class="item">
                                <div class="image-wrapper">
                                    <img src="../assets/travel-rails.svg" alt="鐵道客運遊">
                                    <div class="title">
                                        <h3>鐵道客運遊</h3>
                                    </div>
                                </div>

                                <div class="item-content">
                                    <div class="head">
                                        <div class="title">
                                            <h3>鐵道客運遊</h3>
                                        </div>
                                        <div class="prize">
                                            <p>一日保費<br>只要</p>
                                            <p class="hightlight"><span>$</span>130</p>
                                            <p>起</p>
                                        </div>
                                    </div>
                                    <div class="body">
                                        <p>
                                            國道或大眾運輸交通事故險<br>
                                            鐵路客運旅程延誤補償<br>
                                            旅行平安險額度300萬<br>
                                            傷害醫療險額度30萬<br>
                                            個人賠償責任險
                                        </p>
                                        <div class="prize">
                                            <p>一日保費<br>只要</p>
                                            <p class="hightlight"><span>$</span>130</p>
                                            <p>起</p>
                                        </div>
                                    </div>
                                    <a class="btn">
                                        <p>瞭解完整保障</p>
                                    </a>
                                </div>
                            </div>
                            <div id="moto" class="item">
                                <div class="image-wrapper">
                                    <img src="../assets/travel-moto.svg" alt="離島租車遊">
                                    <div class="title">
                                        <h3>離島租車遊</h3>
                                    </div>
                                </div>

                                <div class="item-content">
                                    <div class="head">
                                        <div class="title">
                                            <h3>離島租車遊</h3>
                                        </div>
                                        <div class="prize">
                                            <p>一日保費<br>只要</p>
                                            <p class="hightlight"><span>$</span>217</p>
                                            <p>起</p>
                                        </div>
                                    </div>
                                    <div class="body">
                                        <p>
                                            國內租車旅遊險(機車)<br>
                                            境內飛機旅程延誤補償<br>
                                            旅行平安險額度500萬<br>
                                            傷害醫療險額度50萬<br>
                                            個人賠償責任險
                                        </p>
                                        <div class="prize">
                                            <p>一日保費<br>只要</p>
                                            <p class="hightlight"><span>$</span>217</p>
                                            <p>起</p>
                                        </div>
                                    </div>
                                    <a class="btn">
                                        <p>瞭解完整保障</p>
                                    </a>
                                </div>
                            </div>
                            <div id="car" class="item">
                                <div class="image-wrapper">
                                    <img src="../assets/travel-car.svg" alt="租車自駕遊">
                                    <div class="title">
                                        <h3>租車自駕遊</h3>
                                    </div>
                                </div>

                                <div class="item-content">
                                    <div class="head">
                                        <div class="title">
                                            <h3>租車自駕遊</h3>
                                        </div>
                                        <div class="prize">
                                            <p>一日保費<br>只要</p>
                                            <p class="hightlight"><span>$</span>370</p>
                                            <p>起</p>
                                        </div>
                                    </div>
                                    <div class="body">
                                        <p>
                                            國內租車旅遊險(汽車)<br>
                                            國道或大眾運輸交通事故險<br>
                                            旅行平安險額度500萬<br>
                                            傷害醫療險額度50萬<br>
                                            個人賠償責任險
                                        </p>
                                        <div class="prize">
                                            <p>一日保費<br>只要</p>
                                            <p class="hightlight"><span>$</span>370</p>
                                            <p>起</p>
                                        </div>
                                    </div>
                                    <a class="btn">
                                        <p>瞭解完整保障</p>
                                    </a>
                                </div>
                            </div>
                            <div id="basic" class="item">
                                <div class="image-wrapper">
                                    <img src="../assets/travel-basic.svg" alt="基本保障款">
                                    <div class="title">
                                        <h3>基本保障款</h3>
                                    </div>
                                </div>
                                <div class="item-content">
                                    <div class="head">
                                        <div class="title">
                                            <h3>基本保障款</h3>
                                        </div>
                                        <div class="prize">
                                            <p>一日保費<br>只要</p>
                                            <p class="hightlight"><span>$</span>68</p>
                                            <p>起</p>
                                        </div>
                                    </div>
                                    <div class="body">
                                        <p>
                                            旅行平安險額度200萬<br>
                                            傷害醫療險額度20萬<br>
                                            個人賠償責任險
                                        </p>
                                        <div class="prize">
                                            <p>一日保費<br>只要</p>
                                            <p class="hightlight"><span>$</span>68</p>
                                            <p>起</p>
                                        </div>
                                    </div>
                                    <a class="btn">
                                        <p>瞭解完整保障</p>
                                    </a>
                                </div>
                            </div>
                            <div id="camp" class="item">
                                <div class="image-wrapper">
                                    <img src="../assets/travel-camp.svg" alt="自然露營趣">
                                    <div class="title">
                                        <h3>自然露營趣</h3>
                                    </div>
                                </div>
                                <div class="item-content">
                                    <div class="head">
                                        <div class="title">
                                            <h3>自然露營趣</h3>
                                        </div>
                                        <div class="prize">
                                            <p>一日保費<br>只要</p>
                                            <p class="hightlight"><span>$</span>166</p>
                                            <p>起</p>
                                        </div>
                                    </div>
                                    <div class="body">
                                        <p class="">
                                            重大燒燙傷保險<br>
                                            國道或大眾運輸交通事故險<br>
                                            旅行平安險額度500萬<br>
                                            傷害醫療險額度50萬<br>
                                            個人賠償責任險
                                        </p>
                                        <div class="prize">
                                            <p>一日保費<br>只要</p>
                                            <p class="hightlight"><span>$</span>166</p>
                                            <p>起</p>
                                        </div>
                                    </div>
                                    <a class="btn">
                                        <p>瞭解完整保障</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p class="note center">(保費金額以投保試算頁面為準，保費將依保額、天數、人數調整)</p>
                    </div>
    </div>
</template>

<script>

export default {
  name: "travelTheme",
  mounted(){
   this.initNavFixedEvent()
    
  },
  methods:{
    initNavFixedEvent() {
        var travelNavFixedTop;
        var themeitem = $('.theme-container > .item').last();
        var themeLast = $(themeitem).last().position().top + $(themeitem).height() / 2;
        var isFixed = false;
        travelNavFixedTop = $('.travel-nav-fixed').offset().top;
        $(window).on('resize', function () {
        $('.travel-nav-fixed').removeClass('fixed');
        travelNavFixedTop = $('.travel-nav-fixed').position().top;
        });
        $(window).on('scroll', function (event) {
      if ($(this).scrollTop() + 320 > travelNavFixedTop && $(this).scrollTop() + 320 < themeLast) {
        $('.travel-nav-fixed').addClass('fixed');
        isFixed = true;
        var triggerAry = [];
        $('.theme-container > .item').each(function (index, item) {
          if ($(window).scrollTop() + 320 + $('.travel-nav-fixed').height() > $(item).position().top) {
            triggerAry.push($(item).attr('id'));
          }
        });

        if (triggerAry.length > 0) {
          $("[data-anchor=".concat(triggerAry[triggerAry.length - 1], "]")).addClass('active').siblings().removeClass('active');
          $('.travel-nav').scrollLeft($("[data-anchor=".concat(triggerAry[triggerAry.length - 1], "]")).position().left + $('.travel-nav').scrollLeft());
        }
      } else {
        isFixed = false;
        $('.travel-nav-fixed').removeClass('fixed');
        $('.travel-nav').scrollLeft(0);
        travelNavFixedTop = $('.travel-nav-fixed').position().top;
        themeLast = $(themeitem).last().position().top + $(themeitem).height() / 2;
      }
    });
    }
  }
 
  
};
</script>

<style lang="scss">
.travelTheme  {
    padding-top: 60px;
    padding-bottom: 85px;
    .travel-nav-container{
        .travel-nav-fixed {
            padding-top: 20px;
            &.fixed {
                position: fixed;
                top: 95px;
                z-index: 10;
                left: 50%;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
                background-color: #e8e8e8;
                width: 100%;            
            }
        }
        .travel-nav {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            padding-bottom: 25px;
            padding-top: 40px;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            li {
                background: white;
                -ms-flex-negative: 0;
                flex-shrink: 0;
                border-radius: 20px;
                cursor: pointer;
                -webkit-transition: .3s all;
                transition: .3s all;
                border: 2px solid #B6B6B7;
                a{color:$mainBlue;  padding: 20px 20px;display:block;font-weight:bold}
               
                & ~ li{
                    margin-left: 20px;
                }
                &:hover{
                    background: $mainBlue;
                    border: 2px solid  $mainBlue;
                    a {color:#fff}
                }
                &.active{
                    background: $mainBlue;
                    border: 2px solid  $mainBlue;
                    a {color:#fff}
                }
            }
            p {
                color: #a8a39a;
                margin: 0px;
                font-weight: 600;
                line-height: 1em;
            }
        }
    }
    .theme-container {
        width: 100%;
        max-width: 900px;
        margin: 0px auto;
        margin-bottom: 60px;
        .item {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            position: relative;
            & ~ .item {
                margin-top: 75px;
            }
            .image-wrapper {
            display: block;
            position: relative;
            z-index: 3;
            width: 370px;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            
                .title {
                    display: none;
                }
                img {
                    width: 100%;
                }
            }
            .item-content {
                width: 100%;
                position: relative;
                padding-right: 20px;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                &::before {
                    content: "";
                    position: absolute;
                    background-color: white;
                    border: 2px solid #EBECED;
                    top: 0px;
                    width: calc(100% + 276px);
                    height: calc(100% + 35px);
                    border-radius: 10px;
                    right: 0px;
                    box-shadow: 0px 4px 4px #CACCCF;
                }
                .title {
                    color: #fff;
                    padding: 15px 25px 15px 40px;
                    background-color: $mainBlue;
                    -webkit-transform: translateX(-10px);
                    transform: translateX(-10px);
                    position: relative;
                    left:-15px;
                    border-top-right-radius: 50px;
                    border-bottom-right-radius:50px;
                    
                    h3{
                        margin: 0px;
                        line-height: 1em;
                        position: relative;
                        font-size:24px;
                    }
                }
                .head {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-pack: justify;
                    -ms-flex-pack: justify;
                    justify-content: space-between;
                    -webkit-box-align: end;
                    -ms-flex-align: end;
                    align-items: flex-end;
                    position: relative;
                }
                .body {
                    padding-left: 25px;
                    padding-top: 25px;
                    position: relative;
                    p {
                        margin: 0px;
                        font-size: 16px;
                        line-height: 32px;
                        color:$deepGray;
                        font-weight:bold;
                    }
                    .prize {
                        display: none;
                    }
                }
                a {
                    position: absolute;
                    right: 20px;
                    bottom: 5px;
                    &.btn{
                        padding:16px;
                        width:auto;
                        margin:0;
                        p {
                        font-size: 20px;
                        color: white;
                        font-weight: 900;
                        margin: 0px;
                        position: relative;
                        z-index: 2;
                        line-height: 1em;
                        }
                    }
                    
                }
                .prize {
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: end;
                    -ms-flex-align: end;
                    align-items: flex-end;
                    margin-bottom: 2px;
                    p {
                        font-size: 16px;
                        line-height: 20px;
                        color: $mainBlue;
                        text-align: right;
                        margin: 0px;
                        font-weight: 600;
                        &:nth-of-type(3){
                            color:$pink;
                            font-size:20px;
                            line-height: 24px;
                        }
                    }
                    .hightlight {
                        font-size: 48px;
                        color: $pink;
                        font-weight: 600;
                        margin-left: 4px;
                        margin-right: 2px;
                        -webkit-transform: translateY(5px);
                        transform: translateY(5px);
                        span {
                            font-size: 24px;
                            line-height: 32px;
                        }
                    }
                }
                
            }
            
        }  
    }
    .note{
        color:$gray;
        font-weight:bold;
    }
    
}

</style>