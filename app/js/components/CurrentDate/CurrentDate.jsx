import React from 'react'
import PropTypes from 'prop-types'
import css from './stylesCurrentDate.scss'
import TaskStatus from '../TaskStatus/TaskStatus'

export default class CurrentDate extends React.PureComponent {
  render() {
    const { day, date, month, time } = this.props.date

    if (!day || !date || !month || !time) {
      return null
    }

    return (
      <div class={css.wrap}>
        <span class={css.day}>{`${day}, `}</span>
        <span class={css.date}>{`${date}th, `}</span>
        <span class={css.month}>{`${month}, `}</span>
        <span class={css.time}>{time}</span>
      </div>
    )
  }
}

CurrentDate.propTypes = {
  date: PropTypes.shape({
    day: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  }).isRequired
}
