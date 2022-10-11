import { onBeforeRouteLeave } from 'vue-router'

export default defineComponent({
  name: 'redirect',
  setup () {
    const router = useRouter()
    const redirect = useRouteQuery('redirect').value
    const tagsViewInstance = getTagsViewInstance()

    redirect ? router.replace(redirect as string) : router.go(-1)

    console.log(redirect, 'redirect')

    onBeforeRouteLeave(to => {
      tagsViewInstance.dropCachedView(to)
    })
    return () => <div></div>
  }
})
