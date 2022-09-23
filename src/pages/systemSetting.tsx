export default defineComponent({
  name: 'SystemSettingPage',
  setup () {
    return () => (
      <route lang="yaml">
        component: ~/layouts/index.tsx
        meta:
          title: 系统设置
          showId: true
      </route>
    )
  }
})
