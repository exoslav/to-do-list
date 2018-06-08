import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import css from './stylesToDoItem.scss'
import Icon from '../Icon/Icon'

function toMeridiemTime(date) {
  const hours = new Date(date).getHours() < 10
    ? `0${new Date(date).getHours()}`
    : new Date(date).getHours()

  const minutes = new Date(date).getMinutes() < 10
    ? `0${new Date(date).getMinutes()}`
    : new Date(date).getMinutes()


  return hours < 12
    ? `${hours}:${minutes} AM`
    : `${hours}:${minutes} PM`
}

export default class ToDoItem extends React.PureComponent {
  render() {
    let itemClassName = `${css.item} `

    itemClassName += this.props.className
      ? css[`item-${this.props.className}`]
      : ''

    return (
      <li class={itemClassName}>
        <Link
          className={css.link}
          to={this.props.slug}
        >
          <div class={css['icon-wrap']}>
            <Icon
              icon="CHECKMARK"
              className={this.props.className}
            />
          </div>

          <div class={css['content-wrap']}>
            <strong class={css.title}>{this.props.title}</strong>
            <p class={css.content}>
            <span class={css.category}>
              {/*<Icon*/}
              {/*width="16px"*/}
              {/*height="16px"*/}
              {/*icon={this.props.categoryIcon}*/}
              {/*styles={{ padding: 0, marginRight: '5px', background: 'none' }}*/}
              {/*className={this.props.className}*/}
              {/*color="#a4a4a4"*/}
              {/*/>*/}

              <span>
                {this.props.categoryTitle}
              </span>
            </span>


              <span class={css.delimeter}>~</span>

              {this.props.content}
            </p>
          </div>

          <div class={css['date-wrap']}>
            {
              toMeridiemTime(this.props.date)
            }
          </div>
        </Link>
      </li>
    )
  }
}

ToDoItem.defaultProps = {
  date: '',
  title: '',
  content: '',
  categoryIcon: 'HOME',
  className: '',
  slug: ''
}

ToDoItem.propTypes = {
  date: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  categoryIcon: PropTypes.string,
  className: PropTypes.string,
  slug: PropTypes.string
}
