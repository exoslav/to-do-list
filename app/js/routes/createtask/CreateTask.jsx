import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import css from './stylesCreateTask.scss'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import * as toDoListActions from '../../redux/actions/toDoListActions'

class CreateTask extends React.Component {
  constructor() {
    super()

    this.submit = this.submit.bind(this)
  }

  submit(e) {
    console.log(e)
    e.preventDefault()

    this.props.actions.addToDo({
      id: 123,
      title: 'New To Do',
      content: 'Content',
      category: [1]
    })
  }

  render() {
    return (
      <div class={css.page}>
        <div class={css.container}>
          <header>
            <Link to="/">Home</Link>
            <h1 class={css.headline}>Add New Task</h1>
          </header>

          <form onSubmit={this.submit} action="">
            <Input placeholder="Task description" />
            <Input placeholder="Description" />
            <Input placeholder="Date & Time" />
            <Button content="Add task" />
          </form>
        </div>
      </div>
    )
  }
}

export default connect(undefined, dispatch => ({
  actions: bindActionCreators(toDoListActions, dispatch)
}))(CreateTask)
