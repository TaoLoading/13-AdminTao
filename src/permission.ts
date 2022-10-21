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
  if (saveInfo.username) {
    if (to.path === '/login') {
      next('/login')
      NProgress.done()
    } else {
      /**
       * 此处鉴权
       */
      next()
      NProgress.done()
    }
  } else {
    next('/login')
    NProgress.done()
  }
})
