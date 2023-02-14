<template>
  <div id="app">
    <Banner />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    Banner,
    Footer,
  },

};
</script>
