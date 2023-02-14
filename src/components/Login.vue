<template>
  <section id="login">
    <transition name="fade">
      <Loading @load="loading"  v-if="isLoading == true"/>
    </transition>
    <a class="fbShare" @click="fbShare" title="facebook" onclick="dos.beaconSend(4,2,1,7,'','好禮三重抽','點我分享活動','活動首頁')">
      <img src="../assets/share.svg" alt="">
    </a>
    <div class="container">
      <div class="content">
        <img src="../assets/hand.png" alt="" class="loginGirl" />
        <h2 class="center title" @click="this.isLoading = false" onclick="dos.beaconSend(4,2,1,7,'','好禮三重抽','立即抽獎','活動首頁')">立即抽獎</h2>
        <div id="selectDiv" v-if="Select != true">
          <button id="firstBtn" class="btn" @click="first">首次註冊</button>
          <button id="loginBtn" class="btn" @click="enter">登入</button>
        </div>
        <transition name="fade">
          <div id="firstDiv" v-if="isFirst == true">
            <p class="text">會員註冊</p>
            <div class="form">
              <div class="inputControl">
                <label for="reg_userID">身分證</label>
                <input id="reg_userID" type="text" v-model="account" @keyup="registerCheck"/>
              </div>
              <div class="inputControl">
                <label for="reg_userName">姓名</label>
                <input id="reg_userName" type="text" v-model="name" />
              </div>
              <div class="inputControl">
                <label for="reg_userEmail">E-mail</label>
                <input id="reg_userEmail" type="email" v-model="email" />
              </div>
              <div class="inputControl">
                <label for="reg_userTel">手機</label>
                <input id="reg_userTel" type="tel" v-model="mobile"/>
              </div>
              <Policy/>
              <div class="activity">
                  <div class="inlineInput">
                    <label for="referrerCode">活動代碼</label>
                    <input id="referrerCode" name="referrerCode" type="text" placeholder="(非必填，無代碼可不輸入)" v-model="referrerCode">
                  </div>
              </div>
              <div class="btnArea">
                <button id="turnBtn" class="btn goBack" @click="back">
                  返回
                </button>
                <button id="sendBtn" class="btn"  @click="sendRegOtp" @load="loading">確認送出</button>
              </div>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div id="EnterDiv" v-if="isEnter == true">
            <p class="text">活動登入</p>
            <div class="form">
              <div class="inputControl">
                <label for="login_userID">身分證</label>
                <input id="login_userID" type="text" v-model="account"/>
              </div>
              <div class="btnArea">
                <button id="turnBtn" class="btn goBack" @click="back">
                  返回
                </button>
                <button id="sendBtn" class="btn" @click="sendLoginOtp" @load="loading">確認送出</button>
              </div>
            </div>
          </div>
        </transition>
        <transition name="fade" v-if="isLogin == true">
          <div id="loginDiv" >
             <a href="#/search" class="btn goSearch" onclick="dos.beaconSend(4,2,1,7,'','好禮三重抽','抽獎與查詢','活動首頁')">進行抽獎 與 查詢抽獎紀錄</a>
             <a href="#/knowledge" class="btn" onclick="dos.beaconSend(4,2,1,7,'','好禮三重抽','進入產險知識通','活動首頁')">進入產險知識通</a>
             <div @click="back();" id="logout">登出</div> <!-- 暫用 -->
          </div>
        </transition>
      </div>
    </div>
     <div class="asideBar">
      <img src="../assets/icon-bar-treasure.png" alt="">
      <p>完成投保</p>
      <p>好禮等你拿</p>
      <router-link :to="{ path: '/', hash: '#login' }"> 立即抽獎</router-link>
    </div>
  </section>
</template>

<script>
import Policy from "@/components/policy.vue";
import Loading from "@/components/loading.vue";
import _ from 'lodash';


export default {
  name: "Login",
  components:{
    Policy,
    Loading
  },
  data() {
    return {
      Select: false,
      isFirst: false,
      isEnter: false,
      isLogin: false,
      account: "",
      name: "",
      email: "",
      mobile: "",
      referrerCode:"",
      isLoading:true
    };
  },
  mounted(){
    this.refCodeUrl();
    this.loading();
    if (sessionStorage.getItem("jwtInfo")) {
      this.Select = true;
      this.isLogin = true;
      this.isEnter = false;
      // window.location.href = "#login";
      //this.$router.push('/#login');
      var knowledgeData = JSON.parse(sessionStorage.getItem('knowledgeData'));
      var userData = JSON.parse(sessionStorage.getItem("jwtInfo"));
      if(knowledgeData){
        var axios = require('axios').default;
        axios.post(
          Common.Config.Api.Activity.checkAnswer, { //已登入後check是否答對
          answerList:knowledgeData
        })
        .then(function(response) {
          if(response.data.code == 200){
            //console.log('已答對')
            var token = userData.token;
            axios.post(
              Common.Config.Api.Activity.searchReply, //查詢有無答題記錄
              { actionId: "ques71" },
              {
                headers: {
                  Authorization: token,
                },
              }).then(function(response) {
                sessionStorage.removeItem('knowledgeData');
                if(response.data.data == true){ //已答過
                  Swal.fire({
                    text: "已完成過答題囉！",
                    confirmButtonText: "關閉",
                    customClass: {
                      container: "remember",
                    },
                  });
                  
                }
                else if(response.data.data == false){//未答過

                  axios.post(
                  Common.Config.Api.Activity.recordAction, //記錄答題完成動作
                  { actionId: "ques71" },
                  {
                    headers: {
                      Authorization: token,
                    },
                  }
                ).then(function () {
                  Swal.fire({
                    title: "你果然是產險知識通",
                    html: "<p>恭喜你獲得</p><div class='award'><p>LINE POINT 50點</p><p>抽獎機會</p></div>",
                    confirmButtonText: "確認",
                    customClass: {
                      container: "correct",
                    },
                  });
                });
                  
                }
            })
          }
        });
      }
    }
    if(sessionStorage.getItem("regData")){ //keep 登入註冊資料
      var regData =  JSON.parse(sessionStorage.getItem('regData'))
      this.account = regData.account;
      this.name = regData.name;
      this.email = regData.email;
      this.mobile = regData.mobile;
    }   
  },
  methods: {     
    getUrlParameter(name) {
          name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
          var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
          var results = regex.exec(location.search);
          return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    },
    refCodeUrl() {
        var code = this.getUrlParameter('ReferrerCode');
        var url = location.href;
        if (code != '') {
          url += '?default_id=' + code;
        }
        this.referrerCode = code
        console.log(url)
    },
    first() {
      this.Select = true;
      this.isFirst = true;
      $(".agree-check").addClass("disable");
      $("#isAgree1").attr("disabled", true);
      $("#isAgree2").attr("disabled", true);
      $("#isAgree3").attr("disabled", true);
    },
    enter() {
      this.Select = true;
      this.isEnter = true;
    },
    back() {
      this.Select = false;
      this.isEnter = false;
      this.isFirst = false;
      this.isLogin = false;
      sessionStorage.removeItem('referrerCode');
      Common.UserStatus.logout();
    },
    registerCheck:_.debounce(function(){
      var self = this;
      const axios = require('axios').default;
      axios.post(
         Common.Config.Api.Activity.memberCheck,
        { pid : self.account },
      ).then(function (response) {
        if (response.data.data == true) {
          self.alertFunc('請按“登入”參與活動','您已註冊過會員');
        }
      })
    },500),
    sendRegOtp: _.debounce(function(){
      dos.beaconSend(4,2,1,7,'','好禮三重抽','會員註冊_送出','活動首頁');
      var self = this;
      let otpRegData = {
        account: this.account,
        name: this.name,
        mobile: this.mobile,
        email: this.email,
      };
      sessionStorage.setItem('regData', JSON.stringify(otpRegData));
      if($('#referrerCode').val()!=''){
        sessionStorage.setItem('referrerCode',this.referrerCode)
      }
      // 註冊欄位驗證
      var re_ID = /^[a-zA-Z]{1}\d{9}$/
      var re_resident = /^[A-Z][ABCD]\d{8}$/
      var re_mail = /^([a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*)@([a-zA-Z0-9]+(?:[.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,})$/;
      var re_Tel = /^[0-9]+$/;
      if($('#reg_userID').val() ==''){
        this.alertFunc('請填寫身分證','填寫錯誤');
        return false;
      }
      if (!re_ID.test($('#reg_userID').val()) && !re_resident.test($('#reg_userID').val())) {
        this.alertFunc('身分證或居留證格式不正確!','填寫錯誤');
        return false;        
      }
      if($('#reg_userName').val() ==''){
        this.alertFunc('請填寫姓名','填寫錯誤');
        return false;
      }
      if($('#reg_userEmail').val() ==''){
        this.alertFunc('請填寫Email','填寫錯誤');
        return false;
      }
      if (!re_mail.test($('#reg_userEmail').val())) {
        this.alertFunc('Email格式不正確','填寫錯誤');
        return false;       
      }
      if($('#reg_userTel').val() ==''){
        this.alertFunc('請填寫手機','填寫錯誤');
        return false;
      }
      if (!re_Tel.test($('#reg_userTel').val())) {
        this.alertFunc('手機號碼格式不合法','填寫錯誤');
        return false;
      }
      if ($('#reg_userTel').val().length < 10 || $('#reg_userTel').val().length > 10) {
        this.alertFunc('手機號碼格式不合法','填寫錯誤');
        return false;
      }
      if (!$("#isAgree1").is(":checked")) {
        this.alertFunc('請將卷軸拉至底部完成閱讀網路投保聲明事項並勾選同意','條款未同意');
         return false;
      }
      if (!$("#isAgree2").is(":checked")) {
        this.alertFunc('請將卷軸拉至底部完成閱讀網路保險服務定型化契約並勾選同意','條款未同意');
        return false;
      }
      if (!$("#isAgree3").is(":checked")) {
        this.alertFunc('請將卷軸拉至底部完成閱讀個人資料告知事項並勾選同意','條款未同意');
        return false;
      }
      self.isLoading = true;
   
      //console.log("sendRegOtp", otpRegData);
      Common.UserStatus.otpRegister(otpRegData,
        function(type, res){
          res.data.type = type;
          //console.log(type, res)  
          sessionStorage.setItem('otp', JSON.stringify(res.data));
          sessionStorage.setItem('regData', JSON.stringify(otpRegData));
          // window.location.href='#/otp';
          self.$router.push('/otp');
        },
        function(res){
          //console.log(res);
          self.alertFunc(res.message,'OTP 發送異常'); 
          self.isLoading=false
          
        },
        function(res){
          //console.log(res);
          self.alertFunc('請稍後再試','系統異常');
          self.isLoading=false
        }        
      );
    }, 2000),
    sendLoginOtp:_.debounce(function(){
      dos.beaconSend(4,2,1,7,'','好禮三重抽','會員登入_送出','活動首頁');
      var self = this;
      //console.log("sendLoginOtp"); 
      let otpRegData = {
          account: this.account,
      };
      sessionStorage.setItem('regData', JSON.stringify(otpRegData));

      var re_ID = /^[a-zA-Z]{1}\d{9}$/;
      var re_resident = /^[A-Z][ABCD]\d{8}$/
      if($('#login_userID').val() ==''){
          this.alertFunc('請填寫身分證','填寫錯誤');
          return false;
      }
      if(!re_ID.test($('#login_userID').val()) && !re_resident.test($('#login_userID').val())) {
          this.alertFunc('身分證或居留證格式不正確!','填寫錯誤');
          return false;        
      }
      self.isLoading = true;
      Common.UserStatus.otpLogin(this.account,
        function(type, res){
          res.data.type = type;
          //console.log(type, res);
          sessionStorage.setItem('otp', JSON.stringify(res.data));
          // window.location.href='#/otp';
          self.$router.push('/otp');
        },
        function(res){
          //console.log(res);
          self.alertFunc(res.message,'OTP 發送異常');
          self.isLoading=false
        },
        function(res){
          //console.log(res);
          self.alertFunc('請稍後再試','系統異常');
          self.isLoading=false
        }
      );

    }, 2000),

    alertFunc(errorTxt, errorTitle){ //錯誤alert
      Swal.fire({
        title: errorTitle,
        text: errorTxt,
        icon: 'error'
      });
    },
    loading(){ 
      this.isLoading=false
    },

    fbShare(){
      window.open('http://www.facebook.com/share.php?u='+encodeURIComponent('https://b2c.tmnewa.com.tw/events/FY23_luckydraw/'),'_blank');
      let jwtInfo = JSON.parse(sessionStorage.getItem('jwtInfo'));
      if(jwtInfo){
        this.sendRecordAction('share71', jwtInfo.token);
      }
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
  },
};
</script>
<style lang="scss">
#login {
  background: #5B4A45;
  padding: 50px 0;
  .content {
    background: #fff;
    margin: 0 auto;
    border-radius: 10px;
    text-align: center;
    padding-top: 30px;
    color: $deepBlue;
    position: relative;
    @media screen and (max-width: $large) {
      width: 70%;
    }
    @media screen and (max-width: $pad) {
      width: 80%;
    }
    @media screen and (max-width: $small) {
      width:90%;
    }
    .loginGirl {
      position: absolute;
      right: -10%;
      bottom: -50px;
      width: 20%;
      @media screen and (max-width: $medium) {
        width: 18%;
      }
      @media screen and (max-width: $pad) {
        width: 150px;
      }
       @media screen and (max-width: $pad) {
        width: 120px;
      }
      @media screen and (max-width: $small) {
        display: none;
      }
    }
    #selectDiv {
      padding: 50px 0 180px;
      overflow: hidden;
      @media screen and (max-width: $small) {
        padding:20px 0 50px;
        .btn{margin:0 10px;box-sizing: border-box;padding:10px 20px;width:auto;}
      }
    }
    .form {
      width: 85%;
      margin: 0 auto;
      padding: 15px 0;
      @media screen and (max-width: $medium) {
        width: 80%;
      }
      @media screen and (max-width: $pad) {
        width: 95%;
      }
    }
    .inputControl {
      display: inline-block;
      width: 46%;
      margin: 10px 0;
      @media screen and (max-width: $pad) {
        width: 48%;
      }
      @media screen and (max-width: $small) {
        width:100%;
      }
       label {
        width: 60px;
        display: inline-block;
        text-align: left;
      }
    }
    input[type="text"],input[type="tel"],input[type="email"] {
      border: 1px solid $deepBlue;
      width: calc(100% - 80px);
      height: 40px;
      padding-left: 5px;
      box-sizing: border-box;
    }
    
    .btnArea{
      @media screen and (max-width: $small) {
        padding:20px 0;
      }
    }
    .btn{
      &.goSearch{
        width:auto;
        padding:12px 20px;
      }
      @media screen and (max-width: $small) {
        width:auto;
        display: inline-block;
        margin: 0 10px; 
        padding:10px 20px;
        box-sizing: border-box;
      }
      
    }
    #loginDiv{
      overflow: hidden;
      padding:50px 0 100px;
      @media screen and (max-width: $small) {
        padding:20px 0;
        .btn{width:90%;display:block;margin:10px auto;box-sizing: border-box;}
      }
    }
  }
}
#logout {
    position: absolute;
    left: 0;
    top: 0;
    background: $pink;
    color: #fff;
    padding: 10px 20px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    &:hover{
      transition: all 200ms linear;
      background:#e57b75;
    }
  }
.asideBar{
  position:fixed;
  right:0;
  bottom:200px;
  z-index: 500;
  text-align: center;
  background:#23a69c;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding:5px 10px;
  box-sizing: border-box;
  font-weight:bold;
  color:#fff;
  @media screen and (max-width: $small) {
    font-size:12px;
    top:inherit;
    bottom:145px;
  }
  img{
    margin-top:-30px;
    width: 80px;
  }
  a{
    background:#FEFEBE;
    color:#23a69c;
    padding:5px 10px;
    margin: 5px 0;
    display: block;
    font-weight:bold;
    border-radius: 5px;
  }
 
}
.correct {
  .swal2-show {
    background-color: #e4efe7;
    padding: 50px 0;

    &::before {
      content: url("../assets/pop-boy.svg");
      right: -45%;
      bottom: -40%;
      position: absolute;
      @media screen and (max-width: $small) {
        display:none
      }
    }
  }
  .swal2-html-container {
    font-weight: bold;
  }
  .swal2-title {
    color: $blue;
  }
  .award {
    padding: 10px 20px;
    box-sizing: border-box;
    border: 2px solid $blue;
    background: #fff;
    display: inline-block;
    border-radius: 10px;
    color: $blue;
    margin: 5px auto;
  }
}
.fbShare{
  position: fixed;
  z-index: 1000;
  right: 0px;
  bottom:100px;
  cursor: pointer;
  img{display:block;width:104px;
    @media screen and (max-width: $padMini) {
      width:80px;
    }  
  }
  @media screen and (max-width: $small) {
      bottom:70px;
  }
}
.policy{
    margin:10px auto;
    .red{color:#b90e0e;margin:10px 0;}
    .policyFrame{
        width:48%;
        display:inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
        margin:0 1%;
        @media screen and (max-width: $small) {
            width:98%;
            margin:2% auto;
        }
        &.single{
            width:98%;
            margin:2% auto;
        }
        #policyDiv1,#policyDiv2,#policyDiv3{
             box-sizing: border-box;
            height:200px;
            overflow-y:scroll;
        }
        .policyCon{
            padding:10px;  
            text-align: left;
            font-size:14px;
            line-height:20px;
            h2{font-size:18px;margin:5px 0;} 
            h3{font-size:16px;margin:2px 0;}
            a{color:$pink}
        }
        .agreeDiv{
            margin:10px auto 0;
            background:#ddd;
            padding:10px 0;
            color:#083230;

            span{display:inline-block;}
            label{
            transform: scale(1);
            display: inline-block;
            transition: all 200ms ease-in-out;
            @media screen and (max-width: 1200px) {
                font-size:13px;
             }
             @media screen and (max-width: $pad) {
                display: inline-block;
                width: 85%;
                text-align: left;
                vertical-align:top;
             }
            }
            .disable+label{
            opacity:0.3;
            transition: all 200ms linear;
            transform: scale(0.9);
           }
          
        } 
    }
}
.activity{
      .inlineInput{
        width:100%;
        label{width:80px;display:inline-block}
        input[type="text"]{
          width: calc(100% - 100px) !important
        }
      }
}
</style>
