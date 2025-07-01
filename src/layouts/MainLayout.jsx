import Navbar from "@/components/Navbar";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const page = useLocation();
  const noNavbar = ["/login", "/register"];

  const hideNavbar = noNavbar.includes(page.pathname);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {!hideNavbar && <Navbar />}
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
