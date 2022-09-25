import type { MenuItemType } from '~/types'

const data: MenuItemType[] = [
  {
    path: '/',
    name: '首页',
    icon: 'i-iconoir:home',
    children: []
  },
  // {
  //   path: '/1',
  //   name: '路由嵌套',
  //   icon: 'i-iconoir:align-right',
  //   children: [
  //     {
  //       path: '1 - 1',
  //       name: '1 - 1',
  //       icon: '',
  //       children: [
  //         {
  //           path: '1 - 1 - 1',
  //           name: '1 - 1 - 1',
  //           icon: '',
  //           children: [
  //             {
  //               path: '1 - 1 - 1 - 1',
  //               name: '1 - 1 - 1 - 1',
  //               icon: '',
  //               children: [
  //                 {
  //                   path: '1 - 1 - 1 - 1 - 2',
  //                   name: '1 - 1 - 1 - 1 - 2',
  //                   icon: '',
  //                   children: []
  //                 }]
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    path: '/article-manage',
    name: '文章管理',
    icon: 'i-iconoir:google-docs',
    children: []
  },
  {
    path: '/3',
    name: '组织架构',
    icon: 'i-iconoir:network-right',
    children: [
      {
        path: '/department',
        name: '部门管理',
        icon: '',
        children: []
      }
    ]
  },
  {
    path: '/4',
    name: '数据字典',
    icon: 'i-iconoir:bookmark-book',
    children: [
      {
        path: '/code-group',
        name: '代码组',
        icon: '',
        children: []
      },
      {
        path: '/global-code',
        name: '全局代码',
        icon: '',
        children: []
      }
    ]
  },
  {
    path: '/5',
    name: '系统管理',
    icon: 'i-iconoir:settings',
    children: [
      {
        path: '/system-setting',
        name: '系统设置',
        icon: '',
        children: []
      },
      {
        path: '/user-manage',
        name: '用户管理',
        icon: '',
        children: []
      },
      {
        path: '/role-permission',
        name: '角色权限',
        icon: '',
        children: []
      }
    ]
  }
]

export default data
