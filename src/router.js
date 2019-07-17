import Vue from 'vue'
// 1.引入安装好的
import Router from 'vue-router'
// 2.挂载好组件
import Login from './views/login'
// import Home from './views/Home.vue'
import Home from './views/home'

Vue.use(Router)

// 3.制定路由规则
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    { path: '/login',
      component: Login
    },
    { path: '/home',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 判断是不是login的路径
  if (to.path === '/login') return next()
  // 获取token存储值
  const token = sessionStorage.getItem('token')
  // 存不存在token的值不存在跳转到login
  if (!token) return next('./login')
  next()
})

export default router
