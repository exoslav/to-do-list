import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CategoryItemList from '../components/CategoryItemList/CategoryItemList'
import * as toDoListActions from '../../../redux/actions/toDoListActions'

const CategoriesConnector = (props) => {
  if (!props.categoryItems) {
    return null
  }

  return (
    <CategoryItemList
      categoryItems={props.categoryItems}
    />
  )
}

CategoriesConnector.defaultProps = {
  categoryItems: []
}

CategoriesConnector.propTypes = {
  categoryItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }))
}

export default connect(store => ({
  categoryItems: store.categories.map(category => ({
    ...category,
    total: store.toDoList.filter(toDoItem => toDoItem.category === category.id).length
  }))
}), dispatch => ({
  actions: bindActionCreators(toDoListActions, dispatch)
}))(CategoriesConnector)
