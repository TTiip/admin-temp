import { ElMenuItem, ElMenuItemGroup, ElSubMenu } from 'element-plus'

export default defineComponent({
  name: 'ElSubMenuBox',
  setup () {
    const ElSubMenuSlot = {
      title: () => (
        <>
          {/* <ElIcon><location /></ElIcon> */}
          <span>Navigator One</span>
        </>
      )
    }
    const ElMenuItemGroupSlot = {
      title: () => (
        <>
          <span>Group One</span>
        </>
      )
    }

    return () => (
      <ElSubMenu
        index="1"
        v-slots={ ElSubMenuSlot }
      >
        <ElMenuItemGroup v-slots={ ElMenuItemGroupSlot }>
          <ElMenuItem index="1-1">item one</ElMenuItem>
          <ElMenuItem index="1-2">item two</ElMenuItem>
        </ElMenuItemGroup>
      </ElSubMenu>
    )
  }
})
