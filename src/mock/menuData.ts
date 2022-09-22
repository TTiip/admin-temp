import type { MenuItemType } from '~/types/index'

const data: MenuItemType[] = [
  {
    index: '/',
    title: '首页',
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
            children: []
          },
          {
            index: '1 - 1 - 2',
            title: '1 - 1 - 2',
            icon: 'i-carbon:3d-curve-auto-colon',
            children: [
              {
                index: '1 - 1 - 1 - 1',
                title: '1 - 1 - 1 - 1',
                icon: 'i-carbon:3d-curve-auto-colon',
                children: []
              },
              {
                index: '1 - 1 - 1 - 2',
                title: '1 - 1 - 1 - 2',
                icon: 'i-carbon:3d-curve-auto-colon',
                children: []
              }
            ]
          }
        ]
      },
      {
        index: '1 - 2',
        title: '1 - 2',
        icon: 'i-carbon:3d-curve-auto-colon',
        children: []
      }
    ]
  }
]

export default data
