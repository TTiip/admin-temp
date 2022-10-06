import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import type { UserInfoDataItem } from '~/types'

function hasPermission (route: RouteRecordRaw, permissions: any[] = []) {
  if (!route.meta?.permission) {
    return true
  }

  if (route.meta?.permission === true && route.children?.length) {
    return filterAsyncRoutes(route.children, permissions).length
  }

  return permissions.includes(Array.isArray(route.meta?.permission)
    ? route.meta.permission[0]?.permission
    : route.meta?.permission)
}

function filterAsyncRoutes (routes: RouteRecordRaw[], permissions: any) {
  return routes.reduce((result: RouteRecordRaw[], route) => {
    if (hasPermission(route, permissions)) {
      result.push({
        ...route,
        children: route.children ? filterAsyncRoutes(route.children, permissions) : []
      })
    }
    return result
  }, [])
}

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<UserInfoDataItem | null>(null)

  function setUserInfo (userInfoData: any) {
    userInfo.value = userInfoData
  }

  async function getUserInfo () {
    if (!userInfo.value) {
      const res = await axios({
        url: 'getUserInfo',
        method: 'GET'
      })

      userInfo.value = res.data
    }
    return userInfo.value
  }

  return {
    userInfo,
    setUserInfo,
    getUserInfo
  }
})
