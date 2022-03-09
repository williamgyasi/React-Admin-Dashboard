import React from "react";
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
  ButtonContainer
} from "./header-styles";
import { IconButton, SearchBar } from "..";
import { KeyboardArrowDown, Menu, NotificationsOutlined } from "@mui/icons-material";

function Header() {
  return (
    <HeadG>
        <ButtonContainer>
        <Menu sx={{color:"#22c55E"}} />
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
