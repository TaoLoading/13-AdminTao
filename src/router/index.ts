import { createRouter, createWebHistory } from 'vue-router'

interface FormState {
  username: string
  password: string
  remember: boolean
}

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

// 路由守卫
router.beforeEach((to, from, next) => {
  const saveInfo: FormState = JSON.parse(localStorage.getItem('userInfo') || '{}')
  // 未登录时跳转到登录页
  if (to.path !== '/login' && (saveInfo.username === undefined || saveInfo.username.trim() === '')) {
    console.log('未登录', saveInfo.username)
    return next('/login')
  }
  next()
})
