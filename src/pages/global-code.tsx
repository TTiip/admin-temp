export default defineComponent({
  name: 'GlobalCodePage',
  setup () {
    return () => (
      <route lang="yaml">
        component: ~/layouts/index.tsx
        meta:
          title: 数据字典
          showId: true
      </route>
    )
  }
})
