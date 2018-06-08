import React from 'react'
import PropTypes from 'prop-types'
import css from './stylesToDoItemList.scss'
import ToDoItem from '../../../../components/ToDoItem/ToDoItem'
import NoResults from '../../../../components/NoResults/NoResults'

const ToDoItemList = props => (
  <div class={`${css['time-block']} ${css[props.className]}`}>
    <h3 class={`${css['time-block-title']}`}>
      {props.title}
    </h3>

    {
      !props.toDoItems.length &&
      <div class={css['no-results-wrap']}>
        <NoResults
          message={props.message}
        />
      </div>
    }

    {
      props.toDoItems.length > 0 &&
      <ul>
        {console.log('ToDoItemList RENDER')}
        {props.toDoItems.map((toDoItem, index) => (
          <ToDoItem
            key={index}
            className={props.className}
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
              class={css['more-items-item']}
              href="#"
              onClick={props.handleExpanse}
            >
              <span class={css['more-items-icon']}>
                <span class={css['more-items-icon-dot']}>.</span>
                <span class={css['more-items-icon-dot']}>.</span>
                <span class={css['more-items-icon-dot']}>.</span>
              </span>

              <span class={css['more-items-icon-text']}>
                {`Show ${props.hiddenToDoItems} more ${props.translate.showMoreToDos}.`}
              </span>
            </a>
          </li>
        }
      </ul>
    }
  </div>
)

ToDoItemList.defaultProps = {
  title: '',
  expanded: false,
  toDoItems: [],
  hiddenToDoItems: null,
  translate: {},
  message: null,
  handleExpanse: () => null
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
    categoryTitle: PropTypes.string
  }))
}

export default ToDoItemList
