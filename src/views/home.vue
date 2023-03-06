<template>
  <div class="home">
    <goTop />
    <KV/><!-- 主視覺 -->
    <Banner/>
    <div class="gradient"><!-- 跨區域漸層背景 -->
    <Intro/>
    <Assure/>
    </div>
    <travelTheme/>
    <school/>
    <QA/>
  </div>
</template>

<script>
// @ is an alias to /src
import goTop from "@/components/gotop.vue";
import KV from "@/components/kv.vue";
import Banner from "@/components/Banner.vue";
import Intro from "@/components/intro.vue";
import Assure from "@/components/assure.vue";
import travelTheme from "@/components/travelTheme.vue";
import school from "@/components/school.vue";
import QA from "@/components/QA.vue";

export default {
  name: "Home",
  components: {
    goTop,
    KV,
    Banner,
    Intro,
    Assure,
    travelTheme,
    school,
    QA
  },
  
};
</script>


