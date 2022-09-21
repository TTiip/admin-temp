export default defineComponent({
  name: 'AppComponent',
  setup () {
    return () => (
      <main class="font-sans text-center text-gray-700 dark:text-gray-200">
        <router-view />
      </main>
    )
  }
})
