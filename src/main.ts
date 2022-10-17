import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import * as antIcons from '@ant-design/icons-vue'
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import { router } from './router/index'

const app = createApp(App)

// 将图标注册为组件。实现菜单动态加载icon
for (const i in antIcons) {
  // @ts-ignore
  app.component(i, antIcons[i])
}

app.use(Antd)
app.use(router)
app.use(createPinia())
app.mount('#app')
