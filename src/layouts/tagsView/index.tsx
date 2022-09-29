import type { RouteLocation } from 'vue-router'
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

    watch(() => route.fullPath, () => {
      tagsViewInstance.addView(route)
      moveToCurrentTag()
    }, { immediate: true })

    const tags = $shallowRef<{ to: RouteLocation }[]>([])
    const scrollPaneRef = $shallowRef<any>()
    async function moveToCurrentTag () {
      await nextTick()
      if (!tags.length) { return }
      const tag = tags.find((i: any) => i.to?.path === route.path)
      if (tag) { scrollPaneRef?.moveToTarget(tag) }
    }

    function toLastView () {
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

    onMounted(() => {
      Sortable.create(document.querySelector('.scrollContent'),
        {
          animation: 150,
          onEnd (evt: Event) {
            console.log(evt, 'evtevtevtevt')
          }
        })
    })

    return () => (
      <div class="px-1 min-h-6 overflow-hidden relative flex flex-nowrap bg-gray-200 dark:bg-zinc-700 dark:bg-opacity-60">
        <ScrollPane class="h-auto!">
          <div class="flex  scrollContent pl-10px">
            {
              Array.from(Array(5).keys()).map((item: any) =>
                <div
                  class="h-24px shrink-0"
                  key={ item }
                >
                  <div class="tab-item">
                    <span class="split absolute left-[-6px] z-[-1] text-gray-400">｜</span>
                    <div class="absolute left-3 h-2 w-2 rounded-full mr-1.5 bg-green-500" />
                    <div>{ item }</div>
                    <span class="ml-5 text-xs flex items-center hover:bg-gray-300 group-hover:opacity-100 rounded-full duration-300">
                      <i class="i-iconoir-cancel" />
                    </span>
                  </div>
                </div>)
            }
          </div>
        </ScrollPane>
      </div>
    )
  }
})