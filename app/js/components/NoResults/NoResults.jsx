import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import css from './stylesNoResults'
import Icon from '../Icon/Icon'

class NoResults extends React.PureComponent {
  render() {
    return (
      <div class={this.props.classes.noResults}>
        <Icon
          icon={this.props.icon}
          css={{
            padding: '0',
            iconColor: '#cbcbcb'
          }}
          width={50}
          height={50}
        />
        <p class={this.props.classes.message}>
          {this.props.message}
        </p>
      </div>
    )
  }
}

NoResults.defaultProps = {
  message: 'No results were found',
  icon: 'INFO'
}

NoResults.propTypes = {
  message: PropTypes.string,
  icon: PropTypes.string
}

export default injectSheet(css)(NoResults)
