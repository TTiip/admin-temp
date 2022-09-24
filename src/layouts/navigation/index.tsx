import { TransitionGroup } from 'vue'
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'

import './index.css'

export default defineComponent({
  name: 'Navigation',
  props: ['isCollapse'],
  setup (props, { emit }) {
    // const user: any = {}
    // const tagsView: any = []

    // 使用 useVModel 处理 props 偷个懒搞成双向绑定。
    const isCollapse = useVModel(props, 'isCollapse', emit)
    watch(useBreakpoints({ tablet: 768 }).smaller('tablet'), val => {
      isCollapse.value = val
    })

    // const showMenu = ref(false)

    const route = useRoute()
    const router = useRouter()
    const list = computed(() => router.resolve(route).matched.filter(i => i?.meta.title))
    // const list: any = []
    return () => {
      return (
        <nav class="flex gap-3 items-center text-sm px-3">
          <i class={ `cursor-pointer text-18px ${isCollapse.value ? 'i-iconoir:transition-right' : 'i-iconoir:transition-left'}` } onClick={ () => isCollapse.value = !isCollapse.value } />

          <ElBreadcrumb class="mr-auto relative">
            <TransitionGroup name="breadcrumb">
              <ElBreadcrumbItem key="homepage">homepage</ElBreadcrumbItem>
              <ElBreadcrumbItem key="promotion management">promotion management</ElBreadcrumbItem >
              <ElBreadcrumbItem key="promotion list">promotion list</ElBreadcrumbItem>
              <ElBreadcrumbItem key="promotion detail">promotion detail</ElBreadcrumbItem>
              {/* {
                (list as any).map((item: any) => {
                  <el-breadcrumb-item key={ item.meta?.title }>
                    <router-link class="cursor-pointer! font-400!" to={ item } onClick={ withModifiers(() => tagsView.push(item), ['stop']) }>
                      { item.meta?.title }
                    </router-link>
                  </el-breadcrumb-item>
                })
              } */}
            </TransitionGroup>
          </ElBreadcrumb>

          <button class={`btn text-18px ${isFullscreen.value ? 'i-iconoir:collapse' : 'i-iconoir:expand'}`} onClick={ toggleFullscreen } />

          {/* <el-dropdown v-slots={{
          dropdown: () => (
            <>
              <el-dropdown-item class="mt-1.5!" onClick={ router.push('/') }>
      				控制台
              </el-dropdown-item>
              <el-dropdown-item onClick={ showMenu.value = true }>
      				个人设置
              </el-dropdown-item>
              <el-dropdown-item divided class="mt-1.5!" onClick={ user.logout() }>
      				退出登陆
              </el-dropdown-item>
            </>
          )
        }}>
          <div class="flex items-center gap-1 cursor-pointer">
            <i class="i-fa6-solid:circle-user text-xl text-gray-300 mx-1" />
            { user.userInfo.name }
            <i i-fa-solid:sort-down self-start />
          </div>
        </el-dropdown> */}
        </nav>
      )
    }
  }
})
