<template>
<div id="navBar">
  <div class="slidebox"></div>
  <div id="nav">
    <div class="container">
      <a :href="navUrl" target="_blank" class="logo"
        ><img src="../assets/tmnewa.png" alt="" />
      </a>
      <div class="link">
        <div class="linkCon">
        <router-link :to="{ path: '/', hash: '#q1' }">保單服務</router-link>
        <router-link :to="{ path: '/', hash: '#login' }">投保查詢</router-link>
        <router-link :to="{ path: '/', hash: '#notice' }"> 商品說明</router-link>
        </div>
        <div class="iconM" @click="showList">
          <div class="bar-top"></div>
          <div class="bar-middle"></div>
          <div class="bar-bottom"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      navUrl: "https://www.tmnewa.com.tw/b2c_v2/frontstage/welcome.aspx",
      screenWidth: document.body.clientWidth
    };
  },
  mounted(){
    this.mobileDevice();
    const that = this
    window.onresize = () => {
      return (() => {
      window.screenWidth = document.body.clientWidth
      that.screenWidth = window.screenWidth
      })()
    }
  },
  methods:{
    mobileDevice(){
      if(window.matchMedia('(max-width: 500px)').matches) {
        $('.linkCon').clone().appendTo(".slidebox");
         $('.linkCon a').on('click',function(){
          $(this).parent().parent('.slidebox').hide();
          $('.iconM').removeClass('active');
        })
      }
    },
    showList(){
      $('.iconM').toggleClass('active');
      $('.slidebox').slideToggle();
    },
    
  },
  watch:{
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          location.reload(true)
          that.timer = false
        }, 400)
      }
    }
  }
};
</script>
<style lang="scss">
#nav {
    width: 100%;
    height: 60px;
    border-bottom: 5px solid #966016;
    position: fixed;
    z-index: 100;
    background: #fff;
    top: 0;

    .logo {
        float: left;

        img {
            width: 200px;
            display: block;
            margin: 8px 0;
        }
    }

    .link {
        float: right;
        overflow:hidden;
        .iconM{display: none;
         @media screen and (max-width: $small) {
            display: block;
            margin: 10px 0;
            display: flex;
            flex-flow: column wrap;
            justify-content: space-between;
            height: 2.5rem;
            width: 2.5rem;
            cursor: pointer;
            .bar-top,
            .bar-middle,
            .bar-bottom {
              height: 5px;
              background: #2b2b2b;
              border-radius: 5px;
              margin: 3px 0;
              transform-origin: left;
              transition: all 0.5s;
            }
            &.active{
              .bar-top{ transform: rotate(45deg);}
              .bar-middle{transform:translateX(1rem);opacity: 0;}
              .bar-bottom {transform: rotate(-45deg);}     
            }
          }
        }
        a {
            font-weight: bold;
            color: #2d2d2d;
            line-height: 60px;
            text-decoration: none;
        }
        .linkCon{
          @media screen and (max-width: $small) {
            display: none;
          }
        }
       
    }
   
}

 .slidebox{
      display:none;
      position:fixed;
      width:100%;
      height:100vh;
      z-index: 100;
      background:#fff;
      top:65px;
      z-index: 1000;
      .linkCon{
        display:block; 
        text-align:center;
        line-height:30px;
        padding-top:30px;
        a{display:block;color:#2b2b2b;}
        span{display: none;}
      }
  }
</style>
