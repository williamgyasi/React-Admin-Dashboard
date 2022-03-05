import styled from "styled-components";

export const BgIcon=styled.div`
    width: 10px;
    height: 10px;
    background-color: ${props=>props.bgColor ||'transparent'};
    border-radius: ${props=>props.round ||"8px"};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${props=>props.mb};
`