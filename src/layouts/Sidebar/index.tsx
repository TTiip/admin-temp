import { ElMenu } from 'element-plus'
import menuData from '../../mock/menuData'
import SidebarItem from '~/layouts/Sidebar/SidebarItem'

export default defineComponent({
  name: 'ElMenuBox',
  setup () {
    return () => (
      <ElMenu
        default-active="1"
        collapse={ false }
        class="b-r-none! overflow-auto text-gray-700 dark:text-gray-200"
      >
        <SidebarItem menuData={menuData} />
      </ElMenu>
    )
  }
})
