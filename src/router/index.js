
import VueRouter from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  { path: '/', redirect: '/home' },

  {
    path: '/home',
    component: Home
  }

]

const router = new VueRouter({
  routes
})

// const isLogin = () =>Boolean(sessionStorage.getItem('user'))

// router.beforeEach((to, from, next) => {
//     //登陆验证
//     if (to.matched.some(record => record.meta.auth)) {
//         if (!isLogin()) {
//             next({
//                 path:'/login',
//                 replace:true
//             });
//         } else {
//             next();
//         }
//     } else {
//         next();
//     }
// });

export default router
