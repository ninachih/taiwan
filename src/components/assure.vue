<template>
    <div id="assure">
        <div class="container">
            <h2 class="title2">保障內容</h2>
    
              <b-card no-body>
                <b-tabs card>
                  <b-tab :title="tab.tab_title" v-for="(tab, index) in tabs" :key="index">
                    <p class="gray">保險項目</p>
                    <h3 v-html="tab.tab_title"></h3>
                    <div class="line"></div>
                    <div v-html="tab.tab_content"></div>
                    <div class="button-pane">

                  <p>
                      詳細承保內容請以「保單及條款」上所記載為準
                  </p>
                <a href="https://www.tmnewa.com.tw/b2c_v2/insuresinfo/travel-product.html" class="btn" target="_blank">瞭解更多</a>
              </div>
                  </b-tab>
                </b-tabs>
              </b-card>

              
        </div>
    </div>
</template>
<script>
export default {
  name: "assure",
  data(){
    return{
        active_tab:0,
        tabs:[
            {
            tab_title: "旅行平安保險",
            tab_content:"<ul><li><p class='gray'>保障項目</p><p class='gray'>保障內容</p></li><li><p>意外死亡及失能</p><p>100萬~1,500萬</p></li><li><p>傷害醫療</p><p>6萬~150萬</p></li><li><p>意外喪葬費用及失能(限15歲以下)</p><p>最高61.5萬</p></li><li><p>個人賠償責任保險(每一事故自負額2,500元)</p><p>體傷20萬/財損10萬/保期內最高60萬</p></li></ul>"
            },
            {
            tab_title: "國內旅遊不便險",
            tab_content:
                "<ul><li><p class='gray'>保障項目</p><p class='gray'>保障內容</p></li><li><p>境內旅程延誤保險金(定額)</p><p>2,000元</p></li><li><p>境內旅程取消或縮短保險(限額)</p><p>1萬元</p></li><li><p>境內劫持補償費用保險(定額)</p><p>1萬元</p></li><li><p>旅行期間行動電話失竊補償保險(定額)</p><p>5,000元</p></li><li><p>食物中毒費用保險(定額)</p><p>3,000元</p></li><li><p>旅行期間居所動產損失保險(限額)(每一事故自負額5,000元)</p><p>10萬</p></li><li><p>旅行期間居家竊盜保險(限額)</p><p>5萬元</p></li><li><p>旅行期間居家火災臨時住宿補償保險(定額)</p><p>1萬元</p></li><li><p>旅行期間居所第三人責任保險(限額)</p><p>30萬元</p></li></ul>"
            },
            {
            tab_title: "交通事故保險",
            tab_content:
                "<ul><li><p class='gray'>保障項目</p><p class='gray'>保障內容</p></li><li><p>大眾運輸事故死亡及失能(限15歲以上投保)</p><p>100萬元</p></li><li><p>國道交通事故死亡及失能(限15歲以上投保)</p><p>100萬元</p></li></ul>"
            },
            {
            tab_title: "重大燒燙傷保險",
            tab_content:
            "<ul><li><p class='gray'>保障項目</p><p class='gray'>保障內容</p></li><li><p>重大燒燙傷(限額)</p><p>100萬元</p></li></ul>"
            },
            {
            tab_title: "租車旅遊保險",
            tab_content:
            "<ul><li><p class='gray'>保障項目</p><p class='gray'>保障內容</p></li><li><p>車對車碰撞車體損失責任保險(限額)</p><p>5萬元</p></li><li><p>第三人責任保險-每一人體傷/每一意外事故(限額)</p><p>10萬元/20萬元</p></li><li><p>第三人責任保險-第三人財損(限額)</p><p>3萬元</p></li></ul>"
            },
            {
            tab_title: "三鐵活動保險",
            tab_content:
            "<ul><li><p class='gray'>保障項目</p><p class='gray'>保障內容</p></li><li><p>特定事故傷害醫療保險(熱痙攣/中暑等特定事故醫療)</p><p>10萬~150萬</p></li><li><p>境內急難救助保險(搜索救助/醫療運送/親人前往處理)(限額)</p><p>30萬/5萬/5萬元</p></li></ul>"
            }
        ]
    };
  },
  mounted(){
    
  },
  methods:{

  }
  
};
</script>

<style lang="scss">
$border: #EBECED;
#assure{
    margin:50px 0;
    .card-header{
  margin: 0 0 20px;
  ul{
    list-style: none;
    margin: 0 0 10px;
    padding: 0;
    text-align:center;
    width:100%;
    display: flex;
    li{
      cursor: pointer;
      align-items: center;
      font-weight: 600;
      float: left;
      position: relative;
      transition: 0.1s ease-in-out;
      text-decoration: none;
      font-size:24px;
      width: 16%;
      margin:0 5px;
      a{
        color: $mainBlue;
        display: block;
        padding: 5px 15px;
        box-sizing: border-box;
        border: 2px solid $border;
        border-radius: 22px;
        font-size:30px;
        background-color: #fff;
        &:hover,
        &:focus {
          background: $mainBlue;
          border: 2px solid $mainBlue;
          color:#fff;
        }
      }
   
    
      .active {
        position: relative;
        background: $mainBlue;
        z-index: 1;
        border: 2px solid $mainBlue;
        color:$mainColor
      }
    }
    
    
  }
}
.tab-content{
    background-color: #fff;
    padding: 30px 20px;
    box-sizing: border-box;
    clear: both;
    border-radius:32px;
    border: 2px solid #EBECED;
    box-shadow: 0px 4px 4px #CACCCF;
    font-weight:bold;
    h3{
        font-size:30px;
        color:$mainBlue;
        br{display:none;}
    }
    li{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            line-height:40px;
    }
    .line{
        border-bottom:2px solid $gray;
        margin:20px 0;
        &::before{
            content:"";
            width:10px;
            height:10px;
            border-radius:10px;
            float:left;
            background:$gray;
            margin-top:-4px;
        }
        &::after{
            content:"";
            width:10px;
            height:10px;
            border-radius:10px;
            float:right;
            background:$gray;
            margin-top:-4px;
        }
    }
    a {
      font-weight: 700;
      transition: color 200ms ease;
      text-align:center;  
      &:hover,
      &:focus {
        background: #fd0452;
      }
    }
    hr {
      margin: 3rem 0;
      border: 1px solid transparent;
      border-radius: 50%;
      border-top-color: $border;
    }
    .gray{
        color:$gray;
    }
    .button-pane{
        text-align:center;
        margin-top:40px;
        p{
            color:$gray;
        }
        a.btn{
            margin:30px auto;
        }
    }
  }
}

</style>