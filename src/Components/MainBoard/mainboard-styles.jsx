import styled from "styled-components";
import usa from "../../Assets/usa.png";
import uk from "../../Assets/uk.png";
import peru from "../../Assets/periut.png";

export const MainB = styled.div`
  flex-direction: column;
  padding: 20px 10px;
  width: 100%;
  @media only screen and (max-width: 320px) {
  }
`;

export const WalletContainer = styled.div`
  margin-top: 5px;
  padding: 10px;
`;

export const WalletContainerHeadings = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${(props) => props.mt || "15px"};
`;
export const WalletCardsContainer = styled.div`
  margin-top: ${(props) => props.mt || "15px"};
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  @media only screen and (max-width: 320px) {
      flex-direction: column;
      flex-wrap: nowrap;
      margin-bottom: 10px;
  }
`;

export const WalletText = styled.h3`
  font-size: ${(props) => (props.small ? "12px" : "15px")};
  color: ${(props) => props.color || "#000"};
  font-weight: ${(props) => props.weight};
  margin-top: 3px;
  font-weight: ${(props) => (props.bold ? "700" : "600")};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
`;

export const WalletCards = styled.div`
  flex: 0 0 33%;
  padding: 24px;
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  margin-right: 10px;
  @media only screen and (max-width: 320px) {
      width: 100%;
  }
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const CardAmount = styled.h2`
  font-weight: 700;
`;

export const CardText = styled.span`
  display: block;
  font-size: ${(props) => (props.small ? "14px" : "16px")};
  font-weight: 400;
  text-align: ${(props) => (props.center ? "center" : "left")};
`;

export const UsaFlag = styled.img.attrs({
  src: `${usa}`,
})`
  width: 40px;
  border-radius: 50%;
  height: auto;
`;

export const UkFlag = styled.img.attrs({
  src: `${uk}`,
})`
  width: 40px;
  border-radius: 50%;
  height: auto;
`;

export const PeruFlag = styled.img.attrs({
  src: `${peru}`,
})`
  width: 40px;
  border-radius: 50%;
  height: auto;
`;

//QUICK LINKS
export const QuickLinksContainer = styled.div`
  margin-top: 20px;
  margin-left: 15px;
`;

export const LinksCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  flex: 0 0 13%;
  margin-right: 10px;
  border-radius: 10px;
  border: 1px solid #f1f5f9;
  text-align: "center";
  cursor: pointer;
`;

export const ChartContainer = styled.div`
  padding: 10px;
  margin-top: 10px;
`;

export const ChartTitlesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TransactionsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Transaction = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 50px;
  }
`;
export const ChartSection = styled.div`
  margin-top: 30px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Right = styled.div``;

export const TextContainer = styled.div`
  margin-left: ${(props) => props.ml || "10px"};
`;
