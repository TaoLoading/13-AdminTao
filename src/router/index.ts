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
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/platform',
      name: 'platform',
      component: () => import('@/layout/Layout.vue'),
      /* children: [
        {
          path: '',
          redirect: '/platform/dataAnalysis'
        }
      ] */
    }
  ]
})
