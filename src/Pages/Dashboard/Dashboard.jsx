import React from "react";
import styled from 'styled-components'

//COMPONENTS
import { Header,MainBoard,Sidebar } from "../../Components";

const Dashboard = () => {
  return (
    <Dashb>
        <Sidebar />
      <MainBoard />
      <div>I am the dashboard</div>
    </Dashb>
  );
};

const Dashb  = styled.div `
background-color:red;


`

export default Dashboard;
