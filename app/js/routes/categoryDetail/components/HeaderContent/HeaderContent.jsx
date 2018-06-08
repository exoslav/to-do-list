import React from 'react'
import PropTypes from 'prop-types'
import css from './stylesHeaderContent.scss'

const HeaderContent = props => (
  <p class={css.name}>
    {`Hello, ${props.name}`}
  </p>
)

HeaderContent.defaultProps = {
  name: ''
}

HeaderContent.propTypes = {
  name: PropTypes.string
}

export default HeaderContent
