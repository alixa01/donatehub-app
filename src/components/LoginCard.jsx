import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@/hooks/useWallet";
import { useAuth } from "@/context/AuthContext";
import { useAuthAction } from "@/hooks/useAuthAction";

const LoginCard = () => {
  const navigate = useNavigate();
  const { address, connectWallet } = useWallet();
  const { login } = useAuth();
  const { handleLogin, error, setError } = useAuthAction();

  useEffect(() => {
    if (!address) return;

    (async () => {
      setError("");
      await handleLogin({
        walletAddress: address,
        onSuccess: ({ token, user }) => {
          login({ token, user });
          navigate("/");
        },
      });
    })();
  }, [address, handleLogin, login, navigate, setError]);

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
            Don't have an account? {""}
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
