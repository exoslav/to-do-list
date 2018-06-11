import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import css from './stylesIcon'
import { SIZE } from '../../constants'
import ICOMOON from '../../../../resources/icons/icomoon-free'

const Icon = props => (
  <div class={props.classes.svg}>
    <svg
      class={props.classes.svgIcon}
      onClick={props.click}
      viewBox="0 0 1024 1024"
      width={props.width}
      height={props.height}
    >
      <path
        d={ICOMOON[props.icon]}
      />
    </svg>
  </div>
)

Icon.defaultProps = {
  click: () => null,
  width: SIZE.ICON_SIZE.WIDTH,
  height: SIZE.ICON_SIZE.HEIGHT,
  css: {}
}

Icon.propTypes = {
  click: PropTypes.func,
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  css: PropTypes.shape({})
}

export default injectSheet(css)(Icon)
