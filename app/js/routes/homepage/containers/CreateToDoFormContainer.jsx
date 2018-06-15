import React from 'react'
import PropTypes from 'prop-types'

import Form from '../../../components/Form/Form'
import { addToDoItem } from '../../../services/fetchToDoItems'

class CreateToDoFormContainer extends React.Component {
  constructor() {
    super()

    this.submit = this.submit.bind(this)
  }

  submit(formData) {
    console.log(formData)

    const item = {
      id: Date.now(),
      title: formData['todo-title'],
      content: formData['todo-description'],
      date: new Date().getTime(),
      completed: false,
      category: formData['todo-category']
    }

    return

    addToDoItem(item)
  }

  render() {
    return (
      <Form
        title="Create ToDo"
        fields={this.props.fields}
        onSubmit={this.submit}
      />
    )
  }
}

CreateToDoFormContainer.defaultProps = {
  fields: []
}


CreateToDoFormContainer.propTypes = {
}

export default CreateToDoFormContainer
