import React from "react";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PendingCampaigns from "./pages/PendingCampaigns";
import Profile from "./pages/Profile";
import CreateCampaignPage from "./pages/CreateCampaign";
import NotFoundPage from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/campaign/:id" element={<Detail />} />
        <Route path="/pending-campaign" element={<PendingCampaigns />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-campaign" element={<CreateCampaignPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
