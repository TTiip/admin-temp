import { ElPopover } from 'element-plus'

export default defineComponent({
  name: 'choose-theme',
  setup () {
    const attrs = useAttrs()
    const hex2rgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return `${r}, ${g}, ${b}`
    }

    const colorPrimary = useCssVar('--el-color-primary')
    const colorPrimaryRgb = useCssVar('--el-color-primary-rgb')
    const elColorPrimary = useLocalStorage('--el-color-primary', colorPrimary.value.trim())
    watch(elColorPrimary, (val: string) => {
      colorPrimary.value = val
      colorPrimaryRgb.value = hex2rgb(val)
    })

    const colorList = [
      '#409EFF',
      '#6366F1',
      '#67C23A',
      '#E6A23C',
      '#909399'
    ]

    return () => (
      <div {...attrs}>
        <ElPopover
          width="auto"
          v-slots={{
            reference: () => (
              <button
                class="btn text-18px dark:i-iconoir-half-moon i-iconoir:sun-light"
                onClick={ () => toggleDark() } />
            )
          }}
        >
          <div class="flex gap-3">
            {
              colorList.map(color => (
                <div
                  key={ color }
                  style={ `background: ${color};outline-color: ${color}` }
                  class={ `h-5 w-5 rounded cursor-pointer ${elColorPrimary.value === color ? 'outline outline-offset-1' : ''}` }
                  onClick={ () => elColorPrimary.value = color }
                />
              ))
            }
          </div>
        </ElPopover>
      </div>
    )
  }
})
