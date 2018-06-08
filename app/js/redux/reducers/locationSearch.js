export default (store = {}, action) => {
  switch (action.type) {
  case 'ADD_LOCATION_SEARCH':
    return { ...action.payload }

  default:
    return store
  }
}
