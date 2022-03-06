import React from 'react'
import {Header,Button} from '..'
import { WalletBoardG } from './wallet-styles'
import {WalletContainerHeadings,WalletText} from '../MainBoard/mainboard-styles'
import {IconButton} from '..'
import {Add} from '@mui/icons-material'

function WalletBoard() {
  return (
    <WalletBoardG>
        <Header />
        <WalletContainerHeadings>
          <WalletText>Your Wallet(s)</WalletText>
          <IconButton buttonText={"Create New Wallet"}>
              <Add sx={{color:"#fff"}}/>
          </IconButton>
        </WalletContainerHeadings>
    </WalletBoardG>
  )
}

export default WalletBoard