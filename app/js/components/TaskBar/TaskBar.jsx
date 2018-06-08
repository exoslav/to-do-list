import React from 'react'
import PropTypes from 'prop-types'
import css from './stylesTaskBar.scss'
import TaskStatus from '../TaskStatus/TaskStatus'

export default class TaskBar extends React.PureComponent {
  render() {
    return (
      <section class={css['task-bar']}>
        <div class={css.container}>
          <TaskStatus
            taskCount={this.props.createdTasks}
            title="Created tasks"
          />
          <TaskStatus
            taskCount={this.props.completedTasks}
            title="Completed tasks"
          />
        </div>
      </section>
    )
  }
}

TaskBar.defaultProps = {
  createdTasks: 0,
  completedTasks: 0
}

TaskBar.propTypes = {
  createdTasks: PropTypes.number,
  completedTasks: PropTypes.number
}
