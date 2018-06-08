import React from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'
import Icon from '../Icon/Icon'

export default class ToDoItem extends React.PureComponent {
  render() {
    return (
      <li class={css.item}>
        <div class={css.icon}>
          <Icon icon={this.props.icon} color="#a6d77c" />
        </div>
        <div class={css['content-text']}>
          <h2 class={css.title}>{this.props.title}</h2>
          <p class={css.tasks}>{`${this.props.totalToDoItems} tasks`}</p>
        </div>
      </li>
    )
  }
}

ToDoItem.defaultProps = {
  title: '',
  totalToDoItems: 0,
  icon: 'HOME'
}

ToDoItem.propTypes = {
  title: PropTypes.string,
  totalToDoItems: PropTypes.number,
  icon: PropTypes.string
}
