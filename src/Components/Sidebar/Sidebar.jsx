import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  GridView,
  AccountBalanceWallet,
  RemoveRedEye,
  Star,
  LocalAtm,
  PeopleAlt,
  CreditCard,
  LocalOffer,
} from "@mui/icons-material";
import * as CONSTANTS from "../../_shared/constants";
import {
  LogoContainer,
  Section,
  Logo,
  WalletContainer,
  WalletList,
  HeadingLg,
  HeadingSm,
  TextContainer,
  ButtonContainer,
  SideBarMenu,
  SideBarList,
  SideBarListItem,
  SideBarListTitle,
  RefferalContainer,
  ReferTop,
  ImageRef,
  Fixed,
} from "./sidebar-styles";
import { Icon, Button } from "../../Components";
function Sidebar() {
  return (
    <Section>
      {/* //logo  */}

      <Fixed>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        {/* //wallet balance  */}
        <WalletContainer>
          <WalletList>
            <Icon bgColor={"#fff"}>
              <AccountBalanceWallet sx={{ color: "#14B8A6" }} />
            </Icon>
            <TextContainer>
              <HeadingLg>Wallet Balance</HeadingLg>
              <HeadingSm>$15,001.00</HeadingSm>
            </TextContainer>
            <Icon>
              <RemoveRedEye />
            </Icon>
          </WalletList>

          <WalletList mt="5px">
            <Icon bgColor={"#fff"}>
              <Star sx={{ color: "#F59E0B" }} />
            </Icon>
            <TextContainer>
              <HeadingLg>Awarded Points</HeadingLg>
              <HeadingSm>35</HeadingSm>
            </TextContainer>
          </WalletList>

          <ButtonContainer mt="2px">
            <Button bgColor={"#FDA4AF"}>Pay-In</Button>
            <Button>Pay-Out</Button>
          </ButtonContainer>
        </WalletContainer>
        {/* //dashboard menu  */}

        <SideBarMenu>
          <SideBarList>
            <SideBarListItem to={"/"}>
              <Icon>
                <GridView sx={{ color: "#fff" }} />
              </Icon>
              <SideBarListTitle>Dashboard</SideBarListTitle>
            </SideBarListItem>

            <SideBarListItem to={"/wallet"}>
              <Icon>
                <AccountBalanceWallet sx={{ color: "#fff" }} />
              </Icon>
              <SideBarListTitle>Wallet</SideBarListTitle>
            </SideBarListItem>

            <SideBarListItem to={"/"}>
              <Icon>
                <CreditCard sx={{ color: "#fff" }} />
              </Icon>
              <SideBarListTitle>Cards</SideBarListTitle>
            </SideBarListItem>

            <SideBarListItem to={"/"}>
              <Icon>
                <LocalAtm sx={{ color: "#fff" }} />
              </Icon>
              <SideBarListTitle>FX Centre</SideBarListTitle>
            </SideBarListItem>

            <SideBarListItem to={"/"}>
              <Icon>
                <PeopleAlt sx={{ color: "#fff" }} />
              </Icon>
              <SideBarListTitle>Beneficiaries</SideBarListTitle>
            </SideBarListItem>

            <SideBarListItem to={"/"}>
              <Icon>
                <LocalOffer sx={{ color: "#fff" }} />
              </Icon>
              <SideBarListTitle>Perks</SideBarListTitle>
            </SideBarListItem>
          </SideBarList>
        </SideBarMenu>
        {/* //referral */}

        <RefferalContainer>
          <ReferTop>
            <ImageRef />
            <div>
              <HeadingLg dark>Refer and earn</HeadingLg>
              <HeadingLg dark>Use the below link to invite friends</HeadingLg>
            </div>
          </ReferTop>
          <Button width={"100%"} bgColor={CONSTANTS.THEME.colorBlue}>
            Invite Friends
          </Button>
        </RefferalContainer>
      </Fixed>
    </Section>
  );
}

export default Sidebar;
