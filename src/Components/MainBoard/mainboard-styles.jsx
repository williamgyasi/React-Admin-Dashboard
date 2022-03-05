import styled from 'styled-components'
import usa from '../../Assets/usa.png'
import uk from '../../Assets/uk.png'
import peru from '../../Assets/periut.png'

export const MainB=styled.div`
    flex: 4;
    flex-direction: column;
    padding: 20px 30px;
`

export const WalletContainer=styled.div`
margin-top: 30px;
padding: 10px;
`

export const WalletContainerHeadings=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const WalletCardsContainer=styled.div`
   margin-top :20px ;
   display: flex;
   flex-wrap: nowrap;
   align-items: center;

`

export const WalletCards=styled.div`
    flex: 0 0 33%;
    padding: 24px;
    background-color: ${props=>props.bgColor};
    border-radius: 10px;
    margin-right: 10px;
`

export const CardTop=styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`
export const CardAmount=styled.h2`
    
`

export const CardText=styled.span`
    display: block;
    font-size: ${props=>props.small ? "14px":"16px"};
    font-weight: 400;
`

const Flag=styled.img.attrs({

})
export const UsaFlag=styled.img.attrs({
    src:`${usa}`
})`
    width:40px;
    border-radius: 50%;
    height:auto
`;

export const UkFlag=styled.img.attrs({
    src:`${uk}`
})`
    width:40px;
    border-radius: 50%;
    height:auto
`;

export const PeruFlag=styled.img.attrs({
    src:`${peru}`
})`
    width:40px;
    border-radius: 50%;
    height:auto
`



