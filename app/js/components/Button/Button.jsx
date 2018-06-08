import React from 'react'
import PropTypes from 'prop-types'
import css from './stylesButton.scss'

export default class Button extends React.PureComponent {
  render() {
    let className = css.button

    if (this.props.className === 'widthAuto') {
      className += ` ${css.widthAuto}`
    }


    return (
      <button
        type={this.props.type}
        onClick={this.props.click}
        class={className}
      >
        {this.props.content}
      </button>
    )
  }
}


Button.defaultProps = {
  type: 'submit',
  click: () => null
}

Button.propTypes = {
  type: PropTypes.string,
  click: PropTypes.func,
  content: PropTypes.string.isRequired
}
