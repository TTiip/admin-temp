import type { MenuItemType } from '~/types/index'

const data: MenuItemType[] = [
  {
    index: '/',
    title: '首页',
    icon: 'i-iconoir:home',
    children: []
  },
  {
    index: '/1',
    title: '路由嵌套',
    icon: 'i-iconoir:align-right',
    children: [
      {
        index: '1 - 1',
        title: '1 - 1',
        icon: '',
        children: [
          {
            index: '1 - 1 - 1',
            title: '1 - 1 - 1',
            icon: '',
            children: [
              {
                index: '1 - 1 - 1 - 1',
                title: '1 - 1 - 1 - 1',
                icon: '',
                children: [
                  {
                    index: '1 - 1 - 1 - 1 - 2',
                    title: '1 - 1 - 1 - 1 - 2',
                    icon: '',
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
    icon: 'i-iconoir:google-docs',
    children: []
  },
  {
    index: '/3',
    title: '组织架构',
    icon: 'i-iconoir:bookmark-book',
    children: [
      {
        index: '/3-1',
        title: '部门管理',
        icon: '',
        children: []
      }
    ]
  },
  {
    index: '/4',
    title: '数据字典',
    icon: 'i-iconoir:settings',
    children: [
      {
        index: '/4-1',
        title: '代码组',
        icon: '',
        children: []
      },
      {
        index: '/4-2',
        title: '全局代码',
        icon: '',
        children: []
      }
    ]
  },
  {
    index: '/5',
    title: '系统管理',
    icon: 'i-iconoir:settings',
    children: [
      {
        index: '/5-1',
        title: '系统设置',
        icon: '',
        children: []
      },
      {
        index: '/5-2',
        title: '用户管理',
        icon: '',
        children: []
      },
      {
        index: '/5-3',
        title: '角色权限',
        icon: '',
        children: []
      }
    ]
  }
]

export default data
