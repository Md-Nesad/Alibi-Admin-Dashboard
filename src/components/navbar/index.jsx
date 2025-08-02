import { Link } from "react-router-dom";
import logotwo from "../../assets/images/alibiLogo.jpg";
import adminImage from "../../assets/images/Ellipse 9 (5).png";
import { Search, Bell } from "lucide-react";
import { useState } from "react";

const DashboardMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#000000] shadow-sm border-b border-gray-700 fixed top-0 z-50">
      <div className="w-full px-4 sm:px-10 md:px-10 py-2">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-15">
            <div className="flex items-center h-14">
              <Link to="/dashboard/room" className="flex items-center">
                <img
                  src={logotwo}
                  alt="Bahamas Logo"
                  className="h-9 sm:h-11 bg-black object-contain mt-2 sm:mt-0 rounded"
                />
              </Link>
              <h2 className="ml-6 font-bold text-lg sm:text-xl text-white">
                ALIBI DALEL
              </h2>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-full w-[600px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-400 text-sm"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search className="w-5 h-5" />
                </span>
              </div>
            </div>
          </div>

          {/* Notification & Profile */}
          <div className="flex items-center gap-4">
            {/* Notification */}
            <div
              title="Notification"
              className="relative p-3 rounded-full bg-[#17202C]"
            >
              <Bell className="text-white" size={24} />
              <span className="absolute top-2 right-2 min-w-[16px] h-4 px-1 text-[8px] flex items-center justify-center rounded-full bg-red-500 text-black ring-2 ring-[#17202C]">
                1
              </span>
            </div>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 bg-gray-800 text-white px-3 py-2 rounded-full border border-white"
              >
                <img
                  src={adminImage}
                  alt="Profile"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span className="text-sm hidden sm:block">Admin</span>
                <svg
                  className="w-4 h-4 ml-1 hidden sm:block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg text-black z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 hover:rounded-md"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardMenu;
