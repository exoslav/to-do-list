export default {
  timeBlock: {
    marginBottom: 50
  },
  title: {
    marginBottom: 10,
    color: props => props.themeColor || '#131313',
    fontSize: 20,
    fontWeight: 700
  },
  showMore: {
    display: 'flex',
    padding: '10px 20px',
    alignItems: 'center',
    '&:hover': {
      '& $showMoreIconDot': {
        background: props => props.themeColor || '#131313'
      },
      '& $showMoreText': {
        color: '#131313'
      }
    }
  },
  showMoreText: {
    color: '#a4a4a4'
  },
  showMoreIcon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 15,
    width: 48,
    height: 48,
    background: 'transparent',
    borderRadius: '100%'
  },
  showMoreIconDot: {
    display: 'block',
    overflow: 'hidden',
    width: 5,
    height: 5,
    letterSpacing: 9999,
    borderRadius: '100%',
    background: '#cbcbcb'
  },
  noResultsWrap: {
    padding: '10px 20px'
  }
}
