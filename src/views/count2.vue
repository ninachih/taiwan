<template>
  <div>
   <goTop/>
  <KV/>
    <section id="search">
     
      <div class="topSearch">
      
      </div>
      <div class="container">
         
      </div>
     
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

</style>
