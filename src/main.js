import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueMeta from 'vue-meta';
import jQuery from 'jquery';
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import VueSmoothScroll from 'vue-smooth-scroll';
import { TabsPlugin } from 'bootstrap-vue'

window.$ = window.jQuery = jQuery;
window.Swal = Swal;
Vue.config.productionTip = false;
Vue.use(VueMeta);
Vue.use(VueSmoothScroll);
Vue.use(TabsPlugin);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    var userData = JSON.parse(sessionStorage.getItem("jwtInfo"));
    if (userData) {
      next();
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next();
  }
});