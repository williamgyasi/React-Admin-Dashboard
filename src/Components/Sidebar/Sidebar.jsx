import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GridView,AccountBalanceWallet,RemoveRedEye } from "@mui/icons-material";
import {LogoContainer,Section,Logo,WalletContainer,WalletList, HeadingLg, HeadingSm,TextContainer} from './sidebar-styles'
import { Icon } from "../../Components";
function Sidebar() {
  return (
    <Section>
      {/* //logo  */}
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {/* //wallet balance  */}
      <WalletContainer>
          <WalletList>
            <Icon bgColor={"#fff"}><AccountBalanceWallet sx={{color:"#14B8A6"}} /></Icon>
            <TextContainer>
              <HeadingLg>Wallet Balance</HeadingLg>
              <HeadingSm>$15,001.00</HeadingSm>
            </TextContainer>
            <Icon ><RemoveRedEye /></Icon>
          </WalletList>
      </WalletContainer>
      //dashboard menu //referral
    </Section>
  );
}


export default Sidebar;
