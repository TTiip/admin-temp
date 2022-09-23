import { defineProps, withModifiers } from 'vue'

export default defineComponent({
  name: 'Navigation',
  setup () {
    const user: any = {}
    const tagsView: any = []

    const props = defineProps<{
			isCollapse: boolean
		}>()
    const isCollapse = useVModel(props, 'isCollapse')
    watch(useBreakpoints({ tablet: 768 }).smaller('tablet'), val => {
      isCollapse.value = val
    })

    const { isFullscreen, toggle } = useFullscreen()
    const showMenu = ref(false)

    // const route = useRoute()
    const router = useRouter()
    // const list = computed(() => router.resolve(route).matched.filter(i => i?.meta.title))
    const list: any = []
    return () => {
      return (
        <nav class="flex gap-3 items-center text-sm px-3">
          <i class={ `cursor-pointer ${isCollapse.value ? 'i-line-md:menu-fold-right' : 'i-line-md:menu-fold-left'}` } onClick={ () => isCollapse.value = !isCollapse.value } />

          <el-breadcrumb class="mr-auto relative">
            <transition-group name="breadcrumb">
              {
                list.map((item: any) => {
                  <el-breadcrumb-item key={ item.meta?.title }>
                    <router-link class="cursor-pointer! font-400!" to={ item } onClick={ withModifiers(() => tagsView.push(item), ['stop']) }>
                      { item.meta?.title }
                    </router-link>
                  </el-breadcrumb-item>
                })
              }
            </transition-group>
          </el-breadcrumb>

          <button class={`btn text-sm ${isFullscreen ? 'i-fa6-solid:compress' : 'i-fa6-solid:expand'}`} onClick={ toggle } />

          <el-dropdown v-slots={{
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
          </el-dropdown>
        </nav>
      )
    }
  }
})
