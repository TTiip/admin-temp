import type { MenuItemType } from '~/types/index'

const data: MenuItemType[] = [
  {
    index: '/',
    title: '首页',
    icon: 'i-carbon:3d-curve-auto-colon',
    children: []
  },
  {
    index: '/1',
    title: '路由嵌套',
    icon: 'i-carbon:3d-curve-auto-colon',
    children: [
      {
        index: '1 - 1',
        title: '1 - 1',
        icon: 'i-carbon:3d-curve-auto-colon',
        children: [
          {
            index: '1 - 1 - 1',
            title: '1 - 1 - 1',
            icon: 'i-carbon:3d-curve-auto-colon',
            children: [
              {
                index: '1 - 1 - 1 - 1',
                title: '1 - 1 - 1 - 1',
                icon: 'i-carbon:3d-curve-auto-colon',
                children: [
                  {
                    index: '1 - 1 - 1 - 1 - 2',
                    title: '1 - 1 - 1 - 1 - 2',
                    icon: 'i-carbon:3d-curve-auto-colon',
                    children: []
                  }]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    index: '/2',
    title: '文章管理',
    icon: 'i-carbon:3d-curve-auto-colon',
    children: []
  },
  {
    index: '/3',
    title: '组织架构',
    icon: 'i-carbon:3d-curve-auto-colon',
    children: [
      {
        index: '/3-1',
        title: '部门管理',
        icon: 'i-carbon:3d-curve-auto-colon',
        children: []
      }
    ]
  },
  {
    index: '/4',
    title: '数据字典',
    icon: 'i-carbon:3d-curve-auto-colon',
    children: [
      {
        index: '/4-1',
        title: '代码组',
        icon: 'i-carbon:3d-curve-auto-colon',
        children: []
      },
      {
        index: '/4-2',
        title: '全局代码',
        icon: 'i-carbon:3d-curve-auto-colon',
        children: []
      }
    ]
  },
  {
    index: '/5',
    title: '系统管理',
    icon: 'i-carbon:3d-curve-auto-colon',
    children: [
      {
        index: '/5-1',
        title: '系统设置',
        icon: 'i-carbon:3d-curve-auto-colon',
        children: []
      },
      {
        index: '/5-2',
        title: '用户管理',
        icon: 'i-carbon:3d-curve-auto-colon',
        children: []
      },
      {
        index: '/5-3',
        title: '角色权限',
        icon: 'i-carbon:3d-curve-auto-colon',
        children: []
      }
    ]
  }
]

export default data
