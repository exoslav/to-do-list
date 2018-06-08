import React from 'react'
import PropTypes from 'prop-types'
import css from './stylesContainer.scss'

export default class Container extends React.PureComponent {
  render() {
    return (
      <div class={`${css.container} ${this.props.customClass}`}>
        {this.props.children}
      </div>
    )
  }
}

Container.defaultProps = {
  children: <div />,
  customClass: ''
}

Container.propTypes = {
  children: PropTypes.element,
  customClass: PropTypes.string
}
