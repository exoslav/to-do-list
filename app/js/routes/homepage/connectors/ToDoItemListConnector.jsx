import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ToDoItemListContainer from '../components/ToDoItemList/ToDoItemListContainer'
import * as toDoListActions from '../../../redux/actions/toDoListActions'

const TODAY = 'Today'
const TODAY_NO_RESULT_MESSAGE = 'No duties today, enjoy a day!'
const TOMORROW = 'Tomorrow'
const TOMORROW_NO_RESULT_MESSAGE = 'You have a free day tommorow.'
const UPCOMING = 'Upcoming'
const UPCOMING_NO_RESULT_MESSAGE = 'No upcoming duties found.'

const template = [
  {
    title: TODAY,
    items: [],
    message: TODAY_NO_RESULT_MESSAGE,
    themeColor: '#00d7a1'
  },
  {
    title: TOMORROW,
    items: [],
    message: TOMORROW_NO_RESULT_MESSAGE,
    themeColor: '#31ace3'
  },
  {
    title: UPCOMING,
    items: [],
    message: UPCOMING_NO_RESULT_MESSAGE,
    themeColor: '#ef5288'
  }
]

class ToDoItemListConnecter extends React.Component {
  componentDidMount() {
    this.props.actions.fetchToDoItems()
  }

  render() {
    return (
      this.props.toDoItems.map(toDoItem => (
        <ToDoItemListContainer blockItem={toDoItem} />
      ))
    )
  }
}

ToDoItemListConnecter.defaultProps = {
  toDoItems: []
}

ToDoItemListConnecter.propTypes = {
  toDoItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    message: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      text: PropTypes.string,
      completed: PropTypes.bool,
      date: PropTypes.number,
      category: PropTypes.number,
      categoryTitle: PropTypes.string
    }))
  }))
}

export default connect(store => ({
  toDoItems: fetchData(store.toDoList, store.categories)
}), dispatch => ({
  actions: bindActionCreators(toDoListActions, dispatch)
}))(ToDoItemListConnecter)


function fetchData(toDoItems, categories) {
  return toDoItems
    .filter(toDoItem => !toDoItem.completed)
    .map(toDoItem => ({
      ...toDoItem,
      slug: createSlugForToDoItem(categories, toDoItem),
      categoryTitle: categories.find(category => category.id === toDoItem.category).title
    }))
    .reduce((prev, curr) => {
      let blockItemName = null

      if (checkDateWithDayOffset(curr.date, 0)) {
        blockItemName = TODAY
      } else if (checkDateWithDayOffset(curr.date, 1)) {
        blockItemName = TOMORROW
      } else if (checkIfInputDateIsGreaterThen(curr.date, 2)) {
        blockItemName = UPCOMING
      }

      return prev.map(blockItem => (
        blockItem.title === blockItemName
          ? { ...blockItem, items: blockItem.items.concat([curr]) }
          : blockItem
      ))
    }, template)
}

function checkDateWithDayOffset(inputDate, dayOffset) {
  return new Date(inputDate).getDate() === new Date().getDate() + dayOffset
}

function checkIfInputDateIsGreaterThen(inputDate, dayOffset) {
  return new Date(inputDate).getDate() > new Date().getDate() + dayOffset
}

function createSlugForToDoItem(categories, toDoItem) {
  return `
    ${categories.find(category => category.id === toDoItem.category).title.toLowerCase()}/
    ${toDoItem.id}
  `.replace(/\n\s+/g, '')
}
