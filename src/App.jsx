import React from "react";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PendingCampaigns from "./pages/PendingCampaigns";
import Profil from "./pages/Profil";
import CreateCampaignPage from "./pages/CreateCampaign";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pending-campaign" element={<PendingCampaigns />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/create-campaign" element={<CreateCampaignPage />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
