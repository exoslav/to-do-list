import React from 'react'
import PropTypes from 'prop-types'
import css from './stylesIcon.scss'
import { COLORS, SIZE } from '../../constants'
import ICOMOON from '../../../../resources/icons/icomoon-free'

export default class Icon extends React.PureComponent {
  render() {
    let className = css.svg

    if (this.props.className === 'green') {
      className += ` ${css.green}`
    }

    if (this.props.className === 'blue') {
      className += ` ${css.blue}`
    }

    if (this.props.className === 'pink') {
      className += ` ${css.pink}`
    }

    return (
      <div
        class={className}
        style={this.props.styles}
      >
        <svg
          class={css['svg-icon']}
          onClick={this.props.click}
          viewBox="0 0 1024 1024"
          width={this.props.width}
          height={this.props.height}
        >
          <path
            style={{ fill: this.props.color }}
            d={ICOMOON[this.props.icon]}
          />
        </svg>
      </div>
    )
  }
}

Icon.defaultProps = {
  click: () => null,
  color: COLORS.ICON_COLOR,
  width: SIZE.ICON_SIZE.WIDTH,
  height: SIZE.ICON_SIZE.HEIGHT,
  className: 'green'
}

Icon.propTypes = {
  click: PropTypes.func,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}
