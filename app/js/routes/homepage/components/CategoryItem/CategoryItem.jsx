import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import css from './stylesCategoryItem.scss'
import Icon from '../../../../components/Icon/Icon'

const CategoryItem = props => (
  <li>
    <Link className={css.item} to={props.slug}>
      <div class={css['icon-wrap']}>
        <Icon icon={props.icon} />
      </div>

      <div class={css['content-wrap']}>
        <strong class={css.title}>{props.title}</strong>
      </div>

      <div class={css['total-wrap']}>
        <span>{props.total}</span>
      </div>
    </Link>
  </li>
)

CategoryItem.defaultProps = {
  total: '',
  title: '',
  slug: '',
  icon: 'HOME'
}

CategoryItem.propTypes = {
  total: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
  icon: PropTypes.string
}

export default CategoryItem
