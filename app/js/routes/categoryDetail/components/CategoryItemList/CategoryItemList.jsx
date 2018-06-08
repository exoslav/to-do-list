import React from 'react'
import PropTypes from 'prop-types'
import css from './stylesCategoryItemList.scss'
import CategoryItem from '../CategoryItem/CategoryItem'
import Container from '../../../../components/Container/Container'

const CategoryItemList = props => (
  <div>
    {console.log('CategoryItemList RENDER')}
    <Container>
      <div>
        <h1 class={css.title}>Categories</h1>
        <ul class={css['category-items']}>
          {
            props.categoryItems.map((item, index) => (
              <CategoryItem
                key={index}
                title={item.title}
                total={item.totalToDoItems}
                icon={item.category}
                slug={item.slug}
              />
            ))
          }
        </ul>
      </div>
    </Container>
  </div>
)

CategoryItemList.defaultProps = {
  categoryItems: []
}

CategoryItemList.propTypes = {
  categoryItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
    completed: PropTypes.bool,
    category: PropTypes.string
  }))
}

export default CategoryItemList
