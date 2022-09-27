import { defineStore } from 'pinia'
import type { RouteLocation, RouteLocationRaw } from 'vue-router'

const useTagsViewStore = defineStore('tagsView', () => {
  const router = useRouter()
  const route = useRoute()
  const cachedViews: any = ref([])
  const visitedViews: any = JSON.parse(localStorage.getItem('visitedViews') || '[]') as RouteLocation[]

  const methodResolve = (state: any) => {
    return (view: RouteLocationRaw) => {
      try {
        const route = router.resolve(view)
        return state.visitedViews.find((i: any) => i.path === route.path) || route
      } catch (e: any) {
        // 如果解析了无权限的路由报错，跳转到403页面。
        return router.resolve({
          ...e.location,
          name: 'all',
          params: { all: e.location.path.split('/').filter(Boolean) }
        })
      }
    }
  }

  const addVisitedView = (view: RouteLocationRaw) => {
    const route = router.resolve(view)
    if (route.meta.permission === false || !route.meta.title) {
      return
    }
    const index = visitedViews.findIndex((v: any) => v.path === route.path)
    if (index < 0) { visitedViews.push(route) } else { visitedViews[index] = route }
  }

  const addCachedView = (view: RouteLocationRaw) => {
    const route = router.resolve(view)
    if (route.meta.permission === false || !route.meta.title) { return }
    if (route?.name && !cachedViews.value.includes(route.name!)) { cachedViews.value.push(route?.name) }
  }

  const dropVisitedView = (view: RouteLocationRaw) => {
    const index = visitedViews.findIndex((v: any) => v.path === router.resolve(view).path)
    if (index >= 0) { visitedViews.splice(index, 1) }
  }

  const dropCachedView = (view: RouteLocationRaw) => {
    const index = cachedViews.value.indexOf(router.resolve(view).name)
    if (index >= 0) { cachedViews.value.splice(index, 1) }
  }

  const delOthersViews = (view?: RouteLocationRaw) => {
    const route = router.resolve(view || '')
    visitedViews.value = visitedViews.value.filter((v: any) => v.path === route?.path)
    cachedViews.value = cachedViews.value.filter((v: any) => v !== route?.name)
  }
  const listPush = async (view: RouteLocationRaw) => {
    console.log(router, 'listPush - router')
    console.log(route, 'listPush - route')
    const coverRoute: any = methodResolve(view)
    if (coverRoute.path === route.path) { return router.push('/redirect') }
    router.push(route)
  }

  const dropView = (view?: RouteLocationRaw) => {
    view = view || route
    dropVisitedView(view)
    dropCachedView(view)
  }

  const back = (routee?: RouteLocationRaw) => {
    dropView(route)
    if (routee) { return listPush(route) }

    router.back()
  }

  const addView = (view: RouteLocationRaw) => {
    addVisitedView(view)
    addCachedView(view)
  }

  return {
    methodResolve,
    addVisitedView,
    addCachedView,
    dropVisitedView,
    dropCachedView,
    delOthersViews,
    listPush,
    dropView,
    back,
    addView
  }
})

export {
  useTagsViewStore
}
