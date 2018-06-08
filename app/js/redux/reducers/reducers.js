import { combineReducers } from 'redux'
import userReducer from './userReducer'
import toDoListReducer from './toDoListReducer'
import locationSearch from './locationSearch'
import categoriesReducer from './categoriesReducer'

export default combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  toDoList: toDoListReducer,
  locationSearch: locationSearch
})
