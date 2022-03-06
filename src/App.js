import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import Wallet from "./Pages/Wallet/Wallet";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Sidebar } from "./Components";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="container">
        <Sidebar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/wallet" element={<Wallet/>} />

        </Routes>
      </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
