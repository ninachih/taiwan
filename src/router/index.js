import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home.vue'
import OTP from '@/views/otp.vue'
import count1 from '@/views/count1.vue'
import count2 from '@/views/count2.vue'

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
    path: '/count1',
    name: 'count1',
    component: count1,
  },

  {
    path: '/otp',
    name: 'otp',
    component: OTP,
  },
  {
    path: '/count2',
    name: 'count2',
    component: count2,
    meta: { requiresAuth: true }
  },
  // {
  //   path: '/count2',
  //   name: 'search',
  //   component: search,
  //   meta: { requiresAuth: true }
  // },
  { //防止空白頁面進入
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  // base: process.env.BASE_URL,
  base: '/',
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
