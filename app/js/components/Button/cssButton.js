/* eslint-disable quote-props */
import color from 'color'

const defaultButtonColor = '#00d7a1'

export default {
  button: {
    width: '100%',
    padding: '12px 20px',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 1,
    background: '#00d7a1',
    outline: 'none',
    cursor: 'pointer',
    border: 'none',
    borderRadius: 5,
    '&:hover': {
      background: color(defaultButtonColor).darken(0.2).hex()
    }
  }
}

//.button.widthAuto {
//  width: auto;
//}
