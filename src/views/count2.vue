<template>
  <div>
   <goTop/>
  <KV/>
    <section id="search">
     
      <div class="topSearch">
        <div class="container">
        <img src="../assets/icon-slot-hat.png" alt="" class="searchTresure">
        <h2>你擁有的【立即抽獎】次數是 <span v-text="amount"></span> 次</h2>
        <a class="btn" id="goLottery" onclick="dos.beaconSend(4,2,1,7,'','好禮三重抽','立刻抽獎去','抽獎頁')">立刻抽獎去</a>
              <img src="../assets/icon-note02.svg" alt="" class="searchNote note01">
      <img src="../assets/icon-note02.svg" alt="" class="searchNote note02">
    
        </div>
      </div>
      <div class="container">
          <div class="toggleText" @click="searchToggle">查看使用紀錄<img src="../assets/arrowW.png" alt="" class="arrow" 
          :class="{rotate: active}"></div>
      </div>
      <transition
          name="slide"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
        >
      <div class="bottomSearch" v-if="active == false">
        <div class="container">
          <div class="searchList">
            <h3>【立即抽獎】活動紀錄</h3>
            <div id="css_table">
              <div class="css_tr Table-title">
                  <div class="css_td">日期</div>
                  <div class="css_td">項目</div>
                  <div class="css_td">說明</div>
              </div>
              <div class="css_tr" v-for="item in actData">
                  <div class="css_td">{{item.createTime}}</div>
                  <div class="css_td">{{item.title}}</div>
                  <div class="css_td havePrize" v-if="item.whetherWinLottery"><a @click="alertPrice(item)">{{item.status}}</a></div>
                  <div class="css_td" v-else>{{item.status}}</div>
              </div>
            </div>
          </div>
          <div class="searchList">
            <h3>大獎及其他獎項抽獎資格</h3>
            <div id="css_table">
              <div class="css_tr Table-title">
                  <div class="css_td">日期</div>
                  <div class="css_td">項目</div>
                  <div class="css_td">說明</div>
              </div>
              <div class="css_tr" v-for="item in qualifyData">
                  <div class="css_td">{{item.createTime}}</div>
                  <div class="css_td">{{item.action}}</div>
                  <div class="css_td">{{item.description}}</div>
              </div>  
            </div>
          </div>
          <p class="center green">(此部分為次月或活動結束後進行電腦抽獎，得獎結果請見得獎名單頁)</p>
        </div>
      </div>
      </transition>
    </section>
  </div>
 
</template>
<script>
import goTop from "@/components/gotop.vue";
import KV from "@/components/kv.vue";
import _ from 'lodash';
// import Swal from 'sweetalert2';
export default {
  name: "search",
  data() {
    return {
      active: false,
      amount: '0',
      actData: {},
      qualifyData: {},
    }
  },
  components: {
    goTop,
    KV,
  },
  mounted() {
    this.init();
  },
  methods: {
    init(){
      console.log('init',Common)
      var self = this;
      const axios = require('axios').default;
      var userData = JSON.parse(sessionStorage.getItem('jwtInfo'));
      var token = userData.token;
      axios.get(Common.Config.Api.Activity.showLotteryRecord, {
        headers: { "Authorization": token }
      }).then((response) => {
        //console.log(response.data.data)
        var actList = response.data.data.actList;
        var qualifyList = response.data.data.qualifyList;
        var amountData = response.data.data.lotteryAmount;
        this.actData = actList;
        this.amount = amountData;
        this.qualifyData = qualifyList;
      
        if (response.data.code == 200) {
          $("#goLottery").click(function () {
            // window.location.href = "#/lottery"

            self.$router.push('/lottery');
          })

        } else if (response.data.code == 400) {
          //console.log(response.data)
          $("#goLottery").click(function () {
            Swal.fire("您的抽獎次數為 0")
          })
        }
      });
    },
    searchToggle() {
      this.active = !this.active;
      dos.beaconSend(4,2,1,7,'','好禮三重抽','查看使用紀錄','抽獎頁')
    },
    beforeEnter(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = "0px";
        }

        element.style.display = null;
      });
    },
    enter(element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = `${element.scrollHeight}px`;
        });
      });
    },
    afterEnter(element) {
      element.style.height = null;
    },
    beforeLeave(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = `${element.offsetHeight}px`;
        }
      });
    },
    leave(element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = "0px";
        });
      });
    },
    afterLeave(element) {
      element.style.height = null;
    },
    alertPrice: _.debounce(function (item){
      // 2023.02.04 HansHuang 很粗糙的寫法... 我只能幫到這邊惹 start
      let prizeString = '';
      if(item.prizeLink){
        prizeString += '<a href="'+ item.prizeLink +'" target="_blank">' + item.prizeLink + '</a>'
        console.log(item.prizeLink);
      }
      if(item.prizeCode){
        prizeString += '<p>開啟密碼：'+item.prizeCode +'</p>'
        console.log(item.prizeCode);
      }
      console.log(item);
      // 2023.02.04 HansHuang 很粗糙的寫法... 我只能幫到這邊惹 end
      Swal.fire({
              title: item.prizeName,
              html:
              // 2023.02.04 HansHuang 還有這裡
              '<p class="prizeIntro">' + item.prizeInstruction +'</p>' +
              prizeString + 
              
              '<p>'+item.prizeDescription +'</p>',
              imageUrl:item.prizeImageLink,
              confirmButtonText: "關閉",
              customClass: {
                container: "lotterySuccess",
              },
      })
            
    })
  }
};
</script>
<style lang="scss">
#search{
    background-image: url("../assets/tree.svg");
    background-position: center bottom;
    background-size: contain;
    background-repeat: no-repeat;
  .topSearch{
    .container{
        background-image: url("../assets/qa-noto.svg");
    background-color:#fff;
    border-radius:10px;
    padding:50px 0;
    background-repeat: no-repeat;
    background-position: center top;
    text-align: center;
    position:relative;
    .searchNote{    
      position: absolute;
      z-index: 90;
    bottom: -30px;
    &.note01{
      left: 20px;
    }
    &.note02{
      right:20px;
    }
}
    }
  .searchTresure{display:inline-block;width:200px;}
  h2{color:$blue;margin:10px auto;font-size:30px;margin:20px auto;
  span{color:$pink}
  
  }
  
  }
  .toggleText{
    margin-top:10px;
    color:#fff;
    background:$blue;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    padding:20px 0;
    font-size:30px;
    cursor: pointer;
    .arrow{
      position: relative;
      top:-5px;
      margin-left:10px;
      &.rotate {
          transform: rotateX(-180deg);
      }
    }
  }
  .bottomSearch{
    .container{
      background-color: #fff;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      padding-bottom:30px;
    }
   
    h3{
      color:$blue;
      text-align: center;
      font-weight:bolder;
      padding:20px 0;
    }
    .searchList{
      width:80%;
      margin: 0 auto;
      border-bottom:1px dashed #707070;
      padding-bottom:20px;
      @media screen and (max-width: $small) {
        width:100%;
        font-size:14px;
      }
      &:last-of-type{border:0}
      .Table-title{
          color:$blue;
          font-size:18px;
          line-height:40px;
            .css_td{
              border-bottom:1px solid $blue;
              margin-bottom:10px;
               @media screen and (max-width: $small) {
                line-height:23px;
              }
            }
      }
    }
   
  }
  .slide-leave-active,
  .slide-enter-active {
    overflow: hidden;
    transition: height 0.5s linear;
  }
  .havePrize{
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
