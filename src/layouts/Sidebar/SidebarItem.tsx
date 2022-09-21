import { ElMenuItem, ElMenuItemGroup, ElSubMenu } from 'element-plus'

export default defineComponent({
  name: 'ElSubMenuBox',
  setup () {
    const ElSubMenuSlot = {
      title: () => (
        <>
          <i class="i-carbon:3d-curve-auto-colon mr-6px" />
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
