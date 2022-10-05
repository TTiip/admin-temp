import { defineStore } from 'pinia'
import type { RouteLocationRaw } from 'vue-router'

const useTagsViewStore = defineStore('tagsView', () => {
  const router = useRouter()
  const route = useRoute()
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

  const dropVisitedView = (view: RouteLocationRaw) => {
    const index = visitedViews.value.findIndex((v: any) => v.path === router.resolve(view).path)
    if (index >= 0) {
      visitedViews.value.splice(index, 1)
    }
  }

  const delOthersViews = (view?: RouteLocationRaw) => {
    const route = router.resolve(view || '/')
    visitedViews.value = visitedViews.value.filter((v: any) => v.path === route?.path)
    console.log('visitedViews.value', visitedViews.value)
  }
  const pushRoute = async (view: RouteLocationRaw) => {
    const coverRoute: any = methodResolve(view)
    if (coverRoute.path === route.path) {
      return false
    }
    router.push(view)
  }

  const dropView = (view?: RouteLocationRaw) => {
    view = view || route
    dropVisitedView(view)
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
  }

  return {
    visitedViews,
    methodResolve,
    addVisitedView,
    dropVisitedView,
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
