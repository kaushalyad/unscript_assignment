import React, { useState } from "react";

const Header = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    useCases: false,
    features: false,
    resources: false,
    company: false,
  });

  // Toggle dropdown
  const toggleDropdown = (menu) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  // Handle mouse enter
  const handleMouseEnter = (menu) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: true,
    }));
  };

  // Handle mouse leave
  const handleMouseLeave = (menu) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: false,
    }));
  };

  return (
    <nav className="flex justify-evenly mx-100 items-center h-[96px]">
      {/* Logo */}
      <div>
        <img src="../images/unscript_logo.svg" alt="logo" />
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between gap-5">
        {/* Use Cases Dropdown */}
        <div
          className="relative flex items-center cursor-pointer"
          onMouseEnter={() => handleMouseEnter("useCases")}
          onMouseLeave={() => handleMouseLeave("useCases")}
        >
          <p className="text-[16px] font-medium">Use cases</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          {isDropdownOpen.useCases && (
            <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
              <ul>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Use Case 1</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Use Case 2</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Use Case 3</li>
              </ul>
            </div>
          )}
        </div>

        {/* Features Dropdown */}
        <div
          className="relative flex items-center cursor-pointer"
          onMouseEnter={() => handleMouseEnter("features")}
          onMouseLeave={() => handleMouseLeave("features")}
        >
          <p className="text-[16px] font-medium">Features</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          {isDropdownOpen.features && (
            <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
              <ul>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Feature 1</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Feature 2</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Feature 3</li>
              </ul>
            </div>
          )}
        </div>

        {/* Resources Dropdown */}
        <div
          className="relative flex items-center cursor-pointer"
          onMouseEnter={() => handleMouseEnter("resources")}
          onMouseLeave={() => handleMouseLeave("resources")}
        >
          <p className="text-[16px] font-medium">Resources</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          {isDropdownOpen.resources && (
            <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
              <ul>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Resource 1</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Resource 2</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Resource 3</li>
              </ul>
            </div>
          )}
        </div>

        {/* Company Dropdown */}
        <div
          className="relative flex items-center cursor-pointer"
          onMouseEnter={() => handleMouseEnter("company")}
          onMouseLeave={() => handleMouseLeave("company")}
        >
          <p className="text-[16px] font-medium">Company</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          {isDropdownOpen.company && (
            <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
              <ul>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">About Us</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Careers</li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">Contact</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Contact Sales Button */}
      <div className="bg-custom-gradient px-[18px] py-[10px] rounded-[6px]">
        <p className="font-mona-sans text-[16px] font-semibold leading-[19.2px] text-center text-white">
          Contact Sales
        </p>
      </div>
    </nav>
  );
};

export default Header;
