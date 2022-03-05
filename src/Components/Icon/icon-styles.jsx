import styled from "styled-components";

export const BgIcon=styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props=>props.bgColor ||'transparent'};
    border-radius: ${props=>props.round ||"8px"};
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${props=>props.mb};
`