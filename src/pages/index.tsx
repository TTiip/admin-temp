export default defineComponent({
  name: 'IndexPage',
  setup () {
    return () => (
      <route lang="yaml">
        component: ~/layouts/index.tsx
        meta:
          title: 首页
          showId: true
      </route>
    )
  }
})
