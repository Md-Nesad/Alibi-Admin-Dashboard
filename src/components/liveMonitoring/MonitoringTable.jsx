import { useState } from "react";
import { liveMonitoringData } from "../../data/Data";
import UserModal from "../../modal/UserModal";
import { FiChevronDown } from "react-icons/fi";

const MonitoringTable = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [filter, setFilter] = useState("All");

  const handleViewDetails = (user) => {
    const additionalDetails = modalData.find((item) => item.id === user.id);
    const combinedData = { ...user, ...additionalDetails };
    setSelectedUser(combinedData);
  };

  // Filter logic
  const filteredData =
    filter === "All"
      ? liveMonitoringData
      : liveMonitoringData.filter((user) => user.status === filter);

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        {/* Filter Buttons */}
        <div className="flex">
          {["All", "On-Time", "Late", "Failed"].map((item, index, array) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-8 py-1.5 font-medium transition ${
                filter === item
                  ? "bg-[#F2B100] text-white rounded-md"
                  : `bg-[#1E293B] text-[#FFFFFFB2] hover:bg-[#334155] ${
                      index === 0
                        ? "rounded-l-md"
                        : index === array.length - 1
                        ? "rounded-r-md"
                        : ""
                    }`
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Dropdown Filter */}
        <div>
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full bg-[#090c12] border cursor-pointer hover:bg-gray-700 border-[#334155] rounded-md py-2 pl-4 pr-10 text-sm text-[#FFFFFFCC] focus:outline-none appearance-none"
            >
              {["All", "On-Time", "Late", "Failed"].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
      <div className="bg-[#0F172A] rounded-md text-[#FFFFFFB2] w-full overflow-auto mb-10">
        {/* Filter Navigation */}

        {/* Table */}
        <table className="min-w-full w-full text-sm text-left">
          <thead className="bg-[#1E293B] text-[#FFFFFFCC]">
            <tr>
              <th className="py-4 px-4">Face ID</th>
              <th className="py-4 px-4">Name</th>
              <th className="py-4 px-4">ID Number</th>
              <th className="py-4 px-4">Check-In</th>
              <th className="py-4 px-4">Location</th>
              <th className="py-4 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user, index) => (
              <tr
                key={index}
                className="border-b border-[#1E293B] hover:bg-[#1e2536] transition"
                onClick={() => handleViewDetails(user)}
              >
                <td className="py-2 px-4">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </td>
                <td className="py-2 px-4 whitespace-nowrap">{user.name}</td>
                <td className="py-2 px-4 whitespace-nowrap">{user.idNumber}</td>
                <td className="py-2 px-4 whitespace-nowrap">{user.checkIn}</td>
                <td className="py-2 px-4 whitespace-nowrap">
                  {user.location.slice(0, 32)} <br /> {user.location.slice(32)}
                </td>
                <td
                  className={`py-2 px-4 whitespace-nowrap ${
                    user.status === "On-Time"
                      ? "text-[#00BC00]"
                      : user.status === "Failed"
                      ? "text-[#FF0000B2]"
                      : "text-yellow-400"
                  }`}
                >
                  {user.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal */}
        {selectedUser && (
          <UserModal
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
          />
        )}
      </div>
    </>
  );
};

export default MonitoringTable;
