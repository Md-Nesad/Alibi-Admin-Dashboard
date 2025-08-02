import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { PiHandSwipeLeft } from "react-icons/pi";
import { FaUserTie, FaRegCalendarCheck } from "react-icons/fa6";
import { HousePlug } from "lucide-react";
import DashboardMenu from "../components/navbar";
import {
  AI,
  Analytics,
  DroneDeployment,
  LiveMonitoring,
  Overview,
  User,
  UserInterection,
} from "../assets/icons/Overview";

const Dashboard = () => {
  const location = useLocation();

  const sidebarLinks = [
    {
      name: "Admin Dashboard",
      path: "/dashboard/overview",
      icon: <Overview />,
    },
    {
      name: "User Management",
      path: "/dashboard/user_management",
      icon: <User />,
    },
    {
      name: "Live Monitoring",
      path: "/dashboard/cancelation",
      icon: <LiveMonitoring />,
    },
    {
      name: "AI Intelligence Center",
      path: "/dashboard/reservation",
      icon: <AI />,
    },
    {
      name: "User Interaction",
      path: "/dashboard/housekeeping",
      icon: <UserInterection />,
    },
    {
      name: "Drone Deployment",
      path: "/dashboard/guests",
      icon: <DroneDeployment />,
    },
    {
      name: "Analytics & Reports",
      path: "/dashboard/concierge",
      icon: <Analytics />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white">
      <DashboardMenu />
      {/* Sidebar */}
      <aside className="w-65 h-screen pt-20 bg-[#17202C] text-white shadow-sm fixed top-0 left-0 z-10">
        <div className="h-full overflow-y-auto py-4">
          <nav className="flex flex-col">
            {sidebarLinks.map(({ name, path, icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center my-2 gap-4 py-3 mx-3 px-3 text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? "bg-[#F2B100] text-white shadow-md"
                      : "text-white hover:bg-[#f2b100ef]"
                  }`
                }
              >
                {React.cloneElement(icon, { className: "w-5 h-5" })}
                <span>{name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 px-6 pt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
