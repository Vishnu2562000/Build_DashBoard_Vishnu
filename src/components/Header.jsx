import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "../firebaseConfig";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const picture = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial screen size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    setShowDropdown(false);
    // Implement Firebase logout
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Clear local storage or perform any additional cleanup
        localStorage.removeItem("user");
        navigate("/");
        // Navigate to login page or any other desired route
      })
      .catch((error) => {
        // Handle logout error
        console.log("Logout error:", error);
      });
  };

  return (
    <div className="flex justify-between items-center h-30px p-2">
      {!isSmallScreen && (
        <div className="flex items-center pl-2 font-montserrat font-semibold text-3xl leading-29px text-black">
          Dashboard
        </div>
      )}

      <div className="flex items-center">
        <div className="relative flex items-center">
          <input
            className="w-64 h-8 px-5 border-transparent rounded-lg"
            type="search"
            placeholder="Search..."
          />
          <img
            className="absolute right-0 top-0 bottom-0 m-auto"
            style={{ width: "20px", height: "20px" }}
            src="/assets/search.svg"
            alt="search"
          />
        </div>

        <img
          className="h-5 w-4 mx-5"
          src="/assets/notifications.svg"
          alt="notification"
        />

        <div className="relative">
          <img
            className="h-8 w-8 rounded-full ml-2 mr-16 cursor-pointer"
            src={picture ? picture.data.picture : "/assets/userImg.svg"}
            alt="profile"
            onClick={handleProfileClick}
          />

          {showDropdown && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
              <button
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
