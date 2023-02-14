<template>
  <div>
    <p>eeeee</p>
     <p>eeeee</p>
      <p>eeeee</p>
      
    <p @click="errorAlert">lotterypage</p>
    <p @click="correctAlert">lotterypage</p>
    <p @click="rememberAlert">lotterypage</p>
    <p @click="unloginAlert">lotterypage</p>
  </div>
</template>
<script>
export default {
  name: "alert",

  methods: {
    rememberAlert() {
      this.$swal({
        title: "要記得答題喔！",
        confirmButtonText: "關閉",
        customClass: {
          container: "remember",
        },
      }).then(
        function() {
          // 確定要做的事
        },
        function() {
          // 取消要做的事
        }
      );
    },
    correctAlert() {
      var self = this;
      this.$swal({
        title: "你果然是產險知識通",
        html:
          "<p>恭喜你獲得</p><div class='award'><p>LINE POINT 50點</p><p>抽獎機會</p></div>",
        confirmButtonText: "返回首頁",
        customClass: {
          container: "correct",
        },
      }).then(
        function() {
          // window.location.href = "/";
          self.$router.push('/');          
        }
      );
    },
    errorAlert() {
      var self = this;
      this.$swal({
        title: "失敗～！",
        html:
          "<p>很可惜就差一點點了</p><div class='award'><p>LINE POINT 50點</p><p>正在等你喔！</p></div>",
        confirmButtonText: "再答一次",
        cancelButtonText: "返回首頁",
        showCancelButton: true,
        customClass: {
          container: "error",
        },
      }).then(function() {
          // window.location.href = "#/knowledge";
          self.$router.push('/knowledge');
      },function() {
          // window.location.href = "/";
          self.$router.push('/');
      }
      );
    },
    unloginAlert(){
      var self = this;
      this.$swal({
        title: "你果然是產險知識通",
        html:
          "<p>恭喜你獲得</p><div class='award'><p>LINE POINT 50點</p><p>抽獎機會</p></div><div><p>立即登入/註冊</p><p>完成抽獎資格登錄</p></div>",
        confirmButtonText: "註冊",
        cancelButtonText: "登入",
        showCancelButton: true,
        customClass: {
          container: "correct",
        },
      }).then(
        function() {
          // window.location.hash = "/#login";
          self.$router.push('/#login');
        },
        function() {
          // window.location.hash = "/#login";
          self.$router.push('/#login');
        }
      );
    }
  },
};
</script>
<style lang="scss">

.remember {
  .swal2-show {
    background-image: url(../assets/class-teacher.svg);
    background-position: right 10px bottom;
    background-size: 18%;
    background-repeat: no-repeat;
    padding: 50px 0;
    box-sizing: border-box;
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
.error {
  .swal2-show {
    background-color: #fff2f3;
    padding: 50px 0;
    &::before {
      content: url("../assets/pop-girl.svg");
      right: -45%;
      bottom: -40%;
      position: absolute;
    }
    .swal2-html-container {
      font-weight: bold;
    }
    .swal2-title {
      color: $pink;
    }
    .award {
      padding: 10px 20px;
      color: $pink;
      margin: 5px auto;
    }
  }
}
</style>
