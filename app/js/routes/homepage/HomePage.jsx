import React from 'react'
import queryString from 'query-string'

import css from './stylesHomePage.scss'

import CategoryItemListConnector from './connectors/CategoryItemListConnector'
import ToDoItemListConnector from './connectors/ToDoItemListConnector'
import WithLocationSearch from './connectors/WithLocationSearch'

import Container from '../../components/Container/Container'

export default (props) => {
  console.log(props)
  return (
    <WithLocationSearch locationSearch={queryString.parse(props.location.search)}>
      <Container>
        <div class={css.wrapper}>
          <div class={css.todos}>
            <ToDoItemListConnector />
          </div>

          <div class={css.categories}>
            <CategoryItemListConnector />
          </div>
        </div>
      </Container>
    </WithLocationSearch>
  )
}
