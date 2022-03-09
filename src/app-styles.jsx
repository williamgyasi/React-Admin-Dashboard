import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  @media only screen and (min-width:328px) and (max-width: 969px) {
    display: flex;
    flex-direction: column;
}
`;
