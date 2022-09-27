import { defineStore } from 'pinia'
import type { RouteLocationRaw } from 'vue-router'

const useTagsViewStore = defineStore('tagsView', () => {
  const router = useRouter()
  const route = useRoute()
  const cachedViews = ref<any[]>([])
  const visitedViews = ref(JSON.parse(localStorage.getItem('visitedViews') || '[]'))

  const methodResolve = (view: RouteLocationRaw) => {
    try {
      const route = router.resolve(view)
      return visitedViews.value.find((i: any) => i.path === route.path) || route
    } catch (e: any) {
      // 如果解析了无权限的路由报错，跳转到403页面。
      return router.resolve({
        ...e.location,
        name: 'all',
        params: { all: e.location.path.split('/').filter(Boolean) }
      })
    }
  }

  const addVisitedView = (view: RouteLocationRaw) => {
    const route = router.resolve(view)
    if (route.meta.permission === false || !route.meta.title) {
      return false
    }
    const index = visitedViews.value.findIndex((v: any) => v.path === route.path)
    if (index < 0) {
      visitedViews.value.push(route)
    } else {
      visitedViews[index] = route
    }
  }

  const addCachedView = (view: RouteLocationRaw) => {
    const route = router.resolve(view)
    if (route.meta.permission === false || !route.meta.title) {
      return false
    }
    if (route?.name && !cachedViews.value.includes(route.name!)) {
      cachedViews.value.push(route?.name)
    }
  }

  const dropVisitedView = (view: RouteLocationRaw) => {
    const index = visitedViews.value.findIndex((v: any) => v.path === router.resolve(view).path)
    if (index >= 0) {
      visitedViews.value.splice(index, 1)
    }
  }

  const dropCachedView = (view: RouteLocationRaw) => {
    const index = cachedViews.value.indexOf(router.resolve(view).name)
    if (index >= 0) {
      cachedViews.value.splice(index, 1)
    }
  }

  const delOthersViews = (view?: RouteLocationRaw) => {
    const route = router.resolve(view || '')
    visitedViews.value.value = visitedViews.value.value.filter((v: any) => v.path === route?.path)
    cachedViews.value = cachedViews.value.filter((v: any) => v !== route?.name)
  }
  const pushRoute = async (view: RouteLocationRaw) => {
    const coverRoute: any = methodResolve(view)
    console.log(coverRoute, 'coverRoute')
    console.log(route, 'route')
    if (coverRoute.path === route.path) {
      return false
    }
    router.push(route)
  }

  const dropView = (view?: RouteLocationRaw) => {
    view = view || route
    dropVisitedView(view)
    dropCachedView(view)
  }

  const back = (routee?: RouteLocationRaw) => {
    dropView(route)
    if (routee) {
      return pushRoute(route)
    }

    router.back()
  }

  const addView = (view: RouteLocationRaw) => {
    addVisitedView(view)
    addCachedView(view)
  }

  return {
    cachedViews,
    visitedViews,
    methodResolve,
    addVisitedView,
    addCachedView,
    dropVisitedView,
    dropCachedView,
    delOthersViews,
    pushRoute,
    dropView,
    back,
    addView
  }
})

export {
  useTagsViewStore
}
