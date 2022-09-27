import ScrollPane from '~/layouts/tagsView/scrollPane'

export default defineComponent({
  name: 'TagsView',
  setup () {
    return () => (
      <>
        <ScrollPane class="h-auto!">
          <div class="h-40px w-2000px">
            test
          </div>
        </ScrollPane>
      </>
    )
  }
})
