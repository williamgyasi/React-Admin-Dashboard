import React from 'react'

import {IconButtonG,IconButtonText} from './iconbutton-styles'

function IconButton({children,buttonText}) {
  return (
    <IconButtonG>
        {children}
        <IconButtonText>{buttonText}</IconButtonText>
    </IconButtonG>
  )
}

export default IconButton