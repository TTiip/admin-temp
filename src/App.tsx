import Footer from '~/components/Footer.vue'

export default defineComponent({
  name: 'AppComponent',
  setup () {
    return () => (
      <main class="font-sans text-center text-gray-700 text-dark:gray-200">
        <router-view />
        <Footer />
      </main>
    )
  }
})
