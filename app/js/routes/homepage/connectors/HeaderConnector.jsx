import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as qs from 'query-string'

import HeaderContainer from '../HeaderContainer'
import Modal from '../../../components/Modal/Modal'
import createToDoFormData from '../../../forms/createToDoForm'
import * as toDoListActions from '../../../redux/actions/toDoListActions'
import CreateToDoFormContainer from '../containers/CreateToDoFormContainer'

const homepageUrl = '/'
const modalUrl = '/?createTodo=true'

class HeaderConnecter extends React.Component {
  constructor() {
    super()

    this.locationSearch = { createTodo: 'false' }
    this.handleClick = this.handleClick.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.locationSearch = qs.parse(nextProps.location.search)
  }

  handleClick() {
    this.props.history.push(modalUrl)
//    this.props.actions.addToDo()
  }

  closeModal() {
    this.props.history.push(homepageUrl)
  }

  render() {
    return (
      <div>
        {
          this.locationSearch.createTodo === 'true' &&
          <Modal closeModal={this.closeModal}>
            <CreateToDoFormContainer fields={this.props.formFields} />
          </Modal>
        }

        <HeaderContainer
          completed={this.props.completed}
          categoriesTotal={this.props.categories.length}
          toDoItemsTotal={this.props.toDoItemsTotal}
          handleCreateToDoClick={this.handleClick}
          locationSearch={this.props.location.search}
        />
      </div>
    )
  }
}

HeaderConnecter.defaultProps = {
  completed: 0,
  categories: []
}

HeaderConnecter.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.number,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    icon: PropTypes.string,
    toDoListTotal: PropTypes.number
  }))
}

const mapStateToProps = (store) => {
  return {
    locationSearch: store.locationSearch,
    name: store.user.name,
    categories: store.categories,
    toDoItemsTotal: store.toDoList.length,
    completed: Math.floor(parseFloat(100 / (store.toDoList.length / store.toDoList.filter(toDoItem => toDoItem.completed).length))), // eslint-disable-line max-len
    formFields: createToDoFormData(store.categories.map(category => (
      {
        value: category.id,
        title: `${category.title} (${category.toDoListTotal})`,
        icon: category.icon
      }
    )))
  }
}

export default withRouter(connect(mapStateToProps, dispatch => ({
  actions: bindActionCreators(toDoListActions, dispatch)
}))(HeaderConnecter))
