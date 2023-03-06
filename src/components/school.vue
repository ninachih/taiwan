<template>
    <div class="school">
        <h2 class="title2 center">保險小學堂</h2>
        <div class="container">
            <div class="schoolPic"><img src="../assets/book.svg" alt=""></div>
            <div class="line"></div>
            <div class="schoolList">
                <ul>
                    <li>租借車不傷情，保障荷包安心遊</li>
                    <li>環島達人公開機車環島重點！</li>
                    <li>國內旅遊遇上意外怎麼辦?</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "school",
  
};
</script>

<style lang="scss">
.school{
    padding:50px 0;
    background:$lightGreen;
    font-weight:bold;
    .container{
        background:$mainColor;
        border: 2px solid #EBECED;
        box-shadow: 0px 4px 4px $btnGray;
        border-radius: 30px;
        display:flex;
        padding:35px 0;
        box-sizing:border-box;
        width:900px;
        .schoolPic{
            padding:0 100px;
        }
        .line{
           border-right:1px solid $gray;
           position:relative;
           &::before{
            content:"";
            width:8px;
            height:8px;
            border-radius:8px;
            background:$gray;
            position:absolute;
            top:-4.95px;
            right:-4.95px;
           }
           &::after{
            content:"";
            width:8px;
            height:8px;
            border-radius:8px;
            background:$gray;
            position:absolute;
            bottom:-4.95px;
            right:-4.95px;
           }
        }
        .schoolList{
            padding:0 20px;
            color:$deepGray;
            line-height:60px;
            box-sizing: border-box;
            padding:10px 50px;
            li{
                text-decoration: underline;
                &::before{
                    content:"";
                    width:10px;
                    height:10px;
                    display: inline-block;
                    border-radius:10px;
                    background:$deepGray;
                    margin-right:10px;
                }
            }
        }
    }
}
</style>