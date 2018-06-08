import React from 'react'
import PropTypes from 'prop-types'
import css from './stylesCategoryList.scss'
import CategoryItem from '../CategoryItem/CategoryItem'

export default class CategoriesList extends React.PureComponent {
  render() {
    return (
      <ul class={`${css.list} ${css.container}`}>
        {
          this.props.categoryList.map((category, index) => (
            <CategoryItem
              key={index}
              icon={category.icon}
              title={category.title}
              totalToDoItems={category.toDoList.length}
            />
          ))
        }
      </ul>
    )
  }
}

CategoriesList.defaultProps = {
  categoryList: []
}

CategoriesList.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    totalToDoItems: PropTypes.string
  }))
}
