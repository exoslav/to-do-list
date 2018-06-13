import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import css from './cssSelect'
import SelectList from './SelectList'

class Select extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      selectedValue: '',
      openSelectList: false
    }

    this.openSelectList = this.openSelectList.bind(this)
    this.closeSelectList = this.closeSelectList.bind(this)
    this.clear = this.clear.bind(this)
    this.changeValue = this.changeValue.bind(this)
  }

  openSelectList() {
    this.setState({ openSelectList: !this.state.openSelectList })
  }

  closeSelectList() {
    this.setState({ openSelectList: false })
  }

  clear() {
    this.setState({ selectedValue: '' })
  }

  changeValue(option) {
    this.props.handleChange(this.props.name, option.value)

    this.setState({
      selectedValue: option.title
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div
        class={classes.selectWrap}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <label
          class={classes.label}
          for={this.props.name}
        >
          {`${this.props.label}:`}
        </label>

        <button
          type="button"
          class={
            `
            ${classes.inputDecoy} ${this.state.selectedValue && classes.inputDecoyWithValue}
            ${(this.state.openSelectList || this.state.selectedValue) && classes.inputDecoyActive}
            `
          }
          onClick={this.openSelectList}
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
            class={classes.button}
            onClick={this.clear}
          >
            Clear input value
          </button>
        }

        {
          this.state.openSelectList &&
          <SelectList
            options={this.props.options}
            onChange={this.changeValue}
            onClose={this.closeSelectList}
          />
        }

        <select
          hidden
          class={classes.select}
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
  placeholder: '',
  classes: {},
  handleChange: () => null
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf({}),
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  classes: PropTypes.shape({}),
  handleChange: PropTypes.func
}

export default injectSheet(css)(Select)
