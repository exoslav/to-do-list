import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'
import Container from '../../components/Container/Container'
import css from './stylesModal.scss'

export default class Modal extends React.Component {
  constructor() {
    super()

    this.closeModal = this.closeModal.bind(this)
  }

  closeModal() {
    this.props.handleClose()
  }

  render() {
    return (
      <div class={css.modal}>
        <Container>
          <div class={css['modal-content']}>
            <button
              onClick={this.closeModal}
              class={css.button}
            >
              <Icon icon="CROSS" />
            </button>
            {this.props.children}
          </div>
        </Container>
      </div>
    )
  }
}

Modal.defaultProps = {
  children: <div />,
  handleClose: () => null
}

Modal.propTypes = {
  children: PropTypes.element,
  handleClose: PropTypes.func
}
