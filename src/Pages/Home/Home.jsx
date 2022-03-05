import React from "react";
import styled from "styled-components";

//COMPONENTS
import { Header, MainBoard, Sidebar } from "../../Components";

const Home = () => {
  return (
    <Dashb>
    <Sidebar />
    <MainBoard />
  </Dashb>
  );
};

const Dashb = styled.div`
  display: flex;
  justify-content: flex-start;
  min-height: 100%;
  height: 100vh;
`;

export default Home;
