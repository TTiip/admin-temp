import ScrollPane from '~/layouts/tagsView/scrollPane'
import './index.css'

export default defineComponent({
  name: 'TagsView',
  setup () {
    return () => (
      <div class="px-1 min-h-30px overflow-hidden relative flex flex-nowrap bg-gray-200 dark:bg-zinc-700 dark:bg-opacity-60">
        <ScrollPane class="h-auto!">
          {
            Array.from(Array(41).keys()).map(item =>
              <div
                class="h-24px shrink-0"
                key={ item }
              >
                <div class="tab-item">
                  {/* <span class="split absolute left-[-6px] z-[-1] text-gray-400">｜</span> */}
                  {/* <div class="absolute left-3 h-2 w-2 rounded-full mr-1.5 bg-green-500" /> */}
                  <div>{ item }</div>
                  {/* <span class="ml-5 text-xs flex items-center hover:bg-gray-300 group-hover:opacity-100 rounded-full">
                    <i i-ic:baseline-close />
                  </span> */}
                </div>
              </div>)
          }
        </ScrollPane>
      </div>
    )
  }
})
