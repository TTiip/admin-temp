import { defineStore } from 'pinia'

const tagsViewStore = defineStore('tagsView', () => {
  let tagsViewList = ref([
    {
      id: 1,
      name: 'test'
    }
  ])

  return {
    tagsViewList
  }
})

export {
  tagsViewStore
}
