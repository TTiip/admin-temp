export default defineComponent({
  name: 'DepartmentPage',
  setup () {
    return () => (
      <route lang="yaml">
        component: ~/layouts/index.tsx
        meta:
          title: 组织架构
          hidden: false
          permission: true
      </route>
    )
  }
})
