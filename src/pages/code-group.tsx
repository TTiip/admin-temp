export default defineComponent({
  name: 'CodeGroupPage',
  setup () {
    return () => (
      <route lang="yaml">
        component: ~/layouts/index.tsx
        meta:
          title: 代码组
          showId: true
      </route>
    )
  }
})
