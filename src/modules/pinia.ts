import { createPinia } from 'pinia'
import type { App } from 'vue'
import type { Router } from 'vue-router'

// https:// pinia.web3doc.top/core-concepts/plugins.html#plugins
export default (app: App, { router }: { router: Router }) => {
  const pinia = createPinia()

  pinia.use(({ store }) => {
    // 需要包裹一下，看文档。
    store.router = markRaw(router)
    store.route = router.currentRoute
  })

  app.use(pinia)
}
