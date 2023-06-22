import React from "react";
import { NavLink } from "react-router-dom";

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

  const optionStyles = {
    position: "relative",
    width: "100%",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "22px",
    color: "#FFFFFF",
    marginTop: "10px",
  };

  const activeLinkStyles = "text-blue-100 font-bold"; // Replace with your desired active link styles

  const sidebarStyles = {
    position: "fixed",
    top: "3%",
    bottom: "3%",
    left: "2%",
    width: "15%",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: "30px",
    padding: "20px",
  };

  const bottomLinksStyles = {
    position: "relative",
    width: "100%",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "22px",
    color: "#FFFFFF",
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px", // Adjust the gap between the bottom of the sidebar and the links
    backgroundColor: "black",
    alignItems: "flex-start",
    fontFamily: "Montserrat",
  };

  return (
    <div style={sidebarStyles}>
      <h1 className="text-white text-2xl font-semibold my-12 mx-5">Build.</h1>
      <div className="flex flex-col gap-10">
        {options.map((ele, index) => (
          <div
            key={index}
            className="flex items-center gap-5"
            style={optionStyles}
          >
            <NavLink
              to={ele.link}
              className="flex items-center gap-5"
              activeClassName={activeLinkStyles}
            >
              <img src={ele.icon} alt={ele.title} />
              <span className="text-white text-base font-normal">
                {ele.title}
              </span>
            </NavLink>
          </div>
        ))}
      </div>
      <div style={bottomLinksStyles} className="pl-3">
        <NavLink
          to="/help"
          className="text-white text-base font-normal"
          activeClassName={activeLinkStyles}
        >
          Help
        </NavLink>
        <NavLink
          to="/contact"
          className="text-white text-base font-normal"
          activeClassName={activeLinkStyles}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
