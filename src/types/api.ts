interface Common {
  code: 0 | 200
  message: string | null | undefined
}

interface UserInfoDataItem {
  id: string
  username: string
  name: string
  email: string
  sex: number
  status: boolean
  index: number
  roles: {
    id: string
    name: string
    status: boolean
    index: number
    permissions: string[]
  }[]
  department: {
    id: string
    name: string
    remark: string
    parentId: string
    status: boolean
    hasChildren: boolean
    path: string[]
  }
  permissions: string[]
}

// interface
export type {
  Common,
  UserInfoDataItem

}
