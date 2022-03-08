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
    margin-top: ${props=>props.mt};
    
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
font-weight:${props=>props.bold?"700":"600"} ;
color:${props=>props.color || "#2B4146"};
line-height: 150%;
`
export const TextLg=styled.h1`
${Text}
font-size:16px ;
font-weight:500 ;
`
export const HeadingLg=styled.h1`
    font-size: 28px;
    font-weight: 700;
`

//WALLET DETAILS
export const WalletDetails=styled.div`
    flex:1 ;
    padding:10px 40px;
`

export const AmountContainer=styled.div`
padding: 24px;
border: 1px solid #F3F4F6;
border-radius: 16px;
`


export const AmountTypeContainer=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
align-content: space-between;
margin-top: 20px;
`
export const AmountTypeDetailsContainer=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-right: 10px;
flex: 0 0 48%;
margin-bottom: 10px;
`

export const AmountButtonsContainer=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 20px;
`

export const AmountTabsContainer=styled.div`
    
`
