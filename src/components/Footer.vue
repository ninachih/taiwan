<template>
  <footer>
    <div class="container">
      <img src="../assets/tmnewawhite.svg" alt="" class="logo left" />
      <div class="right">
        <ul class="footerList">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tmnewa.com.tw/"
              >新安東京海上產險官網 </a
            >｜
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ecchat.tmnewa.com.tw/client/client.html"
              >聯絡我們</a
            >
            ｜
          </li>
          <li><a href="tel:0800-369-168">網路服務專線：0800-366-168</a> ｜</li>
          <li>公司地址：104台北市中山區南京東路三段130號8~13樓</li>
        </ul>
        <ul class="footerList">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.nlia.org.tw/modules/tadnews/page.php?ncsn=114&amp;nsn=429#A"
              >保險業經營電子商務自律規範</a
            >
            ｜
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.fsc.gov.tw/ch/index.jsp"
              >金融監督管理委員會</a
            >
            ｜
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tmnewa.com.tw/FTStatement.aspx?StatementID=a60d5da5-ff4c-473f-9593-d85ae78970c2"
              >隱私權保護事項</a
            >
            ｜
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tmnewa.com.tw/FTStatement.aspx?StatementID=72c9f455-b3c5-4859-ad3d-4b76e8f8ec3c"
              >客戶保護及聲明事項</a
            >
            ｜
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tmnewa.com.tw/PublicInfo.aspx"
              >公開資訊</a
            >
            ｜
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tmnewa.com.tw/InsuranceProduct.aspx"
              >商品條款</a
            >
          </li>

        </ul>
        <p>
          建議瀏覽器使用IE11、Firefox26、Chrome29、Safari9
          以上版本，以利您獲得最佳服務。
        </p>
        <p>
          Copyright © 2021 新安東京海上產物保險股份有限公司 All rights reserved.
        </p>
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
    background: #0b694e;
    text-align: center;
    color: #fff;
    padding: 10px 0;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;

    @media screen and (max-width: $medium) {
      font-size:14px;
    }
    @media screen and (max-width: $padLandscape) {
      text-align: center;
    }
    @media screen and (max-width: $small) {
      padding:30px 0;
    }
    .right{
        @media screen and (max-width: $padLandscape) {
          float: none;
        }
    }
    .logo {
        margin-top: 10px;
        @media screen and (max-width: $padLandscape) {
          display:inline-block;
          margin:10px auto;
          float: none;
        }
    }

    .footerList {
        display: flex;
        padding: 5px 0;
        box-sizing: border-box;
      
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

    p {
        color: #03906d
    }

    a {
        color: #fff
    }
}
</style>
