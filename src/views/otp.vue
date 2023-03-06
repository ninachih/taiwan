<template>
  <section id="OTP">
    <transition name="fade">
      <Loading @load="loading" v-if="isLoading == true"/>
    </transition>
    <img alt="" class="icon">
    <h2>輸入驗證碼</h2>
    <p>已將驗證碼發送至您的手機 :
      <span v-text="otpInfo.otpMobile">0912345678</span>
    </p>
    <p>與信箱 :
      <span v-text="otpInfo.otpEmail">abcdefg@gmail.com</span>
    </p>
   <div class="code">
    <span class="frontCode" v-text="otpInfo.otpFrontCode">BOH</span><span>-</span>
    <input type="tel" required="required" maxlength="6" placeholder="請輸入6位數驗證碼" v-model="otpBackCode" @keyup="reValBackCode"/>
    <div class="countDown">
        驗證碼將於 <vue-countdown v-on:time-expire="handleTimeExpire" :seconds="300" :start="start"></vue-countdown> 後失效。 
    </div>
   </div>
   <div class="btnArea">
      <button class="btn close" @click="closeOTP">關閉</button>
      <button class="btn send"  @load="loading" @click="sendOTP">送出</button>
   </div>
  </section>
</template>
<script>
import VueCountdown from '@dmaksimovic/vue-countdown';
import Loading from "@/components/loading.vue";
import _ from 'lodash';
export default {
  name: "kv",
  data(){
    return {
      otpBackCode: "",
      otpInfo: {
        otpId: "",
        otpMobile: "",
        otpEmail: "",
        otpFrontCode: "",
      },
      start: false,
      isLoading:true
    };
  },
  components:{
    'vue-countdown': VueCountdown,
    Loading
  },
  mounted(){
    this.init();
    this.start = true;
    this.loading();
  },
  methods:{
    init(){
      let otpObj = JSON.parse(sessionStorage.getItem('otp'));
      if(otpObj){
        this.otpInfo = otpObj;
      } else {
        //window.location.href = "/";
        this.$router.push('/');
      }
    },
    closeOTP(){
      // window.location.href = "/";
      this.$router.push('/');
    },
    sendOTP: _.debounce(function(){
      this.isLoading = true;
      if(this.otpInfo.type == 'login') {
        this.sendOTPLogin();
      } else {
        this.sendOTPRegister();
      }
    }, 2000),
    sendOTPLogin: _.debounce(function(){
      var self = this;

      let otpData = {
        otpId: this.otpInfo.otpId,
        otpFrontCode: this.otpInfo.otpFrontCode,
        otpBackCode: this.otpBackCode
      };

      //console.log('otpData', otpData);

      Common.UserStatus.checkOtpLogin(otpData,
        function(jwtInfo){
          //console.log(jwtInfo);
          sessionStorage.setItem('jwtInfo', JSON.stringify(jwtInfo));
          sessionStorage.removeItem('otp');
          self.insertProfile(
            false, 
            fpc, 
            jwtInfo.token,
            sessionStorage.getItem("referrerCode")
          );
          self.sendRecordAction('login41', jwtInfo.token);
          // window.location.href = "#/";
          self.$router.push('/');
        },
        function(res){
          //console.log(res);
          Swal.fire({
            title: "OTP 送出異常",
            text: res.message,
            icon: 'error'
          });
          self.isLoading=false
        },
        function(res){
          //console.log(res);
          Swal.fire({
            title: "系統異常",
            text: "請稍後再試",
            icon: 'error'
          });
          self.isLoading=false
        }
      );
    },2000),
    sendOTPRegister: _.debounce(function(){
      var self = this;

      let regObj = JSON.parse(sessionStorage.getItem('regData'));

      let otpData = {
        otpId: this.otpInfo.otpId,
        otpFrontCode: this.otpInfo.otpFrontCode,
        otpBackCode: this.otpBackCode,

        name: regObj.name,
        mobile: regObj.mobile,
        email: regObj.email,
        source: 'https://b2c.tmnewa.com.tw/events/FY22_h2_luckydraw/',
        terms: [
          {
            id: -1,
            insures: 'events',
            cid: 2,
            publishDate: '2021-03-18T00:00:00' 
          },
          {
            id: -2,
            insures: 'events',
            cid: 3,
            publishDate: '2021-05-05T00:00:00' 
          },
          {
            id: -3,
            insures: 'events',
            cid: 4,
            publishDate: '2021-11-15T00:00:00' 
          }
        ]
      };

      //console.log('otpData', otpData);

      Common.UserStatus.checkOtpRegister(otpData,
        function(jwtInfo){
          //console.log(jwtInfo);
          sessionStorage.setItem('jwtInfo', JSON.stringify(jwtInfo));
          sessionStorage.removeItem('otp');
          sessionStorage.removeItem('regData');
          self.insertProfile(
            true, 
            fpc, 
            jwtInfo.token,
            sessionStorage.getItem("referrerCode")
          );
          self.sendRecordAction('sign41', jwtInfo.token);
          // window.location.href = "#/";
          self.$router.push('/');
        },
        function(res){
          //console.log(res);
          Swal.fire({
            title: "OTP 送出異常",
            text: res.message,
            icon: 'error'
          });
        },
        function(res){
          //console.log(res);
          Swal.fire({
            title: "系統異常",
            text: "請稍後再試",
            icon: 'error'
          });
        }
      );
    },2000),
    handleTimeExpire () {
      Swal.fire({
        title: "驗證碼失效",
        text:"請您重新登入/註冊",
        confirmButtonText: "確定",
      }).then((result) => {
        if (result.isConfirmed) {
          // window.location.hash = "/#login";
          self.$router.push('/login');
        }
      });
    },
    sendRecordAction (actId, token) {
      //console.log('sendRecordAction', actId, token);
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
    insertProfile(isNewUser, fpc, token,referrerCode) {
      //console.log('insertProfile', isNewUser, fpc, token);
      const axios = require('axios').default;
      axios.post(
        Common.Config.Api.Activity.insertProfile,
        { 
          newUser : isNewUser,
          fpc : fpc,
          referrerCode: referrerCode
        },
        { 
          headers: {
            "Authorization" : token,  
          },     
        }
      );
    },
    reValBackCode(){
      this.otpBackCode = this.otpBackCode.replace(/\D/, "").substr(-6);
    },
    loading(){ 
      this.isLoading=false
    },
  },

}
</script>

<style lang="scss">

#OTP{
  padding:10% 0 5%;
  text-align: center;
  box-sizing: border-box;
  .icon{display:inline-block;margin:30px auto;}
  h2{font-weight:bold;color:#ab4100;margin:10px auto 20px;}
  p{margin:10px 0;font-weight:bold;}
  .code {
    span{
    font-size:35px;
    &.frontCode{font-size:30px;line-height: 30px;}
    }
  input{
    border: 1px solid #2d2d2d;
    border-radius:10px;
    height:35px;
    line-height:35px;
    box-sizing: border-box;
    position: relative;
    top:-5px;
    margin-left:5px;
    text-align: center;
  }
  }
  
  @media screen and (max-width: $small) {
    .btn{width:40%;margin:0 2%;}
  }
  .vue-countdown{display:inline-block}
}
</style>
