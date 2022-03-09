import React, { useState } from "react";
import {
  HeadG,
  TitleLg,
  Profiler,
  PlantedContainer,
  ProfileContainer,
  TreeImg,
  PlantedTitle,
  Avatar,
  TitleSm,
  ButtonContainer,
  
} from "./header-styles";
import { IconButton, SearchBar } from "..";
import {
  KeyboardArrowDown,
  Menu,
  NotificationsOutlined,
} from "@mui/icons-material";

function Header() {
  const [sideBar,setSideBar]=useState(true);
  const showSideBar=()=>setSideBar(!sideBar)
  return (
    <HeadG>
      <ButtonContainer onClick={showSideBar}>
        <Menu sx={{ color: "#fff" }} />
      </ButtonContainer>
      <TitleLg>Welcome,Huss Smith</TitleLg>
      <Profiler>
        <SearchBar />
        <PlantedContainer>
          <TreeImg />
          <PlantedTitle>0 Planted</PlantedTitle>
        </PlantedContainer>

        <NotificationsOutlined />
        <ProfileContainer>
          <Avatar />
          <div>
            <TitleSm color={"#22c55E"}>Verified</TitleSm>
            <TitleSm>Huss Smith</TitleSm>
          </div>
          <KeyboardArrowDown />
        </ProfileContainer>
      </Profiler>
    </HeadG>
  );
}

export default Header;
