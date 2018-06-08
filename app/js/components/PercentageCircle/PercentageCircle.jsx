import React from 'react'
import { Circle } from 'rc-progress'

export default ({ percent, strokeWidth, strokeColor, trailWidth, trailColor }) => {
  return (
    <Circle
      percent={percent}
      strokeWidth={strokeWidth}
      strokeColor={strokeColor}
      trailWidth={trailWidth}
      trailColor={trailColor}
    />
  )
}
