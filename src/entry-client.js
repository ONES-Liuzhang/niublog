import { createApp } from 'vue'
import { createWebHistory } from  'vue-router'
import createRouter from './router'
import App from './App'

import "tailwindcss/tailwind.css"

// 创建路由实例
const router = createRouter(createWebHistory())
const app = createApp(App)

app.use(router)

router.isReady().then(() => app.$mount('#app'))