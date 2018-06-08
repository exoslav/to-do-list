import React from 'react'
import PropTypes from 'prop-types'
import css from './stylesForm.scss'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Select from '../Select/Select'
import SelectTime from '../SelectTime/SelectTime'

export default class Form extends React.PureComponent {
  constructor() {
    super()

    this.state = {
      formData: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.handleSubmit(this.state.formData)
  }

  handleOnChange(name, value) {
    const formData = {
      ...this.state.formData,
      [name]: value
    }

    this.setState({ formData })
  }

  render() {
    return (
      <div class={css['form-wrap']}>
        <form
          class={css.form}
          onSubmit={this.handleSubmit}
          action="/"
        >
          {
            this.props.title &&
            <div class={css.header}>
              <h3 class={css.title}>{this.props.title}</h3>
            </div>
          }

          <div class={css.content}>
            {
              this.props.fields.map((field, index) => {
                if (field.type === 'text') {
                  return (
                    <Input
                      class="width50"
                      label={field.label}
                      type={field.type}
                      name={field.name}
                      value={this.state.formData[field.name]}
                      placeholder={field.placeholder}
                      handleChange={this.handleOnChange}
                    />
                  )
                }

                if (field.type === 'select') {
                  return (
                    <Select
                      class="width50"
                      label={field.label}
                      type={field.type}
                      name={field.name}
                      options={field.options}
                      value={this.state.formData[field.name]}
                      placeholder={field.placeholder}
                      handleChange={this.handleOnChange}
                    />
                  )
                }

                if (field.type === 'selectTime') {
                  return (
                    <SelectTime
                      name={field.name}
                      options={field.options}
                      dateValue={this.state.formData[`${field.name}-date`]}
                      hoursValue={this.state.formData[`${field.name}-hours`]}
                      minutesValue={this.state.formData[`${field.name}-minutes`]}
                      handleChange={this.handleOnChange}
                    />
                  )
                }

                return null
              })
            }
          </div>

          <div class={css.footer}>
            <Button
              class="widthAuto"
              type="submit"
              content="Add ToDo"
            />
          </div>
        </form>
      </div>
    )
  }
}

Form.defaultProps = {
  title: null,
  fields: []
}

Form.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.arrayOf({})
}
