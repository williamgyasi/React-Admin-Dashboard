import styled from 'styled-components'

export const ButtonD = styled.button`
    height: ${props=>props.height || "40px"};
    width:${props=>props.width || "45%"};
    background-color:${props=>props.bgColor?props.bgColor:"white"};
    color:${props=>props.bgColor ? "#fff":" #2B899D"};
    padding: 1px 20px;
    border: 0;
    border-radius: 8px;
    font-size: 12px;
    line-height: 22px;
    cursor: pointer;
`

