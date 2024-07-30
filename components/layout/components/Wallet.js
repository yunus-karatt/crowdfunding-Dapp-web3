import React, { useState } from "react";
import styled from "styled-components";

import { ethers } from "ethers";

const networks = {
  polygon: {
    chainId: `0x${Number(80002).toString(16)}`,
    chainName: "Polygon Testnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-amoy.polygon.technology/"],
    blockExplorerUrls: ["https://amoy.polygonscan.com/"],
  },
};

const Wallet = () => {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const connectWallet = async () => {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.BrowserProvider(window.ethereum);
    if (provider.network !== "matic") {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks["polygon"],
          },
        ],
      });
    }
    const signer = await provider.getSigner();
    const tbalance = await provider.getBalance(signer.address);
    setAddress(signer.address);
    setBalance(ethers.formatEther(tbalance));
  };

  return (
    <ConnectWalletWrapper onClick={connectWallet}>
      {balance === "" ? (
        <Balance></Balance>
      ) : (
        <Balance> {balance.slice(0, 4)} MATIC</Balance>
      )}
      {address === "" ? (
        <Address>Connect Wallet</Address>
      ) : (
        <Address>
          {" "}
          {address.slice(0, 6)}...{address.slice(39)}
        </Address>
      )}
    </ConnectWalletWrapper>
  );
};

const ConnectWalletWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.bgDiv};
  height: 100%;
  padding: 5px 9px;
  color: ${(props) => props.theme.color};
  border-radius: 10px;
  margin-right: 15px;
  font-size: small;
  font-weight: bold;
`;

const Address = styled.h2`
  background-color: ${(props) => props.theme.bgSubDiv};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  border-radius: 10px;
  font-size: small;
  font-weight: bold;
`;
const Balance = styled.h2`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  font-size: small;
  font-weight: bold;
`;

export default Wallet;
