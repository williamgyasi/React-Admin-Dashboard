import logo from "./logo.svg";
import Home from "./Pages/Home/Home";
import Wallet from "./Pages/Wallet/Wallet";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Sidebar } from "./Components";
import { Container } from "./app-styles";
import { ButtonContainer } from "./Components/Header/header-styles";
import { Close, Menu } from "@mui/icons-material";
import { useState } from "react";

function App() {
  const [sideBar,setSidebar]=useState(true)
  const showSidebar=()=>setSidebar(!sideBar)
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <ButtonContainer onClick={showSidebar}>
           {sideBar ?
            (<Menu sx={{ color: "#fff" }} />)
            :
            (<Close sx={{ color: "#fff" }} />)
           
           }
          </ButtonContainer>
          <Sidebar behavour={sideBar} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
