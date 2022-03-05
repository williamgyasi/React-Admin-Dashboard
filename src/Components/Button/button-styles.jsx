import styled from 'styled-components'

export const Button = styled.button`
    height: ${props=>props.height || 50px};
    background-color:${props.bgColor?props.bgColor:"white"};
    padding: 5px;
    
`