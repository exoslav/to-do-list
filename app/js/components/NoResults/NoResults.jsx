import React from 'react'
import PropTypes from 'prop-types'
import css from './NoResultsStyles.scss'
import Icon from '../Icon/Icon'

export default class NoResults extends React.PureComponent {
  render() {
    return (
      <div class={css['no-results']}>
        <Icon
          className=""
          icon={this.props.icon}
          color="#cbcbcb"
          width={50}
          height={50}
          styles={{ padding: 0 }}
        />
        <p class={css.message}>{`${this.props.message}`}</p>
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
