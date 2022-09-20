import { ElAside, ElContainer, ElMain } from 'element-plus'

export default defineComponent({
  name: 'HomePage',
  setup () {
    return () => (
      <div>
        <ElContainer>
          <ElAside class="p-0 color-#ff6700" width="200px">Aside</ElAside>
          <ElMain class="p-0">Main</ElMain>
        </ElContainer>
      </div>
    )
  }
})

