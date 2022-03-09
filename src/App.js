import logo from "./logo.svg";
import Home from "./Pages/Home/Home";
import Wallet from "./Pages/Wallet/Wallet";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Sidebar } from "./Components";
import {Container} from './app-styles'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Sidebar />
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
