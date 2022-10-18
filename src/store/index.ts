import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      // 顶部导航栏选中菜单
      topKey: 'search',
      // 侧边导航栏选中菜单
      sideKey: 'search-1'
    }
  },
  getters: {
  },
  actions: {
    // 更改顶部导航栏
    changeTopKey(key: string) {
      return this.topKey = key
    },
    // 更改侧边导航栏
    changeSideKey(key: string) {
      return this.sideKey = key
    }
  }
})