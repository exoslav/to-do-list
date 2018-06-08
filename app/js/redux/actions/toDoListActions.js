import { getToDoItems, addToDoItem } from '../../services/fetchToDoItems'

export const addToDo = (toDoItem) => (dispatch) => {
  dispatch({
    type: 'ADD_TODO',
    payload: addToDoItem(toDoItem)
  })
}

export const deleteToDo = id => ({
  type: 'DELETE_TODO',
  payload: id
})

export const completeToDo = id => ({
  type: 'COMPLETE_TODO',
  payload: id
})

export const fetchToDoItems = () => (dispatch) => {
  dispatch({
    type: 'FETCH_TODO_ITEMS',
    payload: getToDoItems()
  })
}
