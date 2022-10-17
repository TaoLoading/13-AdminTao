<template>
  <!-- 顶部导航 -->
  <div>
    <a-menu v-model:selectedKeys="topKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }"
      @click="changeTopKeys($event.key)">
      <a-menu-item v-for="item in menuArr" :key="item.key">
        {{item.value}}
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store/index'

// 菜单数据
const menuArr = ref([
  {
    key: 'nav1',
    value: 'nav 1'
  },
  {
    key: 'nav2',
    value: 'nav 2'
  },
  {
    key: 'nav3',
    value: 'nav 3'
  }
])

const store = useMainStore()
const { topKey } = storeToRefs(store)
// 选中的父级菜单
const topKeys = ref<string[]>([topKey.value])
// 点选父级菜单
const changeTopKeys = (key: string) => {
  store.changeTopKey(key)
}
</script>

<style lang="scss" scoped>

</style>
