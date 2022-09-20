export default defineComponent({
  name: 'HomePage',
  setup () {
    return () => (
      <route lang="yaml">
        component: ~/layouts/index.tsx
        meta:
          title: 首页
          icon: i-iconoir:home
          order: 1
      </route>
    )
  }
})
