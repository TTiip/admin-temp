export default defineComponent({
  name: 'RolePermissionPage',
  setup () {
    return () => (
      <route lang="yaml">
        component: ~/layouts/index.tsx
        meta:
          title: 角色权限
          showId: true
      </route>
    )
  }
})
