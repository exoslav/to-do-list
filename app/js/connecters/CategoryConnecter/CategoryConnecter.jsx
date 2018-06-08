import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ToDoItemList from '../../components/ToDoItemList/ToDoItemList'
import CategoryList from '../../components/CategoryList/CategoryList'
import * as categoriesActions from '../../redux/actions/categoriesActions'

class CategoryConnecter extends React.Component {
  constructor(props, context) {
    super(props, context)

    const { categories, toDoList } = props

    this.state = {
      fetchedCategoriesAndToDoList: this.fetchCategoriesWithToDoList(categories, toDoList)
    }

    this.fetchCategoriesWithToDoList = this.fetchCategoriesWithToDoList.bind(this)

    this.props.actions.addCategory({ text: 'test' })
  }

  componentWillReceiveProps(nextProps) {
    const { categories, toDoList } = nextProps

    this.fetchCategoriesWithToDoList(categories, toDoList)
  }

  fetchCategoriesWithToDoList(categories, toDoList) {
    return categories.map(categoryItem => ({
      id: categoryItem.id,
      title: categoryItem.title,
      icon: categoryItem.icon,
      toDoList: toDoList.length > 0
        ? toDoList.filter(toDoItem => toDoItem.category.includes(categoryItem.id))
        : []
    }))
  }

  render() {
    return (
      <div>
        <ToDoItemList toDoList={this.props.toDoList} />
        <CategoryList categoryList={this.state.fetchedCategoriesAndToDoList} />
      </div>
    )
  }
}

CategoryConnecter.defaultProps = {
  toDoList: [],
  categories: []
}

CategoryConnecter.propTypes = {
  toDoList: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }))
}

export default connect(store => ({
  toDoList: store.toDoList,
  categories: store.categories
}), dispatch => ({
  actions: bindActionCreators(categoriesActions, dispatch)
}))(CategoryConnecter)
