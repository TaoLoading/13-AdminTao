import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      topKey: 'nav2',
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