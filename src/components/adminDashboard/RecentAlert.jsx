import { useState } from "react";
import {
  Approve,
  File,
  Message,
  VidoeCall,
} from "../../assets/icons/RecentAlerts";
import { alerts } from "../../data/Data";
import UserModal from "../../modal/UserModal";
import { approve, message, openFolder } from "../../data/Toast";

export default function RecentAlerts() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="bg-[#0F131C] text-[#FFFFFFCC] rounded-xl w-full h-[285px] shadow-md border border-gray-800">
      <h2 className="text-xl font-medium py-3 pl-6 border-b border-[#334155]">
        Recent Alerts
      </h2>

      <div className="overflow-x-auto py-4 px-3 h-[250px]">
        <div className="rounded-lg border border-gray-800 overflow-hidden">
          <table className="min-w-full text-xs bg-[#0F131C]">
            <thead className="bg-[#0F131C] text-gray-300">
              <tr>
                <th className="text-left px-4 py-2 border-r border-gray-800">
                  Name
                </th>
                <th className="text-left px-4 py-1 border-r border-gray-800 2xl:text-center">
                  Description
                </th>
                <th className="text-left px-4 py-1 2xl:text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#1e293b]/60 transition border-t border-gray-800"
                >
                  <td className="px-3 py-1 border-r border-gray-800 ">
                    <div
                      onClick={() => setSelectedUser(alert)}
                      className="flex items-center gap-2 cursor-pointer "
                    >
                      <img
                        src={alert.avatar}
                        alt={alert.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-[#FFFFFFB2]">{alert.name}</span>
                    </div>
                  </td>
                  <td className="px-3 py-1 border-r border-gray-800 text-gray-400 2xl:text-center">
                    {alert.description}
                  </td>
                  <td className="px-3 py-1">
                    <div className="flex gap-2 2xl:gap-5 2xl:justify-center">
                      <button
                        title="Approve"
                        className="hover:scale-105 transition-transform duration-150 cursor-pointer focus:outline-none"
                        onClick={approve}
                      >
                        <Approve className="text-green-500 w-5 h-5" />
                      </button>
                      <button
                        title="open file"
                        className="hover:scale-105 transition-transform duration-150 cursor-pointer focus:outline-none"
                        onClick={openFolder}
                      >
                        <File className="text-purple-500 w-5 h-5" />
                      </button>
                      <button
                        title="Message"
                        className="hover:scale-105 transition-transform duration-150 cursor-pointer focus:outline-none"
                        onClick={message}
                      >
                        <Message className="text-yellow-400 w-5 h-5" />
                      </button>

                      <button
                        title="vidoe call "
                        className="hover:scale-105 transition-transform duration-150 cursor-pointer focus:outline-none"
                      >
                        <VidoeCall className="text-yellow-400 w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {/* Modal */}
              {selectedUser && (
                <UserModal
                  user={selectedUser}
                  onClose={() => setSelectedUser(null)}
                />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
