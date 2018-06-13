/* eslint-disable quote-props */
import color from 'color'

export default {
  wrap: {
    position: 'absolute',
    top: 46,
    width: '100%',
    borderRadius: 5,
    background: '#fff',
    boxShadow: '0 0 10px -5px #333',
    opacity: 0,
    transition: '.5s all',
    zIndex: 1
  },
  open: {
    transform: 'translateY(30px)',
    opacity: 1
  },
  optionListScrollable: {
    maxHeight: 200,
    overflowY: 'auto'
  },
  optionList: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10
  },
  optionListItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 10px',
    cursor: 'pointer',
    borderRadius: 5,
    '&:hover': {
      background: color('#00d7a1').lighten(0.45).hex()
    }
  },
  optionListFooter: {
    textAlign: 'right',
    padding: 10,
    background: '#f0f0f0',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  optionListClose: {
    fontSize: 16,
    color: color('#f0f0f0').lighten(0.4).hex(),
    background: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: color('#f0f0f0').lighten(0.6).hex()
    }
  }
}
