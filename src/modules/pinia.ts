// Setup Pinia

import { createPinia } from 'pinia'
import type { App } from 'vue'
import type { Router } from 'vue-router'

// https:// pinia.web3doc.top/core-concepts/plugins.html#plugins
export default (app: App, { router }: { router: Router }) => {
  const pinia = createPinia()

  pinia.use(({ store }) => {
    store.router = router
    store.route = router.currentRoute
  })

  app.use(pinia)
}
