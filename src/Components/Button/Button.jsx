import React from 'react'
import { ButtonD } from './button-styles'


function Button({children,bgColor,width}) {
  return (
    <ButtonD width={width} bgColor={bgColor}>
        {children}
    </ButtonD>
  )
}

export default Button