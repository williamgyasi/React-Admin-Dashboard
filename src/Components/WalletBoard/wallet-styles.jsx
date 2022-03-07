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

export const WalletDetails=styled.div`
    flex:1 ;
    border:1px solid ;
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
`

export const WalletTabList=styled.div`
    width:100%;
    padding:16px ;
    display:flex ;
    align-items:center ;
    border-radius:10px ;
`
const Text=css`
    font-family:'Nunito Sans' ;
    font-size:"16px" ;
    line-height:"150%" ;
    color:"#001B21" ;
`


export const TextSm=styled.h3`
    
`
export const TextMd=styled.h2`
    
`
export const TextLg=styled.h1`
${Text}
font-size:16px ;
font-weight:500 ;
`
