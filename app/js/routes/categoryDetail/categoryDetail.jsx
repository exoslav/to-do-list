import React from 'react'

export default (props) => {
  console.log('CATEGORY:', props)
  return (
    <div>
      {props.match.params.category}
    </div>
  )
}
