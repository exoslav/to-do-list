/* eslint-disable quote-props */

import { input, label } from '../../jss/shared'

const inputDecoy = {
  ...input,
  position: 'relative',
  paddingLeft: 35,
  color: '#999cad',
  textAlign: 'left',
  cursor: 'pointer',
  background: 'none',
  '&:before': {
    content: '',
    position: 'absolute',
    top: 'calc(50% - 4px)',
    left: 10,
    borderStyle: 'solid',
    borderWidth: '8px 8px 0 8px',
    borderColor: '#999cad transparent transparent transparent'
  }
}

export default {
  selectWrap: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20
  },
  inputDecoy,
  inputDecoyActive: {
    borderColor: '#000',
    '&:before': {
      borderColor: '#212121 transparent transparent transparent'
    }
  },
  inputDecoyWithValue: {
    color: '#212121'
  },
  label,
  button: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 20,
    height: 20,
    padding: 0,
    textIndent: -99999,
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    outline: 'none',
    '&:after, &:before': {
      content: '',
      position: 'absolute',
      left: 10,
      top: 1,
      width: 1,
      height: 18,
      background: '#000'
    },
    '&:after': {
      transform: 'rotate(45deg)'
    },
    '&:before': {
      transform: 'rotate(-45deg)'
    }
  },
  select: {
    display: 'none'
  }
}
