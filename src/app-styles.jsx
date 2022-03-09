import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1600px;
  margin: 0 auto;
  @media only screen and (max-width:320px){
    margin-left: 0;
    overflow: hidden;
  }
`;
