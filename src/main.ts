import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark-css-vars.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

app.use(router)

// 可加上 options { eager: true } 直接引入所有的模块
Object.values(import.meta.glob('./modules/*.ts', { eager: true }))
  .map((module: any) => {
    app.use(module.default, { router })
  })
app.mount('#app')
