import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateAndJoin from '../createAndJoin.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '建立或者加入房间',
      component: CreateAndJoin
    },
    {
      path: '/chat',
      name: '房间聊天中',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../rtcChat.vue')
    }
  ]
})

export default router
