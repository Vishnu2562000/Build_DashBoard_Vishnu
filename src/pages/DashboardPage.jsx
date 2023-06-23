import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Cards from "../components/Cards";
import ActivitiesGraph from "../components/ActivitiesGraph";
import TopProducts from "../components/TopProducts";
import ScheduleCard from "../components/ScheduleCard";

const DashboardPage = () => {
  return (
    <section className="flex flex-wrap bg-gray-100">
      <aside className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 hidden sm:block">
        <Sidebar />
      </aside>
      <main className="w-full sm:w-1/2 md:w-3/4 lg:w-4/5 flex flex-col mt-10">
        <Header />
        <section className="pt-5">
          <Cards />
        </section>
        <section className="pt-5">
          <ActivitiesGraph />
        </section>
        <section
          className="pb-8 flex-grow sm:flex-col md:flex-row"
          style={{ marginRight: "60px" }}
        >
          <div className="flex flex-col sm:flex-col md:flex-row gap-4">
            <section className="w-full sm:w-1/2 mb-4 sm:mb-0">
              <div className="rounded-lg overflow-hidden h-80">
                <TopProducts />
              </div>
            </section>
            <section className="w-full sm:w-1/2">
              <div className="rounded-lg overflow-hidden h-80">
                <ScheduleCard />
              </div>
            </section>
          </div>
        </section>
      </main>
    </section>
  );
};

export default DashboardPage;
