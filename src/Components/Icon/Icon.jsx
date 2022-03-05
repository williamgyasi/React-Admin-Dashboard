import React from 'react'
import { GridView,AccountBalanceWallet,RemoveRedEye } from "@mui/icons-material";
import {BgIcon} from './icon-styles'


function Icon({children,noBg,bgColor}) {
  return (
    <BgIcon bgColor={bgColor}>
        {children}
    </BgIcon>
  )
}

export default Icon