import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import injectSheet from 'react-jss'
import css from './stylesToDoItem'
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

class ToDoItem extends React.PureComponent {
  render() {
    return (
      <li class={this.props.classes.item}>
        <Link
          class={this.props.classes.link}
          to={this.props.slug}
        >
          <div class={this.props.classes.iconWrap}>
            <Icon
              icon="CHECKMARK"
              css={{
                backgroundColorHover: this.props.themeColor,
                border: `1px solid  ${this.props.themeColor}`,
                iconColor: this.props.themeColor,
                iconColorHover: '#fff'
              }}
            />
          </div>

          <div class={this.props.classes.contentWrap}>
            <strong class={this.props.classes.title}>{this.props.title}</strong>
            <p class={this.props.classes.content}>
              <span class={this.props.classes.category}>
                <span>
                  {this.props.categoryTitle}
                </span>
              </span>


              <span class={this.props.classes.delimeter}>~</span>

              {this.props.content}
            </p>
          </div>

          <div class={this.props.classes.dateWrap}>
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
  categoryIcon: 'HOME'
}

ToDoItem.propTypes = {
  date: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  categoryIcon: PropTypes.string
}

export default injectSheet(css)(ToDoItem)
