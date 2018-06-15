export const getToDoItems = () => {
  if (typeof window === 'undefined' || typeof window.localStorage !== 'undefined') {
    if (window.localStorage.toDoItems) {
      return JSON.parse(window.localStorage.toDoItems)
    }

    window.localStorage.toDoItems = JSON.stringify([])

    return []
  }

  return []
}

export const addToDoItem = (newItem) => {
  if (typeof window === 'undefined' || typeof window.localStorage !== 'undefined') {
    if (window.localStorage.toDoItems) {
      const items = JSON.parse(window.localStorage.toDoItems)

      items.push(newItem)

      window.localStorage.toDoItems = JSON.stringify(items)
    }

    window.localStorage.toDoItems = JSON.stringify([newItem])
  }
}
