/**
 * 工具函数
 */

import { FormState } from '../utils/interface'

// 获取token
export const getToken = (): string => {
  return localStorage.getItem('token') || ''
}

// 获取user信息
export const getUserInfo = (): FormState => {
  return JSON.parse(localStorage.getItem('userInfo') || '{}')
}
