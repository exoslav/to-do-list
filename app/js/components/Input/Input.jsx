import React from 'react'
import PropTypes from 'prop-types'
import css from './stylesInput.scss'

export default class Input extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      focused: false
    }

    this.blur = this.blur.bind(this)
    this.clear = this.clear.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.focus = this.focus.bind(this)
  }

  focus() {
    this.setState({ focused: true })
  }

  blur() {
    this.setState({ focused: false })
  }

  clear() {
    this.props.handleChange(this.props.name, '')
  }

  handleChange(e) {
    this.props.handleChange(e.target.name, e.target.value)
  }

  render() {
    let className = css['input-wrap']

    if (this.props.className) {
      const classes = this.props.className.split(' ')

      for (let i = 0, len = classes.length; i < len; i++) {
        className += ` ${css[classes[i]]}`
      }
    }


    return (
      <div
        class={className}
      >
        <label
          class={css.label}
          for={this.props.name}
        >
          {`${this.props.label}:`}
        </label>

        <input
          id={this.props.name}
          name={this.props.name}
          type={this.props.type}
          class={`
            ${css.input} ${this.state.focused ? css.focused : ''}
            ${this.props.value && css.focused}
          `}
          placeholder={this.state.focused ? '' : this.props.placeholder}
          value={this.props.value}
          onChange={this.handleChange}
          onFocus={this.focus}
          onBlur={this.blur}
          disabled={this.props.locked}
        />
        {
          this.props.value &&
          <button
            tabIndex={-1}
            class={css.button}
            onClick={this.clear}
          >
            Clear input value
          </button>
        }
      </div>
    )
  }
}

Input.defaultProps = {
  locked: false,
  type: 'text',
  value: '',
  placeholder: '',
  handleChange: () => null
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  locked: PropTypes.bool,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func
}
