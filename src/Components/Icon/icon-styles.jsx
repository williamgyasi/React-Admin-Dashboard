import styled from "styled-components";

export const BgIcon=styled.div`
    width: 32px;
    height: 32px;
    background-color: ${props=>props.bgColor ||'transparent'};
    border-radius: 8px;
    padding: 4px;
`