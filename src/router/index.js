import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import User from '@/view/User'
import Topic from '@/view/Topic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User
    },
    {
      path: '/topic/:id',
      name: 'Topic',
      component: Topic
    }
  ]
})
