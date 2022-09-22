import type { MenuItemType } from '~/types/index'

const data: MenuItemType[] = [
  {
    index: '1',
    title: '1',
    icon: 'i-carbon:3d-curve-auto-colon',
    path: '',
    children: [
      {
        index: '1 - 1',
        title: '1 - 1',
        icon: 'i-carbon:3d-curve-auto-colon',
        path: '',
        children: [
          {
            index: '1 - 1 - 1',
            title: '1 - 1 - 1',
            icon: 'i-carbon:3d-curve-auto-colon',
            path: '',
            children: []
          },
          {
            index: '1 - 1 - 2',
            title: '1 - 1 - 2',
            icon: 'i-carbon:3d-curve-auto-colon',
            path: '',
            children: [
              {
                index: '1 - 1 - 1 - 1',
                title: '1 - 1 - 1 - 1',
                icon: 'i-carbon:3d-curve-auto-colon',
                path: '',
                children: []
              },
              {
                index: '/',
                title: '1 - 1 - 1 - 2',
                icon: 'i-carbon:3d-curve-auto-colon',
                path: '',
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
        path: '',
        children: []
      }
    ]
  }
]

export default data
