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
        title: 'Navigator One One One',
        showGroup: true,
        GroupName: 'Group One',
        icon: 'i-carbon:3d-curve-auto-colon',
        to: '',
        children: [
          {
            index: '1 - 1 - 1',
            title: 'Navigator One One One',
            showGroup: true,
            GroupName: 'Group One',
            icon: 'i-carbon:3d-curve-auto-colon',
            to: '',
            children: []
          },
          {
            index: '1 - 1 - 2',
            title: 'Navigator One One Two',
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
        title: 'Navigator One Two',
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
