import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import css from './cssToDoItemList'
import ToDoItem from '../../../../components/ToDoItem/ToDoItem'
import NoResults from '../../../../components/NoResults/NoResults'

const ToDoItemList = props => {
  const { classes } = props

  return (
    <div class={classes.timeBlock}>
      <h3 class={`${classes.title}`}>
        {props.title}
      </h3>

      {
        !props.toDoItems.length &&
        <div class={classes.noResultsWrap}>
          <NoResults
            message={props.message}
          />
        </div>
      }

      {
        props.toDoItems.length > 0 &&
        <ul>
          {props.toDoItems.map((toDoItem, index) => (
            <ToDoItem
              key={index}
              className={props.className}
              themeColor={props.themeColor}
              categoryIcon="CHECKMARK"
              categoryTitle={toDoItem.categoryTitle}
              title={toDoItem.title}
              content={toDoItem.content}
              date={toDoItem.date}
              slug={toDoItem.slug}
            />
          ))}

          {
            !props.expanded && props.hiddenToDoItems && props.translate &&
            <li>
              <a
                class={classes.showMore}
                href="#"
                onClick={props.handleExpanse}
              >
                <span class={classes.showMoreIcon}>
                  <span class={classes.showMoreIconDot}>.</span>
                  <span class={classes.showMoreIconDot}>.</span>
                  <span class={classes.showMoreIconDot}>.</span>
                </span>

                <span class={classes.showMoreText}>
                  {`Show ${props.hiddenToDoItems} more ${props.translate.showMoreToDos}.`}
                </span>
              </a>
            </li>
          }
        </ul>
      }
    </div>
  )
}

ToDoItemList.defaultProps = {
  title: '',
  expanded: false,
  toDoItems: [],
  hiddenToDoItems: null,
  translate: {},
  message: null,
  handleExpanse: () => null,
  css: {}
}

ToDoItemList.propTypes = {
  title: PropTypes.string,
  handleExpanse: PropTypes.func,
  expanded: PropTypes.bool,
  hiddenToDoItems: PropTypes.number,
  message: PropTypes.string,
  translate: PropTypes.shape({
    showMoreToDos: PropTypes.string
  }),
  toDoItems: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    text: PropTypes.string,
    completed: PropTypes.bool,
    date: PropTypes.number,
    category: PropTypes.number,
    categoryTitle: PropTypes.string,
  })),
  css: PropTypes.shape({})
}

export default injectSheet(css)(ToDoItemList)
