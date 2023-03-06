<template>
  <footer>
      <div class="footerList">
        <ul class="container">
            <li><a href="https://www.tmnewa.com.tw/B2C_V2/commonweb/OfficialInfo/ContactUs.aspx" target="_blank">聯繫客服</a></li>
            <li><a href="https://www.tmnewa.com.tw/customerservice/claimsettlement" target="_blank">理賠服務</a></li>
            <li><a href="https://www.tmnewa.com.tw/customerservice/documentdownload/productterms" target="_blank">商品條款</a></li>
            <li><a href="https://www.tmnewa.com.tw/customerprotectionstatement" target="_blank">聲明事項</a></li>
            <li><a href="https://www.fsc.gov.tw/ch/index.jsp" target="_blank">金融監督管理委員會</a></li>
            <li><a href="https://cpc.ey.gov.tw/" target="_blank">消費者保護</a></li>
            <li><a href="https://law.lia-roc.org.tw/Law/Content?lsid=FL034012" target="_blank">保險業經營電子商務自律規範</a></li>
            <li><a href="https://b2c.tmnewa.com.tw/blog/strength.html" target="_blank">直接投保優惠</a></li>
        </ul>
      </div>
      <div class="copyright">
        <div class="container">
          <p>
            網路服務專線：0800-366-168(上午08:30~下午17:30國定假日除外)<span class="footerLine">｜</span><span>地址：104台灣台北市中山區南京東路三段130號8-13樓</span>　
          </p>
          <p>
            建議瀏覽器使用IE11、Firefox60、Chrome69、Safari11.0.3 以上版本，以利您獲得最佳服務!
          </p>
          <p>Copyright ©2023 新安東京海上產物保險股份有限公司 All rights reserved</p>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss">

footer {
    text-align: center;
    color: #fff;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    font-size:16px;
    .footerList {
        padding: 5px 0;
        box-sizing: border-box;
        background:$green;
        padding:10px 0;
        li{display:inline-block;width: 25%;line-height:40px;}
        @media screen and (max-width: $padLandscape) {
              width: 90%;
              margin: 0 auto;
         }
         @media screen and (max-width: $pad) {
          display:block;
          text-align: center;
          padding:0;
          line-height:25px;
          width: 100%;
    
        } 
      
    }
    .copyright{
      padding:10px 0;
      background:$yellow;
      line-height:30px;
    }
    a {
        color: #fff;
        font-size:16px;
    }
}
</style>
