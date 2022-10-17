<template>
  <!-- 侧边栏菜单 -->
  <div>
    <a-menu v-model:selectedKeys="sideKeys" theme="dark" mode="inline" style="margin-top: -3px;"
      @click="changeSideKeys($event.key)">
      <a-menu-item v-for="item in menuArr['nav1']" :key="item.key">
        <component :is="item.icon" />
        <span>{{ item.key }}</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store/index'

// 菜单数据
const menuArr = ref({
  nav1: [
    {
      key: 'option1',
      value: 'Option 1-1',
      icon: 'PieChartOutlined'
    },
    {
      key: 'option2',
      value: 'Option 1-2',
      icon: 'DesktopOutlined'
    },
    {
      key: 'option3',
      value: 'Option 1-3',
      icon: 'UserOutlined'
    }
  ],
  nav2: [
    {
      key: 'option1',
      value: 'Option 2-1',
      icon: 'PieChartOutlined'
    },
    {
      key: 'option2',
      value: 'Option 2-2',
      icon: 'DesktopOutlined'
    },
    {
      key: 'option3',
      value: 'Option 2-3',
      icon: 'UserOutlined'
    }
  ],
  nav3: [
    {
      key: 'option1',
      value: 'Option 3-1',
      icon: 'PieChartOutlined'
    },
    {
      key: 'option2',
      value: 'Option 3-2',
      icon: 'DesktopOutlined'
    },
    {
      key: 'option3',
      value: 'Option 3-3',
      icon: 'UserOutlined'
    }
  ]
})

const store = useMainStore()
const { topKey, sideKey } = storeToRefs(store)
// 选中的侧边栏菜单
const sideKeys = ref<string[]>([sideKey.value])
// 点选侧边栏菜单
const changeSideKeys = (key: string) => {
  store.changeSideKey(key)
}
// 当顶部导航栏发生变化时重置侧边栏
watch(() => topKey.value, () => {
  sideKey.value = 'option1'
  sideKeys.value[0] = 'option1'
}, { immediate: false, deep: false })
</script>

<style lang="scss" scoped>

</style>
