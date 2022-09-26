import { defineStore } from 'pinia'

interface Item {
  id: number
  content: string
}
let id = 1

const generateId = () => id++

const useTodoStore = defineStore('todo', () => {
  const newItem = ref('')
  const items = reactive<Item[]>([])
  const itemCount = computed(() => items.length)

  const resetNewItem = () => {
    newItem.value = ''
  }

  // 支持 使用 async 做异步操作。
  const addItem = async () => {
    items.push({
      id: generateId(),
      content: newItem.value
    })
    // reset newItem value
    resetNewItem()
    return 'async return value is addItem'
  }
  const removeItem = (item: Item) => {
    const index = items.indexOf(item)
    items.splice(index, 1)
  }

  return {
    newItem,
    items,
    itemCount,
    addItem,
    removeItem
  }
})

export {
  useTodoStore
}

export {
  Item
}
