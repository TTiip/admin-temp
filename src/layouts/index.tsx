import { KeepAlive, Transition } from 'vue'
import { ElAside, ElMain } from 'element-plus'
import Sidebar from '~/layouts/Sidebar/index'

export default defineComponent({
  name: 'HomePage',
  setup () {
    return () => (
      <div class="flex h-screen">
        <ElAside class="row-span-2 flex flex-col b-0 b-r-1 b-r-zinc-200 dark:b-r-zinc-700 shadow-md z-3">
          <header class="h-12 flex items-center shadow-md z-3 px-3 cursor-pointer">
            <img class="w-8 mx-1" src="/logo.png" />
            <div class="relative overflow-hidden">
              <Transition enter-active-class="absolute" duration={ 300 } leave-active-class="absolute">
                <h1 class="ml-1 text-primary center text-gray-700 dark:text-gray-200">name~</h1>
              </Transition>
            </div>
          </header>
          <Sidebar class="row-span-2 flex-1 b-0 b-r-1 b-r-zinc-200 dark:b-r-zinc-700 shadow-md z-3" />
        </ElAside>

        <ElMain class="flex-1 grid grid-rows-[3rem_34px_auto] relative overflow-x-hidden">
          {/* <Navigation v-model:isCollapse="isCollapse" />
          <TagsView /> */}
          {/* v-slots={{ Component, route }} */}
          <router-view>
            <Transition mode="out-in" name="main" appear>
              <KeepAlive>
                {/* <component is={ Component } key={ route.path } /> */}
                112233
              </KeepAlive>
            </Transition>
          </router-view>
        </ElMain>
      </div>
    )
  }
})
