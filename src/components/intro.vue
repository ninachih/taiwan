<template>
    <div class="intro">
        <div class="container">
            <h2 class="title">國旅的風險 都幫你想到了！</h2>
            <p class="text">跟著旅程投保，保費最低<span>36</span>元起</p>
            <div class="introList">
                <div class="introDiv">
                    <div class="title">國內旅程延誤</br>免擔心</div>
                    <img src="../assets/pic1.svg" alt="">
                    <p>飛機火車船班客運延誤，<strong>超過4hr提供定額2,000元</strong>。</p>
                </div>
                <div class="introDiv">
                    <div class="title">出發前 1 小時</br>就可保</div>
                    <img src="../assets/pic2.svg" alt="">
                    <p>網路投保就是快，5分鐘4步驟一次搞定。</p>
                </div>
                <div class="introDiv">
                    <div class="title">個人責任保險</br>最高60萬元</div>
                    <img src="../assets/pic3.svg" alt="">
                    <p>不小心弄壞民宿、飯店設施都有賠，自家寵物咬傷別人也有賠。</p>
                </div>
                <div class="introDiv">
                    <div class="title">交通意外事故</br>保障倍增</div>
                    <img src="../assets/pic4.svg" alt="">
                    <p>自駕出遊上國道飛來橫禍，搭乘大眾運輸工具遇到車禍，<strong>最高理賠 200 萬元。</strong></p>
                </div>
                <div class="introDiv">
                    <div class="title">租車意外事故</br>免煩惱</div>
                    <img src="../assets/pic5.svg" alt="">
                    <p>自己受傷、車碰車損壞、對方人受傷、車損傷，保障通通有。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "intro",
  
};
</script>

<style lang="scss">
.intro{
    padding:50px 0;
    .text{
        span{
            color:$pink;
            font-size:36px;
            position: relative;
            top: 3px;
        }
    }
    .container{
        margin:0 auto;
    }
    .introList{
        display: flex;
        margin:20px auto;
        .introDiv{width:17%;text-align: center;margin:0 20px;
            p{text-align:justify;margin-top:10px;}
        }
        .title{font-size:24px;}
    }
}
</style>