import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header/Header'
import HeaderContent from './components/HeaderContent/HeaderContent'
import { getDayName, getMonthName } from '../../helpers/date'

export default class HeaderConnecter extends React.Component {
  constructor() {
    super()

    const date = new Date()

    this.state = {
      date: {
        day: getDayName(date.getDay()),
        date: date.getDate(),
        month: getMonthName(date.getMonth()),
        time: date.toLocaleTimeString()
      }
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const date = new Date()

      this.setState({
        date: {
          day: getDayName(date.getDay()),
          date: date.getDate(),
          month: getMonthName(date.getMonth()),
          time: date.toLocaleTimeString()
        }
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <Header
        content={<div>Category</div>}
        date={this.state.date}
        categoriesTotal={this.props.categoriesTotal}
        toDoItemsTotal={this.props.toDoItemsTotal}
        completed={this.props.completed}
      />
    )
  }
}

HeaderConnecter.defaultProps = {
  content: <div />,
  categoriesTotal: 0,
  toDoItemsTotal: 0,
  completed: 0,
  handleCreateToDoClick: () => null
}

HeaderConnecter.propTypes = {
  content: PropTypes.element,
  categoriesTotal: PropTypes.number,
  toDoItemsTotal: PropTypes.number,
  completed: PropTypes.number,
  handleCreateToDoClick: PropTypes.func
}

