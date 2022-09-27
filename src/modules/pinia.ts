import { createPinia } from 'pinia'
import type { App } from 'vue'

// https:// pinia.web3doc.top/core-concepts/plugins.html#plugins
export default (app: App) => {
  const pinia = createPinia()

  // 利用插件机制 将属性添加到 所有的 pinia 实例上
  pinia.use(({ store }) => {
    // store.aaa = 'test - aaa'
    Object.assign(store, { aaa: 'test - aaa' })
  })

  app.use(pinia)
}
