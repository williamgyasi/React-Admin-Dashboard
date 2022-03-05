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
margin-top: 5px;
padding: 10px;
`

export const WalletContainerHeadings=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const WalletCardsContainer=styled.div`
   margin-top :15px ;
   display: flex;
   flex-wrap: nowrap;
   align-items: center;

`

export const WalletText=styled.h3`
font-size:${props=>props.small?"11px":"20px"};
color:${props=>props.color || "#000"};
font-weight: ${props=>props.weight};
margin-top: 3px;
font-weight: 600;
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
    font-weight: 700;
`

export const CardText=styled.span`
    display: block;
    font-size: ${props=>props.small ? "14px":"16px"};
    font-weight: 400;
    text-align: ${props=>props.center ?"center":"left"};
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

//QUICK LINKS
export const QuickLinksContainer=styled.div`
    margin-top: 20px;
    margin-left: 15px;
`

export const LinksCard=styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 24px;
    flex: 0 0 13%;
    margin-right: 10px;
    border-radius: 10px;
    border: 1px solid #F1F5F9;
    text-align:'center';
    cursor:pointer
`



