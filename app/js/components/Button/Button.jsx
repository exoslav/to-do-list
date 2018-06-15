import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import css from './cssButton'

const Button = props => (
  <button
    type={props.type}
    onClick={props.click}
    class={props.classes.button}
  >
    {props.content}
  </button>
)


Button.defaultProps = {
  type: 'submit',
  click: () => null,
  classes: {},
  css: {}
}

Button.propTypes = {
  type: PropTypes.string,
  click: PropTypes.func,
  content: PropTypes.string.isRequired,
  classes: PropTypes.shape({}),
  css: PropTypes.shape({})
}

export default injectSheet(css)(Button)
