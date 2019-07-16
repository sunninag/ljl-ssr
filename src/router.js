import Vue from 'vue'
// 1.引入安装好的
import Router from 'vue-router'
// 2.挂载好组件
import Login from './views/login'
// import Home from './views/Home.vue'

Vue.use(Router)

// 3.制定路由规则
export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    { path: '/login',
      component: Login
    }
  ]
})
