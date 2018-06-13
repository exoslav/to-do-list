/* eslint-disable quote-props */
import color from 'color'
import { iconWidth } from '../../../styles/constants'

export default {
  item: {
    borderRadius: '5px',
    '&:hover': {
      background: props => color(props.themeColor).lighten(0.55).hex()
    }
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px'
  },
  title: {
    display: 'block',
    marginBottom: 7,
    fontSize: 22,
    color: '#131313'
  },
  iconWrap: {
    flexBasis: iconWidth
  },
  contentWrap: {
    flex: 1,
    padding: '0 15px',
    color: '#a4a4a4'
  },
  category: {
    display: 'flex',
    float: 'left',
    alignItems: 'center'
  },
  delimeter: {
    display: 'inline-block',
    width: 17,
    textAlign: 'center'
  },
  content: {
    lineHeight: '22px'
  },
  dateWrap: {
    fontSize: 22,
    color: '#a4a4a4',
    textAlign: 'right'
  }
}

//  .item-green {
//&:hover {
//    background: lighten(#00d7a1, 52%);
//  }
//}
//
//.item-blue {
//&:hover {
//    background: lighten(#31ace3, 42%);
//  }
//}
//
//.item-pink {
//&:hover {
//    background: lighten(#ef5288, 35%);
//  }
//}