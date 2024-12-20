"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "@/icons/MenuIcon";
import { useModal } from "@/context/ModalContext";
// import { useModal } from "@/contexts/ModalContext"; // Import the useModal context

// Sidebar sections with grouped items
const sidebarSections = [
  {
    title: "My Work",
    items: [
      { id: 1, name: "Home", link: "#" },
      { id: 2, name: "Tasks", link: "#" },
      { id: 3, name: "Agent Skill", link: "#" }, // Reports item
    ],
  },
  {
    title: "Customers",
    items: [
      { id: 4, name: "Leads", link: "#" },
      { id: 5, name: "Accounts", link: "#" },
      { id: 6, name: "Contacts", link: "#" },
    ],
  },
  {
    title: "Sales",
    items: [
      { id: 7, name: "Pipeline", link: "#" },
      { id: 8, name: "Forecast", link: "#" },
    ],
  },
  {
    title: "Collateral",
    items: [
      { id: 9, name: "Documents", link: "#" },
      { id: 10, name: "Templates", link: "#" },
    ],
  },
  {
    title: "Marketing",
    items: [
      { id: 11, name: "Campaigns", link: "#" },
      { id: 12, name: "Metrics", link: "#" },
    ],
  },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState<number>(1);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const { openModal } = useModal(); // Access the modal context

  // Handle click on "Reports" item
  const handleReportClick = () => {
    openModal(); 
  };

  return (
    <>
      {/* Menu Button for smaller screens */}
      <button
        className="fixed w-10 top-2 left-2 z-50 lg:hidden bg-blue-600 text-white p-2 rounded-md shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <MenuIcon />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-40 bg-gray-100 border-r pt-10 border-black flex flex-col overflow-y-auto transition-all duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } ${isCollapsed ? "w-[10vh]" : "w-[40vh]"} lg:translate-x-0`}
      >
        {/* Menu Icon */}
        <div
          className="mx-5 my-2 mt-10 text-[12px] w-[25px] h-[25px] cursor-pointer hidden lg:visible"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <MenuIcon />
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          {sidebarSections.map((section) => (
            <div key={section.title} className="mt-4">
              {/* Section Title */}
              {!isCollapsed && (
                <h3 className="text-sm font-bold text-gray-500 uppercase px-6 mb-2 text-[13px]">
                  {section.title}
                </h3>
              )}
              <ul>
                {section.items.map((item) => (
                  <li
                    key={item.id}
                    className="relative cursor-pointer group"
                    onClick={() => {
                      setActiveItem(item.id);
                      if (item.name === "Agent Skill") {
                        handleReportClick(); // Trigger modal if "Reports" is clicked
                        // console.log('clicked')
                      }
                    }}
                  >
                    {/* Focus Vertical Line */}
                    {activeItem === item.id && (
                      <div className="absolute left-1 top-1/2 -translate-y-1/2 h-5 w-1 bg-blue-500 rounded-full transition-all duration-300"></div>
                    )}
                    <Link href={item.link}>
                      <span
                        className={`block py-3 ${
                          isCollapsed ? "pl-2" : "pl-6"
                        } pr-4 text-gray-700 rounded-md group-hover:bg-blue-100 text-[13px] ${
                          activeItem === item.id
                            ? "text-blue-600 font-semibold bg-white"
                            : ""
                        }`}
                      >
                        {!isCollapsed ? item.name : ""}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Overlay for smaller screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}
