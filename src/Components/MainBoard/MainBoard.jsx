import React from 'react'
import {
  MainB,
  WalletCardsContainer,
  WalletContainer,
  WalletCards,
  WalletContainerHeadings,
  CardTop,
  CardAmount,
  CardText,
  UsaFlag,
  UkFlag,
  PeruFlag
} from './mainboard-styles'
import usa from '../../Assets/usa.png'
import uk from '../../Assets/uk.png'
import peru from '../../Assets/periut.png'

//COMPONENTS
import { Header } from '..'

function MainBoard() {
  return (
    <MainB>
       <Header />
       <WalletContainer>
         <WalletContainerHeadings>
           <h3>Wallet(5)</h3>
           <h4>View all wallets</h4>
         </WalletContainerHeadings>

         <WalletCardsContainer>
           <WalletCards bgColor={"#fff6e6"}>
             <CardTop>
               <div>
                 <CardText>Personal account</CardText>
                 <CardText small>USD</CardText>
               </div>
               <UsaFlag image={usa}/>
             </CardTop>
             <CardAmount>$10,250.00</CardAmount>
           </WalletCards>

           <WalletCards bgColor={"#fff6e6"}>
             <CardTop>
               <div>
                 <CardText>Personal account</CardText>
                 <CardText small>USD</CardText>
               </div>
               <PeruFlag image={usa}/>
             </CardTop>
             <CardAmount>$10,250.00</CardAmount>
           </WalletCards>

           <WalletCards bgColor={"#fff6e6"}>
             <CardTop>
               <div>
                 <CardText>Personal account</CardText>
                 <CardText small>USD</CardText>
               </div>
               <UkFlag image={usa}/>
             </CardTop>
             <CardAmount>$10,250.00</CardAmount>
           </WalletCards>

         </WalletCardsContainer>
       </WalletContainer>

    </MainB>
  )
}




export default MainBoard;