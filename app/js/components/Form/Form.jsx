import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import css from './cssForm'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Select from '../Select/Select'
import SelectTime from '../SelectTime/SelectTime'

class Form extends React.PureComponent {
  constructor() {
    super()

    this.state = {
      formData: {}
    }

    this.fieldRefs = []

    this.setRef = this.setRef.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.onSubmit(this.state.formData)
  }

  handleOnChange(name, value) {
    const formData = {
      ...this.state.formData,
      [name]: value
    }

    this.setState({ formData })
  }

  setRef(el) {
    this.fieldRefs.push(el)
  }

  render() {
    console.log(this.fieldRefs.map(field => console.log(field.name)))
    const { classes } = this.props

    return (
      <div class={classes.formWrap}>
        <form
          class={classes.form}
          onSubmit={this.handleSubmit}
          action="/"
        >
          {
            this.props.title &&
            <div class={classes.header}>
              <h3 class={classes.title}>{this.props.title}</h3>
            </div>
          }

          <div class={classes.content}>
            {
              this.props.fields.map((field, index) => {
                return (
                  <div class={classes.formField}>
                    {
                      field.type === 'text' &&
                      <Input
                        setRef={this.setRef}
                        label={field.label}
                        type={field.type}
                        name={field.name}
                        value={this.state.formData[field.name]}
                        placeholder={field.placeholder}
                        handleChange={this.handleOnChange}
                      />
                    }

                    {
                      field.type === 'select' &&
                      <Select
                        label={field.label}
                        type={field.type}
                        name={field.name}
                        options={field.options}
                        value={this.state.formData[field.name]}
                        placeholder={field.placeholder}
                        handleChange={this.handleOnChange}
                      />
                    }

                    {
                      field.type === 'selectTime' &&
                      <SelectTime
                        name={field.name}
                        options={field.options}
                        dateValue={this.state.formData[`${field.name}-date`]}
                        hoursValue={this.state.formData[`${field.name}-hours`]}
                        minutesValue={this.state.formData[`${field.name}-minutes`]}
                        handleChange={this.handleOnChange}
                      />
                    }
                  </div>
                )
              })
            }
          </div>

          <div class={classes.footer}>
            <Button
              css={{ width: 'auto' }}
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
  fields: [],
  classes: {}
}

Form.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.arrayOf({}),
  classes: PropTypes.shape({})
}

export default injectSheet(css)(Form)
