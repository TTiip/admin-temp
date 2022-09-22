import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'
import type { PropType } from 'vue'
import type { MenuItemType } from '~/types'
import './index.css'

export default defineComponent({
  name: 'ElMenuBox',
  props: {
    menuData: {
      type: Array as PropType<MenuItemType[]>,
      require: true
    },
    defaultActive: {
      type: String,
      required: true
    },
    router: {
      type: Boolean,
      default: () => true
    }
  },
  setup (props) {
    const menuAttrs = useAttrs()

    return () => {
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

      return (
        <ElMenu
          { ...menuAttrs }
          default-active={ props.defaultActive! }
          router={ props.router }
          collapse={ false }
          class="b-r-none! overflow-auto text-gray-700 dark:text-gray-200"
        >
          { renderSlots(props.menuData!) }
        </ElMenu>
      )
    }
  }
})
