/*
store = [
  {
    id: @number,
    title: @string,
    icon: @string
  }
]
*/

export default (store = {
  name: 'Martin Nikl'
}, action) => {
  switch (action.type) {
  case 'CHANGE_NAME':
    return { ...store, name: '' }

  default:
    return store
  }
}
