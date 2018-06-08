import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { createHashHistory } from 'history'
import css from './stylesHeader.scss'
import Cell from '../Cell/Cell'
import Form from '../../../../components/Form/Form'
import Modal from '../../../../components/Modal/Modal'
import Button from '../../../../components/Button/Button'
import Container from '../../../../components/Container/Container'
import CurrentDate from '../../../../components/CurrentDate/CurrentDate'
import PercentageCircle from '../../../../components/PercentageCircle/PercentageCircle'
import createToDoFormData from '../../../../forms/createToDoForm'


export default class Header extends React.Component {
  constructor() {
    super()

    this.history = createHashHistory()

    this.handleAddToDoItem = this.handleAddToDoItem.bind(this)
  }

  handleAddToDoItem(formData) {
    if (!this.props.categories.find(category => category.id === formData['todo-category'])) {
      // TODO: create category
    }

    const dateParsed = formData['todo-time-date'].split('.')
    const time = new Date(
      dateParsed[2],
      dateParsed[1] - 1,
      dateParsed[0],
      formData['todo-time-hours'],
      formData['todo-time-minutes']
    ).getTime()

    console.log(new Date(time))

    this.props.addToDo({
      id: 1,
      title: formData['todo-title'],
      content: formData['todo-description'],
      date: time,
      completed: false,
      category: formData['todo-category']
    })
  }

  render() {
    console.log('Header RENDER')

    return (
      <header class={css.header}>
        {
          this.props.locationSearch.createTodo === 'true' &&
          <Modal
            handleClose={() => this.history.push('/')}
          >
            <Form
              title="Create ToDo"
              handleSubmit={this.handleAddToDoItem}
              fields={createToDoFormData(this.props.categories.map(category => (
                {
                  value: category.id,
                  title: `${category.title} (${category.toDoListTotal})`,
                  icon: category.icon
                }
              )))}
            />
          </Modal>
        }
        <Container customClass={css.container}>
          <div class={css.welcome}>
            <div class={css.name}>
              {'Hello, '}<br />
              {this.props.name}
            </div>

            <CurrentDate date={this.props.date} />
          </div>

          <div class={css.statistics}>
            <div class={css['statistics-padding']}>
              {
                <ul class={css['categories-list']}>
                  {this.props.categories.map((category, index) => (
                    <Cell
                      index
                      title={category.title}
                      toDoListTotal={category.toDoListTotal}
                    />
                  ))}
                </ul>
              }
              <div class={css.completed}>
                <div class={css['percentage-circle']}>
                  <PercentageCircle
                    percent={this.props.completed}
                    strokeWidth={8}
                    strokeColor="#89cbf0"
                    trailWidth={8}
                    trailColor="#fff"
                  />
                </div>
                <span>{`${this.props.completed}% done`}</span>
              </div>

              <Button
                click={() => this.history.push('/?createTodo=true')}
                content="Create todo"
                class={css.button}
              />
            </div>
          </div>
        </Container>
      </header>
    )
  }
}

Header.defaultProps = {
  completed: 0,
  categories: [],
  addToDo: () => null
}


Header.propTypes = {
  date: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  completed: PropTypes.number,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    icon: PropTypes.string,
    toDoListTotal: PropTypes.number
  })),
  addToDo: PropTypes.func
}

