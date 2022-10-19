<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

// 使用中文
const locale = zhCN
dayjs.locale('zh-cn')

</script>
