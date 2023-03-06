<template>
  <section id="QA">
    <h2 class="title">常見問題</h2>
    <div class="container">
      <b-card no-body>
        <b-tabs card>
          <b-tab :title="tab.tab_title" v-for="(tab, tab_index) in tabs" :key="tab_index">
            <div v-for="(content,content_index) in tab.tab_content" :key="content_index">
              <div class="QFrame" @click="qaToggle(content)">
                <div class="Question">
                  {{ content.question }}
                  <transition name="fade">
                    <div class="answer" v-if="content.qaShow == true">
                      <div v-html="content.answer"></div>
                    </div>
                  </transition>
                </div>
                <div class="QBtn">
                  <img src="../assets/arrow.png" :class="{ rotate: content.qaShow }" />
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </b-card>
      <p class="normalText center">若仍有疑問，請撥打客服專線0800-366-168為您提供協助</p>
      <a href="#/count1" class="btn center">立即投保 <img src="../assets/go.svg" alt=""></a>
    </div>
  </section>
</template>
<script>
export default {
  name: "QA",
  data() {
    return {
      tabs: [
        {
          tab_title: "優惠活動",
          tab_content: [
            {
              question: "如何獲得多次優惠活動？",
              answer: "<p>只要成功完成指定任務或網路投保本次活動推薦的任一保險商品(汽車強制險＋任意險、機車強制險＋任意險，或汽／機車之任意險同時勾選電子保單；住宅火險+電子保單、旅行平安險、傷害險)並選擇使用電子保單1張保單即可獲得3次抽獎機會；2張保單可獲得６次抽獎機會．．．以此類推。</p><p>三重抽獎機會分別為：第１抽：【立即抽】；第２抽【大獎】；第３抽：【電子保單獎】</p>",
              qaShow: false,
            },
            {
              question: "汽、機車 只投保強制險也可獲得 抽獎機會嗎？",
              answer: "<p>可以喔!汽、機車單保強制險可參加車險喬遷獎、車險新保獎的立即抽活動乙次。</p><p>建議您投保強制險時，也可同時審視自己的保障與生活上的風險，投保強制險時加保任意險，除了增加保障外，還可以獲得大獎、立即抽等抽獎機會。</p>",
              qaShow: false,
            },
            {
              question:
                "若只買汽／機車任意險可以獲得抽獎機會嗎？",
              answer:
                "<p>汽／機車任意險需同時勾選使用電子保單才可獲得大獎、立即抽抽獎機會喔！</p><p>車險喬遷獎、續保獎保單內皆須包含強制險才可獲得抽獎機會。</p>",
              qaShow: false,
            },
            {
              question:
                "我有投保完成，為何無法進行立即抽？",
              answer: "<p>因您的保單需經網路投保審核流程，確認審核及付款成功後才可參加抽獎活動，審核期約２個工作天，您可於2個工作天後再次登入活動頁面。若3個 工作天後仍查不到，可E-mail至「網路投保抽獎」活動小組詢問。</p><p><a href='mailto:frank.chou@tmnewa.com.tw'><E-mail : frank.chou@tmnewa.com.tw></a></p><p class='red'>＊請注意：參加投保任務者，要保人身份證字號需與會員註冊時填寫的資料相符，抽獎機會才會匯入會員帳戶中，抽獎活動僅限會員參加。</p>",
              qaShow: false,
            },
            {
              question:
                "我已經先在新安東京海上產物保險網路投保成功後才發現有這個活動，請問這張保單能得到抽獎機會嗎？",
              answer: "只要您的網路投保日期是於本活動期間內(2023年02月1日00:00至2023年06月30日23:59)，且網路投保的保險商品內容與本次活動說明指定保險商品相同，則可在本活動註冊(登入)後查到您所獲得的抽獎機會(請見上述Q4)。",
              qaShow: false,
            },
            {
              question:
                "如果投保後進行保單異動(含批改、過戶、變更要、被保險人等)，仍然保有抽獎資格嗎？",
              answer: "很抱歉，如果所抽出的得獎者經查明該中獎的保單已退保或變更被保險人，則失去得獎資格，即使事後再重覆投保也無法獲得該獎項，得獎者視為放棄活動資格。",
              qaShow: false,
            },
            {
              question:
                "如果在「立即抽」抽中獎項，獎品會馬上寄給我嗎？",
              answer: "<p>【立即抽】獎項為電子禮券，您可於中獎後於網頁上透過連結獲得獎項。</p>",
              qaShow: false,
            },
            {
              question:
                "請問我過去有參與過網路投保相關活動，本次活動還需要再註冊一次嗎？",
              answer: "為提供完善的客戶服務，抽獎活動將與會員資料統一，未曾註冊網路投保會員請重新註冊即可登入抽獎活動，已註冊網路投保會員可直接於活動網頁進行登入。",
              qaShow: false,
            },
            {
              question:
                "我在2023年1月期間完成投保且符合抽獎資格，可否繼續參加2023年2月~6月的「網路投保-開運三重抽」的抽獎活動？",
              answer: "您可以於活動頁登入後繼續參與【立即抽】抽獎活動，但【大獎】及【電子保單獎】抽獎資格以投保日當季抽獎資格為限。",
              qaShow: false,
            },
            {
              question:
                "我在1月進行投保，是否可以獲得車險喬遷獎、車險新保獎抽獎資格？",
              answer: "車險喬遷獎、車險新保獎為加碼活動，僅適用活動時間2023/02/01-2023/06/30內投保且符合資格的保單，投保日期以要保日期為準。",
              qaShow: false,
            },
          ]
        },
        {
          tab_title: "商品相關",
          tab_content:[
        {
          question: "商品相關？",
          answer: "<p>只要成功完成指定任務或網路投保本次活動推薦的任一保險商品(汽車強制險＋任意險、機車強制險＋任意險，或汽／機車之任意險同時勾選電子保單；住宅火險+電子保單、旅行平安險、傷害險)並選擇使用電子保單1張保單即可獲得3次抽獎機會；2張保單可獲得６次抽獎機會．．．以此類推。</p><p>三重抽獎機會分別為：第１抽：【立即抽】；第２抽【大獎】；第３抽：【電子保單獎】</p>",
          qaShow: false,
        },
        {
          question: "汽、機車 只投保強制險也可獲得 抽獎機會嗎？",
          answer: "<p>可以喔!汽、機車單保強制險可參加車險喬遷獎、車險新保獎的立即抽活動乙次。</p><p>建議您投保強制險時，也可同時審視自己的保障與生活上的風險，投保強制險時加保任意險，除了增加保障外，還可以獲得大獎、立即抽等抽獎機會。</p>",
          qaShow: false,
        },
        {
          question:
            "若只買汽／機車任意險可以獲得抽獎機會嗎？",
          answer:
            "<p>汽／機車任意險需同時勾選使用電子保單才可獲得大獎、立即抽抽獎機會喔！</p><p>車險喬遷獎、續保獎保單內皆須包含強制險才可獲得抽獎機會。</p>",
          qaShow: false,
        },
        {
          question:
            "我有投保完成，為何無法進行立即抽？",
          answer: "<p>因您的保單需經網路投保審核流程，確認審核及付款成功後才可參加抽獎活動，審核期約２個工作天，您可於2個工作天後再次登入活動頁面。若3個 工作天後仍查不到，可E-mail至「網路投保抽獎」活動小組詢問。</p><p><a href='mailto:frank.chou@tmnewa.com.tw'><E-mail : frank.chou@tmnewa.com.tw></a></p><p class='red'>＊請注意：參加投保任務者，要保人身份證字號需與會員註冊時填寫的資料相符，抽獎機會才會匯入會員帳戶中，抽獎活動僅限會員參加。</p>",
          qaShow: false,
        },
        {
          question:
            "我已經先在新安東京海上產物保險網路投保成功後才發現有這個活動，請問這張保單能得到抽獎機會嗎？",
          answer: "只要您的網路投保日期是於本活動期間內(2023年02月1日00:00至2023年06月30日23:59)，且網路投保的保險商品內容與本次活動說明指定保險商品相同，則可在本活動註冊(登入)後查到您所獲得的抽獎機會(請見上述Q4)。",
          qaShow: false,
        },
        {
          question:
            "如果投保後進行保單異動(含批改、過戶、變更要、被保險人等)，仍然保有抽獎資格嗎？",
          answer: "很抱歉，如果所抽出的得獎者經查明該中獎的保單已退保或變更被保險人，則失去得獎資格，即使事後再重覆投保也無法獲得該獎項，得獎者視為放棄活動資格。",
          qaShow: false,
        },
        {
          question:
            "如果在「立即抽」抽中獎項，獎品會馬上寄給我嗎？",
          answer: "<p>【立即抽】獎項為電子禮券，您可於中獎後於網頁上透過連結獲得獎項。</p>",
          qaShow: false,
        },
        {
          question:
            "請問我過去有參與過網路投保相關活動，本次活動還需要再註冊一次嗎？",
          answer: "為提供完善的客戶服務，抽獎活動將與會員資料統一，未曾註冊網路投保會員請重新註冊即可登入抽獎活動，已註冊網路投保會員可直接於活動網頁進行登入。",
          qaShow: false,
        },
        {
          question:
            "我在2023年1月期間完成投保且符合抽獎資格，可否繼續參加2023年2月~6月的「網路投保-開運三重抽」的抽獎活動？",
          answer: "您可以於活動頁登入後繼續參與【立即抽】抽獎活動，但【大獎】及【電子保單獎】抽獎資格以投保日當季抽獎資格為限。",
          qaShow: false,
        },
        {
          question:
            "我在1月進行投保，是否可以獲得車險喬遷獎、車險新保獎抽獎資格？",
          answer: "車險喬遷獎、車險新保獎為加碼活動，僅適用活動時間2023/02/01-2023/06/30內投保且符合資格的保單，投保日期以要保日期為準。",
          qaShow: false,
        },
          ]
          
        },
        {
          tab_title: "網路投保",
          tab_content:[
            {
              question: "網路投保？",
              answer: "<p>只要成功完成指定任務或網路投保本次活動推薦的任一保險商品(汽車強制險＋任意險、機車強制險＋任意險，或汽／機車之任意險同時勾選電子保單；住宅火險+電子保單、旅行平安險、傷害險)並選擇使用電子保單1張保單即可獲得3次抽獎機會；2張保單可獲得６次抽獎機會．．．以此類推。</p><p>三重抽獎機會分別為：第１抽：【立即抽】；第２抽【大獎】；第３抽：【電子保單獎】</p>",
              qaShow: false,
            },
            {
              question: "汽、機車 只投保強制險也可獲得 抽獎機會嗎？",
              answer: "<p>可以喔!汽、機車單保強制險可參加車險喬遷獎、車險新保獎的立即抽活動乙次。</p><p>建議您投保強制險時，也可同時審視自己的保障與生活上的風險，投保強制險時加保任意險，除了增加保障外，還可以獲得大獎、立即抽等抽獎機會。</p>",
              qaShow: false,
            },
            {
              question:
                "若只買汽／機車任意險可以獲得抽獎機會嗎？",
              answer:
                "<p>汽／機車任意險需同時勾選使用電子保單才可獲得大獎、立即抽抽獎機會喔！</p><p>車險喬遷獎、續保獎保單內皆須包含強制險才可獲得抽獎機會。</p>",
              qaShow: false,
            },
            {
              question:
                "我有投保完成，為何無法進行立即抽？",
              answer: "<p>因您的保單需經網路投保審核流程，確認審核及付款成功後才可參加抽獎活動，審核期約２個工作天，您可於2個工作天後再次登入活動頁面。若3個 工作天後仍查不到，可E-mail至「網路投保抽獎」活動小組詢問。</p><p><a href='mailto:frank.chou@tmnewa.com.tw'><E-mail : frank.chou@tmnewa.com.tw></a></p><p class='red'>＊請注意：參加投保任務者，要保人身份證字號需與會員註冊時填寫的資料相符，抽獎機會才會匯入會員帳戶中，抽獎活動僅限會員參加。</p>",
              qaShow: false,
            },
            {
              question:
                "我已經先在新安東京海上產物保險網路投保成功後才發現有這個活動，請問這張保單能得到抽獎機會嗎？",
              answer: "只要您的網路投保日期是於本活動期間內(2023年02月1日00:00至2023年06月30日23:59)，且網路投保的保險商品內容與本次活動說明指定保險商品相同，則可在本活動註冊(登入)後查到您所獲得的抽獎機會(請見上述Q4)。",
              qaShow: false,
            },
            {
              question:
                "如果投保後進行保單異動(含批改、過戶、變更要、被保險人等)，仍然保有抽獎資格嗎？",
              answer: "很抱歉，如果所抽出的得獎者經查明該中獎的保單已退保或變更被保險人，則失去得獎資格，即使事後再重覆投保也無法獲得該獎項，得獎者視為放棄活動資格。",
              qaShow: false,
            },
            {
              question:
                "如果在「立即抽」抽中獎項，獎品會馬上寄給我嗎？",
              answer: "<p>【立即抽】獎項為電子禮券，您可於中獎後於網頁上透過連結獲得獎項。</p>",
              qaShow: false,
            },
            {
              question:
                "請問我過去有參與過網路投保相關活動，本次活動還需要再註冊一次嗎？",
              answer: "為提供完善的客戶服務，抽獎活動將與會員資料統一，未曾註冊網路投保會員請重新註冊即可登入抽獎活動，已註冊網路投保會員可直接於活動網頁進行登入。",
              qaShow: false,
            },
            {
              question:
                "我在2023年1月期間完成投保且符合抽獎資格，可否繼續參加2023年2月~6月的「網路投保-開運三重抽」的抽獎活動？",
              answer: "您可以於活動頁登入後繼續參與【立即抽】抽獎活動，但【大獎】及【電子保單獎】抽獎資格以投保日當季抽獎資格為限。",
              qaShow: false,
            },
            {
              question:
                "我在1月進行投保，是否可以獲得車險喬遷獎、車險新保獎抽獎資格？",
              answer: "車險喬遷獎、車險新保獎為加碼活動，僅適用活動時間2023/02/01-2023/06/30內投保且符合資格的保單，投保日期以要保日期為準。",
              qaShow: false,
            },
          ]
        },
        {
          tab_title: "繳費相關",
          tab_content:[
            {
              question: "繳費相關？",
              answer: "<p>只要成功完成指定任務或網路投保本次活動推薦的任一保險商品(汽車強制險＋任意險、機車強制險＋任意險，或汽／機車之任意險同時勾選電子保單；住宅火險+電子保單、旅行平安險、傷害險)並選擇使用電子保單1張保單即可獲得3次抽獎機會；2張保單可獲得６次抽獎機會．．．以此類推。</p><p>三重抽獎機會分別為：第１抽：【立即抽】；第２抽【大獎】；第３抽：【電子保單獎】</p>",
              qaShow: false,
            },
            {
              question: "汽、機車 只投保強制險也可獲得 抽獎機會嗎？",
              answer: "<p>可以喔!汽、機車單保強制險可參加車險喬遷獎、車險新保獎的立即抽活動乙次。</p><p>建議您投保強制險時，也可同時審視自己的保障與生活上的風險，投保強制險時加保任意險，除了增加保障外，還可以獲得大獎、立即抽等抽獎機會。</p>",
              qaShow: false,
            },
            {
              question:
                "若只買汽／機車任意險可以獲得抽獎機會嗎？",
              answer:
                "<p>汽／機車任意險需同時勾選使用電子保單才可獲得大獎、立即抽抽獎機會喔！</p><p>車險喬遷獎、續保獎保單內皆須包含強制險才可獲得抽獎機會。</p>",
              qaShow: false,
            },
            {
              question:
                "我有投保完成，為何無法進行立即抽？",
              answer: "<p>因您的保單需經網路投保審核流程，確認審核及付款成功後才可參加抽獎活動，審核期約２個工作天，您可於2個工作天後再次登入活動頁面。若3個 工作天後仍查不到，可E-mail至「網路投保抽獎」活動小組詢問。</p><p><a href='mailto:frank.chou@tmnewa.com.tw'><E-mail : frank.chou@tmnewa.com.tw></a></p><p class='red'>＊請注意：參加投保任務者，要保人身份證字號需與會員註冊時填寫的資料相符，抽獎機會才會匯入會員帳戶中，抽獎活動僅限會員參加。</p>",
              qaShow: false,
            },
            {
              question:
                "我已經先在新安東京海上產物保險網路投保成功後才發現有這個活動，請問這張保單能得到抽獎機會嗎？",
              answer: "只要您的網路投保日期是於本活動期間內(2023年02月1日00:00至2023年06月30日23:59)，且網路投保的保險商品內容與本次活動說明指定保險商品相同，則可在本活動註冊(登入)後查到您所獲得的抽獎機會(請見上述Q4)。",
              qaShow: false,
            },
            {
              question:
                "如果投保後進行保單異動(含批改、過戶、變更要、被保險人等)，仍然保有抽獎資格嗎？",
              answer: "很抱歉，如果所抽出的得獎者經查明該中獎的保單已退保或變更被保險人，則失去得獎資格，即使事後再重覆投保也無法獲得該獎項，得獎者視為放棄活動資格。",
              qaShow: false,
            },
            {
              question:
                "如果在「立即抽」抽中獎項，獎品會馬上寄給我嗎？",
              answer: "<p>【立即抽】獎項為電子禮券，您可於中獎後於網頁上透過連結獲得獎項。</p>",
              qaShow: false,
            },
            {
              question:
                "請問我過去有參與過網路投保相關活動，本次活動還需要再註冊一次嗎？",
              answer: "為提供完善的客戶服務，抽獎活動將與會員資料統一，未曾註冊網路投保會員請重新註冊即可登入抽獎活動，已註冊網路投保會員可直接於活動網頁進行登入。",
              qaShow: false,
            },
            {
              question:
                "我在2023年1月期間完成投保且符合抽獎資格，可否繼續參加2023年2月~6月的「網路投保-開運三重抽」的抽獎活動？",
              answer: "您可以於活動頁登入後繼續參與【立即抽】抽獎活動，但【大獎】及【電子保單獎】抽獎資格以投保日當季抽獎資格為限。",
              qaShow: false,
            },
            {
              question:
                "我在1月進行投保，是否可以獲得車險喬遷獎、車險新保獎抽獎資格？",
              answer: "車險喬遷獎、車險新保獎為加碼活動，僅適用活動時間2023/02/01-2023/06/30內投保且符合資格的保單，投保日期以要保日期為準。",
              qaShow: false,
            },
          ]
        },
      ]
    };
  },
  methods: {    
    qaToggle(content) {
      content.qaShow = !content.qaShow;
    },
  },
};
</script>
<style lang="scss">
#QA {
  background-color: $lightBlue;
  background-repeat: no-repeat;
  background-position: right bottom;
  padding-bottom: 120px;
  font-weight: bold;

  @media screen and (max-width: $large) {
    background-image: none;
    padding-bottom: 50px;
  }
  .card-header ul{
    display: flex;
    margin: 35px 0;

    li {
      a{
        display:block;
        padding: 10px 30px;
        border: 1px solid $mainBlue;
        border-radius: 50px;
        box-sizing: border-box;
        background: $mainColor;
        color: $deepGray;
        margin: 0 10px;
        cursor: pointer;
        &:hover,
        &.active {
          transition: all 200ms ease-in-out;
          background: $mainBlue;
          color: $mainColor;
        }
      }
    }
  }
  .QFrame {
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: left 10px top 15px;
    padding: 15px 10px;
    border: 1px solid #cbd4cf;
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
    line-height: 35px;
    margin: 10px 0;
    border-left: 11px solid $mainBlue;

    .Question {
      width: 96%;
      display: inline-block;
      margin-left: 1%;

      @media screen and (max-width: $small) {
        margin-left: 10%;
        width: 86%;
        line-height: 25px;
      }
    }

    .QBtn {
      display: inline-block;
      width: 3%;
      vertical-align: top;
      text-align: center;

      img {
        display: inline-block;
        margin: 0 auto;

        &.rotate {
          transform: rotateX(-180deg);
        }
      }
    }

    .answer {
      border-top: 1px dashed #ccc;
      padding-top: 10px;
      margin-top: 10px;
    }

  }
  .btn{
    margin:0 auto;
    display: block;
  }
}
</style>
