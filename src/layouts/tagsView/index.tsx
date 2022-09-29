import type { RouteLocation } from 'vue-router'
import type { SortableEvent } from 'sortablejs'
import Sortable from 'sortablejs'
import ScrollPane from '~/layouts/tagsView/scrollPane'
import './index.css'

export default defineComponent({
  name: 'TagsView',
  setup () {
    const route = useRoute()
    const router = useRouter()
    const tagsViewInstance = getTagsViewInstance()

    // const tagTitle = (tag = route) =>
    //   `${tag.meta.title || ''}${tag.query?.pageTitle ? ` : ${tag.query?.pageTitle}` : ''}`
    // useTitle(computed(tagTitle), { titleTemplate: `%s | ${settings.name}` })

    const tags = shallowRef<{ to: RouteLocation }[]>([])
    const scrollPaneRef = shallowRef<any>()

    const moveToCurrentTag = async () => {
      await nextTick()
      if (!tags.value.length) {
        return false
      }
      const tag = tags.value.find((i: any) => i.to?.path === route.path)
      if (tag) {
        scrollPaneRef.value?.moveToTarget(tag)
      }
    }

    const toLastView = () => {
      const latestView = tagsViewInstance.visitedViews.slice(-1)[0]
      if (latestView) { router.push(latestView) } else { router.push('/') }
    }

    const isActive = $computed(() =>
      (tag: RouteLocation) => tag.path === route.path)

    const closeTag = (view = route) => {
      tagsViewInstance.dropView(view)

      if (isActive(view)) { toLastView() }
    }

    const closeOthersTags = (view = route) => {
      tagsViewInstance.delOthersViews(view)
      if (view !== route) { router.push(view) }
    }

    const closeAllTags = () => {
      tagsViewInstance.delOthersViews()

      toLastView()
    }

    const selectedTag = $ref<any>()
    let show = $ref(false)

    const menuRef = ref()
    onClickOutside(menuRef, (event: any) => {
      if (event.type === 'click') { selectedTag && show && (show = false) }
    })

    watch(() => route.fullPath, () => {
      tagsViewInstance.addView(route)
      moveToCurrentTag()
    }, { immediate: true })

    onMounted(() => {
      Sortable.create(document.querySelector('.scrollContent')!,
        {
          animation: 150,
          onEnd (evt: SortableEvent) {
            // 拖拽以后改变 strore 🍍 中的数据，出发 $subscribe 方法持久化存储。
            if (evt.oldIndex !== evt.newIndex) {
              let arr = JSON.parse(JSON.stringify(tagsViewInstance.visitedViews))
              const currRow = arr.splice(evt.oldIndex, 1)[0]
              arr.splice(evt.newIndex, 0, currRow)
              tagsViewInstance.visitedViews = arr
            }
          }
        })
    })

    return () => {
      return (
        <div class="px-1 min-h-7 overflow-hidden relative flex flex-nowrap bg-gray-200 dark:bg-zinc-700 dark:bg-opacity-60">
          <ScrollPane class="h-auto!">
            <div class="flex  scrollContent pl-10px">
              {
                tagsViewInstance.visitedViews.map((item: any) =>
                  <div
                    class={ `z-9 h-24px shrink-0 tab-item ${isActive(item) ? 'active' : ''}` }
                    onClick={ () => tagsViewInstance.pushRoute(item) }
                    key={ item?.fullPath }
                  >
                    <span class="split absolute left-[-6px] z-[-1] text-gray-400">｜</span>
                    <div v-show={ isActive(item) } class="absolute left-3 h-2 w-2 rounded-full mr-1.5 bg-[var(--el-color-primary)]" />
                    <div class="px-6px">{ item?.meta?.title }</div>
                    <span v-show={ isActive(item) } class="text-xs flex items-center hover:bg-gray-300 group-hover:opacity-100 rounded-full duration-300">
                      <i class="i-iconoir-cancel" />
                    </span>
                  </div>)
              }
            </div>
          </ScrollPane>
        </div>
      )
    }
  }
})
