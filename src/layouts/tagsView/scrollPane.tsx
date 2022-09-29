import type { PropType } from 'vue'
import { withModifiers } from 'vue'
import type { RouteLocation } from 'vue-router'
import { ElScrollbar } from 'element-plus'

export default defineComponent({
  name: 'ScrollPane',
  props: {
    tagList: {
      type: Array as PropType<any[]>,
      default: () => ([])
    }
  },
  setup (props, ctx) {
    const attrs = useAttrs()
    const { tagList = [] } = props
    const scrollContainer = shallowRef<any>()
    const scrollWrapper = computed(() => scrollContainer.value.wrap$)

    const handleScroll = (e: WheelEvent) => {
      scrollWrapper.value.scrollLeft = scrollWrapper.value.scrollLeft + -e.deltaX
    }

    const moveToTarget = (currentTag: RouteLocation) => {
      const $container = scrollContainer.value.$el
      const $containerWidth = $container.offsetWidth
      const $scrollWrapper = scrollWrapper.value

      let firstTag = null
      let lastTag = null

      // 找到第一个和最后一个 tag
      if (tagList.length > 0) {
        firstTag = tagList[0]
        lastTag = tagList[tagList.length - 1]
      }

      if (firstTag === currentTag) {
        $scrollWrapper.scrollLeft = 0
      } else if (lastTag === currentTag) {
        $scrollWrapper.scrollLeft = $scrollWrapper.scrollWidth - $containerWidth
      } else {
        // 找到上一个和下一个 tag
        const currentIndex = tagList.findIndex(item => item === currentTag)
        const prevTag = tagList[currentIndex - 1]
        const nextTag = tagList[currentIndex + 1]

        // nextTag 之后的标签的 OffsetLeft
        const afterNextTagOffsetLeft = nextTag.offsetLeft + nextTag.offsetWidth

        // prevTag 之后的标签的 OffsetLeft
        const beforePrevTagOffsetLeft = prevTag.offsetLeft

        if (afterNextTagOffsetLeft > $scrollWrapper.scrollLeft + $containerWidth) { $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth } else if (beforePrevTagOffsetLeft < $scrollWrapper.scrollLeft) { $scrollWrapper.scrollLeft = beforePrevTagOffsetLeft }
      }
    }

    ctx.expose({
      moveToTarget
    })

    return () => (
      <ElScrollbar
        { ...attrs }
        ref={ scrollContainer }
        class="whitespace-nowrap flex-1 flex items-end"
        onWheel={ withModifiers(handleScroll, ['passive']) }
      >
        { ctx.slots?.default ? ctx.slots?.default() : null }
      </ElScrollbar>
    )
  }
})
