import React from "react";
import {
  WalletBoardG,
  WalletSearchContainer,
  WalletView,
  WalletCollection,
  WalletTabs,
  WalletDetails,
  TextSpan,
  DropDownContainer,
  WalletTabListContainer,
  WalletTabList,
  TextLg,
  TextSm,
  TextMd,
  AmountContainer,
  HeadingLg,
  AmountTypeContainer,
  AmountTypeDetailsContainer,
  AmountButtonsContainer,
} from "./wallet-styles";
import {
  WalletContainerHeadings,
  WalletText,
  TextContainer,
  UsaFlag,
  UkFlag,
  PeruFlag,
} from "../MainBoard/mainboard-styles";
import { IconButton, SearchBar, TabPanel, Icon, Button, Header } from "..";
import {
  Add,
  Circle,
  KeyboardArrowDown,
  Send,
  SendAndArchive,
  SwapHoriz,
} from "@mui/icons-material";

import BasicTabs from "../Tabs/Tabs";

function WalletBoard() {
  const [value, setValue] = React.useState(0);

  const onChangeTabs = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <WalletBoardG>
      <Header />
      <WalletContainerHeadings mt="30px">
        <WalletText>Your Wallet(s)</WalletText>
        <IconButton buttonText={"Create New Wallet"}>
          <Add sx={{ color: "#fff" }} />
        </IconButton>
      </WalletContainerHeadings>

      <WalletView>
        <WalletCollection>
          <WalletSearchContainer>
            <SearchBar />
            <DropDownContainer>
              <TextSpan color="#017189">All</TextSpan>
              <KeyboardArrowDown sx={{ color: "#017189" }} />
            </DropDownContainer>
          </WalletSearchContainer>

          <WalletTabs>
            <BasicTabs value={value} handleChange={onChangeTabs}>
              <TabPanel value={value} index={0}>
                <WalletTabListContainer>
                  <WalletTabList>
                    <PeruFlag />
                    <TextContainer>
                      <TextLg>EUR Wallet</TextLg>
                      <TextSm>EUR</TextSm>
                    </TextContainer>
                    <TextContainer ml={"auto"}>
                      <TextMd>
                        <span>&euro;</span>2,000,000.50
                      </TextMd>
                      <TextSm>Default</TextSm>
                    </TextContainer>
                  </WalletTabList>

                  <WalletTabList>
                    <UsaFlag />
                    <TextContainer>
                      <TextLg>Personal wallet</TextLg>
                      <TextSm>USD</TextSm>
                    </TextContainer>
                    <TextContainer ml={"auto"}>
                      <TextMd>
                        <span>$</span>10,250.00
                      </TextMd>
                      <TextSm>Default</TextSm>
                    </TextContainer>
                  </WalletTabList>

                  <WalletTabList>
                    <UkFlag />
                    <TextContainer>
                      <TextLg>School savings</TextLg>
                      <TextSm>GPB</TextSm>
                    </TextContainer>
                    <TextContainer ml={"auto"}>
                      <TextMd>
                        <span>&pound;</span>500.00
                      </TextMd>
                      <TextSm>Default</TextSm>
                    </TextContainer>
                  </WalletTabList>
                </WalletTabListContainer>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <TextSm>Nothing To Display</TextSm>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <TextSm>Nothing To Display</TextSm>
              </TabPanel>
            </BasicTabs>
          </WalletTabs>
        </WalletCollection>

        <WalletDetails>
          <AmountContainer>
            <Icon>
              <Circle
                sx={{
                  color: "#22C55E",
                  fontSize: 10,
                  marginRight: 1,
                  marginLeft: 6,
                }}
              />
              <TextSpan>Active</TextSpan>
            </Icon>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextContainer>
                <TextMd>EUR Wallet</TextMd>
                <TextMd bold color="#0A6375">
                  EUR
                </TextMd>
              </TextContainer>

              <HeadingLg>
                <span>&euro;</span>2,000,000.50
              </HeadingLg>
            </div>
          </AmountContainer>

          <AmountTypeContainer>
            <AmountTypeDetailsContainer>
              <TextSpan>Ledger Balance</TextSpan>
              <TextSpan>2,000,000.50</TextSpan>
            </AmountTypeDetailsContainer>

            <AmountTypeDetailsContainer>
              <TextSpan>Total Incoming</TextSpan>
              <TextSpan>
                <span>&euro;</span>2,000,000.50
              </TextSpan>
            </AmountTypeDetailsContainer>

            <AmountTypeDetailsContainer>
              <TextSpan>Ledger Balance</TextSpan>
              <TextSpan>
                <span>&euro;</span>00.00
              </TextSpan>
            </AmountTypeDetailsContainer>

            <AmountTypeDetailsContainer>
              <TextSpan>Ledger Balance</TextSpan>
              <TextSpan>
                <span>&euro;</span>5,000,000.50
              </TextSpan>
            </AmountTypeDetailsContainer>
          </AmountTypeContainer>

          <AmountButtonsContainer>
            <IconButton noBg buttonText={"Payment"}>
              <Send sx={{ color: "#017189" }} />
            </IconButton>

            <IconButton noBg buttonText={"Pay In"}>
              <Send sx={{ color: "#017189" }} />
            </IconButton>

            <IconButton noBg buttonText={"Exchange"}>
              <SwapHoriz sx={{ color: "#017189" }} />
            </IconButton>
          </AmountButtonsContainer>

          <DropDownContainer mt={"20px"}>
            <TextSpan color="#017189">All</TextSpan>
            <KeyboardArrowDown sx={{ color: "#017189" }} />
          </DropDownContainer>
        </WalletDetails>
      </WalletView>
    </WalletBoardG>
  );
}

export default WalletBoard;
