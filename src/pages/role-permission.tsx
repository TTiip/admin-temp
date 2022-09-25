export default defineComponent({
  name: 'RolePermissionPage',
  setup () {
    return () => (
      <route lang="yaml">
        component: ~/layouts/index.tsx
        meta:
          title: 系统管理
          showId: true
      </route>
    )
  }
})
