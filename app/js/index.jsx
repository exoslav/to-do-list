import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import '../styles/index.scss'

import store from './redux/store'
import routes from './routes'

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      {renderRoutes(routes)}
    </Provider>
  </HashRouter>,
  document.getElementById('app')
)
