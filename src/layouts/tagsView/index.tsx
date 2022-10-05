import { withModifiers } from 'vue'
import type { RouteLocation } from 'vue-router'
import type { SortableEvent } from 'sortablejs'
import { ElPopover } from 'element-plus'
import Sortable from 'sortablejs'
import ScrollPane from '~/layouts/tagsView/scrollPane'
import './index.css'

export default defineComponent({
  name: 'TagsView',
  setup () {
    const route = useRoute()
    const router = useRouter()
    const tagsViewInstance = getTagsViewInstance()

    const tags = shallowRef<{ to: RouteLocation }[]>([])
    const scrollPaneRef = shallowRef<any>()

    const selectedTag = ref<any>()
    let show = ref<boolean>(false)

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
      if (latestView) {
        router.push(latestView)
      } else {
        router.push('/')
      }
    }

    const isActive = $computed(() =>
      (tag: RouteLocation) => tag.path === route.path)

    const closeTag = (view = route) => {
      show.value = false
      tagsViewInstance.dropView(view)
      if (isActive(view)) {
        toLastView()
      }
    }

    const reflash = (view = route) => {
      show.value = false
      tagsViewInstance.pushRoute(view)
    }

    const closeOthersTags = (view = route) => {
      show.value = false
      tagsViewInstance.delOthersViews(view)
      if (view !== route) {
        router.push(view)
      }
    }

    const closeAllTags = () => {
      show.value = false
      tagsViewInstance.delOthersViews()
      toLastView()
    }

    const tagItemClick = (item: any) => {
      tagsViewInstance.pushRoute(item)
    }

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
          <ScrollPane
            class="h-auto!"
            ref={ scrollPaneRef }
            tagList={tags.value}
          >
            <div class="flex  scrollContent pl-10px">
              {
                tagsViewInstance.visitedViews.map((item: any, index: number) => {
                  return (
                    <div
                      ref={(val: any) => {
                        if (val) {
                          val.to = item
                          tags.value[index] = val
                        }
                      }}
                      class={ `z-9 h-24px shrink-0 tab-item ${isActive(item) ? 'active' : ''}` }
                      onClick={ () => tagItemClick(item) }
                      key={ item?.fullPath }
                      onContextmenu={ withModifiers(() => {
                        selectedTag.value = tags.value[index]
                        show.value = true
                      }, ['prevent']) }
                    >
                      <span class="split absolute left-[-6px] z-[-1] text-gray-400">｜</span>
                      <div v-show={ isActive(item) } class="absolute left-3 h-2 w-2 rounded-full mr-1.5 bg-[var(--el-color-primary)]" />
                      <div class="px-6px">{ item?.meta?.title }</div>
                      <span class={`${!isActive(item) ? 'opacity-0' : ''} icon-close text-xs flex items-center hover:bg-gray-300 rounded-full duration-300`}>
                        <i onClick={ withModifiers(() => closeTag(item), ['stop']) } class="i-iconoir-cancel" />
                      </span>
                    </div>
                  )
                })
              }
            </div>
          </ScrollPane>
          {
            show.value
              ? (<ElPopover
                v-model={[show.value, 'visible']}
                trigger="click"
                popper-options={{ modifiers: [{ name: 'offset', options: { offset: [0, 0] } }] }}
                popper-class="min-w-[unset]! w-auto!"
                virtual-ref={ selectedTag.value }
                virtual-triggering
              >
                <ul class="v-dropdown">
                  <li onClick={ () => reflash(selectedTag.value?.to) }>
                    刷新
                  </li>
                  <li onClick={ () => closeTag(selectedTag.value?.to) }>
                    关闭
                  </li>
                  <li onClick={ () => closeOthersTags(selectedTag.value?.to) }>
                    关闭其他
                  </li>
                  <li onClick={ () => closeAllTags() }>
                    关闭全部
                  </li>
                </ul>
              </ElPopover>)
              : null
          }
        </div>
      )
    }
  }
})

