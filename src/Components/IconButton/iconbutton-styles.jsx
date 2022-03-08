import styled from "styled-components";

export const IconButtonG = styled.div`
  padding: ${props=>props.noBg?"16px 24px":"16px"};
  background-color: ${props=>props.noBg?"transparent":"#017189"};
  border: ${props=>props.noBg?"1px solid #017189":"none"};
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
`;

export const IconButtonText = styled.span`
  color: ${props=>props.noBg?"#017189":"#fff"};
  font: 14px;
  margin-left: 10px;
`;
