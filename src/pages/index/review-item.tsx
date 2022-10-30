export default defineComponent({
  name: 'review-item',
  props: ['maps'],
  setup (props) {
    const { maps } = props
    console.log(maps, 'maps!!!')
    return () => (
      <div>
        <ul>
          {
            Object.keys(maps).map(key => {
              if (maps[key].type === 'object') {
                return (
                  <li
                    key={ key }
                  >
                    <review-item maps={ maps[key].keyMaps } />
                  </li>
                )
              } else {
                return (
                  <li
                    key={ key }
                    class="flex"
                  >
                    <div class="min-w-160px text-left pl-20px">
                      { maps[key].label }:
                    </div>
                    <ul class="flex" style={ `color: ${maps[key].newVal !== maps[key].oldVal ? 'red' : ''}` }>
                      <li class="min-w-200px">
												newVal - { maps[key].newVal }
                      </li>
                      <li class="min-w-200px">
												oldVal - { maps[key].oldVal }
                      </li>
                    </ul>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
    )
  }
})
