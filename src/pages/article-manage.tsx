export default defineComponent({
  name: 'ArticleManagePage',
  setup () {
    return () => (
      <route lang="yaml">
        component: ~/layouts/index.tsx
        meta:
          title: 文章管理
          showId: true
      </route>
    )
  }
})
