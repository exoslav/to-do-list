import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HeaderContainer from '../HeaderContainer'
import * as toDoListActions from '../../../redux/actions/toDoListActions'


class HeaderConnecter extends React.Component {
  render() {
    console.log(this.props)
    console.log('HeaderConnecter RENDER')

    return (
      <HeaderContainer
        completed={this.props.completed}
        categoriesTotal={this.props.categoriesTotal}
        toDoItemsTotal={this.props.toDoItemsTotal}
        handleCreateToDoClick={this.props.actions.addToDo}
        locationSearch={this.props.locationSearch}
      />
    )
  }
}

HeaderConnecter.defaultProps = {
  completed: 0,
  categories: [],
  categoryTitle: null
}

HeaderConnecter.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.number,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    icon: PropTypes.string,
    toDoListTotal: PropTypes.number,
    categoryTitle: PropTypes.string
  }))
}

const mapStateToProps = (store) => {
  return {
    locationSearch: store.locationSearch,
    name: store.user.name,
    categoriesTotal: store.categories.length,
    toDoItemsTotal: store.toDoList.length,
    completed: Math.floor(parseFloat(100 / (store.toDoList.length / store.toDoList.filter(toDoItem => toDoItem.completed).length))) // eslint-disable-line max-len
  }
}

export default connect(mapStateToProps, dispatch => ({
  actions: bindActionCreators(toDoListActions, dispatch)
}))(HeaderConnecter)
