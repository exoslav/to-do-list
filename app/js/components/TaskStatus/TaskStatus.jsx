import React from 'react'
import PropTypes from 'prop-types'
import css from './styles.scss'

export default class TaskStatus extends React.PureComponent {
  render() {
    return (
      <div class={css['task-status']}>
        <span class={css.quantity}>{this.props.taskCount}</span>
        <span class={css.title}>{this.props.title}</span>
      </div>
    )
  }
}

TaskStatus.defaultProps = {
  taskCount: 0
}

TaskStatus.propTypes = {
  taskCount: PropTypes.number,
  title: PropTypes.string.isRequired
}
