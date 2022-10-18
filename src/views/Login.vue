<template>
  <!-- Logo -->
  <div class="header">
    <img alt="logo" src="@/assets/logo-黑边.png" style="width: 60px;" />
    <div class="logo-text">Admin Tao</div>
  </div>
  <!-- 登录表单 -->
  <div class="content">
    <div class="loginTitle">欢迎登录</div>
    <div class="systemTitle">Admin Tao - 中后台前端解决方案</div>
    <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish">
      <a-form-item name="username" :rules="[{ required: true, message: '请输入用户名!' }]">
        <a-input v-model:value="formState.username" placeholder="请输入用户名: admin">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item name="password" :rules="[{ required: true, message: '请输入密码!' }]">
        <a-input-password v-model:value="formState.password" placeholder="请输入密码: admin">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a-form-item name="remember" no-style>
          <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
        </a-form-item>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

interface FormState {
  username: string
  password: string
  remember: boolean
}

// 登录表单数据
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true
})

// 从本地获取登录信息
const getUserInfo = () => {
  if (localStorage.getItem('userInfo')) {
    const saveInfo: FormState = JSON.parse(localStorage.getItem('userInfo') || '')
    formState.username = saveInfo.username
    formState.password = saveInfo.password
    formState.remember = saveInfo.remember
  }
}
getUserInfo()

// 登录
const router = useRouter()
const onFinish = (formState: FormState) => {
  const params = {
    username: formState.username.trim(),
    password: formState.password.trim()
  }
  if (params.username === 'admin' && params.username === 'admin') {
    message.success('欢迎进入Admin Tao')
    setTimeout(() => {
      router.push(`/platform`)
    }, 300)
  } else {
    return message.error('用户名或密码错误')
  }
  if (formState.remember === true) {
    localStorage.setItem('userInfo', JSON.stringify(formState))
  } else {
    localStorage.removeItem('userInfo')
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 24px;
  left: 60px;
  z-index: 1;
  display: inline-flex;
  align-items: center;

  .logo-text {
    margin-left: 14px;
    color: #000;
    font-size: 26px;
  }
}

.content {
  width: 300px;
  margin: auto;
  overflow: hidden;

  .loginTitle {
    font-weight: 500;
    font-size: 24px;
    margin-top: 60%;
  }

  .systemTitle {
    color: #86909c;
    font-size: 17px;
    margin-bottom: 2%;
  }

  .login-form {
    width: 300px;

    .login-form-button {
      width: 100%;
    }
  }
}
</style>
