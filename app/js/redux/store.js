import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/reducers'

const store = createStore(reducers, applyMiddleware(thunk))

store.subscribe(() => {
  console.log('store changed', store.getState())
})

export default store
