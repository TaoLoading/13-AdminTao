/**
 * 路由守卫
 */

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { router } from './router'
import { getToken, getUserInfo } from './utils'


interface FormState {
  username: string
  password: string
  remember: boolean
}

NProgress.configure({ showSpinner: false })

// 路由守卫
router.beforeEach((to, from, next) => {
  NProgress.start()

  const saveInfo: FormState = getUserInfo()
  const token = saveInfo.username

  if (token) {
    if (to.path === '/login') {
      // token存在直接跳转到平台首页
      next('/platform')
      NProgress.done()
    } else {
      /**
       * 此处鉴权
       */

      next()
      NProgress.done()
    }
  } else {
    if (to.path === '/login') {
      next()
      NProgress.done()
    } else {
      // token不存在，重新登录
      NProgress.done()
      next('/login')
    }
  }
})

router.afterEach((to, from, next) => {
  // 改变页面title
  document.title = to.meta.title as string
  // 停止进度条
  NProgress.done()
})
