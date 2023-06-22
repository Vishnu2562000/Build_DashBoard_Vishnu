import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Cards from "../components/Cards";
import ActivitiesGraph from "../components/ActivitiesGraph";
import TopProducts from "../components/TopProducts";
import ScheduleCard from "../components/ScheduleCard";

const DashboardPage = () => {
  return (
    <div className="flex flex-wrap bg-gray-100">
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 hidden sm:block">
        <Sidebar />
      </div>
      <div className="w-full sm:w-1/2 md:w-3/4 lg:w-4/5 flex flex-col mt-10">
        <Header />
        <div className="pt-5">
          <Cards />
        </div>
        <div className="pt-5">
          <ActivitiesGraph />
        </div>
        <div
          className="pb-8 flex-grow sm:flex-col md:flex-row"
          style={{ marginRight: "60px" }}
        >
          <div className="flex flex-col sm:flex-col md:flex-row gap-4">
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <div className="rounded-lg overflow-hidden h-80">
                <TopProducts />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="rounded-lg overflow-hidden h-80">
                <ScheduleCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
