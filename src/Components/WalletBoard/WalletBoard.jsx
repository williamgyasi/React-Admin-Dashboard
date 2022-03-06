import React from 'react'
import {Header,Button} from '..'
import { 
  WalletBoardG,
  WalletSearchContainer,
  WalletView,
  WalletCollection,
  WalletTabs,
  WalletDetails,
  TextSpan,
  DropDownContainer
 } from './wallet-styles'
import {WalletContainerHeadings,WalletText} from '../MainBoard/mainboard-styles'
import {IconButton,SearchBar} from '..'
import {Add, KeyboardArrowDown} from '@mui/icons-material'

function WalletBoard() {
  return (
    <WalletBoardG>
        <Header />
        <WalletContainerHeadings mt="30px">
          <WalletText>Your Wallet(s)</WalletText>
          <IconButton buttonText={"Create New Wallet"}>
              <Add sx={{color:"#fff"}}/>
          </IconButton>
        </WalletContainerHeadings>

        <WalletView>

          <WalletCollection>
            <WalletSearchContainer>
              <SearchBar />
              <DropDownContainer>
                <TextSpan color='#017189'>All</TextSpan>
                <KeyboardArrowDown sx={{color:"#017189"}} />
              </DropDownContainer>
            </WalletSearchContainer>

            <WalletTabs>


            </WalletTabs>
          </WalletCollection>

          <WalletDetails>

          </WalletDetails>
        </WalletView>
    </WalletBoardG>
  )
}

export default WalletBoard