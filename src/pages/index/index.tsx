// https://github.com/hannoeru/vite-plugin-pages/
// 向路由添加路由元，方法是添加一个注释块，以指向 JSX 或 TSX 文件(In Vue)的路由开始。这将在生成后直接添加到路由中，并覆盖它。
/**
  <route lang="yaml">
    meta:
      permission: true
  </route>
*/

import Review from './review'

export default defineComponent({
  name: 'index',
  setup () {
    const num = ref<number>(0)
    function addNum () {
      num.value += 1
    }
    return () => (
      <div>
        <h1 onClick={ addNum }>
          Index - { num.value }
        </h1>
        <Review />
      </div>
    )
  }
})
