<template>
  <section id="knowledge">
    <goTop />
    <div class="container">
      <img src="../assets/class-teacher.svg" alt="" class="teacher" />
      <div class="blackBoard">
        <img src="../assets/blackboardTop.svg" alt="" />
        <div class="blackBoardCon">
          <div class="boardTxt">
            <img src="../assets/class-title.svg" alt="" />
            <article>
              <p>你準備好要成為產險知識通了嗎？</p>
              <p>
                接下來會有<span>10題測驗</span>，全部都答對就可以獲得產險知識通<span
                  >立即抽抽獎資格</span
                >！
              </p>
            </article>
            <article>
              <p>如果答錯也不要氣餒！</p>
              <p>
                所有的答案都可以在新安東京海上產險網路投保專區內找到答案，再挑戰一次！
              </p>
            </article>
            <article>立即開始挑戰吧！</article>
          </div>
        </div>
        <img src="../assets/blackBoardfooter.svg" alt="" />
      </div>
      <article id="exam">
        <form id="knowledgeData">
          <ul class="question">
            <li v-for="item in examData">
              <h2 class="Q">
                <span>{{ item.name }}</span
                >{{ item.question }}
              </h2>
              <div class="answer">
                <p>
                  <input
                    type="radio"
                    :id="item.ansID.id1"
                    :name="item.name"
                    v-on:change="keepAnswer"
                    value="A"
                  />
                  <span class="icon">A</span>
                  <label for="item.name">{{ item.answer.ans1 }}</label>
                </p>
                <p>
                  <input
                    type="radio"
                    :id="item.ansID.id2"
                    :name="item.name"
                    v-on:change="keepAnswer"
                    value="B"
                  />
                  <span class="icon">B</span>
                  <label :for="item.name">{{ item.answer.ans2 }}</label>
                </p>
                <p>
                  <input
                    type="radio"
                    :id="item.ansID.id3"
                    :name="item.name"
                    v-on:change="keepAnswer"
                    value="C"
                  />
                  <span class="icon">C</span>
                  <label :for="item.name">{{ item.answer.ans3 }}</label>
                </p>
                <p>
                  <input
                    type="radio"
                    :id="item.ansID.id4"
                    :name="item.name"
                    v-on:change="keepAnswer"
                    value="D"
                  />
                  <span class="icon">D</span>
                  <label :for="item.name">{{ item.answer.ans4 }}</label>
                </p>
              </div>
              <a :href="item.AnotherLink" class="link">{{
                item.AnotherText
              }}</a>
            </li>
          </ul>
        </form>
        <div class="center">
          <button
            class="btn center"
            @click="
              sendKnowledge();
              keepAnswer();
            "
          >
            送出答案
          </button>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import goTop from "@/components/gotop.vue";
import _ from "lodash";
// import Swal from 'sweetalert2';

export default {
  name: "knowledge",
  components: {
    goTop,
  },
  data() {
    return {
      examData: [
        {
          name: "Q1",
          ansID: {
            id1: "ans1-1",
            id2: "ans1-2",
            id3: "ans1-3",
            id4: "ans1-4",
          },
          question: "普通重型機車網路投保優惠折抵後，強制險費用是多少錢?",
          answer: {
            ans1: "一年期513元",
            ans2: "兩年期985元",
            ans3: "以上皆是",
            ans4: "以上皆非",
          },
        },
        {
          name: "Q2",
          ansID: {
            id1: "ans2-1",
            id2: "ans2-2",
            id3: "ans2-3",
            id4: "ans2-4",
          },
          question: "網路投保的缺點有哪些?",
          answer: {
            ans1: "保費昂貴",
            ans2: "沒有人服務",
            ans3: "方便快速",
            ans4: "以上皆非",
          },
          AnotherLink: "https://www.tmnewa.com.tw/b2c_v2/contents/faq.html",
          AnotherText: "* 了解更多網路投保優點",
        },
        {
          name: "Q3",
          ansID: {
            id1: "ans3-1",
            id2: "ans3-2",
            id3: "ans3-3",
            id4: "ans3-4",
          },
          question: "無人傷亡的兩車車禍保險理賠要怎麼處理，下列描述何者正確?",
          answer: {
            ans1: "若自己車子有損傷且有投保車體險需先知會投保的保險公司，進行勘車後再進行修復，維修費用依保額上限、實際狀況賠付",
            ans2: "對方車輛受損可透過自身投保的第三人責任險依照肇事責任比例賠付",
            ans3: "於事故現場可先進行拍照、依輪胎位置標繪車輛並移至路旁不妨礙交通位置再報警處裡",
            ans4: "以上皆是",
          },
        },
        {
          name: "Q4",
          ansID: {
            id1: "ans4-1",
            id2: "ans4-2",
            id3: "ans4-3",
            id4: "ans4-4",
          },
          question: "第三人責任險的第三人是指什麼?",
          answer: {
            ans1: "路人",
            ans2: "超商的老闆",
            ans3: "本車以外的乘客",
            ans4: "以上皆是",
          },

          AnotherLink: "https://www.tmnewa.com.tw/b2c_v2/contents/car-third.html",
          AnotherText: "* 了解更多第三人責任險",
        },
        {
          name: "Q5",
          ansID: {
            id1: "ans5-1",
            id2: "ans5-2",
            id3: "ans5-3",
            id4: "ans5-4",
          },
          question: "超額責任險的描述何者正確?",
          answer: {
            ans1: "只要撞到超跑才賠",
            ans2: "超過保險額度的才可進行理賠",
            ans3: "第三人責任險的附加險",
            ans4: "發生事故有肇事責任會優先透過超額責任險賠付",
          },
          AnotherLink: "https://www.tmnewa.com.tw/b2c_v2/contents/excess.html",
          AnotherText: "* 了解更多超額責任險",
        },
        {
          name: "Q6",
          ansID: {
            id1: "ans6-1",
            id2: "ans6-2",
            id3: "ans6-3",
            id4: "ans6-4",
          },
          question: "網路投保的繳費方式可透過那些工具?",
          answer: {
            ans1: "要保人的信用卡",
            ans2: "要保人的銀行帳戶",
            ans3: "要保人的電子支付",
            ans4: "以上皆是",
          },
        },
        {
          name: "Q7",
          ansID: {
            id1: "ans7-1",
            id2: "ans7-2",
            id3: "ans7-3",
            id4: "ans7-4",
          },
          question: "曉華因道路濕滑騎車自摔受傷了，機車險推薦怎麼保曉華才可獲得醫療費用的保障?",
          answer: {
            ans1: "需投保駕駛人傷害險",
            ans2: "只要買強制險就好",
            ans3: "加保第三人責任險即可",
            ans4: "投保乘客責任險",
          },
        },
        {
          name: "Q8",
          ansID: {
            id1: "ans8-1",
            id2: "ans8-2",
            id3: "ans8-3",
            id4: "ans8-4",
          },
          question: "時常開車上國道，汽車險推薦怎麼保可以獲得最大保障?",
          answer: {
            ans1: "只投保強制險",
            ans2: "加保第三人責任險",
            ans3: "加保第三人責任險與超額責任險-國道倍增型獲得兩倍保額的保障",
            ans4: "加保超額責任險-基本型即可",
          },
        },
        {
          name: "Q9",
          ansID: {
            id1: "ans9-1",
            id2: "ans9-2",
            id3: "ans9-3",
            id4: "ans9-4",
          },
          question: "陳媽將房子出租給曉華，住宅火災保險推薦怎麼保讓雙方都獲得保障?",
          answer: {
            ans1: "陳媽可投保住宅火災保險-基本保障款",
            ans2: "曉華可投保住宅火災保險-租屋放心款",
            ans3: "以上皆是",
            ans4: "以上皆非",
          },
          AnotherLink: "https://www.tmnewa.com.tw/b2c_v2/contents/house.html",
          AnotherText: "* 了解更多住宅火險",
        },
        {
          name: "Q10",
          ansID: {
            id1: "ans10-1",
            id2: "ans10-2",
            id3: "ans10-3",
            id4: "ans10-4",
          },
          question: "旅平險線上投保的優點何者描述有誤?",
          answer: {
            ans1: "出發一小時前投保，出發時即生效!",
            ans2: "網路投保方便又快速",
            ans3: "保障額度任選並可立即試算",
            ans4: "立即投保立即生效",
          },
          AnotherLink: "https://b2c.tmnewa.com.tw/portal/insurance/travel/taiwan/",
          AnotherText: "* 了解更多旅平險",
        },
      ],
      userData: {},
      token: "",
    };
  },

  mounted() {
    this.getVal();
  },
  methods: {
    qaToggle(item) {
      item.qaShow = !item.qaShow;
    },

    sendKnowledge: _.debounce(function () {
      var self = this;
      const axios = require("axios").default;
      var knowledgeData = $("#knowledgeData").serializeArray();
      //check是否答對
      axios.post(
        Common.Config.Api.Activity.checkAnswer,
        {
          answerList: knowledgeData,
        }
      ).then(function (response) {
        if (response.data.code == 200) { // check答對
          sessionStorage.setItem("knowledgeData", JSON.stringify(knowledgeData));
            
          var userData = JSON.parse(sessionStorage.getItem("jwtInfo"));
          if (userData) { // 已登入
            var token = userData.token;
            axios.post(
              Common.Config.Api.Activity.searchReply, //查詢有無答題記錄
              { actionId: "ques71" },
              {
                headers: {
                  Authorization: token,
                },
              }
            ).then(function (response) {
              sessionStorage.removeItem("knowledgeData");
              if (response.data.data == true) { //已答過題目
                Swal.fire({
                  text: "已完成過答題囉！",
                  confirmButtonText: "關閉",
                  customClass: {
                    container: "remember",
                  },
                });
              } else if (response.data.data == false) { //未答過題目
                axios.post(
                  Common.Config.Api.Activity.recordAction, //記錄答題完成動作
                  { actionId: "ques71" },
                  {
                    headers: {
                      Authorization: token,
                    },
                  }
                ).then(function () {

                  Swal.fire({
                    title: "你果然是產險知識通",
                    html: "<p>恭喜你獲得</p><div class='award'><p>立即抽獎機會乙次</p></div>",
                    confirmButtonText: "返回首頁",
                    customClass: {
                      container: "correct",
                    },
                  }).then(function () {
                    // window.location.href = "/";
                    self.$router.push('/');
                    dos.beaconSend(4,2,1,7,'','好禮三重抽','完成填答_知識通','知識通頁')
                  });
                });
              }
            });
          } else { //未登入
            Swal.fire({
              title: "你果然是產險知識通",
              html: "<p>恭喜你獲得</p><div class='award'><p>LINE POINT 50點</p><p>抽獎機會</p></div><div><p>立即登入/註冊</p><p>完成抽獎資格登錄</p></div>",
              confirmButtonText: "註冊",
              cancelButtonText: "登入",
              showCancelButton: true,
              customClass: {
                container: "correct",
              },
            }).then(
              function () {
                window.location.hash = "/#login";
                //self.$router.push('/#login');  //這個沒有帶到hashtag
                dos.beaconSend(4,2,1,7,'','好禮三重抽','會員註冊','知識通頁')
                
              },
              function () {
                window.location.hash = "/#login";
                //self.$router.push('/#login'); //這個沒有帶到hashtag
                dos.beaconSend(4,2,1,7,'','好禮三重抽','會員登入','知識通頁')
              }
            );
          }
        } else if (response.data.code == 400) { //check沒填寫完全
          Swal.fire({
            title: "要記得答題喔！(尚有題目未填寫)",
            confirmButtonText: "關閉",
            customClass: {
              container: "remember",
            },
          });
        } else if (response.data.code == 404) { //check答錯
          Swal.fire({
            title: "失敗～！",
            html: "<p>很可惜就差一點點了</p><div class='award'><p>LINE POINT 50點</p><p>正在等你喔！</p></div>",
            confirmButtonText: "返回首頁",
            cancelButtonText: "再答一次",
            showCancelButton: true,
            customClass: {
              container: "error",
            },
          }).then((result) => {
            if (result.isConfirmed) {
              // window.location.href = "/";
              self.$router.push('/');
            }
          });
        }
      });
    }, 2000),

    keepAnswer() {
      $("input[type=radio]").each(function () {
        localStorage.setItem(
          "radio_" + $(this).attr("id"),
          JSON.stringify({ checked: this.checked })
        );
      });
    },

    getVal() {
      $("input[type=radio]").each(function () {
        var state = JSON.parse(
          localStorage.getItem("radio_" + $(this).attr("id"))
        );

        if (state) this.checked = state.checked;
      });
    },

  },
};
</script>
<style lang="scss">
#knowledge {
  padding-top: 100px;
  background-image: url("../assets/class-bg.svg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  background-size: cover;
  @media screen and (max-width: $pad) {
    background-image: none;
  }
  .container {
    width: 1000px;
    @media screen and (max-width: $large) {
      width: 90%;
    }
    @media screen and (max-width: $small) {
      width: 100%;
    }
    .teacher {
      position: fixed;
      bottom: 0;
      right: 5%;
      @media screen and (max-width: $large) {
        width: 15%;
        right: 0;
      }
      @media screen and (max-width: $small) {
        display: none;
      }
    }
  }
  .blackBoard {
    img {
      display: block;
      margin: 0;
      width: 100%;
    }
    .blackBoardCon {
      background-image: url("../assets/blackboard.svg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center top;
      width: 100%;
      overflow: hidden;
      @media screen and (max-width: $small) {
        background-image: url("../assets/blackboard-m.svg");
        background-size: 100%;
        background-repeat: repeat-y;
      }
      .boardTxt {
        color: #f7fff8;
        width: 70%;
        margin: 0 auto;
        @media screen and (max-width: $pad) {
          width: 80%;
          padding-bottom: 15px;
        }
        img {
          width: 300px;
          margin: 30px auto;
          @media screen and (max-width: $pad) {
            width: 200px;
            margin: 20px auto;
          }
          @media screen and (max-width: $small) {
            width: 150px;
          }
        }
        article {
          margin: 15px 0;
          span {
            color: #f9eb30;
          }
        }
      }
    }
  }
  #exam {
    background-color: #fff;
    background-image: url("../assets/qa-noto.svg");
    background-repeat: no-repeat;
    background-position: center top;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 30px;
    margin: 50px 0;
    box-shadow: 0 2px 9px #afafaf;
    .question {
      li {
        padding: 20px 0;
        border-bottom: 1px dashed #ccc;
        line-height: 35px;
        &:last-of-type {
          border: 0;
        }
        @media screen and (max-width: $small) {
          padding: 10px 0;
        }
        .Q {
          margin-bottom: 10px;
          font-size:16px;
          span {
            color: #308582;
            margin-right: 5px;
            font-weight: bold;
            font-family: Arial, Helvetica, sans-serif;
            &::after {
              content: ".";
            }
          }
        }
        .answer {
          font-weight: 400;
          .icon {
            width: 25px;
            height: 25px;
            display: inline-block;
            text-align: center;
            color: #fff;
            font-weight: bold;
            margin-left: 8px;
            line-height: 25px;
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url("../assets/qa-icon.svg");
          }
          label {
            margin-left: 8px;
          }
        }
      }
    }
    .link {
      color: $blue;
    }
  }
}
.remember {
  .swal2-title {
    font-size: 22px;
  }
  .swal2-show {
    background-image: url(../assets/class-teacher.svg);
    background-position: right 10px bottom;
    background-size: 16%;
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
      @media screen and (max-width: $small) {
        display: none;
      }
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
      right: -20%;
      bottom: -30%;
      position: absolute;
      @media screen and (max-width: $small) {
        display: none;
      }
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
