"use client";

import { Bulb } from "@/icons/Bulb";
import { CrossIcon } from "@/icons/CrossIcon";
import { MenuIcon } from "@/icons/MenuIcon";
import { SettingsIcon } from "@/icons/SettingsIcon";
import { UserMessage } from "@/icons/UserMessage";

const Header = () => {

  const icons = [
    { id: 'bulb', component: <Bulb /> },
    { id: 'cross', component: <CrossIcon /> },
    { id: 'settings', component: <SettingsIcon /> },
    { id: 'user', component: <UserMessage /> }
  ];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#003366', // Deep blue background
        color: '#ffffff',
        position: 'fixed',
        padding: '0 20px',
        height: '40px', // Thin header
      }}
      className="absolute w-full z-50 md:px-8 md:py-4 px-4 py-2 flex justify-between items-center"
    >
      {/* Left Side */}
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Apps Menu Icon */}
        <div className="w-6 h-6 md:w-8 md:h-8">
          <MenuIcon />
        </div>
        {/* Dynamic and Sales Hub */}
        <span className="text-sm md:text-base font-semibold">Dynamic</span>
        <div className="h-5 w-[1px] bg-white hidden md:block"></div>
        <span className="text-sm md:text-base">Sales Hub</span>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Icons */}
        {[<Bulb />, <CrossIcon />, <SettingsIcon />, <UserMessage />].map((icon, index) => (
          <div
            key={index}
            className="w-5 h-5 md:w-6 md:h-6  rounded-full flex items-center justify-center"
          >
            {icon}
          </div>
        ))}

        {/* Profile Picture */}
        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full ml-2"></div>
      </div>
    </div>
  );
};

export default Header;
