import type {
  Common,
  UserInfoDataItem
} from '~/types'

const apiList = {
  // 获取登录用户信息
  getUserInfo: '/api/user-info'
}

export interface apiKeyDataType {
  getUserInfo: Common & { data: UserInfoDataItem }
}

export type apiKeyType = keyof typeof apiList

export default apiList
