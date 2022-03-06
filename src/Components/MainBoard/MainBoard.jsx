import React from "react";
import {
  MainB,
  WalletCardsContainer,
  WalletContainer,
  WalletCards,
  WalletContainerHeadings,
  CardTop,
  CardAmount,
  CardText,
  UsaFlag,
  UkFlag,
  PeruFlag,
  WalletText,
  QuickLinksContainer,
  LinksCard,
  ChartContainer,
  CharTitles,
  Transactions,
  ChartSection,
  ChartTitlesContainer,
  TransactionsContainer,
  Left,
  Right,
  Transaction,
  TextContainer
} from "./mainboard-styles";
import {
  GridView,
  AccountBalanceWallet,
  RemoveRedEye,
  Star,
  LocalAtm,
  PeopleAlt,
  CreditCard,
  LocalOffer,
  KeyboardArrowDown,
  InsertChart,
  ShowChart,
} from "@mui/icons-material";
import {GrLineChart} from 'react-icons/gr'
import usa from "../../Assets/usa.png";
import uk from "../../Assets/uk.png";
import peru from "../../Assets/periut.png";
import * as CONSTANTS from "../../_shared/constants";

//COMPONENTS
import { Header, Icon,Charts} from "..";

function MainBoard() {
  return (
    <MainB>
      <Header />
      <WalletContainer>
        <WalletContainerHeadings>
          <WalletText>Wallet(5)</WalletText>
          <WalletText small color={CONSTANTS.THEME.colorBlue}>
            View all wallets
          </WalletText>
        </WalletContainerHeadings>

        <WalletCardsContainer>
          <WalletCards bgColor={"#fff6e6"}>
            <CardTop>
              <div>
                <CardText>Personal account</CardText>
                <CardText small>USD</CardText>
              </div>
              <UsaFlag image={usa} />
            </CardTop>
            <CardAmount>$10,250.00</CardAmount>
          </WalletCards>

          <WalletCards bgColor={"#FBF1F0"}>
            <CardTop>
              <div>
                <CardText>EUR Wallet</CardText>
                <CardText small>EUR</CardText>
              </div>
              <PeruFlag image={usa} />
            </CardTop>
            <CardAmount>
              <span>&euro;</span>4000.53
            </CardAmount>
          </WalletCards>

          <WalletCards bgColor={"#DDECEF"}>
            <CardTop>
              <div>
                <CardText>School Fees</CardText>
                <CardText small>GBP</CardText>
              </div>
              <UkFlag image={usa} />
            </CardTop>
            <CardAmount>
              <span>&pound;</span>50.00
            </CardAmount>
          </WalletCards>
        </WalletCardsContainer>
      </WalletContainer>

      <QuickLinksContainer>
        <WalletText>Quick Links</WalletText>
        <WalletText small color="#94A3B8" weight={300}>
          Your frequently used actions for easy access
        </WalletText>
        <WalletCardsContainer>
          <LinksCard>
            <Icon round="50%" mb={"10px"} bgColor={"#F97316"}>
              <AccountBalanceWallet sx={{ color: "#fff" }} />
            </Icon>
            <CardText round="50%" small center>
              Add New Wallet
            </CardText>
          </LinksCard>

          <LinksCard>
            <Icon round="50%" mb={"10px"} bgColor={"#005061"}>
              <CreditCard sx={{ color: "#fff" }} />
            </Icon>
            <CardText small center>
              Add New Card
            </CardText>
          </LinksCard>

          <LinksCard>
            <Icon round="50%" mb={"10px"} bgColor={"#5EEAD4"}>
              <LocalAtm sx={{ color: "#fff" }} />
            </Icon>
            <CardText small center>
              Add New Account
            </CardText>
          </LinksCard>

          <LinksCard>
            <Icon round="50%" mb={"10px"} bgColor={"#9333EA"}>
              <AccountBalanceWallet sx={{ color: "#fff" }} />
            </Icon>
            <CardText small center>
              Generate Voucher
            </CardText>
          </LinksCard>

          <LinksCard>
            <Icon round="50%" mb={"10px"} bgColor={"#FFCB00"}>
              <AccountBalanceWallet sx={{ color: "#fff" }} />
            </Icon>
            <CardText small center>
              Mobile Money
            </CardText>
          </LinksCard>

          <LinksCard>
            <Icon round="50%" mb={"10px"} bgColor={"#F43F5E"}>
              <AccountBalanceWallet sx={{ color: "#fff" }} />
            </Icon>
            <CardText small center>
              Payment Link
            </CardText>
          </LinksCard>
        </WalletCardsContainer>
      </QuickLinksContainer>

      <ChartContainer>
        <ChartTitlesContainer>
          <Left>
            <WalletText>Activity</WalletText>
            <WalletText ml={"20px"} mr={"10px"}  small color={CONSTANTS.THEME.colorBlue}>
              Months
            </WalletText>
            <KeyboardArrowDown />
          </Left>

          <Right>
          <WalletText small color={CONSTANTS.THEME.colorBlue}>
              View Transaction History
            </WalletText>
          </Right>
        </ChartTitlesContainer>

        <TransactionsContainer>
          <Transaction>
            <Icon>
              <InsertChart />
            </Icon>
            <TextContainer >
              <WalletText small>Total Transaction</WalletText>
              <WalletText bold>$88,600.00</WalletText>
            </TextContainer>
          </Transaction>

          <Transaction>
            <Icon>
              <ShowChart color="#000" />
            </Icon>
            <TextContainer >
              <WalletText small>Pay-In</WalletText>
              <WalletText bold>$4,600.00</WalletText>
            </TextContainer>
          </Transaction>

          <Transaction>
            <Icon>
              <ShowChart />
            </Icon>
            <TextContainer >
              <WalletText small>Pay-Out</WalletText>
              <WalletText bold>$72,600.00</WalletText>
            </TextContainer>
          </Transaction>
          
        </TransactionsContainer>
        <ChartSection>
          <Charts />
        </ChartSection>
      </ChartContainer>
    </MainB>
  );
}

export default MainBoard;
