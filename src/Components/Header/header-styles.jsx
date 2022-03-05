import styled from "styled-components";
import tree from '../../Assets/tree.png'
import avatar from '../../Assets/avatar.png'

export const HeadG=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TitleLg=styled.h3`
    font-size: 28px;
    font-weight: 600;
    line-height: 100%;
    font-style: normal;
`

export const TitleSm=styled.h4`
font-size: 12px;
color:${props=>props.color};
font-weight: 500;
`

export const Profiler=styled.div`
    display: flex;
    align-items: center;
    
`

export const PlantedContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px;
`

export const PlantedTitle=styled.span`
    font-size: 12px;
    font-weight: 300;
    line-height: 150%;
    word-spacing: 2px;
    margin-left: 5px;
`

export const TreeImg=styled.img.attrs({
    src:`${tree}`,
    alt:"Tree"
})`
width: 20px;
height: auto;
`

export const ProfileContainer=styled.div`
display: flex;
align-items: center;
justify-content: space-around;
margin-left: 20px;
`

export const Avatar=styled.img.attrs({
    src:`${avatar}`,
    alt:"Tree"
})`
width: 30px;
height: auto;
margin-right: 10px;
`