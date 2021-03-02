// 引入 路由
import {createRouter,createWebHistory} from 'vue-router'
const routes = [
  {
    //默认路由
    path:'',
    redirect:'/home'
  },
  {
    name:"首页",
    path: '/home',
    component: () => import('../pages/home/Home')

  },
  {
    name:"发现",
    path: '/category',
    component: () => import('../pages/category/Category')

  },
  {
    name:"购物车",
    path: '/cart',
    component: () => import('../pages/cart/Cart')

  },
  {
    name:"我的",
    path: '/profile',
    component: () => import('../pages/profile/Profile')

  }
]
let router = createRouter({
    // url 地址的转发规则
    history: createWebHistory(),
    // 在routes 中配置路由规则
    routes
  }
);
export default router;

// //前置导航守卫
// router.beforeEach((to, from, next) => {
//   //从from跳转到to
//   document.title = to.matched[0].meta.title
//   console.log("++++");
//   next()
// })
// //后置钩子
// router.afterEach((to, from) =>{
//   console.log("----");
// })

//3.将router对象传入Vue实例中
//export default router

