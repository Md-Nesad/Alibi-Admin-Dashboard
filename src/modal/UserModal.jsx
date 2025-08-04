import React from "react";
import { X } from "lucide-react";

export default function UserModal({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 z-1005 flex items-center justify-center bg-[#10131cb7] bg-opacity-80 animate-backdrop">
      <div className="w-full max-w-md bg-[#10141D] text-white rounded-md p-4 shadow-lg relative pt-10 border-2 border-gray-700 animate-modal ">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-[#17202C] text-gray-300 hover:text-gray-500 transition rounded-md p-[1px] border border-gray-600"
        >
          <X size={20} />
        </button>

        <div className="flex gap-4">
          {/* Left: Image and name */}
          <div className="flex flex-col">
            <h2 className="text-lg font-medium text-[#FFFFFFB2] mb-2">
              {user.name}
            </h2>
            <img
              src={user.avatar}
              alt="Face ID"
              className="w-36 h-40 rounded-lg object-cover mb-2"
            />
            <p className="text-xs text-[#FFFFFFB2] mb-2 text-center">
              Face ID Photo
            </p>
          </div>

          {/* Vertical Divider and Right Content */}
          <div className="flex flex-col justify-between relative">
            <div className="w-px bg-gray-600 h-40  absolute -left-4 top-10 ml-8 bottom-0" />

            <div className="space-y-5 pl-9 mt-12">
              {/* Suspicious Activity */}
              <div className="flex items-start  gap-2 relative">
                <span className="w-2 h-2 absolute left-[-23.2px] top-2 rounded-full bg-yellow-400" />
                <div>
                  <p className="text-sm font-medium text-[#FFFFFFB2]">
                    Suspicious Activity
                  </p>
                  <p className="text-[11px] text-[#FFFFFF66]">
                    {user.suspicious ||
                      "Multiple Failed Logins, Today: 12:35 PM"}
                  </p>
                </div>
              </div>

              {/* Violation Detected */}
              <div className="flex items-start gap-2 relative">
                <span className="w-2 h-2 absolute left-[-23.2px] top-2 rounded-full bg-red-500" />
                <div>
                  <p className="text-sm font-medium text-[#FFFFFFB2]">
                    Violation Detected
                  </p>
                  <p className="text-[11px] text-[#FFFFFF66]">
                    Unauthorized Login, Today: 12:35 PM
                  </p>
                </div>
              </div>

              {/* login success */}

              <div className="flex items-start gap-2 relative">
                <span className="w-2 h-2 absolute left-[-23.2px] top-2 rounded-full bg-green-500" />
                <div>
                  <p className="text-sm font-medium text-[#FFFFFFB2]">
                    Login Success
                  </p>
                  <p className="text-[11px] text-[#FFFFFF66]">
                    Timestamped, Today: 12:35 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note & Actions */}
        <div className="mt-1">
          <h3 className="font-medium mb-1 text-[#FFFFFFB2]">Note</h3>
          <div className="mt-2 w-full bg-[#141821] text-sm text-gray-300 p-3 rounded-md border border-gray-800">
            <p className=" text-justify text-[#ffffffb8] text-[13px] ">
              At 12:55 PM today, the system flagged a location-based violation
              involving the user. This marks the second such incident reported
              within the past seven days. Prior to the violation, a suspicious
              vibration pattern was detected at 12:35 PM, which may be relevant
              to the alert. The user has previously been warned following an
              unauthorized login attempt earlier this week.
            </p>
          </div>

          <div className="w-full flex flex-col gap-2 mt-4">
            <button className="bg-[#17202C] hover:bg-blue-900 transition-colors duration-200 text-[#FFFFFFB2] text-[13px] font-medium py-2 rounded-md w-full">
              Assign Case Manager
            </button>
            <button className="border border-gray-800 text-[#FFFFFFB2] text-[13px] font-medium py-2 rounded-md w-full hover:bg-[#17202cb2] transition-colors duration-200">
              Export Log
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
