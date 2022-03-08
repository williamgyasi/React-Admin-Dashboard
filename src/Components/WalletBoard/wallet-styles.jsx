import styled,{css} from 'styled-components'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const WalletBoardG=styled.div`
    flex: 4;
    flex-direction: column;
    padding: 20px 30px;
`

export const WalletView=styled.div`
    display:flex ;
    align-items:stretch ;
    justify-content:center ;
    margin-top:20px ;
`

export const WalletCollection=styled.div`
    flex:0 0 40% ;
    padding:10px ;
`



export const WalletSearchContainer=styled.div`
display:flex ;
align-items:center ;

`

export const WalletTabs=styled(Tabs)`
    margin-top:20px ;
    width:100% ;
`
export const DropDownContainer=styled.div`
    margin-left: 10px ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
`
export const TextSpan=styled.span`
    color:${props=>props.color || "#000"} ;
`
export const WalletTabListContainer=styled.div`
    margin-top:10px ;
    width:100% ;
`

export const WalletTabList=styled.div`
    padding:16px ;
    display:flex ;
    align-items:center ;
    border-radius:10px ;
`
const Text=css`
    font-family:'Nunito Sans' ;
    line-height:"150%" ;
`


export const TextSm=styled.h3`
${Text}
    font-size:14px ;
    font-weight:300 ;
`
export const TextMd=styled.h2`
    ${Text}
font-size:16px ;
font-weight:600 ;
color:#2B4146;
`
export const TextLg=styled.h1`
${Text}
font-size:16px ;
font-weight:500 ;
`


//WALLET DETAILS
export const WalletDetails=styled.div`
    flex:1 ;
    padding:10px 40px;
`

export const AmountContainer=styled.div`
    
`
export const AmountTypeContainer=styled.div`

`
export const AmountTypeDetailsContainer=styled.div`

`

export const AmountButtonsContainer=styled.div`

`

export const AmountTabsContainer=styled.div`
    
`
