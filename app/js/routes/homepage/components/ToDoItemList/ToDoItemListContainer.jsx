import React from 'react'
import PropTypes from 'prop-types'
import ToDoItemList from './ToDoItemList'

export default class ToDoItemListContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
      showItemsLimit: 3,
      hiddenToDoItems: null,
      translate: {
        showMoreToDos: null
      }
    }

    this.reduceItems = this.reduceItems.bind(this)
    this.handleExpanse = this.handleExpanse.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { items } = nextProps.blockItem

    if (items !== this.props.blockItem.items) {
      const hiddenItems = items.length - this.state.showItemsLimit

      this.setState({
        hiddenToDoItems: hiddenItems > 0
          ? hiddenItems
          : null,
        translate: {
          showMoreToDos: hiddenItems > 1 ? 'todos' : 'todo'
        }
      })
    }
  }

  reduceItems(items) {
    return items.slice(
      0,
      this.state.expanded
        ? items.length
        : this.state.showItemsLimit
    )
  }

  handleExpanse() {
    this.setState({
      expanded: true
    })
  }

  render() {
    console.log('ToDoItemList RENDER')

    if (!this.props.blockItem) {
      return null
    }

    return (
      <ToDoItemList
        title={this.props.blockItem.title}
        className={this.props.blockItem.className}
        themeColor={this.props.blockItem.themeColor}
        toDoItems={this.reduceItems(this.props.blockItem.items)}
        expanded={this.state.expanded}
        hiddenToDoItems={this.state.hiddenToDoItems}
        handleExpanse={this.handleExpanse}
        translate={{ showMoreToDos: this.state.translate.showMoreToDos }}
        message={this.props.blockItem.message}
      />
    )
  }
}

ToDoItemListContainer.defaultProps = {
  blockItem: null
}

ToDoItemListContainer.propTypes = {
  blockItem: PropTypes.shape({
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
  })
}
