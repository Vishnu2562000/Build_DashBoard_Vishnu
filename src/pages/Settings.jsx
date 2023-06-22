import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
const Settings = () => {
  return (
    <div className="flex flex-wrap bg-gray-100">
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
        <Sidebar />
      </div>
      <div className="w-full sm:w-1/2 md:w-3/4 lg:w-4/5 flex flex-col mt-10">
        <Header />
        <div className="pt-5">Settings</div>
      </div>
    </div>
  );
};

export default Settings;
