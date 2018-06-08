import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes, matchRoutes } from 'react-router-config'

import HomePageHeader from './routes/homepage/connectors/HeaderConnector'
import CategoryHeader from './routes/categoryDetail/connectors/HeaderConnector'

const App = (props) => {
  const branch = matchRoutes(props.route.routes, props.location.pathname)[0]

  return (
    <div>
      {console.log(props)}
      {console.log(branch)}
      <div>
        {
          branch.route.id === 'HOMEPAGE' &&
          <HomePageHeader />
        }

        {
          branch.route.id === 'CATEGORIES' &&
          <CategoryHeader categoryTitle={branch.match.params.category} />
        }
      </div>
      {renderRoutes(props.route.routes)}
    </div>
  )
}

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.arrayOf(PropTypes.shape({}))
  }).isRequired
}

export default App
