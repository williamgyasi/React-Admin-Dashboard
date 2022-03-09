import React from 'react'

import {IconButtonG,IconButtonText} from './iconbutton-styles'

function IconButton({children,buttonText,noBg}) {
  return (
    <IconButtonG noBg={noBg}>
        {children}
        <IconButtonText noBg={noBg}>{buttonText}</IconButtonText>
    </IconButtonG>
  )
}

export default IconButton