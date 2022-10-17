import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      // 顶部导航栏选中菜单
      topKey: 'nav2',
      // 侧边导航栏选中菜单
      sideKey: 'option2'
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