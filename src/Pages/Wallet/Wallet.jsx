import React from "react";
import { WalletG } from "./wallet-styles";
//COMPONENTS
import { Header, MainBoard, Sidebar,WalletBoard } from "../../Components";

function Wallet() {
  return (
    <WalletG>
      <WalletBoard/>
    </WalletG>
  );
}

export default Wallet;
