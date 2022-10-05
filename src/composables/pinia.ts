// tagsViewStore

const getTagsViewInstance = () => {
  const tagsViewStore = useTagsViewStore()

  // 每当它发生变化时，将整个状态持久化到本地存储
  tagsViewStore.$subscribe((_, state) => {
    // // 删除matched 防止JSON.stringify 格式化报错
    const coverVisitedViews = JSON.stringify(state.visitedViews.map((item: any) => ({
      ...item,
      matched: []
    })))
    localStorage.setItem('visitedViews', coverVisitedViews)
  })

  return tagsViewStore
}

export {
  getTagsViewInstance
}
