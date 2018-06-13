import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import css from './cssSelectList'
import Icon from '../Icon/Icon'

class SelectList extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ open: true })
    }, 10)
  }

  render() {
    const { classes } = this.props

    return (
      <div class={`${classes.wrap} ${this.state.open ? classes.open : ''}`}>
        <div class={classes.optionListScrollable}>
          {
            <ul class={classes.optionList}>
              {
                this.props.options.map((option, index) => (
                  <li
                    class={classes.optionListItem}
                    onClick={() => this.props.onChange(option)}
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

        <div class={classes.optionListFooter}>
          <button
            onClick={this.props.onClose}
            type="button"
            class={classes.optionListClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  }
}

SelectList.defaultProps = {
  options: [],
  onChange: () => null,
  classes: {}
}

SelectList.propTypes = {
  options: PropTypes.arrayOf({}),
  onChange: PropTypes.func,
  classes: PropTypes.shape({})
}

export default injectSheet(css)(SelectList)
