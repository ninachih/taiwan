<template>
  <section id="notice">
    <div class="container">
      <h2 class="title">注意事項</h2>
      <article class="content">
        <h3>【活動辦法】</h3>
        <p>一、	主辦單位：新安東京海上產物保險股份有限公司</p>
        <p>二、	活動名稱：網路投保—開運三重抽</p>
        <p>三、	活動期間：2023年02月01日00:00 至2023年06月30日23:59止</p>
        <p>四、	活動說明：參加開運三重抽，需以保單要保人資料成為新安東京海上產險網路投保會員，並於活動期間內完成以下任務，即可獲得該任務抽獎機會。</p>
        <p class="indent1">(一)	【立即抽】與【大獎】：於新安東京海上產險專區成功投保以下指定保險商品，即可獲得【立即抽】與【大獎】抽獎機會各乙次，投保單數越多，抽獎機會越多!</p>
        <p class="indent2">1.	汽/機車險：強制險＋任意險(需同時投保在一張保單內)</p>
        <p class="indent2">2.	汽/機車險：任意險+電子保單(事後更改電子保單將不納入)</p>
        <p class="indent2">3.	住宅火險(任一款＋電子保單)</p>
        <p class="indent2">4.	旅行平安險(任一方案)</p>
        <p class="indent2">5.	傷害險</p>
        <transition
          name="slide"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
        >
          <div class="slideCon" v-if="active == true">
            <p class="indent1">(二)【電子保單獎】：於新安東京海上產險網路投保專區成功投保，並選擇使用電子保單即可獲得【電子保單獎】抽獎機會乙次。</p>
            <p class="indent1">(符合上述(一)、(二)資格者，每張保單可獲得上述三筆抽獎機會-【立即抽】、【大獎】、【電子保單獎】，兩張保單即可獲得三筆抽獎機會各兩次，依此類推…</p>
            <p>舉例：小安在活動期間網路投保汽車強制責任險+任意險，且選擇電子保單，同時也投保了住火險並且選擇電子保單。兩筆保單，總共可以獲得兩次【立即抽】、兩次【大獎】抽獎機會，因為兩筆保單都有選電子保單，還可獲得兩次的【電子保單獎】抽獎機會。</p>
            <p class="indent1">(三)	分享活動於社群平台可獲得【立即抽】抽獎機會乙次，，活動期間每帳號限一次。</p>
            <p class="indent1">(四)	完成【產險知識通】問答，可獲得【立即抽】抽獎機會乙次，活動期間每帳號限一次。</p>
            <p class="indent1">(五)	車險加碼獎：</p>
            <p class="indent2">1.	車險續保獎：</p>
            <p class="indent3">續保戶透過續保入口於線上完成汽、機車投保強制險+任意險續保，即可獲得【立即抽】抽獎機會兩次。</p>
            <p class="indent2">2.	車險喬遷獎：</p>
            <p class="indent3">於線上投保專區完成汽、機車強制險投保，且前一期保單非投保新安東京海上產險者，即可獲得【立即抽】抽獎機會乙次。</p>
            <p class="indent3">投保當下無有效的強制險保單即不符合喬遷獎活動資格，如為新車投保、二手車過戶、強制險斷保皆不符合喬遷獎抽獎資格。</p>
            <p class="indent3">*斷保：強制險保期不接續、前後保單中間有空窗時間，例如：強制險2023/01/01到期，2023/1/5投保完成，2023/1/5保單才開始生效，即為斷保。</p>
            <p class="indent2">3.	車險新保獎：</p>
            <p class="indent3">於線上投保專區完成汽、機車險投保，且過去保戶與該車號未於新安東京海上產險網路投保專區投保汽車險或機車險(不論強制險或任意險)，即可獲得【立即抽】抽獎機會乙次。</p>
            <p class="indent1">(六)	您可於活動頁面查詢各獎項抽獎次數，所有抽獎皆須於活動時間內，至少完成一次活動頁面登入，始可符合資格，若未能於活動時間內完成登入、主動進行【立即抽】抽獎，視同放棄參與活動資格。</p>
            <p>五、	抽獎機會發送時間：</p>
            <p>於網路完成立即投保後，需經過網路投保審核流程，確認投保及付款成功後才發送抽獎機會，審核期約３個工作天，參加者可於３個工作天後到抽獎機會使用紀錄中查詢明細。</p>
            <p>六、抽獎說明：</p>
            <p class="indent1">(一)	【立即抽】：完成任務或投保核審成功，即可獲得「立即抽」抽獎機會，參與者可至活動頁面，登入後即可進行抽獎，立刻得知是否中獎，獎項可立即於頁面上點擊連結後使用。</p>
            <p class="indent1">(提醒您：LINE POINTS序號、電子禮券為虛擬、不記名有價票券，請您妥善保管)</p>
            <p class="indent1">(二)	【大獎】：於保單投保核審成功，即可獲得【大獎】抽獎機會乙次，依照要保時間抽出對應活動時間獎品得獎者。</p>
            <p class="indent1">(三)【電子保單獎】：投保任一保單，並勾選電子保單，即可獲得【電子保單獎】抽獎機會，依照要保時間抽出對應活動時間獎品得獎者。</p>
            <p class="indent1">(四)	若於投保後退保、或變更被保險人、要保人資料，視為放棄中獎資格。</p>
            <p class="indent1">(五)	您可於活動頁面查詢各獎項抽獎次數，抽獎機會使用期限僅限活動公告時間內，所有抽獎皆須於活動時間內，至少完成一次活動頁面登入，始可符合資格。若未能於活動時間內完成登入、主動進行【立即抽】抽獎，或因投保時間而造成抽獎機會無法即時匯入，而造成無法於活動時間內參與活動將視為放棄活動一切權利。</p> 
            <p>七、查詢個人抽獎機會數量：</p>
            <p>參加者可用會員註冊時的【身分證字號】登入活動，至抽獎機會使用紀錄中查詢個人抽獎機會明細。若對抽獎次數有疑問，可撥打0800-366168或E-mail至網路投保-好禮四重抽活動小組詢問。<a href='mailto:frank.chou@tmnewa.com.tw'>< E-mail : frank.chou@tmnewa.com.tw ></a></p>
            <p>八、獎項內容：</p>
            <p class="indent1">(一)	【立即抽】</p>
            <p class="indent2">‧ LINE POINTS 10點&emsp;共3,900名</p>
            <p class="indent2">‧ 即享券100元(電子禮券)&emsp;共250名</p>
            <p class="indent2">‧ 豬肉滿福堡(電子禮券) &emsp;共300名</p>
            <p class="indent2">‧ 即享券500元(電子禮券) &emsp;共50名</p>
            <p class="indent1">(二)	【大獎】 </p>
            <p class="indent2">‧ iPhone 14 Pro 128G(2-3月獎項，將於4月進行抽獎) &emsp;共1名</p>
            <p class="indent2">(*如遇贈品缺貨等因素將改為百貨禮券30,000元替代)</p>
            <p class="indent2">‧4-6月獎品敬請期待</p>
            <p class="indent1">(三)	【電子保單獎】</p>
            <p class="indent2">‧Nintendo Switch遊戲主機+遊戲組(遊戲隨機) (2-3月獎項，將於4月進行抽獎) &emsp;共2名</p>
            <p class="indent2">‧4-6月獎品敬請期待</p>
            
            <br/>
            <h3>【注意事項】</h3>
            <p>一、您參與本活動時，視為同意接受本活動所有內容及相關規範；倘有違反本活動相關注意規範，主辦單位得取消其參加或獲獎資格，並對於任何破壞本活動之行為保留法律追訴權。</p>
            <p>二、本活動因故無法進行時，主辦單位保留對活動網站、活動規則、獎項、抽獎時間及中獎公告等的修改權利，修改後不另行通知。</p>
            <p>三、參加者同意活動期間內所有留存或產生之任何參與活動的資料及記錄，皆以主辦單位的電腦系統與時間的記錄為主。如有任何因電腦、網路、電話、技術或不可歸責於主辦單位之事由，而使送出之資料有延遲、遺失、錯誤、無法辨識之情況，主辦單位不負責任何法律責任，參加者不得因此異議。</p>
            <p>四、參加者保證所填寫或提出之資料真實無誤，且未冒用或盜用第三人之資料，如主辦單位依參加者提供之資料無法通知其中獎時，主辦單位概不負責，如因此致損害於主辦單位或其他任何第三人，參加者應負責一切相關責任。</p>
            <p>五、中獎流程</p>
            <p class="indent1">(一) 【大獎】、【電子保單獎】將於4月、7月抽出對應獎項並進行公告，並完成完整領獎程序後寄送。</p>
            <p class="indent1">(二) 中獎者於接獲中獎通知E-mail後，請於7日內填寫領獎簽收單，拍照或掃描後以E-mail方式回覆中獎通知，以利後續寄送作業，獎項將於主辦單位確實收齊領獎相關資料後才會進行寄送。中獎者需於公告期限內回覆領獎相關資料，逾期將視同自動放棄領獎資格，主辦單位將不會另行通知。</p>
            <p class="indent1">(三) 獎項於中獎名單公告後，將透過郵寄、手機簡訊、電子郵件方式等方式寄送，請務必確認填寫資料的正確性。不論實體獎品或虛擬兌換序號，一經發送若遭拒絕受領(不論實際拒絕受領者為何人)、無人收受、地址錯誤、手機號碼錯誤或查無此人者，主辦單位概不負責補發，並有權視入圍者為棄權，而有權拒絕核發其所中之獎項(若有預繳之稅金將進行退回)，中獎者不得異議，獎品寄出後若有遺失、冒領、被竊等喪失占有之情形，一概與主辦單位無關，亦不得要求補發或其他等價之補償。</p>
            <p class="indent1">(四) 中獎名單公告</p>
            <p class="indent2">【大獎】、【電子保單獎】由主辦單位依電腦亂序抽出，並於2023年4月17日前、2023年7月17日前公布在新安東京海上產險網路投保專區<a class="link" href="https://b2c.tmnewa.com.tw/events/lotterypage/detail_winner_list.html" target="_blank">得獎公告頁</a>。</p>
            <p>六、主辦單位非獎品製造者或提供者，與各項獎品製造或服務提供之廠商無任何代理或合夥關係，本活動獎品之保固期限均依廠商出廠時實際提供者為準。本抽獎活動、獎品、禮券僅作為推展保險產品行銷之用途，並非保險契約之一部分。本活動之所有獎項不得要求更換、轉換或折換現金。如領取後對獎品之使用方式、售後服務、保固等發生任何爭議，概與主辦單位無關。如遇產品缺貨或不可抗力之事由導致獎品內容變更，主辦單位有權變更贈品，改由等值商品取代之，得獎者不得異議。</p>
            <p>七、獎項寄送地區僅限為台灣、金門、澎湖、馬祖地區，主辦單位恕不處理郵寄獎項至海外地區之事宜，獎項一經寄送，本主辦單位不負贈項無法送達及寄送時發生損毀之責任；若遇產品故障需自行與產品製造商等連繫後續保修事宜。</p>
            <p>八、本活動屬機會中獎所得，依「所得稅法」及「各類所得扣繳率標準」之規定，說明如下：若獲獎者或中獎者為中華民國境內居住之個人，於全年度中獎之獎項金額超過新台幣$1,000元，獲獎者或中獎者於年度報稅時須計入個人所得，中獎金額超過NT$20,000元(也就是NT$20,001起)，須先預先繳交10%機會中獎稅額；若獲獎者或中獎者非中華民國境內居住之個人(即在中華民國境內居住未達183天)，不論獲獎者或中獎者所得之金額，須就中獎金額扣繳20%機會中獎稅額，若未繳交稅金視同放棄中獎資格。</p>
            <p>本公司依據個人資料保護法（以下稱個資法）第六條第二項、第八條第一項(如為間接蒐集之個人資料則為第九條第一項)規定，應告知下列事項，敬請 台端詳閱及知悉：</p>
            <p class="indent1">一：蒐集目的</p>
            <p class="indent2">(一) 中獎者管理</p>
            <p class="indent2">(二) 活動相關信息通知</p>
            <p class="indent2">(三) 贈品寄送</p>
            <p class="indent1">二：蒐集之個人資料類別</p>
            <p class="indent2">包括但不限於姓名、身分證字號、出生年月日、住址、聯絡方式、婚姻、家庭、教育職業、財務情況、病歷、醫療、健康檢查、其他得以直接或間接方式識別該個人之資料，詳如活動頁內容。</p>
            <p class="indent1">三：利用之期間、地區、對象及方式</p>
            <p class="indent2">(一) 期間：</p>
            <p class="indent2">因執行業務所必須及依法令規定應為保存之期間。</p>
            <p class="indent2">(二) 對象：</p>
            <p class="indent2">本(分)公司、贈品寄送之物流公司或郵寄廠商。</p>
            <p class="indent2">(三) 地區：</p>
            <p class="indent2">上述對象所在之地區。</p>
            <p class="indent2">(四) 方式：</p>
            <p class="indent2">合於法令規定之利用方式。</p>
            <p class="indent1">四：依據個資法第三條規定，台端就本公司保有台端之個人資料得行使之權利及方式：</p>
            <p class="indent2">(一)得向本公司行使之權利：</p>
            <p class="indent3">1.向本公司查詢、請求閱覽或請求製給複製本。2.向本公司請求補充或更正。3.向本公司請求停止蒐集、處理或利用及請求刪除。</p>
            <p class="indent2">(二)行使權利之方式：</p>
            <p class="indent3">以書面或其他日後可供證明之方式。台端不提供個人資料所致權益之影響（個人資料由當事人直接蒐集之情形適用）：台端若未能提供相關個人資料時，本公司將可能無法提供台端參加本活動及其後續相關服務。</p>
          </div>
        </transition>
      </article>
      <div class="togglebutton" @click="toggle">{{ buttonTxt }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Notice",
  data() {
    return {
      active: false,
      buttonTxt: "展開內容",
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
      if (this.active) {
        this.buttonTxt = "收合內容";
      } else {
        this.buttonTxt = "展開內容";
      }
    },
    beforeEnter(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = "0px";
        }

        element.style.display = null;
      });
    },
    enter(element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = `${element.scrollHeight}px`;
        });
      });
    },
    afterEnter(element) {
      element.style.height = null;
    },
    beforeLeave(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = `${element.offsetHeight}px`;
        }
      });
    },
    leave(element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = "0px";
        });
      });
    },
    afterLeave(element) {
      element.style.height = null;
    },
  },
};
</script>
<style lang="scss">
#notice {
  background: $yellow;
  .content {
    background: #fff;
    border-radius: 10px;
    line-height: 28px;
    box-sizing: border-box;
    padding: 30px;
    overflow: hidden;
    border: 1px solid #cbd4cf;
    text-align: justify;
    @media screen and (max-width: $small) {
      padding:20px;
      line-height:25px;
    }
  }
  .togglebutton {
    margin-top: -8px;
    padding: 1em;
    background-color: $blue;
    color: #fff;
    cursor: pointer;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    text-align: center;
    &:hover {
      background: $deepBlue;
      transition: all 200ms linear;
    }
  }
  a{color:$blue;text-decoration: underline;}
  .indent1{text-indent:10px}
  .indent2{text-indent:30px}
  .indent3{text-indent:50px}
}

.slide-leave-active,
.slide-enter-active {
  overflow: hidden;
  transition: height 0.5s linear;
}
</style>
