import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { shortenAddress } from "../utils/format";
import { useAuth } from "@/context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  return (
    <>
      <nav className="flex justify-between px-20 h-22  shadow-md">
        {/* Web Name, Icon */}
        <Link to="/" className="flex justify-between items-center gap-2">
          <div className="bg-gray-800 w-10 h-10 rounded-full"></div>
          <h1 className="text-gray-800 text-xl font-bold">Donate Hub</h1>
        </Link>

        {/* Button Login, Register, User */}
        <div className="flex items-center gap-4">
          {user ? (
            <Button asChild variant="outline">
              <Link key={user.walletAddress} to={"/profile"}>
                <span>{shortenAddress(user.walletAddress)}</span>
              </Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="outline">
                <Link to="/login">Login</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-slate-900 text-white hover:bg-slate-700 hover:text-white">
                <Link to="/register">Register</Link>
              </Button>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
