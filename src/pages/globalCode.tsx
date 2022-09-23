export default defineComponent({
  name: 'GlobalCodePage',
  setup () {
    return () => (
      <route lang="yaml">
        component: ~/layouts/index.tsx
        meta:
          title: 全局代码
          showId: true
      </route>
    )
  }
})
