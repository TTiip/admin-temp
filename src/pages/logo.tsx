import PlumBlossom from '~/components/plumBlossom'
import ChooseTheme from '~/layouts/navigation/choose-theme'

export default defineComponent({
  name: 'Logo',
  setup () {
    return () => {
      return (
        <div>
          {/* 梅花组件 */}
          <PlumBlossom />
          <ChooseTheme />
          <div>112233</div>
        </div>
      )
    }
  }
})
