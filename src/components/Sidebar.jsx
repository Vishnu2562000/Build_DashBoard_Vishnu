import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
  const options = [
    {
      icon: "/assets/dashboard.svg",
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: "/assets/transactions.svg",
      title: "Transactions",
      link: "/transactions",
    },
    {
      icon: "/assets/schedules.svg",
      title: "Schedules",
      link: "/schedules",
    },
    {
      icon: "/assets/users.svg",
      title: "Users",
      link: "/users",
    },
    {
      icon: "/assets/settings.svg",
      title: "Settings",
      link: "/settings",
    },
  ];

  const optionStyles =
    "relative w-full font-montserrat font-semibold text-white text-base mt-10";

  const activeLinkStyles = "font-black italic"; // Replace with your desired active link styles

  const sidebarStyles =
    "fixed top-5 bottom-5 left-3 w-1/6 bg-black flex flex-col items-center justify-start rounded-3xl p-5";

  const bottomLinksStyles =
    "relative w-full font-montserrat font-semibold text-white text-base mt-auto flex flex-col mb-10 bg-black items-start pl-3";

  const location = useLocation();

  return (
    <div className={sidebarStyles}>
      <h1 className="text-white text-3xl font-semibold my-6 mx-5">Build.</h1>
      <div className="flex flex-col gap-5">
        {options.map((ele, index) => (
          <div
            key={index}
            className={`flex items-center gap-5 ${
              location.pathname === ele.link ? activeLinkStyles : ""
            } ${optionStyles}`}
          >
            <NavLink to={ele.link} className="flex items-center gap-5">
              <img src={ele.icon} alt={ele.title} />
              <span className="text-white text-base font-normal">
                {ele.title}
              </span>
            </NavLink>
          </div>
        ))}
      </div>
      <div className={bottomLinksStyles}>
        <NavLink to="/help" className="text-white text-base font-normal">
          Help
        </NavLink>
        <NavLink to="/contact" className="text-white text-base font-normal">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
