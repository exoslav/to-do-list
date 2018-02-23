export const addToDo(toDoItem) ({
  type: 'ADD_TODO',
  toDoItem
})

export const deleteToDo(id) ({
  type: 'DELETE_TODO',
  id
})

export const addToDo(id) ({
  type: 'COMPLETE_TODO',
  id
})
