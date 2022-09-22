import { ElMenuItem, ElSubMenu } from 'element-plus'
import type { PropType } from 'vue'
import type { MenuItemType } from '~/types'

export default defineComponent({
  name: 'ElSubMenuBox',
  props: {
    menuData: {
      type: Array as PropType<MenuItemType[]>,
      require: true
    }
  },
  setup (props) {
    const renderSlots = (data: MenuItemType[]) =>
      data.map((item: MenuItemType) => {
        const slots = {
          title: () => (
            <>
              <i class={`${item.icon} m-6px`}/>
              <span>{item.title}</span>
            </>
          )
        }

        if (item.children && item.children.length) {
          return (
            <ElSubMenu
              key={ item.index }
              index={ item.index }
              v-slots={ slots }
            >
              { renderSlots(item.children) }
            </ElSubMenu>
          )
        } else {
          return (
            <ElMenuItem
              key={ item.index }
              index={ item.index }
            >
              <i class={`${item.icon} m-6px`}/>
              <span>{item.title}</span>
            </ElMenuItem>
          )
        }
      })

    return () => renderSlots(props.menuData!)
  }
})
