import styled from "styled-components";

export const Container = styled.div`
display: flex;

`;

export const MainDiv=styled.div`
flex: 1 0 80%;
height: 100vh;
@media only screen and (max-width:600px){
    flex: 1 1 100%;
  }
`