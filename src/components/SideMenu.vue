<template>
  <!-- 侧边栏菜单 -->
  <div>
    <a-menu v-model:selectedKeys="sideKeys" theme="dark" mode="inline" style="margin-top: -3px;"
      @click="changeSideKeys($event.key)">
      <a-menu-item v-for="item in menuArr[topKey]" :key="item.key">
        <component :is="item.icon" />
        <span>{{ item.value }}</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store/index'

// 菜单数据
const menuArr = {
  search: [
    {
      key: 'search-1',
      value: '查询1',
      icon: 'PieChartOutlined'
    },
    {
      key: 'search-2',
      value: '查询2',
      icon: 'DesktopOutlined'
    },
    {
      key: 'search-3',
      value: '查询3',
      icon: 'UserOutlined'
    }
  ],
  download: [
    {
      key: 'download-1',
      value: '下载1',
      icon: 'PieChartOutlined'
    },
    {
      key: 'download-2',
      value: '下载2',
      icon: 'DesktopOutlined'
    },
    {
      key: 'download-3',
      value: '下载3',
      icon: 'UserOutlined'
    }
  ],
  upload: [
    {
      key: 'upload-1',
      value: '上传1',
      icon: 'PieChartOutlined'
    },
    {
      key: 'upload-2',
      value: '上传2',
      icon: 'DesktopOutlined'
    },
    {
      key: 'upload-3',
      value: '上传3',
      icon: 'UserOutlined'
    }
  ]
}

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
  sideKey.value = menuArr[topKey.value][0].key
  sideKeys.value[0] = menuArr[topKey.value][0].key
}, { immediate: false, deep: false })
</script>

<style lang="scss" scoped>

</style>
