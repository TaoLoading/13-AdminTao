/**
 * 路由配置
 */

import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: { title: '登录' }
    },
    {
      path: '/platform',
      name: 'platform',
      component: () => import('@/layout/Layout.vue'),
      meta: { title: '首页' },
      /* children: [
        {
          path: '',
          redirect: '/platform/dataAnalysis'
        }
      ] */
    }
  ]
})
