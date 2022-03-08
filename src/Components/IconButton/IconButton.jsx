import React from 'react'

import {IconButtonG,IconButtonText} from './iconbutton-styles'

function IconButton({children,buttonText}) {
  return (
    <IconButtonG noBg>
        {children}
        <IconButtonText noBg>{buttonText}</IconButtonText>
    </IconButtonG>
  )
}

export default IconButton