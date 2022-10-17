import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    /* {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginPage.vue')
    },
    {
      path: '/platform',
      name: 'platform',
      component: () => import('@/layout/LayoutPage.vue'),
      children: [
        {
          path: '',
          redirect: '/platform/dataAnalysis'
        }
      ]
    } */
    {
      path: '/',
      name: 'platform',
      component: () => import('@/layout/LayoutPage.vue')
    }
  ]
})
