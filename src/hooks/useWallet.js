import { useState } from "react";
import { Buffer } from "buffer";

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
        console.error("User rejected connection", err);
        alert("Connection rejected by user.");
      }
    } else {
      alert("MetaMask not installed");
    }
  };

  const signMessage = async (message) => {
    if (!address) {
      alert("Connect your wallet first");
    }

    try {
      const msg = `0x${Buffer.from(message, "utf-8").toString("hex")}`;

      const signature = await window.ethereum.request({
        method: "personal_sign",
        params: [msg, address],
      });

      return signature;
    } catch (error) {
      throw new Error("User rejected the signature", error);
    }
  };

  return { address, connectWallet, signMessage };
};
