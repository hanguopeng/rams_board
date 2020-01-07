import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import login from '@/components/common/login'
import test from '@/views/test'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path:'/test',
      name:'test',
      component:test
    }
  ]
})
