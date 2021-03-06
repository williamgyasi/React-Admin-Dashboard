import styled from "styled-components";
import * as CONSTANTS from "../../_shared/constants";
import logo from "../../Assets/geniopay.png";
import refer from "../../Assets/refer.png";
import { Link } from "react-router-dom";

export const Section = styled.div`
  background-color: ${CONSTANTS.THEME.colorBlue};
  color: #fff;
  flex: 1 0 20%;
  transition: all 500ms ease-in;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  @media only screen and (max-width: 600px) {
    left: ${(props) => (props.active ? "-300px" : "0px")};
    position: absolute;
  }
`;

export const Fixed = styled.div`
  width: 250px;
  height: 100%;

  flex-basis: 250px;
  top: 0;
  left: 0;
  right: 0;
`;

export const LogoContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const Logo = styled.img.attrs({
  src: `${logo}`,
  alt: "Geniopay logo",
})`
  width: 100px;
  height: auto;
`;
export const WalletContainer = styled.div`
  background-color: ${CONSTANTS.THEME.colorBlueLight};
  padding: 10px;
  width: 90%;
  border-radius: 10px;
  @media only screen and (max-width: 768px) {
    padding: 10px 15px;
  }
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
  @media only screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

//TITLE STYLES
export const HeadingLg = styled.h4`
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  font-weight: 400;
`;

export const HeadingSm = styled.h3`
  font-size: 14px;
  line-height: 15px;
  color: ${(props) => (props.dark ? "#000" : "#fff")};
  font-weight: 700;
`;

//BUTTON CONTAINER
export const ButtonContainer = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => props.mt};
`;

//DASHBOARD MENU
export const SideBarMenu = styled.div`
  margin-top: 10px;
  width: 90%;
`;

export const SideBarList = styled.ul`
  list-style: none;
`;
export const SideBarListItem = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 5px 10px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;

  &:hover {
  }
`;

export const SideBarListTitle = styled.span`
  color: #fff;
  margin-left: 20px;
`;

//REFERAL
export const RefferalContainer = styled.div`
  background-color: #fff5e9;
  margin-top: 10px;
  width: 90%;
  border-radius: 8px;
  padding: 14px 6px 14px 11px;
`;
export const ReferTop = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const ImageRef = styled.img.attrs({
  src: `${refer}`,
  alt: "Refer logo",
})`
  width: 50px;
  height: auto;
  margin-right: 20px;
`;
