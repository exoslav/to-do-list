export const addCategory = toDoItem => ({
  type: 'ADD_CATEGORY',
  payload: toDoItem
})

export const deleteCategory = id => ({
  type: 'DELETE_CATEGORY',
  payload: id
})
