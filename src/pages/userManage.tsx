export default defineComponent({
  name: 'UserManagePage',
  setup () {
    return () => (
      <route lang="yaml">
        component: ~/layouts/index.tsx
        meta:
          title: 用户管理
          showId: true
      </route>
    )
  }
})
