import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TaskBar from '../../components/TaskBar/TaskBar'

class TaskBarConnecter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      createdTasks: this.props.toDoList.length,
      completedTasks: this.props.toDoList.filter(item => item.completed).length
    }
  }

  render() {
    console.log('TaskBarConnecter RENDER')

    return (
      <TaskBar
        createdTasks={this.state.createdTasks}
        completedTasks={this.state.completedTasks}
      />
    )
  }
}

TaskBarConnecter.defaultProps = {
  toDoList: []
}

TaskBarConnecter.propTypes = {
  toDoList: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string
  }))
}

function mapStateToProps(store) {
  console.log('TaskBarConnecter mapStateToProps')

  return { toDoList: store.toDoList }
}

export default connect(mapStateToProps)(TaskBarConnecter)
