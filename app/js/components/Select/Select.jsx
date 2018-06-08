import React from 'react'
import PropTypes from 'prop-types'
import css from './stylesSelect.scss'
import Icon from '../Icon/Icon'

export default class Select extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      fadeIn: false,
      selectedValue: '',
      newCategoryValue: ''
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.clear = this.clear.bind(this)
    this.close = this.close.bind(this)
    this.changeValue = this.changeValue.bind(this)
  }

  handleOpen() {
    this.setState({ isOpen: !this.state.isOpen })

    const timer = setTimeout(() => {
      this.setState({ fadeIn: this.state.fadeIn !== true })
      clearTimeout(timer)
    }, 0)
  }

  clear() {
    this.setState({ selectedValue: '' })
  }

  close() {
    this.setState({ isOpen: false, fadeIn: false })
  }

  changeValue(option) {
    this.props.handleChange(this.props.name, option.value)

    this.setState({
      isOpen: false,
      fadeIn: false,
      selectedValue: option.title
    })
  }

  render() {
    let className = css['select-wrap']

    if (this.props.className === 'width50') {
      className += ` ${css.width50}`
    }

    return (
      <div
        class={className}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <label
          class={css.label}
          for={this.props.name}
        >
          {`${this.props.label}:`}
        </label>

        <button
          type="button"
          class={
            `
            ${css['input-decoy']} ${this.state.selectedValue && css['input-decoy-has-value']}
            ${(this.state.isOpen || this.state.selectedValue) && css['input-decoy-active']}
            `
          }
          onClick={this.handleOpen}
        >
          {
            this.state.selectedValue
              ? this.state.selectedValue
              : this.props.placeholder
          }
        </button>

        {
          this.state.selectedValue &&
          <button
            tabIndex={-1}
            class={css.button}
            onClick={this.clear}
          >
            Clear input value
          </button>
        }

        {
          this.state.isOpen &&
          <div class={`
            ${css['options-list-wrap']}
            ${this.state.fadeIn ? css['options-list-wrap-fadeIn'] : ''}
           `}
          >
            <div class={css['options-list-wrap-scrollable']}>
              {
                <ul class={css['options-list']}>
                  {
                    this.props.options.map((option, index) => (
                      <li
                        class={css['options-list-item']}
                        onClick={() => this.changeValue(option)}
                        key={index}
                      >
                        {
                          option.icon &&
                          <Icon
                            styles={{ padding: '8px', marginRight: '10px' }}
                            width={16}
                            height={16}
                            icon={option.icon}
                          />
                        }

                        {option.title}
                      </li>
                    ))
                  }
                </ul>
              }
            </div>

            <div class={css['options-list-footer']}>
              <button
                onClick={this.close}
                type="button"
                class={css['options-list-close']}
              >
                Close
              </button>
            </div>
          </div>
        }

        <select
          hidden
          class={css.select}
          name={this.props.name}
          value={this.props.value}
        >
          {
            this.props.options.map((option, index) => (
              <option value={option.value}>
                {option.title}
              </option>
            ))
          }
        </select>
      </div>
    )
  }
}

Select.defaultProps = {
  options: [],
  locked: false,
  placeholder: '',
  className: ''
}

Select.propTypes = {
  options: PropTypes.arrayOf({}),
  locked: PropTypes.bool,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string
}
