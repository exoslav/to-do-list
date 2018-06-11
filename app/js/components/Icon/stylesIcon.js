import { COLORS, SIZE } from '../../constants'

export default {
  svg: {
    display: 'inline-block',
    padding: props => props.css.padding || 10,
    textAlign: 'center',
    borderRadius: '100%',
    background: props => props.css.backgroundColor || 'transparent',
    '&:hover': {
      background: props => props.css.backgroundColorHover || 'transparent'
    },
    border: props => props.css.border || 'none',
    '& path': {
      fill: props => props.css.iconColor || COLORS.ICON_COLOR
    },
    '&:hover path': {
      fill: props => `${props.css.iconColorHover}` || null
    }
  },
  svgIcon: {
    float: 'left'
  }
}
