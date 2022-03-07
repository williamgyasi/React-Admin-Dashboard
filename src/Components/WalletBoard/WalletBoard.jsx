import React from "react";
import { Header, Button } from "..";
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
  TextMd
} from "./wallet-styles";
import {
  WalletContainerHeadings,
  WalletText,
  TextContainer,
  UsaFlag,
  UkFlag,
  PeruFlag,
} from "../MainBoard/mainboard-styles";
import { IconButton, SearchBar, TabPanel } from "..";
import { Add, KeyboardArrowDown } from "@mui/icons-material";

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
          
        </WalletDetails>
      </WalletView>
    </WalletBoardG>
  );
}

export default WalletBoard;
