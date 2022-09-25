interface MenuItemType {
	path: string
	name: string
	icon: string
	meta?: {
		hidden: boolean
		permission: boolean
		title: string
	}
	children: MenuItemType[]
}

export type {
  MenuItemType
}
