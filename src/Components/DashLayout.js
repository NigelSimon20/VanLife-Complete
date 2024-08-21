// src/Components/DashboardLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import DashNav from "./DashNav";

const DashboardLayout = () => {
  return (
    <div>
      <DashNav />
      <div className="min-h-screen">
        <Outlet /> {/* This will render the nested routes */}
      </div>
    </div>
  );
};

export default DashboardLayout;
