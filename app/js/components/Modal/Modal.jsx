import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import Icon from '../Icon/Icon'
import Container from '../../components/Container/Container'
import css from './cssModal'

const Modal = props => (
  <div class={props.classes.modal}>
    <Container>
      <div class={props.classes.modalContent}>
        <button
          onClick={props.closeModal}
          class={props.classes.button}
        >
          <Icon icon="CROSS" />
        </button>
        {props.children}
      </div>
    </Container>
  </div>
)

Modal.defaultProps = {
  children: <div />,
  handleClose: () => null
}

Modal.propTypes = {
  children: PropTypes.element,
  handleClose: PropTypes.func
}

export default injectSheet(css)(Modal)
