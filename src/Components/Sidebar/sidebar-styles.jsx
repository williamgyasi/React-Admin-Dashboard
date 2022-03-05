import styled from "styled-components";
import * as CONSTANTS from "../../_shared/constants";
import logo from "../../Assets/geniopay.png";

export const Section = styled.div`
  flex: 1;
  height: 100%;
  background-color: ${CONSTANTS.THEME.colorBlue};
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const LogoContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 50px;
`;
export const Logo = styled.img.attrs({
  src: `${logo}`,
  alt: "Geniopay logo",
})`
  width: 150px;
  height: auto;
`;
export const WalletContainer = styled.div`
  background-color: ${CONSTANTS.THEME.colorBlueLight};
  padding: 20px;
  width: 90%;
  border-radius: 10px;
`;
export const WalletList = styled.div`
  display: flex;
  padding: 5px 5px 10px 5px;
  border-bottom: 1px solid #fff;
  margin-top: ${(props) => props.mt};
`;

export const TextContainer = styled.div`
  margin-right: auto;
  margin-left: 20px;
`;

//TITLE STYLES
export const HeadingLg = styled.h4`
  font-size: 14px;
  line-height: 21px;
  color: #fff;
  font-weight: 400;
`;

export const HeadingSm = styled.h3`
  font-size: 16px;
  line-height: 21px;
  color: ${({ dark }) => (dark ? CONSTANTS.THEME.colorBlue : "white")};
  font-weight: 700;
`;

//BUTTON CONTAINER
export const ButtonContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${props=>props.mt};
`;
