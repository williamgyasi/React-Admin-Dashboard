import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import Wallet from "./Pages/Wallet/Wallet";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Router path="/wallet" element={<Wallet} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
