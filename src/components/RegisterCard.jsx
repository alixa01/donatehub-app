import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@/hooks/useWallet";
import { shortenAddress } from "../utils/format.js";
import { useAuthAction } from "@/hooks/useAuthAction.js";

const RegisterCard = () => {
  const navigate = useNavigate();
  const { address, connectWallet, signMessage } = useWallet();
  const { handleRegister, loading, error, setError } = useAuthAction();

  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Username is required");
      return;
    }
    if (!address) {
      setError("Please connect your wallet first.");
      return;
    }

    try {
      const messageToSign = `Welcome to DonateHub!\n\nClick the Confirm button below to register your account.\n\nWallet signedAddress: ${address}\nUsername: ${username}`;

      const signature = await signMessage(messageToSign);

      if (signature) {
        await handleRegister({ username, walletAddress: address });
      }
    } catch (error) {
      setError(error.message || "Signature request was cancelled.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[400px]">
        <CardHeader className="pb-0">
          <CardTitle className="text-2xl font-bold">Register</CardTitle>
          <p className="text-sm text-muted-foreground">
            Create an account using your MetaMask wallet
          </p>
        </CardHeader>
        <CardContent className="mt-0 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="username" className="font-semibold text-sm">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full p-2 text-sm font-medium border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>
            <Button
              type="button"
              className="w-full bg-slate-900 text-white hover:bg-slate-700 cursor-pointer duration-300 ease-in-out"
              onClick={connectWallet}>
              {address ? shortenAddress(address) : "Connect with MetaMask"}
            </Button>
            <Button
              type="submit"
              disabled={!address || loading}
              className="w-full bg-gray-700 text-white hover:bg-slate-700 hover:text-white transition ease-in-out duration-300 shadow-sm cursor-pointer">
              {loading ? "Registering..." : "Register"}
            </Button>
          </form>

          {error && <p className="text-center text-red-500 text-sm">{error}</p>}

          <p className="text-center text-sm">
            Already have an account? {""}
            <span
              className="font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterCard;
