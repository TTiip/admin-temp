import type { MenuItemType } from '~/types/index'

const data: MenuItemType[] = [
  {
    index: '1',
    title: 'Navigator One',
    showGroup: true,
    GroupName: 'Group One',
    icon: 'i-carbon:3d-curve-auto-colon',
    to: '',
    children: [
      {
        index: '1 - 1',
        showGroup: true,
        GroupName: 'Group One',
        icon: 'i-carbon:3d-curve-auto-colon',
        to: '',
        children: [
          {
            index: '1 - 1',
            showGroup: true,
            GroupName: 'Group One',
            icon: 'i-carbon:3d-curve-auto-colon',
            to: '',
            children: []
          }
        ]
      },
      {
        index: '1 - 2',
        showGroup: true,
        GroupName: 'Group One',
        icon: 'i-carbon:3d-curve-auto-colon',
        to: '',
        children: []
      }
    ]
  }
]

export default data
