import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import routes from 'virtual:generated-pages'
import App from './App'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'element-plus/dist/index.css'

const app = createApp(App)
const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
app.use(router)
app.use(pinia)
app.mount('#app')
