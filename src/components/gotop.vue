<template>
    <div
      class="goTop iconfont ml-gotop"
      :class="isTop ? 'goTopAfter' : ''" 
      @click="goTop()"
    ></div>
</template>
<script>
export default {
  name: "gotop",
  data() {
    return {
      scrollNum: 0, //滾動距離
      isTop: false, //是否顯示回到頂部按鈕
    };
  },
  mounted() {
        window.addEventListener("scroll", () => {
        let top =
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            window.pageYOffset;
        this.scrollNum = top;
        if (top >= 100) {
            this.isTop = true;
        } else {
            this.isTop = false;
        }
        });
  },
  methods:{
    goTop() {
      $('html,body').stop().animate({
        scrollTop: 0
      }, 'slow', 'swing');
    },
  }
};
</script>
<style lang="scss">
.goTop {
  position: fixed;
  bottom: -100px;
  right: 1.5%;
  width: 50px;
  height: 50px;
  border-radius:10px;
  text-align: center;
  z-index: 100;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  background: rgba(0,0,0,0.3);
  @media screen and (max-width: $small) {
    right:2%;
  }
  &::after{
    content:"";
    display:inline-block; 
    background-image: url("../assets/arrow-top.svg");
    background-position: center;
    background-repeat: no-repeat;
    width:32px;
    height:32px;
    margin-top:5px;
    opacity:0.7;
  }
  &:hover{
    background: rgba(0,0,0,0.5);
    transition: 0.3s ease-in-out;
  }
}
.goTopAfter {
  transition: 0.3s ease-in-out;
  bottom: 30px;
  @media screen and (max-width: $small) {
    bottom:10px;
  }
}
</style>


 
  
  