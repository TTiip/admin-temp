export default defineComponent({
  name: 'DepartmentPage',
  setup () {
    return () => (
      <route lang="yaml">
        component: ~/layouts/index.tsx
        meta:
          title: 部门管理
          showId: true
      </route>
    )
  }
})
