import React, { useState, useRef, useEffect } from "react";
import "@/app/globals.css";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

const Navbar = ({ username }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userName, setUserName] = useState();

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  const user = useSelector((state) => state?.auth?.userDetails?.user?.username);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout clicked");
  };
  const profileRef = useRef(null);

  useEffect(() => {
    setUserName(user);
  }, [user]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 py-4 px-6 flex justify-between items-center">
      {/* Skillforge Branding */}
      <div className="flex items-center">
        <span className="text-white text-lg font-semibold">Skillforge</span>
      </div>

      {/* Profile Section */}
      <div className="flex items-center gap-4" ref={profileRef}>
        {/* Profile Icon */}
        <span>{userName}</span>
        <button
          onClick={handleProfileClick}
          className="mr-4 text-white focus:outline-none text-2xl"
        >
          <CgProfile />
        </button>
        {/* Username */}
        {/* <span className="text-white mr-4">{userName}</span> */}
        {/* Profile Dropdown */}
        {isProfileOpen && (
          <div className="absolute top-12 right-8 bg-white shadow-md p-2 rounded-lg">
            <button className="block w-full text-left py-2 px-4 text-gray-800 hover:bg-gray-200">
              Dashboard
            </button>
            <button
              onClick={handleLogout}
              className="block w-full text-left py-2 px-4 text-gray-800 hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
