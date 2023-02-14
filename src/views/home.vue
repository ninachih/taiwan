<template>
  <div class="home">
    <goTop />
    <KV/><!-- 主視覺 -->
    <Present /><!-- 好禮四重抽 -->
    <Login /><!-- 抽獎活動註冊/登入 -->
    <Linepay /><!-- linePay -->
    <Learning /><!-- 網路投保相關 -->
    <Notice /><!-- 注意事項 -->
    <QA /><!-- 常見問題 -->
   
  </div>
</template>

<script>
// @ is an alias to /src
import goTop from "@/components/gotop.vue";
import KV from "@/components/kv.vue";
import Banner from "@/components/Banner.vue";
import Present from "@/components/Present.vue";
import Linepay from "@/components/Linepay.vue";
import Login from "@/components/Login.vue";
import Learning from "@/components/Learning.vue";
import Notice from "@/components/Notice.vue";
import QA from "@/components/QA.vue";

export default {
  name: "Home",
  components: {
    goTop,
    KV,
    Banner,
    Present,
    Linepay,
    Login,
    Learning,
    Notice,
    QA,
  },
  
};
</script>


