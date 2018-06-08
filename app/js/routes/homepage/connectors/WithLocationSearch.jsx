import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as locationSearchActions from '../../../redux/actions/locationSearchActions'


class WithLocationSearch extends React.Component {
  constructor(props) {
    super(props)

    const { locationSearch } = props

    if (locationSearch) {
      props.actions.addLocationSearch(locationSearch)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.locationSearch !== this.props.locationSearch) {
      this.props.actions.addLocationSearch(nextProps.locationSearch)
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

WithLocationSearch.defaultProps = {
  actions: {},
  children: <div />,
  locationSearch: {}
}

WithLocationSearch.propTypes = {
  actions: PropTypes.func,
  children: PropTypes.element,
  locationSearch: PropTypes.shape({})
}

export default connect(undefined, dispatch => ({
  actions: bindActionCreators(locationSearchActions, dispatch)
}))(WithLocationSearch)
