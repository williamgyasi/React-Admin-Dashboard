import styled from 'styled-components'


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

export const WalletTabs=styled.div`
    
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