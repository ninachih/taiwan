import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home.vue'
import winnerList from '@/views/winnerList.vue'
import knowledge from '@/views/knowledge.vue'
import OTP from '@/views/otp.vue'
import lottery from '@/views/lottery.vue'
import search from '@/views/search.vue'


Vue.use(VueRouter);

if (process.client) {
  window.history.scrollRestoration = 'manual'
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/winnerList',
    name: 'winnerList',
    component: winnerList,
  },
  {
    path: '/knowledge',
    name: 'knowledge',
    component: knowledge,
  },
  {
    path: '/otp',
    name: 'otp',
    component: OTP,
  },
  {
    path: '/lottery',
    name: 'lottery',
    component: lottery,
    meta: { requiresAuth: true }
  },
  {
    path: '/search',
    name: 'search',
    component: search,
    meta: { requiresAuth: true }
  },
  { //防止空白頁面進入
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  // base: process.env.BASE_URL,
  base: '/events/FY23_luckydraw/',
  routes,
  scrollBehavior(to, from, savedPosition) {

    if (savedPosition) {
      return savedPosition
    }
    const findEl = async (hash, x) => {
      return document.querySelector(hash) ||
        new Promise((resolve, reject) => {
          if (x > 50) {
            return resolve()
          }
          setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
        })
    }
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
        offset: { x: 0, y: 200 },
      };
    } else {
      return { x: 0, y: 0 }
    }

  },
})

export default router
