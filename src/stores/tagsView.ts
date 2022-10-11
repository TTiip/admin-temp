import { defineStore } from 'pinia'
import type { RouteLocationRaw } from 'vue-router'

const useTagsViewStore = defineStore('tagsView', () => {
  const router = useRouter()
  const route = useRoute()
  const cachedViews = ref<any[]>([])
  const visitedViews = ref(JSON.parse(localStorage.getItem('visitedViews') || '[]'))

  function methodResolve (view: RouteLocationRaw) {
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

  function addVisitedView (view: RouteLocationRaw) {
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

  function addCachedView (view: RouteLocationRaw) {
    const route = router.resolve(view)
    if (route.meta.permission === false || !route.meta.title) {
      return false
    }
    if (route?.name && !cachedViews.value.includes(route.name!)) {
      cachedViews.value.push(route?.name)
    }
  }

  function deleteVisitedView (view: RouteLocationRaw) {
    const index = visitedViews.value.findIndex((v: any) => v.path === router.resolve(view).path)
    if (index >= 0) {
      visitedViews.value.splice(index, 1)
    }
  }

  function deleteCachedView (view: RouteLocationRaw) {
    const index = cachedViews.value.findIndex((v: any) => v === router.resolve(view).name)
    if (index >= 0) {
      cachedViews.value.splice(index, 1)
    }
  }

  function deleteOthersViews (view?: RouteLocationRaw) {
    const route = router.resolve(view || '/')
    visitedViews.value = visitedViews.value.filter((v: any) => v.path === route?.path)
    cachedViews.value = cachedViews.value.filter((v: any) => v !== route?.name)
  }

  async function pushRoute (view: RouteLocationRaw) {
    const coverRoute: any = methodResolve(view)
    if (coverRoute.path === route.path) {
      deleteCachedView(view)
      return router.push('/redirect')
    }
    router.push(view)
  }

  function deleteView (view?: RouteLocationRaw) {
    view = view || route
    deleteVisitedView(view)
    deleteCachedView(view)
  }

  function back (routee?: RouteLocationRaw) {
    deleteView(route)
    if (routee) {
      return pushRoute(route)
    }

    router.back()
  }

  function addView (view: RouteLocationRaw) {
    addVisitedView(view)
    addCachedView(view)
  }

  return {
    cachedViews,
    visitedViews,
    methodResolve,
    addVisitedView,
    addCachedView,
    deleteVisitedView,
    deleteCachedView,
    deleteOthersViews,
    pushRoute,
    deleteView,
    back,
    addView
  }
})

export {
  useTagsViewStore
}
