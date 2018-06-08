import React from 'react'
import PropTypes from 'prop-types'
import css from './stylesSelectTime.scss'
import Input from '../Input/Input'
import Select from '../Select/Select'

export default class SelectTime extends React.PureComponent {
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
    this.props.handleChange(this.props.name, option.id)

    this.setState({
      isOpen: false,
      fadeIn: false,
      selectedValue: option.title
    })
  }

  render() {
    return (
      <div class={css['select-wrap']}>
        <div class={css.date}>
          <Input
            label="Date"
            type="text"
            name={`${this.props.name}-date`}
            value={this.props.dateValue}
            placeholder="dd.mm.yyyy"
            handleChange={this.props.handleChange}
          />
        </div>

        <div class={css.hours}>
          <Select
            label="Hours"
            name={`${this.props.name}-hours`}
            options={this.props.options.hours}
            value={this.props.value}
            placeholder="Hours"
            handleChange={this.props.handleChange}
          />
        </div>

        <div class={css.minutes}>
          <Select
            label="Minutes"
            name={`${this.props.name}-minutes`}
            options={this.props.options.minutes}
            value={this.props.value}
            placeholder="Minutes"
            handleChange={this.props.handleChange}
          />
        </div>
      </div>
    )
  }
}

SelectTime.defaultProps = {
  options: {
    hours: [],
    minutes: []
  },
  locked: false,
  className: ''
}

SelectTime.propTypes = {
  options: PropTypes.arrayOf({
    hours: PropTypes.arrayOf(PropTypes.number),
    minutes: PropTypes.arrayOf(PropTypes.number)
  }),
  locked: PropTypes.bool,
  value: PropTypes.string.isRequired,
  className: PropTypes.string
}
