<template>
  <a-layout style="min-height: 100vh">
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <!-- logo -->
        <div class="logo">
          <img src="@/assets/logo.png" style="width: 35px;" />
          <span class="title">
            <b>Admin Tao</b>
          </span>
        </div>
        <!-- 侧边栏 -->
        <SideMenu />
      </a-layout-sider>
      <a-layout>
        <!-- 顶部导航栏 -->
        <a-layout-header class="header">
          <TopMenu />
        </a-layout-header>
        <!-- 文本显示区 -->
        <a-layout-content style="margin: 0 16px">
          <!-- 面包屑 -->
          <!-- <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>{{ topKey }}</a-breadcrumb-item>
            <a-breadcrumb-item>{{ sideKey }}</a-breadcrumb-item>
          </a-breadcrumb> -->
          <div class="content">
            文本显示
          </div>
        </a-layout-content>
        <!-- 底部 -->
        <a-layout-footer style="text-align: center">
          版权所有 @TaoLoading
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { storeToRefs } from 'pinia'
// import { useMainStore } from '../store/index'
import TopMenu from '../components/TopMenu.vue'
import SideMenu from '../components/SideMenu.vue'

// 是否收起侧边栏
const collapsed = ref<boolean>(false)

// 顶部导航栏和侧边栏选中的数据由pinia控制
// const store = useMainStore()
// const { topKey, sideKey } = storeToRefs(store)
</script>

<style lang="scss">
.logo {
  margin: 14px 14px 14px 23px;
  height: 34px;
  padding-left: 5px;
  overflow: hidden;

  .title {
    margin-left: 10px;
    color: #fff;
    font-size: 18px;
    white-space: nowrap;
    vertical-align: middle;
  }
}

.header {
  background: #001529;
  padding: 0;
  height: 64px;
}

.content {
  margin-top: 10px;
  padding: 24px;
  background: #fff;
  min-height: 360px;
}
</style>
