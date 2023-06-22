import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./SignInPage";
import DashboardPage from "./DashboardPage";
import Transactions from "./Transactions";
import Schedules from "./Schedules";
import Settings from "./Settings";
import Users from "./Users";

function Home() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
