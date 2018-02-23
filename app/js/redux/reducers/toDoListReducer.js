export default (store = [], action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return [...store, action.payload]

  case 'DELETE_TODO':
    return store.filter(item => item.id !== action.payload)

  case 'COMPLETE_TODO':
    return store.map((item) => {
      if (item.id === action.payload) {
        item.completed = true
      }

      return item
    })
  default:
    return store
  }
}
