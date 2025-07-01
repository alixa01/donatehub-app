import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@/hooks/useWallet";
import { useAuth } from "@/context/AuthContext";

const LoginCard = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { address, connectWallet } = useWallet();
  const { login } = useAuth();

  useEffect(() => {
    if (!address) return;
    (async () => {
      setError("");
      try {
        const res = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ walletAddress: address }),
        });
        const body = await res.json();
        if (!res.ok) throw new Error(body.error || "Login gagal");

        login({ token: body.token, user: body.user });
        navigate("/");
      } catch (err) {
        setError(err.message);
      }
    })();
  }, [address, navigate, login]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <p className="text-sm text-muted-foreground">
            Connect with your MetaMask wallet to access your account
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            className="w-full bg-slate-900 text-white hover:bg-slate-700 cursor-pointer duration-300 ease-in-out"
            onClick={connectWallet}>
            Connect with MetaMask
          </Button>

          {error && <p className="text-center text-red-500 text-sm">{error}</p>}

          <p className="text-center text-sm">
            Don't have an account?{" "}
            <span
              className="font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/register")}>
              Register
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginCard;
