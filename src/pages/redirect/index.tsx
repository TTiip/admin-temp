import { onBeforeRouteLeave } from 'vue-router'

export default defineComponent({
  name: 'redirect',
  setup () {
    const router = useRouter()
    const redirect = useRouteQuery('redirect').value
    const tagsViewInstance = getTagsViewInstance()

    redirect ? router.push(redirect as string) : router.go(-1)

    onBeforeRouteLeave(to => {
      tagsViewInstance.deleteCachedView(to)
    })
    return () => <div />
  }
})
