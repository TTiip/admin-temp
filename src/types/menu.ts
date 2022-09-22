interface MenuItemType {
	index: string
	title: string
	icon: string
	path: string
	children: MenuItemType[]
}

export type {
  MenuItemType
}
