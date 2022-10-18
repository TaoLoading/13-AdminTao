<template>
  <!-- 顶部 -->
  <div>
    <!-- 左侧菜单栏 -->
    <a-menu v-model:selectedKeys="topKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }"
      @click="changeTopKeys($event.key)" style="float: left;">
      <a-menu-item v-for="item in menuArr" :key="item.key">
        {{ item.value }}
      </a-menu-item>
    </a-menu>
    <!-- 右侧操作栏 -->
    <div class="rightNav">
      <!-- <user-outlined /> -->


      <a-dropdown placement="bottom">
        <user-outlined />
        <template #overlay>
          <a-menu>
            <a-menu-item @click="logout">
              <export-outlined />
              退出
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>


    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { UserOutlined, ExportOutlined } from '@ant-design/icons-vue'
import { useMainStore } from '../store/index'

// 菜单数据
const menuArr = [
  {
    key: 'search',
    value: '查询'
  },
  {
    key: 'download',
    value: '下载'
  },
  {
    key: 'upload',
    value: '上传'
  }
]

const store = useMainStore()
const { topKey } = storeToRefs(store)
// 选中的父级菜单
const topKeys = ref<string[]>([topKey.value])
// 点选父级菜单
const changeTopKeys = (key: string) => {
  store.changeTopKey(key)
}

// 退出
const router = useRouter()
const logout = () => {
  localStorage.removeItem('userInfo')
  router.push(`/login`)
  location.reload()
}
</script>

<style lang="scss" scoped>
.rightNav {
  float: right;
  padding-right: 80px;
  color: #fff;
  font-size: 20px;
}
</style>
