import React from "react";
import { Outlet, NavLink, useLocation, Link } from "react-router-dom";
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
import { SettingsIcon } from "lucide-react";

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
      path: "/dashboard/live_monitoring",
      icon: <LiveMonitoring />,
    },
    {
      name: "AI Intelligence Center",
      path: "/dashboard/ai_inteligence",
      icon: <AI />,
    },
    {
      name: "User Interaction",
      path: "/dashboard/user_interection",
      icon: <UserInterection />,
    },
    {
      name: "Drone Deployment",
      path: "/dashboard/drone_deployee",
      icon: <DroneDeployment />,
    },
    {
      name: "Analytics & Reports",
      path: "/dashboard/analysis",
      icon: <Analytics />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white">
      <DashboardMenu />
      {/* Sidebar */}
      <aside className="w-65 h-screen pt-20 bg-[#10141D] text-white shadow-sm fixed top-0 left-0 z-10">
        <div className="h-full overflow-y-auto py-4 ">
          <nav className="flex flex-col border-b-2 border-gray-700">
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
          <Link to="setting">
            <div
              className={`flex items-center gap-4 py-1 mt-6 mx-3 text-sm font-medium rounded-lg transition-all hover:bg-[#f2b100ef] cursor-pointer ${
                location.pathname === "/dashboard/setting"
                  ? "bg-[#f2b100ef]"
                  : ""
              }`}
            >
              <SettingsIcon className="w-5 h-5 mx-3 my-2 text-white" />
              <button className="text-white">System Settings</button>
            </div>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 2xl:ml-66 px-6 pt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
