import { ElMenuItem, ElSubMenu } from 'element-plus'

export default defineComponent({
  name: 'ElSubMenuBox',
  props: ['menuData'],
  setup (props) {
    console.log(props, 'props')
    const ElSubMenuSlot = {
      title: () => (
        <>
          <i class="i-carbon:3d-curve-auto-colon mr-6px" />
          <span>Navigator One</span>
        </>
      )
    }

    const renderSlots = () => {
      return (
        <ElSubMenu
          index="1"
          v-slots={ ElSubMenuSlot }
        >
          <ElMenuItem index="1-1">item one</ElMenuItem>
          <ElMenuItem index="1-2">item two</ElMenuItem>
        </ElSubMenu>
      )
    }

    return () => renderSlots()
  }
})
