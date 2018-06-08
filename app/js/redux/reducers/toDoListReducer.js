/*
 store = [
   {
     id: @number,
     title: @string,
     content: @string,
     category: @array
   }
 ]
 */

/*
[
  {
    id: 1,
    title: 'Boglio suit fitting',
    content: 'ToDo Content',
    date: new Date().getTime(),
    completed: false,
    category: 1
  },
  {
    id: 2,
    title: 'Final Design Delivery',
    content: 'ToDo Content',
    date: new Date().setDate(new Date().getDate() + 1),
    completed: false,
    category: 2
  },
  {
    id: 3,
    title: 'ToDo Title',
    content: 'ToDo Content',
    date: new Date().setDate(new Date().getDate() + 2),
    completed: false,
    category: 3
  }
]
*/

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

  case 'FETCH_TODO_ITEMS':
    return action.payload

  default:
    return store
  }
}
