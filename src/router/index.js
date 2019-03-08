

import VueRouter from 'vue-router';


const routes = [
    // { path: '/', redirect: '/my/income' },
   
]

const router = new VueRouter({
    routes
})

//const isLogin = () =>Boolean(sessionStorage.getItem('user')) 

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
