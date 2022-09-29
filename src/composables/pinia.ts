// tagsViewStore

const getTagsViewInstance = () => {
  const tagsViewStore = useTagsViewStore()

  tagsViewStore.$subscribe((_, state) => {
    // 每当它发生变化时，将整个状态持久化到本地存储
    localStorage.setItem('visitedViews', JSON.stringify(state.visitedViews))
  })

  return tagsViewStore
}

export {
  getTagsViewInstance
}
