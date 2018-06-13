import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import css from './stylesHeader.scss'
import Button from '../Button/Button'
import Container from '../Container/Container'
import CurrentDate from '../CurrentDate/CurrentDate'
import PercentageCircle from '../PercentageCircle/PercentageCircle'


const Header = props => (
  <header class={css.header}>
    {console.log(props)}
    <Container customClass={css.container}>
      <div class={css.leftSide}>
        <div class={css.content}>
          {props.content}
        </div>

        <div class={css.currentDate}>
          <CurrentDate date={props.date} />
        </div>
      </div>

      <div class={css.statsOuter}>
        <div class={css.statsInner}>
          <div>
            {`${props.categoriesTotal} categories`}
          </div>
          <div>
            {`${props.toDoItemsTotal} items`}
          </div>
          <div class={css.completed}>
            <div class={css['percentage-circle']}>
              <PercentageCircle
                percent={props.completed}
                strokeWidth={8}
                strokeColor="#89cbf0"
                trailWidth={8}
                trailColor="#fff"
              />
            </div>
            <span>{`${props.completed}% done`}</span>
          </div>

          {console.log(props)}

          <Link
            to="/test"
          >
            Open modal
          </Link>

          <Button
            click={props.handleCreateToDoClick}
            content="Create todo"
            class={css.button}
          />
        </div>
      </div>
    </Container>
  </header>
)

Header.defaultProps = {
  content: <div />,
  categoriesTotal: 0,
  toDoItemsTotal: 0,
  completed: 0,
  handleCreateToDoClick: () => null
}


Header.propTypes = {
  date: PropTypes.shape({}).isRequired,
  content: PropTypes.element,
  completed: PropTypes.number,
  categoriesTotal: PropTypes.number,
  toDoItemsTotal: PropTypes.number,
  handleCreateToDoClick: PropTypes.func
}

export default Header
