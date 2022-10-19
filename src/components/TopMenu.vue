<template>
  <!-- 顶部 -->
  <div>
    <!-- 左侧菜单栏 -->
    <a-menu v-model:selectedKeys="topKeys" mode="horizontal" :style="{ lineHeight: '64px' }"
      @click="changeTopKeys($event.key)" style="float: left;">
      <a-menu-item v-for="item in menuArr" :key="item.key">
        {{ item.value }}
      </a-menu-item>
    </a-menu>
    <!-- 右侧操作栏 -->
    <div class="rightNav">
      <ul>
        <li>
          <a-dropdown placement="bottom">
            <user-outlined class="border" />
            <template #overlay>
              <a-menu>
                <a-menu-item @click="showChangePasswordModal = true">
                  <lock-outlined />
                  更改密码
                </a-menu-item>
                <a-menu-item @click="showLogoutModal = true">
                  <export-outlined />
                  退出
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </li>
        <li>
          <a-tooltip>
            <template #title>通知</template>
            <bell-outlined class="border" />
          </a-tooltip>
        </li>
      </ul>
    </div>

    <!-- 更改密码弹窗 -->
    <a-modal v-model:visible="showChangePasswordModal" title="更改密码" @ok="changePassword">
      <a-form name="changePassword" :model="passwordData" :label-col="{ span: 5 }">
        <a-form-item label="旧密码" name="oldPassword" :rules="[{ required: true, message: '请输入旧密码!' }]">
          <a-input-password v-model:value="passwordData.oldPassword" placeholder="请输入旧密码" />
        </a-form-item>
        <a-form-item label="新密码" name="newPassword" :rules="[{ required: true, message: '请输入新密码!' }]">
          <a-input-password v-model:value="passwordData.newPassword" placeholder="请输入新密码" />
        </a-form-item>
        <a-form-item label="确认密码" name="confirmPassword" :rules="[{ required: true, message: '请再次输入新密码!' }]">
          <a-input-password v-model:value="passwordData.confirmPassword" placeholder="确认新密码" />
        </a-form-item>
      </a-form>
    </a-modal>

    <!-- 确定退出弹窗 -->
    <a-modal v-model:visible="showLogoutModal" title="退出" @ok="logout">
      <p>是否退出登录？</p>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { message } from 'ant-design-vue'
import { UserOutlined, ExportOutlined, BellOutlined, LockOutlined } from '@ant-design/icons-vue'
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

// 是否显示更改密码弹窗
const showChangePasswordModal = ref(false)
// 密码相关
const passwordData = reactive({
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
})
// 确定更改密码
const changePassword = () => {
  if (passwordData.oldPassword.trim() === '' || passwordData.newPassword.trim() === '' || passwordData.confirmPassword.trim() === '') {
    return message.error('请输入完整密码')
  }
  if (passwordData.oldPassword.trim() !== 'admin') {
    return message.error('旧密码不正确')
  }
  if (passwordData.newPassword.trim() !== passwordData.confirmPassword.trim()) {
    return message.error('两次输入的密码不一致')
  }
  message.success('密码修改成功')
  showChangePasswordModal.value = false

  passwordData.oldPassword = ''
  passwordData.newPassword = ''
  passwordData.confirmPassword = ''
}

// 是否显示退出弹窗
const showLogoutModal = ref(false)
// 确定退出
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
  padding-right: 50px;
  height: 64px;
  line-height: 64px;

  ul>li {
    float: right;
    width: 26px;
    height: 26px;
    margin-right: 30px;
    font-size: 14px;
    color: #4E5969;
    list-style: none;
    text-align: center;

    .border {
      border: 1px solid #cfcfcf;
      border-radius: 50%;
      padding: 10px;
    }
  }
}
</style>
