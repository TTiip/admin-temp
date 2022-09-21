interface MenuItemType {
	index: string
	title?: string
	showGroup: boolean
	GroupName: string
	icon: string
	to: string
	children: MenuItemType[]
}

export type {
  MenuItemType
}
