import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@/hooks/useWallet";
import { shortenAddress } from "../utils/format.js";
import { useUserForm } from "@/hooks/useUserForm.js";

const RegisterCard = () => {
  const navigate = useNavigate();
  const { address, connectWallet } = useWallet();

  const { username, setUsername, error, handleSubmit } = useUserForm(
    async ({ username }) => {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          walletAddress: address,
        }),
      });
      const body = await res.json();
      if (!res.ok) {
        throw new Error(body.error || "Registration failed");
      }
      navigate("/login");
    }
  );

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
          <div className="space-y-2">
            <p className="font-semibold text-sm">Username</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full p-2 text-sm font-medium border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <Button
            className="w-full bg-slate-900 text-white hover:bg-slate-700 cursor-pointer duration-300 ease-in-out"
            onClick={connectWallet}>
            {address ? shortenAddress(address) : "Connect with MetaMask"}
          </Button>
          <Button
            className="w-full bg-gray-500 text-white hover:bg-slate-700 hover:text-white transition ease-in-out duration-300 shadow-sm cursor-pointer"
            onClick={handleSubmit}
            disable={!address}>
            Register
          </Button>

          {error && <p className="text-center text-red-500 text-sm">{error}</p>}

          <p className="text-center text-sm">
            Already have an account?{" "}
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
