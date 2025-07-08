import { useState } from "react";

export const useWallet = () => {
  const [address, setAddress] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const userAddress = accounts[0];
        setAddress(userAddress);
        return userAddress;
      } catch (err) {
        console.error("user rejected connection", err);
      }
    } else {
      alert("MetaMask not installed");
    }
  };

  return { address, connectWallet };
};
