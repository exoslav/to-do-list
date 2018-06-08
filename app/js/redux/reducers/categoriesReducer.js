/*
store = [
  {
    id: @number,
    title: @string,
    icon: @string
  }
]
*/

export default (store = [
  {
    id: 1,
    title: 'Personal',
    slug: 'personal',
    icon: 'CAMERA'
  },
  {
    id: 2,
    title: 'Business',
    slug: 'business',
    icon: 'BULLHORN'
  },
  {
    id: 3,
    title: 'Common',
    slug: 'common',
    icon: 'LIFEBUOY'
  }
], action) => {
  switch (action.type) {
  case 'ADD_CATEGORY':
    return [...store, action.payload]

  case 'DELETE_CATEGORY':
    return store.filter(item => item.id !== action.payload)

  default:
    return store
  }
}
